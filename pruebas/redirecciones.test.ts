/// <reference types="node" />
// Redirecciones de la web anterior, mapa del sitio, robots.txt y la página de «no existe» (plan, tarea 6).
// Necesita la web construida (npm run build).
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { IDIOMAS, PAGINAS } from '../src/i18n/idiomas';
import { TEXTOS } from '../src/i18n/t';

const raiz = (r: string) => fileURLToPath(new URL(`../${r}`, import.meta.url));

/** Las 85 páginas públicas de la web anterior (la tabla de rutas de su código, leída el 14/11/2026). */
const ANTIGUAS = `/about /academia /academia-obelixia /academia-rrhh /academia/analytics /academia/aprender/:courseId
/academia/comunidad /academia/curso/:courseId /academia/cursos /academia/demo /academia/gestion-cursos /academia/mi-perfil
/academia/notificaciones /academia/pago-exitoso /academia/verificar /academia/verificar/:code /api /asesorias-laborales /blog
/careers /cases /casos-de-exito /casos-de-exito/:slug /casos-de-uso-rrhh /cdp /chat /comparativa-obelixia-a3-factorial-sage
/comparativa-software-rrhh-nomina /comparativas /comparativas/sectores /confianza-legal-rrhh
/confianza-seguridad-metodologia /confianza-seguridad-metodología /contact /cookies /copiloto-inspeccion /demo /developers
/docs /expediente-documental-evidencias /expediente-evidencias-documentales /faq-rrhh-nomina /gdpr /inspección-copiloto
/legal-trust-rrhh /lowcode /marketplace /marketplace/:appKey /news/:id /paquetes /partner-portal /partners
/payroll-preflight /piloto-privado-2026 /precios /previa-nómina /privacy /pymes /rrhh-espana /sectores /sectores/:slug
/sectores/agencias /sectores/banca /sectores/ecommerce /sectores/educacion /sectores/empresas /sectores/infoproductores
/sectores/manufactura /sectores/retail /sectores/salud /sectores/seguros /sectores/suscripciones /sectors/:slug /seguridad
/store /store/checkout /store/deployment /store/modules /store/modules/:moduleKey /store/success /terms /tienda-rrhh /trends
/verify-certificate /vpt-transparencia-retributiva`
  .split(/\s+/)
  .filter(Boolean);

const reglas = readFileSync(raiz('public/_redirects'), 'utf8')
  .split('\n')
  .filter((l) => l.trim() && !l.startsWith('#'))
  .map((l) => {
    const [origen, destino, estado] = l.trim().split(/\s+/);
    return { origen, destino, estado };
  });

/** El destino que daría Cloudflare para un camino: la primera regla que casa (exacta o con «*» al final). */
function destinoDe(camino: string): string | undefined {
  for (const r of reglas) {
    if (r.origen === camino) return r.destino;
    if (r.origen.endsWith('/*') && camino.startsWith(r.origen.slice(0, -1))) return r.destino;
  }
  return undefined;
}

describe('redirecciones de la web anterior', () => {
  it('todas son 301 y ninguna pisa una dirección de la web nueva', () => {
    expect(reglas.length).toBeGreaterThan(80);
    for (const r of reglas) {
      expect(r.estado, r.origen).toBe('301');
      expect(IDIOMAS.some((i) => r.origen === `/${i}` || r.origen.startsWith(`/${i}/`)), r.origen).toBe(false);
      expect(r.origen === '/' || r.origen.startsWith('/api'), r.origen).toBe(false);
    }
  });

  it('cada página pública de la web anterior va a una página que existe (con y sin barra final, y codificada)', () => {
    expect(ANTIGUAS.length).toBe(85);
    expect(existsSync(raiz('dist'))).toBe(true);
    // «/api» (la referencia de la API de la web anterior) choca con /api/* del Worker: da «no existe», a propósito.
    for (const antigua of ANTIGUAS.filter((a) => a !== '/api')) {
      const camino = antigua.replace(/:[A-Za-z]+/, 'ejemplo');
      const variantes = [camino, `${camino}/`, encodeURI(camino), `${encodeURI(camino)}/`];
      for (const v of variantes) {
        const destino = destinoDe(v);
        expect(destino, v).toBeDefined();
        expect(existsSync(raiz(`dist${destino}index.html`)), `${v} → ${destino}`).toBe(true);
      }
    }
  });

  it('control positivo: una dirección del ERP que también servía la web anterior no se redirige', () => {
    expect(destinoDe('/obelixia-admin/erp')).toBeUndefined();
    expect(destinoDe('/auth')).toBeUndefined();
  });
});

describe('mapa del sitio, robots y «no existe»', () => {
  it('el mapa del sitio lleva cada página de cada idioma con sus versiones', () => {
    const xml = readFileSync(raiz('dist/sitemap.xml'), 'utf8');
    const idiomas = Object.keys(TEXTOS).length;
    expect(xml.match(/<url>/g)?.length).toBe(PAGINAS.length * idiomas);
    expect(xml.match(/hreflang="x-default"/g)?.length).toBe(PAGINAS.length * idiomas);
    expect(xml).toContain('<loc>https://synentor.com/ca/preus/</loc>');
    expect(xml).toContain('<loc>https://synentor.com/de/impressum/</loc>');
  });

  it('robots.txt apunta al mapa del sitio y no deja indexar el formulario', () => {
    const robots = readFileSync(raiz('dist/robots.txt'), 'utf8');
    expect(robots).toContain('Sitemap: https://synentor.com/sitemap.xml');
    expect(robots).toContain('Disallow: /api/');
  });

  it('la página de «no existe» habla en los siete idiomas, enlaza cada portada y no se indexa', () => {
    const html = readFileSync(raiz('dist/404.html'), 'utf8');
    expect(html).toContain('<meta name="robots" content="noindex"');
    for (const i of IDIOMAS) expect(html, i).toContain(`href="/${i}/"`);
  });
});
