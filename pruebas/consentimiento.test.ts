// La lógica del consentimiento de cookies (diseño §17; sensible: datos de los visitantes). Lo que decide si se pregunta,
// qué se guarda y qué identificador de herramienta se acepta.
import { describe, expect, it } from 'vitest';
import {
  DURACION_SEGUNDOS,
  NOMBRE_COOKIE,
  categoriasConHerramientas,
  cookieDe,
  hayQuePreguntar,
  herramientasValidas,
  leeDecision,
  type Decision,
} from '../src/lib/consentimiento';

const V = '2026-11-14';
const AHORA = new Date('2026-11-14T12:00:00Z');
const NADA = { ga4: '', clarity: '', metaPixel: '', linkedin: '' };
const TODO = { ga4: 'G-ABC123DEF4', clarity: 'abcd1234ef', metaPixel: '123456789012345', linkedin: '1234567' };
const decision = (extra: Partial<Decision> = {}): Decision => ({ v: V, fecha: '2026-11-14', estadisticas: true, publicidad: false, ...extra });
const comoCookie = (d: Decision) => `lang=ca; ${cookieDe(d).split(';')[0]}; otra=1`;

describe('identificadores de las herramientas', () => {
  it('sin identificadores no hay ninguna herramienta ni categoría', () => {
    expect(herramientasValidas(NADA)).toEqual({ ga4: null, clarity: null, metaPixel: null, linkedin: null });
    expect(categoriasConHerramientas(NADA)).toEqual([]);
  });

  it('acepta los identificadores con su forma y los agrupa por categoría', () => {
    expect(herramientasValidas(TODO)).toEqual(TODO);
    expect(categoriasConHerramientas(TODO)).toEqual(['estadisticas', 'publicidad']);
    expect(categoriasConHerramientas({ ...NADA, clarity: TODO.clarity })).toEqual(['estadisticas']);
    expect(categoriasConHerramientas({ ...NADA, linkedin: TODO.linkedin })).toEqual(['publicidad']);
  });

  it('un identificador con otra forma no se usa nunca (no puede meter código en la página)', () => {
    const malos = {
      ga4: 'G-ABC"></script><script>alert(1)</script>',
      clarity: 'abc/../x',
      metaPixel: '12345abc',
      linkedin: '12 34',
    };
    expect(herramientasValidas(malos)).toEqual({ ga4: null, clarity: null, metaPixel: null, linkedin: null });
    expect(categoriasConHerramientas(malos)).toEqual([]);
  });
});

describe('la decisión guardada', () => {
  it('se guarda 12 meses en una cookie propia, segura y de la web', () => {
    const c = cookieDe(decision());
    expect(c.startsWith(`${NOMBRE_COOKIE}=`)).toBe(true);
    expect(c).toContain(`Max-Age=${DURACION_SEGUNDOS}`);
    expect(DURACION_SEGUNDOS).toBe(365 * 24 * 3600);
    expect(c).toContain('Path=/');
    expect(c).toContain('SameSite=Lax');
    expect(c).toContain('Secure');
  });

  it('se lee entre otras cookies, tal cual se guardó', () => {
    expect(leeDecision(comoCookie(decision()), V, AHORA)).toEqual(decision());
    expect(leeDecision(comoCookie(decision({ estadisticas: false, publicidad: true })), V, AHORA)).toEqual(
      decision({ estadisticas: false, publicidad: true }),
    );
  });

  it('no hay decisión si falta, está rota, es de otra versión de la política o tiene más de 12 meses', () => {
    expect(leeDecision('lang=ca', V, AHORA)).toBeNull();
    expect(leeDecision(`${NOMBRE_COOKIE}=no-es-json`, V, AHORA)).toBeNull();
    expect(leeDecision(`${NOMBRE_COOKIE}=${encodeURIComponent('{"v":"2026-11-14","estadisticas":"si"}')}`, V, AHORA)).toBeNull();
    expect(leeDecision(comoCookie(decision({ v: '2026-01-01' })), V, AHORA)).toBeNull();
    expect(leeDecision(comoCookie(decision({ fecha: '2025-11-13' })), V, AHORA)).toBeNull();
    expect(leeDecision(comoCookie(decision({ fecha: '2025-11-15' })), V, AHORA)).not.toBeNull();
  });
});

describe('cuándo se pregunta', () => {
  it('sin herramientas, nunca (la web sigue como sin aviso)', () => {
    expect(hayQuePreguntar(NADA, null)).toBe(false);
  });

  it('con herramientas, mientras no haya una decisión válida', () => {
    expect(hayQuePreguntar(TODO, null)).toBe(true);
    expect(hayQuePreguntar(TODO, decision())).toBe(false);
  });
});
