// llms.txt (guía SEO, 15/11/2026): un resumen en texto plano para que una IA lea bien quiénes somos, qué hacemos,
// cuánto cuesta y cómo contactar. Convención reciente, no una norma. Todo sale de los mismos textos (castellano), de la
// misma tabla de tarifas que la página de Precios y de los datos de la empresa: nada escrito a mano aquí.
import type { APIRoute } from 'astro';
import { EMPRESA } from '../datos/empresa';
import { TEXTOS, textos, rellena } from '../i18n/t';
import { IDIOMAS, NOMBRE_IDIOMA, PAGINAS, ruta, type Idioma } from '../i18n/idiomas';
import { filasTarifa } from '../lib/precios/filasTarifa';
import { porcentaje } from '../lib/formato';
import { TARIFA } from '../lib/precios/tarifa';

const IDIOMA: Idioma = 'es';
const absoluta = (camino: string) => new URL(camino, EMPRESA.dominio).toString();

export function llms(): string {
  const t = textos(IDIOMA);
  const s = t.servicios;
  const pct = (n: number) => porcentaje(n, IDIOMA);
  const paises = Object.entries(t.precios.configurador.paises)
    .filter(([codigo]) => codigo !== 'OTRO')
    .map(([, nombre]) => nombre);
  const d = EMPRESA.direccion;

  const lineas = [
    `# ${EMPRESA.marca}`,
    '',
    `> ${t.inicio.descripcion} ${t.inicio.historia.texto}`,
    '',
    `${EMPRESA.razonSocial} · ${d.linea} · ${d.codigoPostal} ${d.localidad} (${d.pais}).`,
    '',
    '## Qué hacemos',
    '',
    `- ${s.suite.titulo}: ${s.suite.texto}`,
    ...(Object.keys(s.modulos) as (keyof typeof s.modulos)[]).map((m) => `  - ${s.modulos[m].nombre}: ${s.modulos[m].texto}`),
    `- ${s.muv.titulo}: ${s.muv.texto}`,
    `- ${s.consultoria.titulo}: ${s.consultoria.texto}`,
    `- ${t.precios.tablas.servicios}: ${absoluta(ruta('servicios', IDIOMA))}`,
    '',
    `Países: ${paises.join(', ')}. Qué está disponible hoy en cada país, módulo a módulo: ${absoluta(ruta('servicios', IDIOMA))}`,
    `${s.suite.idiomaPrograma}`,
    '',
    '## Precios',
    '',
    ...filasTarifa(IDIOMA).map((f) => `- ${f.concepto}: ${f.precio}`),
    '',
    ...t.precios.condiciones.puntos.map((p) => `- ${rellena(p, { igi: pct(TARIFA.igiAndorra), recargo: pct(TARIFA.recargoMensual) })}`),
    '',
    `Calculadora con el total al momento: ${absoluta(ruta('precios', IDIOMA))}`,
    '',
    `## ${t.precios.faq.titulo}`,
    '',
    ...t.precios.faq.preguntas.flatMap((q) => [`- ${q.p}`, `  ${q.r}`]),
    '',
    '## Contacto',
    '',
    `- Correo: ${EMPRESA.correo}`,
    `- Teléfono: ${EMPRESA.telefono.texto}`,
    `- ${s.implantacion.soporte}`,
    `- Formulario: ${absoluta(ruta('contacto', IDIOMA))}`,
    `- LinkedIn: ${EMPRESA.redes.linkedin}`,
    '',
    '## Páginas',
    '',
    ...PAGINAS.filter((p) => !['aviso-legal', 'privacidad', 'cookies'].includes(p)).map(
      (p) => `- ${t.nav[p as 'inicio' | 'servicios' | 'precios' | 'contacto']}: ${absoluta(ruta(p, IDIOMA))}`,
    ),
    `- ${t.pie.avisoLegal}: ${absoluta(ruta('aviso-legal', IDIOMA))}`,
    `- ${t.pie.privacidad}: ${absoluta(ruta('privacidad', IDIOMA))}`,
    '',
    `La web, en ${IDIOMAS.filter((i) => TEXTOS[i])
      .map((i) => `${NOMBRE_IDIOMA[i]} (${absoluta(ruta('inicio', i))})`)
      .join(', ')}.`,
    '',
  ];
  return lineas.join('\n');
}

export const GET: APIRoute = () => new Response(llms(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
