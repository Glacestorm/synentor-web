# Estadísticas de la web con Cloudflare: la parte de la web — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** la web deja Umami, carga la baliza de Cloudflare Web Analytics solo en synentor.com y www.synentor.com, y cuenta
las acciones con un contador propio (Workers Analytics Engine) sin IP, sin agente de usuario, sin identificador y sin cookies.

**Architecture:** el Worker gana `POST /api/evento` (`worker/evento.ts`), que escribe un punto en el conjunto
`synentor_eventos` (enlace `EVENTOS`); `/api/contacto` cuenta `contacto-enviado` cuando el proveedor del correo confirma el
envío. La página manda las demás acciones con `sendBeacon` (`src/scripts/eventos.ts`). Las reglas comunes (lista de
acciones, orígenes, saneado de campañas, cuándo cargar la baliza) viven en `src/lib/eventos.ts`, que usan el Worker y la
página. El robot del ERP leerá los dos conjuntos (plan del ERP, aparte).

**Tech Stack:** Astro, Cloudflare Workers (Analytics Engine), TypeScript, vitest (entorno `node`; `jsdom` por fichero con
`// @vitest-environment jsdom`).

**Spec:** repositorio `Glacestorm/obelixia-ca07508b`, `docs/superpowers/specs/2026-11-15-estadisticas-web-design.md`,
apartado 7 (§7.2 y §7.3), aprobado por gerencia el 16/11/2026 con las llegadas con campaña.

## Global Constraints

- Lo que lee el usuario, en castellano; los textos de la web, en cada uno de sus siete idiomas (ca, es, en, fr, pt, it, de).
- Un punto del contador lleva solo la acción y, en `llegada-campana`, fuente, medio y campaña saneados. Nunca la IP, el
  agente de usuario, un identificador, cookies ni la dirección de la página. La fecha la pone Cloudflare.
- Acciones: `demostracion`, `calculadora`, `pedido-calculadora`, `contacto-enviado`, `llegada-campana`. La página manda
  las cuatro que no son `contacto-enviado`; esa la cuenta **solo el Worker**, dentro de `/api/contacto`, cuando el
  proveedor del correo confirma el envío.
- `/api/evento`: solo POST (otro método, 405); cuerpo de 512 **bytes** como mucho (más, 400); una acción de la página
  (otra, 400); origen exacto `https://synentor.com` o `https://www.synentor.com`, por la cabecera `Origin` o, si no viene,
  por el origen de `Referer` (otro o ninguno: 403 sin contar); sin el enlace `EVENTOS` (vistas previas), 204 sin contar;
  contado, 204. Un fallo al escribir nunca cambia la respuesta.
- Valores de campaña: minúsculas, solo `a-z`, `0-9`, `-` y `_`, 60 caracteres como mucho; lo que no cumpla, `otro`; si
  falta uno de los tres en una llegada con campaña, `ninguno` (decisión de Claude: así cada dimensión suma lo mismo).
- Dominios de producción: una sola lista en `src/datos/analitica.ts`, `synentor.com` y `www.synentor.com`. Vale para la
  baliza, para los orígenes que acepta `/api/evento` y para que la página mande acciones.
- Baliza **manual** de Cloudflare Web Analytics con su testimonio en `src/datos/analitica.ts`. Testimonio vacío: no se
  carga nada. Con testimonio, solo en los dominios de producción. La «configuración automática» del panel se deja apagada
  (o cada página contaría dos veces): lo dice la guía.
- `VERSION_POLITICA_COOKIES` no cambia: no cambia ninguna herramienta sometida a consentimiento.
- Sin gasto: Web Analytics y Analytics Engine, en sus planes gratuitos.
- El repositorio es público: el testimonio de la baliza no es secreto (va en la página); nada más se escribe.
- Clase de cada tarea (CLAUDE.md del ERP, «el esfuerzo según el riesgo»): la 1 es **sensible** (el Worker: circuito
  completo); la 2 y la 3, **ordinarias** (una revisión).
- `npm test` después de `npm run build` (`pruebas/paginas.test.ts` lee `dist/`).

## Review Focus

