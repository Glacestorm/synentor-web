// Genera docs/legal/REVISION-TEXTOS-LEGALES.md para el asesor jurídico: los textos legales en catalán (prevalece) y en
// castellano, con TODAS las herramientas (también las que aún no están activas) y los puntos que debe confirmar.
// Uso: npm run revision-legal (lo empaqueta esbuild y lo ejecuta node). Sale de los mismos textos y datos que la web.
import { writeFileSync } from 'node:fs';
import { textos } from '../src/i18n/t';
import type { Idioma } from '../src/i18n/idiomas';
import { EMPRESA } from '../src/datos/empresa';
import { COOKIES, PROVEEDORES, NAVEGADORES, PLAZOS } from '../src/datos/legal';
import { duracion } from '../src/lib/duracion';
import { rellena } from '../src/i18n/rellena';
import { HERRAMIENTAS } from '../src/datos/analitica';
import { herramientasValidas } from '../src/lib/consentimiento';

function md(idioma: Idioma): string {
  const todo = textos(idioma);
  const lg = todo.legal;
  const d = EMPRESA.direccion;
  const fijos = { sesion: lg.tablas.sesion, persistente: lg.tablas.persistente, proveedor: lg.tablas.fijaProveedor };
  const valores: Record<string, string> = {
    web: 'synentor.com',
    razon: EMPRESA.razonSocial,
    direccion: `${d.linea}, ${d.codigoPostal} ${d.localidad} (${d.pais})`,
    correo: EMPRESA.correo,
    telefono: EMPRESA.telefono.texto,
    plazoContacto: duracion(PLAZOS.contacto, idioma, fijos),
    plazoRegistros: duracion(PLAZOS.registros, idioma, fijos),
    boton: todo.cookiesAviso.flotante,
    privacidad: lg.enlaces.privacidad,
    cookies: lg.enlaces.cookies,
    apda: 'apda.ad',
    ...Object.fromEntries(Object.entries(NAVEGADORES).map(([k, n]) => [k, `${n.nombre} (${n.ayuda})`])),
  };
  const r = (t: string) => rellena(t, valores);
  const t = lg.tablas;
  const tablaCookies = (necesarias: boolean) => {
    const filas = COOKIES.filter((c) => (necesarias ? c.herramienta === null : c.herramienta !== null));
    return [
      `| ${t.cookie} | ${t.titular} | ${t.finalidad} | ${t.duracion} | ${t.tipo} | Herramienta |`,
      '|---|---|---|---|---|---|',
      ...filas.map(
        (c) =>
          `| \`${c.nombre}\` | ${c.titular} | ${lg.finalidades[c.finalidad as keyof typeof lg.finalidades]} | ${duracion(c.duracion, idioma, fijos)}${c.verificado ? '' : ' **(sin verificar)**'} | ${c.terceros ? t.terceros : t.propia} | ${c.herramienta ?? '—'} |`,
      ),
    ].join('\n');
  };
  const tablaProveedores = [
    `| ${t.proveedor} | ${t.para} | ${t.donde} | ${t.garantia} | Herramienta |`,
    '|---|---|---|---|---|',
    ...PROVEEDORES.map((p) => {
      const x = lg.proveedores[p.id as keyof typeof lg.proveedores];
      return `| ${p.nombre} | ${x.para} | ${x.donde} | ${x.garantia} | ${p.herramienta ?? 'siempre'} |`;
    }),
  ].join('\n');
  const pagina = (tx: typeof lg.aviso | typeof lg.privacidad | typeof lg.cookies) =>
    [
      `### ${tx.encabezado}`,
      ...tx.secciones.flatMap((s) => [
        `#### ${s.t}`,
        ...s.p.map(r),
        ...('lista' in s && s.lista ? [s.lista.map((x) => `- ${r(x)}`).join('\n')] : []),
        ...('tabla' in s && s.tabla
          ? [s.tabla === 'proveedores' ? tablaProveedores : tablaCookies(s.tabla === 'necesarias')]
          : []),
        ...('despues' in s && s.despues ? s.despues.map(r) : []),
      ]),
    ].join('\n\n');
  return [`## ${idioma === 'ca' ? 'Català (prevalece)' : 'Castellano'}`, pagina(lg.aviso), pagina(lg.privacidad), pagina(lg.cookies)].join('\n\n');
}

const NOMBRES = { ga4: 'Google Analytics', clarity: 'Microsoft Clarity', metaPixel: 'píxel de Meta', linkedin: 'LinkedIn Insight Tag' } as const;
const validas = herramientasValidas(HERRAMIENTAS);
const lista = (Object.keys(NOMBRES) as (keyof typeof NOMBRES)[]).filter((k) => validas[k] !== null).map((k) => NOMBRES[k]);
const activas = lista.length ? lista.join(', ') : 'ninguna (solo las cookies necesarias; las estadísticas, sin cookies)';

