// El contador de acciones (plan de estadísticas, tarea 1): reglas puras compartidas por la página y el Worker.
import { describe, expect, it } from 'vitest';
import {
  ACCIONES,
  ACCIONES_DE_LA_PAGINA,
  campanaDe,
  debeCargarBaliza,
  origenPermitido,
  saneaCampana,
} from '../src/lib/eventos';

describe('reglas del contador', () => {
  it('L01 las acciones son las cinco y la página no manda contacto-enviado', () => {
    expect([...ACCIONES]).toEqual(['demostracion', 'calculadora', 'pedido-calculadora', 'contacto-enviado', 'llegada-campana']);
    expect(ACCIONES_DE_LA_PAGINA).not.toContain('contacto-enviado');
    expect(ACCIONES_DE_LA_PAGINA).toHaveLength(4);
  });

  it('L02 saneaCampana pasa a minúsculas y lo que falta es «ninguno»', () => {
    expect(saneaCampana('LinkedIn_Nov-2026')).toBe('linkedin_nov-2026');
    expect(saneaCampana(undefined)).toBe('ninguno');
    expect(saneaCampana(null)).toBe('ninguno');
    expect(saneaCampana('')).toBe('ninguno');
  });

  it('L03 lo que no cumple es «otro»; 60 caracteres valen y 61 no', () => {
    expect(saneaCampana('Campaña')).toBe('otro');
    expect(saneaCampana('a b')).toBe('otro');
    expect(saneaCampana('x'.repeat(61))).toBe('otro');
    expect(saneaCampana('x'.repeat(60))).toBe('x'.repeat(60));
  });

  it('L04 campanaDe lee los utm_*; sin ninguno, null; con repetidos, el primero', () => {
    expect(campanaDe(new URL('https://synentor.com/es/?utm_source=LinkedIn&utm_campaign=lanzamiento'))).toEqual({
      fuente: 'linkedin',
      medio: 'ninguno',
      campana: 'lanzamiento',
    });
    expect(campanaDe(new URL('https://synentor.com/es/?otro=1'))).toBeNull();
    expect(campanaDe(new URL('https://synentor.com/es/?utm_source=a&utm_source=b'))?.fuente).toBe('a');
  });

  it('L05 origenPermitido: origen exacto, o el del Referer si no hay Origin', () => {
    expect(origenPermitido('https://synentor.com', null)).toBe(true);
    expect(origenPermitido('https://www.synentor.com', null)).toBe(true);
    expect(origenPermitido('https://synentor.com.ejemplo.net', null)).toBe(false);
    expect(origenPermitido('http://synentor.com', null)).toBe(false);
    expect(origenPermitido('null', null)).toBe(false);
    expect(origenPermitido(null, 'https://www.synentor.com/es/precios/')).toBe(true);
    expect(origenPermitido(null, 'https://otra.example/')).toBe(false);
    expect(origenPermitido(null, null)).toBe(false);
    expect(origenPermitido('https://otra.example', 'https://synentor.com/')).toBe(false);
  });

  it('L06 la baliza solo se carga en producción y con testimonio', () => {
    expect(debeCargarBaliza('synentor.com', 'abc')).toBe(true);
    expect(debeCargarBaliza('synentor-web.glacestorm1969.workers.dev', 'abc')).toBe(false);
    expect(debeCargarBaliza('synentor.com', '')).toBe(false);
  });
});