1. **Alguien manda `contacto-enviado` a `/api/evento`** (la página o una llamada de fuera): 400 y no cuenta; esa acción
   solo la escribe `/api/contacto`. → Tarea 1 (E04).
2. **Un cuerpo de menos de 512 caracteres y más de 512 bytes** (180 «€» = 540 bytes): 400. → Tarea 1 (E03).
3. **Un origen parecido** (`https://synentor.com.ejemplo.net`, `http://synentor.com`, `null`, un `Referer` de otro
   dominio sin `Origin`): 403 sin contar; la comparación es exacta. → Tarea 1 (E05).
4. **El enlace que lanza al escribir**: `/api/evento` contesta 204 y `/api/contacto` sigue con `{ ok: true }`. → Tarea 1
   (E08, K02).
5. **Una dirección con parámetros de campaña raros** (mayúsculas, acentos, 200 caracteres, repetidos) y una sin ninguno:
   saneado a `otro`, y sin ninguno no se manda nada. → Tarea 1 (L03, L04) y Tarea 2 (P03).

---

### Task 1: El contador de acciones en el Worker (sensible)

**Files:**
- Create: `src/lib/eventos.ts`, `worker/evento.ts`, `pruebas/eventos-reglas.test.ts`, `pruebas/evento-worker.test.ts`
- Modify: `src/datos/analitica.ts` (añade `DOMINIOS_PRODUCCION`; Umami se quita en la Tarea 2), `worker/index.ts`
  (`Env.EVENTOS?: AnalyticsEngineDataset` y la ruta `/api/evento`), `worker/contacto.ts` (cuenta tras el envío),
  `wrangler.jsonc` (enlace), `pruebas/configuracion-worker.test.ts`, `pruebas/contacto.test.ts`

**Interfaces:**
- Produces:
  - `src/datos/analitica.ts`: `export const DOMINIOS_PRODUCCION = ['synentor.com', 'www.synentor.com'] as const;`
  - `src/lib/eventos.ts`:
    - `export const ACCIONES = ['demostracion', 'calculadora', 'pedido-calculadora', 'contacto-enviado', 'llegada-campana'] as const;`
      y `export type Accion = (typeof ACCIONES)[number];`
    - `export const ACCIONES_DE_LA_PAGINA: readonly Accion[]` (las cuatro sin `contacto-enviado`);
    - `export interface Campana { fuente: string; medio: string; campana: string }`;
    - `export function saneaCampana(v: string | null | undefined): string` (`null`, `undefined` o vacío → `'ninguno'`);
    - `export function campanaDe(url: URL): Campana | null` (`null` si no trae ninguno de `utm_source`, `utm_medium`,
      `utm_campaign`; con varios iguales, el primero);
    - `export function origenPermitido(origen: string | null, referente: string | null): boolean`;
    - `export function debeCargarBaliza(hostname: string, testimonio: string): boolean`.
  - `worker/evento.ts`: `export async function atiendeEvento(request: Request, env: Env): Promise<Response>` y
    `export function cuentaEvento(env: Env, accion: Accion, campana?: Campana): void` (nunca lanza; sin enlace, nada).
  - **Forma del punto** (la lee el robot del ERP): `env.EVENTOS.writeDataPoint({ indexes: [accion], blobs: [accion,
    fuente, medio, campana], doubles: [1] })`; sin campaña, los tres últimos `blobs` van vacíos (`''`). El robot cuenta con
    `SUM(_sample_interval)` agrupando por `blob1` a `blob4`.
  - `wrangler.jsonc`: `"analytics_engine_datasets": [{ "binding": "EVENTOS", "dataset": "synentor_eventos" }]` en el nivel
    principal y **no** en `previews` (como la base D1: una vista previa no escribe en producción).