const cabecera = `# Textos legales de synentor.com — para la revisión del asesor jurídico

Generado con \`npm run revision-legal\` desde los textos y datos de la web (no se edita a mano). Fecha de los textos:
14/11/2026. Modelo de partida: guía de la APDA «Ús de cookies, política de privadesa i avís legal», versión 4
(23/01/2024), anexos 1 a 3.

**Cómo se publica**: en la web, la tabla de cookies y la de proveedores solo enseñan las herramientas activas. Aquí salen
todas (Google Analytics, Microsoft Clarity, píxel de Meta y LinkedIn Insight Tag), para revisarlas antes de activarlas.
Las duraciones marcadas «(sin verificar)» no se han podido comprobar en la página oficial del proveedor: la web no deja
activar esa herramienta hasta comprobarlas.

**Activas en esta versión**: ${activas}.

## Puntos que hay que confirmar

**Asesor jurídico**
1. Base del formulario de contacto: consentimiento (casilla) y, si se pide propuesta, medidas precontractuales.
2. Transferencias a Estados Unidos (Cloudflare, Resend, Microsoft, Google, Meta, LinkedIn): si el Marco de
   Privacidad de Datos UE-EE. UU. y las cláusulas tipo son garantía suficiente con la LQPD y si hay que informar de algo
   más; el texto avisa del riesgo (la guía de la APDA lo pide cuando el país no tiene un nivel equivalente).
3. Píxel de Meta y LinkedIn Insight Tag: si hay corresponsabilidad con Meta y LinkedIn y cómo decirlo.
4. Tribunales: «los del Principado de Andorra, salvo que la ley te reconozca el derecho a acudir a otros» (consumidores).
5. Comprobación antirrobot (Cloudflare Turnstile): base en interés legítimo. Cloudflare dice en su anuncio que Turnstile no
   usa cookies, pero su guía para móviles habla de cookies y almacenamiento local: no se ha puesto en la tabla de cookies.
6. Prueba del consentimiento (D1): base en la obligación de poder demostrarlo; 12 meses.

**Traducciones (inglés, francés, portugués, italiano y alemán)**: el texto que prevalece es el catalán. Revisar:
- El nombre de la Llei 29/2021 y el de la APDA van traducidos entre paréntesis: no son traducciones oficiales.
- «Mesures prèvies a un contracte»: *steps taken before entering into a contract* (en), *mesures précontractuelles* (fr),
  *diligências pré-contratuais* (pt), *misure precontrattuali* (it), *vorvertragliche Maßnahmen* (de).
- En italiano, «responsable» va como *titolare del trattamento* (en el RGPD italiano, *responsabile* es el encargado).
- Junto a «NRT» se ha añadido «(número fiscal andorrano)» en las cinco traducciones (no en catalán ni en castellano): confirmarlo o quitarlo.
- En alemán, el aviso legal se titula *Impressum*.

**Gerencia**
7. Número de inscripción en el Registre de Societats: el aviso legal solo dice «NRT: en trámite».

**Confirmado (gerencia y comprobaciones, 14 y 15/11/2026)**
- Plazo para los mensajes de quien no llega a ser cliente: **1 año** desde el último contacto.
- La base de datos de las pruebas de consentimiento (Cloudflare D1) se creó con la **jurisdicción de la Unión Europea**:
  los registros se guardan en la UE.
- Estadísticas de visitas: Cloudflare Web Analytics (sin cookies; es de Cloudflare, el mismo proveedor del alojamiento) y un
  recuento propio de acciones en Cloudflare Analytics Engine (sin IP ni navegador; solo cifras de conjunto). Cloudflare es
  de Estados Unidos.
- Microsoft 365 (el correo de la empresa): la organización de synentor.com está en la **región «EU»** de Microsoft
  (\`tenant_region_scope: EU\` en https://login.microsoftonline.com/synentor.com/v2.0/.well-known/openid-configuration,
  15/11/2026; la tarjeta «Ubicación de los datos» del centro de administración no cargó ese día).

**Comprobado y su fuente** (búsqueda en las páginas oficiales del 14/11/2026; abrir cada una antes de activar):
- Google Analytics: \`_ga\` y \`_ga_<ID>\`; la web las limita a 395 días (unos 13 meses) con \`cookie_expires\`:
  https://support.google.com/analytics/answer/11397207 · https://developers.google.com/analytics/devguides/collection/ga4/cookie-usage
- Microsoft Clarity: nombres y finalidades de su página oficial (que no da duraciones). Duraciones **medidas por gerencia
  el 15/11/2026** en Chrome en la vista previa: \`_clck\` 1 año y \`_clsk\` 1 día; las cinco de los dominios de Microsoft
  (CLID, ANONCHK, MR, MUID, SM) no se pusieron, y su duración figura como «la fija el proveedor»:
  https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies
- Meta: \`_fbp\` 90 días (página de ayuda de Meta; \`_fbc\` y \`fr\` **sin verificar**):
  https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/fbp-and-fbc ·
  https://www.facebook.com/privacy/policies/cookies/
- LinkedIn (tabla oficial; no dice qué cookies pone la Insight Tag en concreto): https://www.linkedin.com/legal/l/cookie-table
- Cloudflare (\`__cf_bm\`, \`cf_clearance\`): https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
- Registros de Workers: 3 días en el plan gratuito según una página y 7 según otra; el texto dice «hasta 7 días»:
  https://developers.cloudflare.com/workers/observability/logs/workers-logs/ · https://developers.cloudflare.com/observability/pricing/
- Resend guarda todos los datos en Estados Unidos (aunque envíe desde Irlanda): https://resend.com/docs/dashboard/domains/regions ·
  https://resend.com/security/gdpr
- Cloudflare Web Analytics (sin cookies): https://developers.cloudflare.com/web-analytics/ · https://www.cloudflare.com/privacypolicy/
- APDA: C/ Dr. Vilanova 15-17, planta -5, AD500 Andorra la Vella · https://www.apda.ad
`;

writeFileSync('docs/legal/REVISION-TEXTOS-LEGALES.md', [cabecera, md('ca'), md('es')].join('\n\n') + '\n');
console.log('docs/legal/REVISION-TEXTOS-LEGALES.md escrito');
