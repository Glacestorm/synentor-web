// Las páginas construidas (dist/): una por idioma con textos y página, con sus metadatos y sin marcadores sin rellenar.
// Necesita la web construida antes: npm run build (la CI construye antes de las pruebas).
/// <reference types="node" />
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { TEXTOS } from '../src/i18n/t';
import { PAGINAS, ruta, type Idioma } from '../src/i18n/idiomas';
import { TURNSTILE_SITEKEY } from '../src/datos/turnstile';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));
const idiomas = Object.keys(TEXTOS) as Idioma[];
const fichero = (r: string) => join(DIST, r, 'index.html');
/** El HTML visible: sin scripts ni atributos data-* (donde van los textos que rellena el navegador). */
const visible = (html: string) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/\sdata-[a-z-]+="[^"]*"/g, '');

describe('páginas construidas', () => {
  it('la web está construida (si no: npm run build)', () => {
    expect(existsSync(DIST)).toBe(true);
  });

  for (const idioma of idiomas) {
    for (const pagina of PAGINAS) {
      const r = ruta(pagina, idioma);
      it(`${r}: existe, con título, descripción, canónica y enlaces de idioma`, () => {
        expect(existsSync(fichero(r))).toBe(true);
        const html = readFileSync(fichero(r), 'utf8');
        expect(html).toMatch(/<title>[^<]{5,}<\/title>/);
        expect(html).toMatch(/<meta name="description" content="[^"]{10,}"/);
        expect(html).toContain(`<link rel="canonical" href="https://synentor.com${r}">`);
        expect((html.match(/<link rel="alternate" hreflang="/g) ?? []).length).toBe(idiomas.length + 1);
        expect(html).toContain(`<html lang="${idioma}"`);
      });

      it(`${r}: ningún marcador sin rellenar, «undefined» ni «NaN» a la vista`, () => {
        const v = visible(readFileSync(fichero(r), 'utf8'));
        expect(v.match(/\{[a-zA-Z0-9]+\}/g) ?? []).toEqual([]);
        expect(v).not.toMatch(/\bundefined\b|\bNaN\b/);
      });
    }
  }

  it('la franja de idioma escribe el nombre del idioma como va en una frase («en español», no «en Español»)', () => {
    const html = readFileSync(fichero(ruta('inicio', 'ca')), 'utf8');
    expect(html).toContain('"idioma":"español"');
    expect(html).not.toContain('nombres[pedido]');
  });

  it('cabeceras de seguridad para todo lo estático (_headers)', () => {
    const cab = readFileSync(join(DIST, '_headers'), 'utf8');
    expect(cab).toMatch(/^\/\*$/m);
    for (const linea of [
      'X-Content-Type-Options: nosniff',
      'Referrer-Policy: strict-origin-when-cross-origin',
      'X-Frame-Options: DENY',
      'Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()',
      'Strict-Transport-Security: max-age=31536000',
    ])
      expect(cab).toContain(`  ${linea}`);
  });

  it('Contacto lleva el widget de Turnstile con la clave del sitio (pública) en todos los idiomas', () => {
    expect(TURNSTILE_SITEKEY).toMatch(/^0x4[A-Za-z0-9_-]{18,}$/);
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('contacto', idioma)), 'utf8');
      expect(html, idioma).toContain(`data-sitekey="${TURNSTILE_SITEKEY}"`);
      expect(html, idioma).toContain('https://challenges.cloudflare.com/turnstile/v0/api.js');
    }
  });

  it('Precios lleva el configurador con sus textos', () => {
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('precios', idioma)), 'utf8');
      expect(html).toMatch(/id="configurador"[^>]*data-textos="/);
    }
  });
});