- [ ] **Step 1: Write the failing tests**
  - `pruebas/eventos-reglas.test.ts`:
    - L01 `ACCIONES` son exactamente las cinco, en ese orden; `ACCIONES_DE_LA_PAGINA` no incluye `contacto-enviado`.
    - L02 `saneaCampana('LinkedIn_Nov-2026')` → `'linkedin_nov-2026'`; `saneaCampana(undefined)` y `saneaCampana('')` →
      `'ninguno'`.
    - L03 `saneaCampana('Campaña')`, `saneaCampana('a b')`, `saneaCampana('x'.repeat(61))` → `'otro'`;
      `saneaCampana('x'.repeat(60))` → la misma cadena.
    - L04 `campanaDe(new URL('https://synentor.com/es/?utm_source=LinkedIn&utm_campaign=lanzamiento'))` →
      `{ fuente: 'linkedin', medio: 'ninguno', campana: 'lanzamiento' }`; sin ningún `utm_*` → `null`; con
      `utm_source=a&utm_source=b` → `fuente: 'a'`.
    - L05 `origenPermitido('https://synentor.com', null)` y `('https://www.synentor.com', null)` → `true`;
      `('https://synentor.com.ejemplo.net', null)`, `('http://synentor.com', null)`, `('null', null)` → `false`;
      `(null, 'https://www.synentor.com/es/precios/')` → `true`; `(null, 'https://otra.example/')` y `(null, null)` → `false`;
      un `Origin` malo con un `Referer` bueno → `false` (manda `Origin` si viene).
    - L06 `debeCargarBaliza('synentor.com', 'abc')` → `true`; `('synentor-web.glacestorm1969.workers.dev', 'abc')` y
      `('synentor.com', '')` → `false`.
  - `pruebas/evento-worker.test.ts` (con `worker.fetch`, un `EVENTOS` simulado que apunta cada `writeDataPoint` y
    cabeceras `CF-Connecting-IP` y `User-Agent` sintéticas):
    - E01 `POST` con `{ "accion": "demostracion" }` y `Origin: https://synentor.com` → 204 y un punto
      `{ indexes: ['demostracion'], blobs: ['demostracion', '', '', ''], doubles: [1] }`.
    - E02 `GET` → 405 y ningún punto.
    - E03 cuerpo de 540 bytes (180 «€» en un campo) → 400 y ningún punto; cuerpo que no es JSON → 400.
    - E04 `{ "accion": "contacto-enviado" }` y `{ "accion": "otra" }` → 400 y ningún punto.
    - E05 los orígenes malos de L05 → 403 y ningún punto.
    - E06 `llegada-campana` con `{ fuente: 'LinkedIn', medio: 'social', campana: 'Nov 2026' }` → un punto con
      `blobs: ['llegada-campana', 'linkedin', 'social', 'otro']` (el Worker vuelve a sanear lo que llega).
    - E07 sin `EVENTOS` → 204 y nada más.
    - E08 `writeDataPoint` que lanza → 204.
    - E09 ningún punto contiene la IP ni el agente sintéticos (`JSON.stringify` de todos los puntos).
  - `pruebas/contacto.test.ts`: K01 un envío confirmado escribe un punto `contacto-enviado` (con `blobs` vacíos tras la
    acción); un envío que falla (502), un robot (403), datos malos (400) y el campo trampa (200 sin enviar) no escriben
    ninguno. K02 con `writeDataPoint` que lanza, la respuesta sigue siendo 200 `{ ok: true }`.
  - `pruebas/configuracion-worker.test.ts`: W01 el enlace `EVENTOS` con el conjunto `synentor_eventos` está en el nivel
    principal y no en `previews`.
- [ ] **Step 2: Run** `npx vitest run pruebas/eventos-reglas.test.ts pruebas/evento-worker.test.ts pruebas/contacto.test.ts pruebas/configuracion-worker.test.ts` → FAIL (no existen los módulos ni el enlace).
- [ ] **Step 3: Implement** lo de *Interfaces*. `atiendeEvento` comprueba en este orden: método, tamaño en bytes
  (`Content-Length` declarado y lo leído, como `worker/contacto.ts`), origen, JSON, acción; después `cuentaEvento`.
  `/api/contacto` llama a `cuentaEvento(env, 'contacto-enviado')` justo después de que `deps.enviaCorreo` resuelva.
  Respuestas con `Cache-Control: no-store`. En `worker/index.ts`, la ruta antes de `env.ASSETS.fetch` y el comentario de
  cabecera con la ruta nueva.
