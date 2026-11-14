// Mapa del sitio (plan, tarea 6): cada página de cada idioma con textos, con sus versiones en los demás idiomas
// (hreflang) y la principal como x-default, igual que las etiquetas de cada página (Base.astro).
import type { APIRoute } from 'astro';
import { TEXTOS } from '../i18n/t';
import { IDIOMA_PRINCIPAL, PAGINAS, ruta, type Idioma } from '../i18n/idiomas';
import { EMPRESA } from '../datos/empresa';

const absoluta = (camino: string) => new URL(camino, EMPRESA.dominio).toString();

export const GET: APIRoute = () => {
  const idiomas = Object.keys(TEXTOS) as Idioma[];
  const urls = PAGINAS.flatMap((pagina) =>
    idiomas.map((idioma) => {
      const alternas = idiomas
        .map((i) => `<xhtml:link rel="alternate" hreflang="${i}" href="${absoluta(ruta(pagina, i))}"/>`)
        .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${absoluta(ruta(pagina, IDIOMA_PRINCIPAL))}"/>`)
        .join('');
      return `<url><loc>${absoluta(ruta(pagina, idioma))}</loc>${alternas}</url>`;
    }),
  );
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
