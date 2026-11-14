// Los datos de los textos legales (diseño §19): qué cookies y proveedores salen según las herramientas activas, y que
// nada sin comprobar llegue a la web.
import { describe, expect, it } from 'vitest';
import { COOKIES, PROVEEDORES, NAVEGADORES, cookiesDe, proveedoresDe } from '../src/datos/legal';
import { HERRAMIENTAS } from '../src/datos/analitica';
import { herramientasValidas } from '../src/lib/consentimiento';
import { TEXTOS } from '../src/i18n/t';

const NADA = { ga4: '', clarity: '', metaPixel: '', linkedin: '' };
const SOLO_GA = { ...NADA, ga4: 'G-ABC123DEF4' };

describe('cookies y proveedores según las herramientas activas', () => {
  it('las necesarias salen siempre: las propias y las de seguridad de Cloudflare', () => {
    const nombres = cookiesDe(COOKIES, NADA, 'necesarias').map((c) => c.nombre);
    expect(nombres).toEqual(['lang', 'synentor_consentimiento', 'synentor-franja-idioma', '__cf_bm', 'cf_clearance']);
  });

  it('sin herramientas no sale ninguna cookie opcional; con Google Analytics, solo las suyas', () => {
    expect(cookiesDe(COOKIES, NADA, 'opcionales')).toEqual([]);
    expect(cookiesDe(COOKIES, SOLO_GA, 'opcionales').map((c) => c.nombre)).toEqual(['_ga', '_ga_<ID>']);
  });

  it('un identificador mal escrito no cuenta como herramienta activa', () => {
    expect(cookiesDe(COOKIES, { ...NADA, ga4: 'mal' }, 'opcionales')).toEqual([]);
  });

  it('los proveedores de siempre, y los de cada herramienta solo si está activa', () => {
    expect(proveedoresDe(PROVEEDORES, NADA).map((p) => p.id)).toEqual(['cloudflare', 'resend', 'microsoft365', 'umami']);
    expect(proveedoresDe(PROVEEDORES, SOLO_GA).map((p) => p.id)).toContain('google');
  });
});

describe('nada sin comprobar llega a la web', () => {
  it('ninguna herramienta activa tiene cookies sin verificar (antes de activarla, comprobar sus duraciones)', () => {
    const validas = herramientasValidas(HERRAMIENTAS);
    const sinVerificar = COOKIES.filter((c) => c.herramienta && validas[c.herramienta] && !c.verificado).map((c) => c.nombre);
    expect(sinVerificar).toEqual([]);
  });

  it('las necesarias están todas verificadas', () => {
    expect(COOKIES.filter((c) => c.herramienta === null && !c.verificado)).toEqual([]);
  });

  it('todos los enlaces son https', () => {
    for (const url of [...PROVEEDORES.map((p) => p.politica), ...Object.values(NAVEGADORES).map((n) => n.ayuda)]) {
      expect(url).toMatch(/^https:\/\//);
    }
  });
});

describe('cada dato tiene su texto en todos los idiomas', () => {
  for (const [idioma, t] of Object.entries(TEXTOS)) {
    it(idioma, () => {
      for (const c of COOKIES) expect(t!.legal.finalidades[c.finalidad as keyof typeof t.legal.finalidades], `${idioma} ${c.finalidad}`).toBeTruthy();
      for (const p of PROVEEDORES) {
        const tp = t!.legal.proveedores[p.id as keyof typeof t.legal.proveedores];
        expect(tp?.para && tp?.donde && tp?.garantia, `${idioma} ${p.id}`).toBeTruthy();
      }
    });
  }
});