- [ ] **Step 4: Run** las mismas pruebas → PASS; después `npm run build` y `npm test` → todo en verde.
- [ ] **Step 5: Commit** los ficheros de la tarea (`git add` uno a uno).

### Task 2: La página sin Umami, con la baliza y las acciones (ordinaria)

**Files:**
- Create: `src/scripts/eventos.ts`, `pruebas/eventos-pagina.test.ts`
- Modify: `src/datos/analitica.ts` (fuera `UMAMI`; entra `CLOUDFLARE_WEB_ANALYTICS`), `src/layouts/Base.astro`,
  `src/components/inicio/Inicio.astro`, `src/scripts/configurador.ts`, `src/scripts/formulario.ts`, `public/_headers`
  (solo el comentario que nombra a Umami), `pruebas/paginas.test.ts`

**Interfaces:**
- Consumes: `ACCIONES_DE_LA_PAGINA`, `campanaDe`, `debeCargarBaliza`, `DOMINIOS_PRODUCCION` (Tarea 1).
- Produces:
  - `src/datos/analitica.ts`: `export const CLOUDFLARE_WEB_ANALYTICS = { testimonio: '' } as const;` (el «token» de la
    baliza que da el panel; vacío hasta que gerencia lo copie) con un comentario que diga que no es secreto.
  - `src/scripts/eventos.ts`: `export function enviaEvento(accion: Accion, campana?: Campana): void` (solo si
    `location.hostname` está en `DOMINIOS_PRODUCCION` y la acción está en `ACCIONES_DE_LA_PAGINA`; `navigator.sendBeacon`
    con un `Blob` `text/plain` y, si no existe o devuelve `false`, `fetch(..., { method: 'POST', keepalive: true })`; todo
    dentro de `try`/`catch`, sin lanzar nunca) y `export function iniciaEventos(doc: Document, loc: Location): void` (al
    cargar, `llegada-campana` si `campanaDe(new URL(loc.href))` no es `null`; un oyente de clics en `doc` que manda la
    acción de `data-evento` del elemento pulsado o de su antecesor más cercano).
  - Marcado: `data-evento="demostracion"` en los dos botones de `Inicio.astro` y `data-evento="pedido-calculadora"` en el
    enlace del configurador (sustituyen a `data-umami-event`).

- [ ] **Step 1: Write the failing tests**
  - `pruebas/eventos-pagina.test.ts` (`// @vitest-environment jsdom`; `sendBeacon` y `fetch` simulados; `location` de
    `https://synentor.com/es/`):
    - P01 un clic en un `<a data-evento="demostracion">` (y en un `<span>` dentro de él) manda un cuerpo
      `{"accion":"demostracion"}` a `/api/evento`.
    - P02 `enviaEvento('contacto-enviado')` y un clic con `data-evento="otra"` no mandan nada.
    - P03 `iniciaEventos` con `?utm_source=LinkedIn&utm_medium=social` manda una sola `llegada-campana` con
      `{ fuente: 'linkedin', medio: 'social', campana: 'ninguno' }`; sin `utm_*`, nada.
    - P04 en `synentor-web.glacestorm1969.workers.dev` no manda nada.
    - P05 `sendBeacon` que devuelve `false` → se usa `fetch` con `keepalive: true`; `fetch` que rechaza → no lanza.
  - `pruebas/paginas.test.ts`: P06 ninguna página de `dist/` contiene `umami` (sin distinguir mayúsculas) ni
    `cloudflareinsights` mientras el testimonio esté vacío; la portada en castellano tiene dos `data-evento="demostracion"`.
- [ ] **Step 2: Run** `npx vitest run pruebas/eventos-pagina.test.ts` → FAIL (no existe el módulo); `npm run build && npx vitest run pruebas/paginas.test.ts` → FAIL (Umami sigue).
- [ ] **Step 3: Implement**
  - `Base.astro`: fuera el `<script>` de Umami. Si `CLOUDFLARE_WEB_ANALYTICS.testimonio` no está vacío, un `<script is:inline>`
    que, solo si el `hostname` está en `DOMINIOS_PRODUCCION` (la lista se escribe en la página con `define:vars`), añade
    `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"…"}'>`. Y un
    `<script>` (empaquetado por Astro) que importa `iniciaEventos` y lo llama con `document` y `location`.
  - `configurador.ts`: `cuentaUso` llama a `enviaEvento('calculadora')`; el enlace del pedido lleva `data-evento`.
  - `formulario.ts`: fuera la llamada a Umami tras el envío (lo cuenta el Worker), y su comentario.
  - `public/_headers`: el comentario nombra la baliza de Cloudflare en lugar de Umami.
