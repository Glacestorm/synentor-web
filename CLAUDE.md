# CLAUDE.md — web pública de Synentor

Contexto para Claude Code. Léelo antes de cualquier tarea.

## Idioma

- **Todo lo que lee el usuario va en castellano**: respuestas, avisos, resúmenes, notas de los cambios guardados, texto de
  las propuestas de cambios y la documentación de este repositorio. Los nombres de ficheros, órdenes y código se dejan como
  están.
- Los textos de la web van en el idioma de cada página (ca, es, en, fr, pt, it, de).

## Qué es

La web pública de Synentor (synentor.com): consultoría de IA y de ventas con software propio (Synentor Suite ERP-CRM y
MUV). Astro genera páginas estáticas en `dist/`; un Worker de Cloudflare (`worker/index.ts`) atiende solo `/` (idioma de
entrada) y `/api/*` (formulario); lo demás lo sirve el almacén de ficheros estáticos de Workers (`wrangler.jsonc`).

- Diseño aprobado por gerencia: `docs/superpowers/specs/2026-11-14-web-synentor-design.md`.
- Plan de trabajo: `docs/superpowers/plans/2026-11-14-web-synentor.md`.
- Estudio de precios de mercado: `docs/estudio-precios-mercado-20261114.md`.

## Reglas que no se negocian

- **Honestidad**: ningún texto anuncia algo que el producto no hace hoy (lista de lo que NO se anuncia en el §6 del diseño).
  Nada de «único», «el mejor», «100 % local», testimonios, cifras ni logotipos de clientes inventados, ni capturas falsas.
  Lo casi listo se dice «en desarrollo inminente y adaptación a medida del cliente», solo donde el §7.0 lo dice.
- **Datos de contacto**: solo los de la empresa (`src/datos/empresa.ts`). Ningún nombre ni dato de una persona en el
  repositorio.
- **El repositorio es público**: ningún secreto. `TURNSTILE_SECRET` y `RESEND_API_KEY` son secretos de Cloudflare
  (`wrangler secret put`); en el código solo la clave pública del widget.
- **Precios**: un único origen, `src/lib/precios/tarifa.ts`. Ninguna cifra de precio escrita a mano en una página o en un
  texto. Un cambio de tarifa es una decisión de gerencia.
- **Formulario**: «enviado» solo si el proveedor del correo lo confirma. Nunca un éxito falso. El mensaje no se guarda.
  El correo lleva una marca fija para la máquina que lo lea (formato `contacto/1`: la cabecera `X-Synentor-Formulario` y un
  bloque de seis claves al principio del cuerpo; `docs/CORREO-DEL-FORMULARIO.md`). Si el bloque cambia de forma, cambia la
  versión; y cada valor del bloque ocupa una sola línea, escriba lo que escriba la persona.
- **Marca**: colores y tipografía solo en `src/estilos/marca.css`. Del kit de marca solo entran los ficheros de
  `public/marca/` (logotipos, símbolo, iconos, portada y colores): nada de firmas ni papelería, que llevan datos de una
  persona. Los logotipos son raster: como mucho 325 px de ancho en pantalla.

## Órdenes

- Instalar: `npm ci` (el `.npmrc` lleva `legacy-peer-deps=true`: npm 10 se rompe resolviendo las dependencias de vitest 4
  con «Cannot read properties of null (reading 'edgesOut')»).
- Construir: `npm run build`. Pruebas: `npm test`, **después de construir** (`pruebas/paginas.test.ts` lee `dist/`; la CI
  construye antes de probar). Probar el Worker en local: `npm run preview`.
- Versiones fijadas exactas en `package.json`; Node 22.
