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
import { HERRAMIENTAS } from '../src/datos/analitica';
import { COOKIES, PROVEEDORES } from '../src/datos/legal';
import { herramientasValidas } from '../src/lib/consentimiento';
import { EMPRESA } from '../src/datos/empresa';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));
const idiomas = Object.keys(TEXTOS) as Idioma[];
const fichero = (r: string) => join(DIST, r, 'index.html');
/** El HTML visible: sin scripts ni atributos data-* (donde van los textos que rellena el navegador). */
const visible = (html: string) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/\sdata-[a-z-]+="[^"]*"/g, '');
/** El texto tal como lo lee una persona: sin las entidades con que Astro escribe «&», «'» o «"». */
const desescapa = (html: string) =>
  html
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n: string) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

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

      it(`${r}: el pie enlaza a la página de LinkedIn de la empresa, en otra pestaña y con su texto para lectores de pantalla`, () => {
        const html = readFileSync(fichero(r), 'utf8');
        const pie = html.slice(html.indexOf('<footer'));
        const escapa = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Astro añade su atributo de estilos con ámbito (data-astro-cid-…) a los enlaces del pie.
        expect(pie).toMatch(
          new RegExp(
            `<a href="${escapa(EMPRESA.redes.linkedin)}" target="_blank" rel="noopener noreferrer" ` +
              `aria-label="${escapa(TEXTOS[idioma]!.pie.linkedin)}"( data-astro-cid-[a-z0-9]+)?>LinkedIn</a>`,
          ),
        );
      });

      it(`${r}: título y descripción de buscador (≤60 y ≤160 caracteres), og:locale y un bloque de datos estructurados`, () => {
        const html = readFileSync(fichero(r), 'utf8');
        const titulo = html.match(/<title>([^<]*)<\/title>/)![1]!;
        const descripcion = html.match(/<meta name="description" content="([^"]*)"/)![1]!;
        expect([...desescapa(titulo)].length, titulo).toBeLessThanOrEqual(60);
        expect([...desescapa(descripcion)].length, descripcion).toBeLessThanOrEqual(160);
        expect(html).toMatch(/<meta property="og:locale" content="[a-z]{2}_[A-Z]{2}"/);
        const bloques = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
        expect(bloques).toHaveLength(1);
        const grafo = JSON.parse(bloques[0]![1]!) as { '@context': string; '@graph': { '@type': string; name?: string }[] };
        expect(grafo['@context']).toBe('https://schema.org');
        expect(grafo['@graph'].find((n) => n['@type'] === 'WebPage')?.name).toBe(desescapa(titulo));
      });

      it(`${r}: ningún marcador sin rellenar, «undefined» ni «NaN» a la vista`, () => {
        const v = visible(readFileSync(fichero(r), 'utf8'));
        expect(v.match(/\{[a-zA-Z0-9]+\}/g) ?? []).toEqual([]);
        expect(v).not.toMatch(/\bundefined\b|\bNaN\b/);
      });
    }
  }

  it('los dos botones «Pide una demostración» de la portada llevan data-evento, en todos los idiomas', () => {
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('inicio', idioma)), 'utf8');
      const botones = html.match(/<a\b[^>]*data-evento="demostracion"[^>]*>/g) ?? [];
      expect(botones.length, idioma).toBe(2);
      for (const b of botones) expect(b, idioma).toContain('asunto=demostracion');
    }
  });

  it('P06 ninguna página lleva la baliza de Cloudflare escrita en el HTML ni Umami; solo la añade el cargador', () => {
    for (const idioma of idiomas) {
      for (const pagina of PAGINAS) {
        const html = readFileSync(fichero(ruta(pagina, idioma)), 'utf8');
        expect(html.toLowerCase(), ruta(pagina, idioma)).not.toContain('umami');
        // La dirección puede salir dentro del código empaquetado del cargador; lo que no puede haber es una etiqueta script con ella.
        const etiquetas = html.match(/<script\b[^>]*>/g) ?? [];
        for (const e of etiquetas) expect(e, ruta(pagina, idioma)).not.toContain('cloudflareinsights');
      }
    }
    const es = readFileSync(fichero(ruta('inicio', 'es')), 'utf8');
    expect(es.match(/data-evento="demostracion"/g) ?? []).toHaveLength(2);
  });

  it('la portada dice qué es y dónde: Andorra, España y Europa en el título y el antetítulo dentro del H1, en todos los idiomas', () => {
    const espana: Record<string, RegExp> = { ca: /Espanya/, es: /España/, en: /Spain/, fr: /Espagne/, pt: /Espanha/, it: /Spagna/, de: /Spanien/ };
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('inicio', idioma)), 'utf8');
      const titulo = desescapa(html.match(/<title>([^<]*)<\/title>/)![1]!);
      expect(titulo, idioma).toMatch(/Andorr/);
      expect(titulo, idioma).toMatch(espana[idioma]!);
      expect(titulo, idioma).toMatch(/Europ/);
      // Lo que está disponible cambia de un país a otro: la descripción remite a la web en vez de prometerlo todo.
      expect(desescapa(html.match(/<meta name="description" content="([^"]*)"/)![1]!), idioma).toMatch(espana[idioma]!);
      const h1 = desescapa(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)![1]!.replace(/<[^>]+>/g, ' '));
      expect(h1, idioma).toContain(TEXTOS[idioma]!.inicio.portada.antetitulo);
      expect(h1, idioma).toContain(TEXTOS[idioma]!.inicio.portada.titulo);
      expect((html.match(/<h1\b/g) ?? []).length, idioma).toBe(1);
    }
  });

  it('llms.txt: los datos de la empresa y ningún importe que no esté en las páginas de Precios o Servicios', () => {
    const llms = readFileSync(join(DIST, 'llms.txt'), 'utf8');
    expect(llms.startsWith(`# ${EMPRESA.marca}\n`)).toBe(true);
    for (const dato of [EMPRESA.razonSocial, EMPRESA.correo, EMPRESA.telefono.texto, EMPRESA.direccion.linea, EMPRESA.redes.linkedin])
      expect(llms, dato).toContain(dato);
    const paginas = ['precios', 'servicios'].map((p) => desescapa(readFileSync(fichero(ruta(p as 'precios', 'es')), 'utf8'))).join('\n');
    const importes = llms.match(/\d[\d.,]* €/g) ?? [];
    expect(importes.length).toBeGreaterThan(10);
    for (const importe of importes) expect(paginas, importe).toContain(importe);
    expect(llms).not.toMatch(/gmail|hotmail|outlook|yahoo/i);
  });

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

  it('Servicios explica el control de costes y lleva la tarjeta de gestorías, en todos los idiomas (diseño §18)', () => {
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('servicios', idioma)), 'utf8');
      const t = TEXTOS[idioma]!.servicios;
      expect(html, idioma).toContain('id="costes"');
      expect(html, idioma).toContain('id="gestorias"');
      expect(html, idioma).toContain(t.modulos.costes.nombre);
      // El principio de cada punto (hasta un apóstrofo o un «&», que Astro escribe como entidad).
      for (const punto of t.costes.puntos) expect(visible(html), idioma).toContain(punto.split(/['’&]/)[0].slice(0, 25));
      expect(html, idioma).toContain(`${ruta('contacto', idioma)}?asunto=gestorias`);
    }
  });

  it('Precios lleva las filas del Obrador y de las gestorías y la tarjeta de gestorías (diseño §18)', () => {
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('precios', idioma)), 'utf8');
      const t = TEXTOS[idioma]!;
      expect(html, idioma).toContain(t.precios.tablas.paqueteObrador);
      expect(html, idioma).toContain(t.precios.tablas.gestorias);
      expect(html, idioma).toContain('id="gestorias"');
      expect(html, idioma).toContain(`${ruta('contacto', idioma)}?asunto=gestorias`);
    }
  });

  it('las páginas legales siguen el modelo de la APDA y solo enseñan lo que está activo (diseño §19)', () => {
    for (const idioma of idiomas) {
      const cookies = readFileSync(fichero(ruta('cookies', idioma)), 'utf8');
      // Las necesarias, siempre; las de una herramienta, solo si la web la tiene activa (src/datos/analitica.ts).
      const activas = herramientasValidas(HERRAMIENTAS);
      const esta = (h: keyof typeof activas | null) => h === null || activas[h] !== null;
      for (const c of COOKIES) {
        const celda = `<code>${c.nombre.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`;
        if (esta(c.herramienta)) expect(cookies, `${idioma} ${c.nombre}`).toContain(celda);
        else expect(cookies, `${idioma} ${c.nombre}`).not.toContain(celda);
      }
      const ninguna = TEXTOS[idioma]!.legal.cookies.ninguna;
      if (Object.values(activas).some((v) => v !== null)) expect(cookies, idioma).not.toContain(ninguna);
      else expect(cookies, idioma).toContain(ninguna);
      expect(cookies, idioma).toContain('href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer"');
      // En el móvil cada fila sale como una ficha: cada celda lleva el nombre de su columna.
      const col = TEXTOS[idioma]!.legal.tablas;
      expect(cookies, idioma).toContain(`data-etiqueta="${col.finalidad}"`);
      expect(cookies, idioma).toContain(`data-etiqueta="${col.duracion}"`);

      const privacidad = readFileSync(fichero(ruta('privacidad', idioma)), 'utf8');
      for (const p of ['Cloudflare', 'Resend']) expect(privacidad, idioma).toContain(p);
      // Cada proveedor de una herramienta, solo si está activa (por su política: la de Microsoft es la misma que la de Clarity).
      for (const p of PROVEEDORES.filter((q) => q.herramienta && !PROVEEDORES.some((o) => o.herramienta === null && o.politica === q.politica))) {
        if (esta(p.herramienta)) expect(privacidad, `${idioma} ${p.id}`).toContain(`href="${p.politica}"`);
        else expect(privacidad, `${idioma} ${p.id}`).not.toContain(`href="${p.politica}"`);
      }
      expect(privacidad, idioma).toContain(`data-etiqueta="${col.garantia}"`);
      expect(privacidad, idioma).toContain('href="https://www.apda.ad/"');
      expect(privacidad, idioma).toContain(`href="${ruta('cookies', idioma)}"`);

      const aviso = readFileSync(fichero(ruta('aviso-legal', idioma)), 'utf8');
      expect(aviso, idioma).toContain(`href="${ruta('privacidad', idioma)}"`);
      expect(visible(aviso), idioma).not.toMatch(/\{[a-zA-Z]+\}/);
    }
  });

  it('Precios lleva el configurador con sus textos', () => {
    for (const idioma of idiomas) {
      const html = readFileSync(fichero(ruta('precios', idioma)), 'utf8');
      expect(html).toMatch(/id="configurador"[^>]*data-textos="/);
    }
  });
});