- [ ] **Step 4: Run** `npm run build && npm test` → todo en verde.
- [ ] **Step 5: Commit** los ficheros de la tarea.

### Task 3: Textos legales, documento del asesor y guías (ordinaria)

**Files:**
- Modify: `src/datos/legal.ts` (fuera el proveedor `umami`), `src/i18n/textos/{ca,es,en,fr,pt,it,de}.ts`,
  `docs/legal/REVISION-TEXTOS-LEGALES.md` (regenerado), `scripts/revision-legal.ts` (si nombra a Umami),
  `docs/PUESTA-EN-MARCHA.md`, `docs/SEO.md`, `docs/redes/LINKEDIN.md`
- Test: `pruebas/textos.test.ts` o `pruebas/legal-datos.test.ts` (el que ya compruebe los proveedores)

**Interfaces:**
- Consumes: nada de código; los nombres de las acciones (Tarea 1) para la guía.

- [ ] **Step 1: Write the failing tests**
  - T01 ningún fichero de `src/i18n/textos/` ni `src/datos/` contiene `Umami` (sin distinguir mayúsculas).
  - T02 en los siete idiomas, `pie.estadisticas`, la línea de estadísticas de la privacidad y la sección de estadísticas sin
    cookies de la política de cookies nombran `Cloudflare Web Analytics`.
  - T03 `PROVEEDORES` no tiene `umami` y los textos de los siete idiomas no tienen la clave `legal.proveedores.umami`.
- [ ] **Step 2: Run** `npx vitest run pruebas/textos.test.ts pruebas/legal-datos.test.ts` → FAIL.
- [ ] **Step 3: Implement.** En castellano, el texto exacto (los otros seis idiomas lo traducen con el mismo sentido y el
  mismo registro que el resto de su fichero):
  - `pie.estadisticas`: `Estadísticas de visitas sin cookies (Cloudflare Web Analytics).`
  - la línea de la privacidad: `Estadísticas de visitas (Cloudflare Web Analytics) y un recuento propio de acciones: cuántas veces se pide una demostración, se usa la calculadora, se envía una selección o el formulario, y desde qué campaña se llega. Sin cookies y sin datos que te identifiquen: solo cifras de conjunto, como las páginas vistas, el país o el tipo de navegador. El recuento propio no guarda la IP ni el navegador.`
  - la sección «Estadísticas sin cookies» de la política de cookies: `Contamos las visitas con Cloudflare Web Analytics y las acciones con un recuento propio. Ninguno usa cookies ni guarda datos que te identifiquen.`
  - `legal.proveedores.cloudflare.para`: `Alojamiento de la web, comprobación antirrobot del formulario, prueba de los consentimientos, registros técnicos, estadísticas de visitas sin cookies y recuento de acciones.`
  - fuera `legal.proveedores.umami` en los siete idiomas.
  - `npm run revision-legal` para regenerar el documento del asesor.
  - `docs/PUESTA-EN-MARCHA.md`: la parte de Umami pasa a «Estadísticas: Cloudflare Web Analytics y el contador propio»:
    activar Web Analytics para synentor.com con la baliza **manual** (la configuración automática, apagada), copiar el
    testimonio de la baliza a `src/datos/analitica.ts`, y que Analytics Engine se activa en el mismo panel si lo pide (el
    conjunto `synentor_eventos` se crea solo con el primer punto). De Umami queda una línea: sustituido porque su API es de pago.
  - `docs/SEO.md` y `docs/redes/LINKEDIN.md`: los enlaces con `utm_*` los cuenta el contador propio (`llegada-campana`),
    no Umami.
- [ ] **Step 4: Run** `npm run build && npm test` → todo en verde.
- [ ] **Step 5: Commit** los ficheros de la tarea.
