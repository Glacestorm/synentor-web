import { describe, expect, it } from 'vitest';
import { TEXTOS } from '../src/i18n/t';

/** Todas las rutas de claves de un objeto de textos (las listas cuentan por su posición). */
function claves(o: unknown, prefijo = ''): string[] {
  if (typeof o === 'string') return [prefijo];
  if (Array.isArray(o)) return o.flatMap((v, i) => claves(v, `${prefijo}[${i}]`));
  return Object.entries(o as Record<string, unknown>).flatMap(([k, v]) => claves(v, prefijo ? `${prefijo}.${k}` : k));
}

function valores(o: unknown): string[] {
  if (typeof o === 'string') return [o];
  if (Array.isArray(o)) return o.flatMap(valores);
  return Object.values(o as Record<string, unknown>).flatMap(valores);
}

describe('textos de la web', () => {
  const referencia = claves(TEXTOS.ca).sort();

  for (const [idioma, textos] of Object.entries(TEXTOS)) {
    it(`${idioma}: las mismas claves que el catalán y ningún texto vacío`, () => {
      expect(claves(textos).sort()).toEqual(referencia);
      for (const v of valores(textos)) expect(v.trim().length).toBeGreaterThan(0);
    });

    it(`${idioma}: cada texto conserva los mismos {marcadores} que el catalán`, () => {
      const marcadores = (o: unknown) => claves(o).map((k) => k);
      expect(marcadores(textos).length).toBe(referencia.length);
      const porClave = (o: unknown, ruta: string): string =>
        ruta.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((v: any, k) => v?.[k], o) as string;
      for (const ruta of referencia) {
        const enCa = (porClave(TEXTOS.ca, ruta).match(/\{[a-zA-Z0-9]+\}/g) ?? []).sort();
        const aqui = (porClave(textos, ruta).match(/\{[a-zA-Z0-9]+\}/g) ?? []).sort();
        expect(aqui, `${idioma} ${ruta}`).toEqual(enCa);
      }
    });
  }
});

describe('franja de idioma', () => {
  it('nombra cada idioma como se escribe dentro de una frase (minúscula salvo en inglés y alemán)', () => {
    const esperado: Record<string, string> = { ca: 'català', es: 'español', en: 'English', fr: 'français', pt: 'português', it: 'italiano', de: 'Deutsch' };
    for (const [idioma, t] of Object.entries(TEXTOS)) expect(t!.franjaIdioma.idioma, idioma).toBe(esperado[idioma]);
  });
});
