# Web pública de Synentor — plan de trabajo

> **Para quien lo ejecute:** usar superpowers:executing-plans (nativo, recomendado) o superpowers:subagent-driven-development.
> Los pasos van con casillas (`- [ ]`).

**Objetivo:** construir la web pública de Synentor (Inicio, Servicios, Precios con configurador, Contacto y páginas
legales) en siete idiomas, estática, servida por Cloudflare Workers, con un formulario que envía de verdad.

**Arquitectura:** Astro genera páginas estáticas en `dist/`, una por idioma y página, con rutas traducidas. Un Worker
(`worker/index.ts`) atiende solo `/` (idioma de entrada) y `/api/contacto` (formulario). Todo lo demás lo sirve el
almacén de ficheros estáticos de Workers. Los precios y las reglas viven en un único módulo puro (`src/lib/precios/`), que
usan a la vez las tablas, el configurador y las pruebas.

**Tecnología:**
- Astro (última versión estable de la serie 5, fijada exacta en `package.json`), TypeScript y Vitest.
- Wrangler para la configuración del Worker y Playwright para la prueba en el navegador.
- Sin React: el configurador es TypeScript sin framework, en una isla de Astro.

**Diseño:** `docs/superpowers/specs/2026-11-14-web-synentor-design.md` (aprobado por gerencia el 14/11/2026).

## Restricciones globales

- **Textos**: todos en el idioma de su página. Los mensajes de la casa, las notas de los cambios guardados, los comentarios
  y la documentación, en castellano.
- **Honestidad** (diseño §5 y §6): ningún texto anuncia lo de la lista de §6. Prohibidas expresiones como «único», «el
  mejor», «100 % local», testimonios o cifras de clientes. «En desarrollo inminente» solo donde §7.0 lo dice.
- **Datos de contacto**: solo los de la empresa (`src/datos/empresa.ts`). Ningún nombre de persona en el repositorio.
- **Secretos**: el repositorio es público. Las claves de Turnstile y del envío de correo son secretos de Cloudflare
  (`TURNSTILE_SECRET`, `RESEND_API_KEY`). En el código solo la clave pública del widget (`PUBLIC_TURNSTILE_SITEKEY`), y
  como variable de construcción.
- **Precios**: un solo origen, `src/lib/precios/tarifa.ts`. Ninguna cifra de precio escrita en una página o en un texto.
- **Marca**:
  - colores `#050918`, `#FED44C`, `#FBBF24`, `#FB973A`, `#17233F`, `#8B6500`, `#3F7DFF`, `#A443EE`;
  - tipografía `Arial, Helvetica, sans-serif`;
  - logotipos raster de 325 px de ancho como mucho.
- **Idiomas**: `ca` (principal), `es`, `en`, `fr`, `pt`, `it` y `de`. Todos los diccionarios con las mismas claves.
- **Del kit de marca solo entran** los ficheros de §15.5 del diseño.

## Lo que más puede fallar (y su prueba)

1. **Un precio que no casa con el diseño** (redondeo, mensual, IGI, empresa adicional): las pruebas de la tarea 2, con los
   ejemplos exactos de §7.
2. **Un visitante con un idioma raro en el navegador** («zh-CN», «es-419», cabecera vacía o mal formada) debe caer en un
   idioma válido: las pruebas de `elegirIdioma` (tarea 3).
3. **Un formulario con datos malos** (correo sin «@», mensaje de 50 KB, sin consentimiento, campo trampa relleno,
   Turnstile caducado): siempre un error claro y nunca «enviado». Pruebas de la tarea 5.
4. **El proveedor de correo caído o con la clave mal**: la respuesta es error con el correo de la empresa, nunca éxito
   (tarea 5).
5. **Una página con un texto prohibido o un dato de persona** que se cuela al traducir: la comprobación del contenido
   construido (tarea 6), sobre todo `dist/`.

---

### Tarea 1: Base del proyecto, marca, datos de la empresa y CI (ordinaria)

**Ficheros:**
- Crear: `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `wrangler.jsonc`, `.gitignore`,
  `.nvmrc` (`22`), `CLAUDE.md`, `src/datos/empresa.ts`, `src/estilos/marca.css`, `src/layouts/Base.astro`,
  `src/pages/index.astro` (provisional, sustituida en la tarea 3), `public/marca/*` (del kit),
  `.github/workflows/ci.yml`.
- Prueba: `pruebas/empresa.test.ts`.

**Interfaces:**
- Produce `EMPRESA` en `src/datos/empresa.ts`:
  - `razonSocial: 'SYNENTOR, S.L.U.'`, `estado: 'en constitución'`, `nrt: null` (se muestra «en trámite»);
  - `direccion: { linea, codigoPostal, localidad, pais }`, con la dirección que dio gerencia el 14/11/2026;
  - `correo: 'administracion@synentor.com'`;
  - `telefono: { enlace: '+376692069', texto: '+376 692 069' }`;
  - `dominio: 'https://synentor.com'`.
- Produce `src/layouts/Base.astro`, con las propiedades `{ idioma, titulo, descripcion, ruta }`: cabecera, pie y metadatos.
  La tarea 3 añade el selector y `hreflang`.

- [ ] **Paso 1: escribir la prueba de los datos de la empresa.** `pruebas/empresa.test.ts`:
  - `EMPRESA.correo` termina en `@synentor.com`;
  - `EMPRESA.telefono.enlace` es `+376692069`;
  - ningún campo contiene «gmail», «hotmail» u «outlook».
- [ ] **Paso 2:** `npx vitest run pruebas/empresa.test.ts`. Esperado: FALLA (no existe el módulo).
- [ ] **Paso 3: crear el proyecto Astro a mano**, sin plantillas descargadas.
  - Salida estática a `dist/` y `trailingSlash: 'always'`.
  - `wrangler.jsonc`:
    - `main: "worker/index.ts"`;
    - `compatibility_date` de hoy;
    - `assets: { directory: "./dist", binding: "ASSETS", run_worker_first: ["/", "/api/*"] }`;
    - `vars: { PUBLIC_TURNSTILE_SITEKEY: "" }`.
  - Un `worker/index.ts` mínimo que devuelve `env.ASSETS.fetch(request)`.
  - `src/datos/empresa.ts` con los valores de arriba.
  - `marca.css` con los colores como variables.
  - `CLAUDE.md` del repositorio: las restricciones globales de este plan, en castellano.
- [ ] **Paso 4: copiar del kit a `public/marca/`**: los logotipos `or-*` y `alternatiu-*` en PNG, `simbol-cercle-perfecte.png`,
  `icona-32.png`, `icona-180.png`, `icona-512.png`, `portada.png` y `tokens-marca.json`. Nada más.
- [ ] **Paso 5:** `npx vitest run` y `npx astro build`. Esperado: la prueba PASA y `dist/index.html` existe.
- [ ] **Paso 6: CI** (`.github/workflows/ci.yml`, Node 22): `npm ci`, `npm test`, `npm run build` y
  `npm run comprueba-contenido` (este último lo crea la tarea 6; hasta entonces, el paso no existe).
- [ ] **Paso 7: guardar el cambio.** `git add` fichero a fichero.

### Tarea 2: Motor de precios (sensible: importes)

**Ficheros:**
- Crear: `src/lib/precios/tarifa.ts` (los datos), `src/lib/precios/calcula.ts` (el cálculo) y
  `src/lib/precios/disponibilidad.ts` (la tabla por país).
- Prueba: `pruebas/precios.test.ts`.

**Interfaces:**
- Produce los tipos:
  - `Pais = 'AD' | 'ES' | 'PT' | 'FR' | 'IT' | 'DE' | 'OTRO'`;
  - `ModuloId = 'compras' | 'ventas_crm' | 'rrhh' | 'fiscal' | 'juridico' | 'pbc' | 'productos' | 'tpv'`;
  - `Estado = 'disponible' | 'inminente' | 'a_medida'`.
- Produce `TARIFA` (todos los importes en euros, sin impuestos, por mes y con pago anual):
  - **Base**: 149, con 5 usuarios incluidos.
  - **Usuario adicional**: 15.
  - **Empresa adicional**: 39, y sus módulos al 0,5.
  - **Módulos**:

    | Módulo | Cuota | Requiere |
    |---|---|---|
    | compras | 69 | — |
    | ventas_crm | 59 | — |
    | rrhh | 59, más 18 por persona | — |
    | fiscal | 39 | — |
    | juridico | 79 | rrhh |
    | pbc | 49 | juridico |
    | productos | 39 | compras |
    | tpv | 39 | — |

  - **Modalidad B**: 50 al mes por instalación.
  - **Recargo por pago mensual**: 0,20.
  - **IGI de Andorra**: 0,045.
  - **Implantación**: 720 la jornada, mínimo 2.
  - **Paquete «Synentor Completo»**: 469 al mes. Incluye `['compras', 'ventas_crm', 'fiscal']`, la Base y MUV, con 10
    usuarios. Usuario adicional del paquete: 45.
  - **MUV**:
    - gratis hasta 5 usuarios;
    - del 6.º al 25.º, 39 por usuario;
    - del 26.º al 100.º, 32 por usuario;
    - más de 100, a medida;
    - equipos 890, 3.200 y 5.900;
    - implantación 720, de 1 a 4 jornadas.
- Produce `estadoModulo(pais: Pais, modulo: ModuloId | 'base' | 'muv'): Estado`, con la tabla de §7.0 del diseño.
  Para `OTRO`, lo mismo que PT/FR/IT/DE.
- Produce `resuelveDependencias(modulos: ModuloId[]): { modulos: ModuloId[]; anadidos: ModuloId[] }`.
- Produce `calcula(sel: Seleccion): Presupuesto`:
  - `Seleccion`:
    - `pais`;
    - `modalidad: 'A' | 'B'`;
    - `pago: 'anual' | 'mensual'`;
    - `paquete: boolean`;
    - `empresas: { modulos: ModuloId[]; personas: number }[]` (la primera es la principal);
    - `usuarios: number`;
    - `muvUsuarios: number` (0 = sin MUV).
  - `Presupuesto`:
    - `lineas: { clave: string; importe: number }[]`;
    - `cuotaMensual: number`;
    - `igi: number | null`;
    - `totalMensual: number`;
    - `implantacionDesde: number` (1.440);
    - `anadidos: ModuloId[]`;
    - `avisos: string[]` (claves de texto);
    - `requierePropuesta: boolean`.
  - Todo en céntimos enteros por dentro; se devuelven euros con 2 decimales.

- [ ] **Paso 1: escribir las pruebas** (`pruebas/precios.test.ts`), con los valores exactos del diseño:
  - **ejemplo de §7.1**: `{ pais: 'AD', modalidad: 'A', pago: 'anual', paquete: false, empresas: [{ modulos: ['compras', 'rrhh', 'fiscal', 'productos', 'tpv'], personas: 20 }], usuarios: 5, muvUsuarios: 0 }`
    → `cuotaMensual` 754, `igi` 33,93, `totalMensual` 787,93;
  - **paquete con 10 usuarios** (`paquete: true`, `empresas: [{ modulos: [], personas: 0 }]`, `usuarios: 10`) → 469;
    con 12 usuarios → 559;
  - **lo mismo que el paquete pero por separado**, con 10 usuarios y `muvUsuarios: 10` → 586;
  - **dependencias**:
    - `resuelveDependencias(['pbc'])` → `{ modulos: ['pbc', 'juridico', 'rrhh'], anadidos: ['juridico', 'rrhh'] }` (en
      cualquier orden);
    - `['productos']` añade `compras`;
  - **empresa adicional**: dos empresas, la segunda con `['compras']` y `personas: 3`. La segunda suma 39 + 34,50 + 54
    (las personas no tienen la rebaja). La primera, con solo la Base: 149. Total: 276,50;
  - **pago mensual**: el ejemplo de §7.1 con `pago: 'mensual'` → `cuotaMensual` 904,80;
  - **MUV sin paquete**:
    - 30 usuarios → 940;
    - 5 → 0;
    - 101 → `requierePropuesta` true;
  - **modalidad B** suma 50, y `requierePropuesta` true;
  - **España**: `rrhh` está en desarrollo inminente → `requierePropuesta` true, `igi` null y el aviso
    `impuestos-no-incluidos`;
  - **tpv en dos empresas** → el aviso `cashdro-una-empresa`;
  - **más de 10 empresas** → `requierePropuesta` true;
  - **personas o usuarios negativos o con decimales** → se tratan como 0 o se redondean hacia abajo, nunca `NaN`.
- [ ] **Paso 2:** `npx vitest run pruebas/precios.test.ts`. Esperado: FALLA.
- [ ] **Paso 3: implementar** `tarifa.ts`, `disponibilidad.ts` y `calcula.ts` con las firmas de arriba.
  - Con paquete, la empresa principal no paga Base, compras, ventas_crm ni fiscal, y MUV va incluido con los mismos usuarios.
  - Los demás módulos de la principal, a su precio.
- [ ] **Paso 4:** `npx vitest run pruebas/precios.test.ts`. Esperado: PASA.
- [ ] **Paso 5: guardar el cambio.**

### Tarea 3: Idiomas, rutas, selector y el Worker de entrada (ordinaria)

**Ficheros:**
- Crear:
  - `src/i18n/idiomas.ts`: la lista, los nombres propios de cada idioma y las rutas traducidas;
  - `src/i18n/textos/ca.ts` y `es.ts`: los textos completos de la web;
  - `src/i18n/t.ts`;
  - `src/components/SelectorIdioma.astro` y `src/components/FranjaIdioma.astro`;
  - `worker/idioma.ts`.
- Modificar: `worker/index.ts` y `src/layouts/Base.astro`.
- Prueba: `pruebas/idioma.test.ts` y `pruebas/textos.test.ts`.

**Interfaces:**
- Produce `IDIOMAS = ['ca', 'es', 'en', 'fr', 'pt', 'it', 'de'] as const` y `type Idioma`.
- Produce `RUTAS: Record<Pagina, Record<Idioma, string>>`, con `Pagina = 'inicio' | 'servicios' | 'precios' | 'contacto' | 'aviso-legal' | 'privacidad' | 'cookies'`.
  Por ejemplo, `servicios: { ca: 'serveis', es: 'servicios', en: 'services', fr: 'services', pt: 'servicos', it: 'servizi', de: 'leistungen' }`.
- Produce `ruta(pagina: Pagina, idioma: Idioma): string`: `/ca/serveis/`, por ejemplo.
- Produce `t(idioma: Idioma, clave: string): string`. Si falta la clave, lanza un error al construir.
- Produce `elegirIdioma(e: { cookie: string | null; acceptLanguage: string | null; pais: string | null }): Idioma`. El
  orden:
  1. la cookie `lang` válida;
  2. el primer idioma válido de `Accept-Language`, por su peso `q`, comparando solo la parte principal (`es-419` → `es`);
  3. el país (`AD` → `ca`; `ES` → `es`; `FR` → `fr`; `PT` y `BR` → `pt`; `IT` → `it`; `DE`, `AT` y `CH` → `de`);
  4. `ca`.
- Produce `paisConfigurador(pais: string | null): Pais` (AD, ES, PT, FR, IT o DE; si no, `OTRO`). La tarea 4 lo recibe por
  `/api/pais` (ver Paso 3).

- [ ] **Paso 1: escribir las pruebas.**
  - `pruebas/idioma.test.ts`:
    - cookie `lang=de` → `de`;
    - `Accept-Language: es-419,es;q=0.9,en;q=0.8` → `es`;
    - `zh-CN` con país `AD` → `ca`;
    - cabecera vacía y país `PT` → `pt`;
    - una cabecera basura `;;q=x` → `ca`;
    - `paisConfigurador('BR')` → `OTRO`.
  - `pruebas/textos.test.ts`: los diccionarios presentes tienen exactamente las mismas claves que `ca`, y ningún valor
    está vacío.
- [ ] **Paso 2:** `npx vitest run pruebas/idioma.test.ts pruebas/textos.test.ts`. Esperado: FALLA.
- [ ] **Paso 3: implementar.**
  - **El Worker**, en `/`, responde 302 a `ruta('inicio', idioma)` con `Vary: Accept-Language, Cookie`.
  - **`/api/pais`** devuelve `{"pais": paisConfigurador(request.cf?.country)}` con `Cache-Control: no-store`. No se guarda
    nada.
  - **`Base.astro`**:
    - `<html lang>`;
    - `hreflang` de los siete idiomas y `x-default` (a `/ca/`);
    - `canonical`;
    - el selector, que guarda la cookie `lang` (un año, `SameSite=Lax`, `Path=/`) y lleva a la misma página en el otro
      idioma;
    - la franja, que sugiere una vez el idioma del navegador si es otro y se recuerda en `localStorage` dentro de
      try/catch.
  - **Los textos de `ca` y `es`**, completos para todas las páginas de la tarea 4. Los demás idiomas, en la tarea 6.
- [ ] **Paso 4:** `npx vitest run`. Esperado: PASA.
- [ ] **Paso 5: guardar el cambio.**

### Tarea 4: Las páginas y el configurador (ordinaria)

**Ficheros:**
- Crear:
  - `src/pages/[idioma]/[...pagina].astro`, que genera con `getStaticPaths` los 7 idiomas × 7 páginas;
  - `src/components/inicio/*.astro`, `src/components/servicios/*.astro`, `src/components/precios/*.astro`,
    `src/components/contacto/Formulario.astro` y `src/components/legal/*.astro`;
  - `src/scripts/configurador.ts`;
  - `src/datos/consultoria.json`: una copia fechada del catálogo del ERP, solo con los campos `id`, `nombre`, `categoria`,
    `precio.micro.min` y `cuota_mes.micro`, generada con `scripts/copia-catalogo.mjs`.
- Prueba: `pruebas/configurador.test.ts` y `pruebas/paginas.test.ts`.

**Interfaces:**
- Consume `calcula`, `estadoModulo`, `resuelveDependencias` y `TARIFA` (tarea 2), y `t`, `ruta` y `RUTAS` (tarea 3).
- Produce `montaConfigurador(raiz: HTMLElement, idioma: Idioma, paisInicial: Pais): void`. Pinta y recalcula al cambiar
  cualquier control. La lógica es `calcula`: aquí no hay ninguna cuenta.

- [ ] **Paso 1: escribir las pruebas.**
  - `pruebas/configurador.test.ts` (jsdom):
    - marcar `pbc` marca y bloquea `juridico` y `rrhh`, y enseña por qué;
    - con `pais: 'ES'`, `rrhh` lleva la etiqueta «En desarrollo inminente» y el botón dice «Pide tu propuesta»;
    - el total que se ve es el `totalMensual` de `calcula` con los mismos datos.
  - `pruebas/paginas.test.ts` (sobre `dist/`, tras construir):
    - existen las 49 páginas (7 idiomas × 7 páginas);
    - cada una tiene `<title>`, `meta description`, `canonical` y 8 `hreflang`.
- [ ] **Paso 2:** ejecutar las pruebas. Esperado: FALLA.
- [ ] **Paso 3: construir las páginas** según §8 del diseño:
  - **Inicio**: la portada con el lema; el problema; los tres pilares; RRHH; multiempresa; la IA privada; «nació en una
    empresa real»; el precio de entrada; la llamada final.
  - **Servicios**: los módulos con su estado por país, MUV, la consultoría por categorías con «desde X €» y la cuota de
    `consultoria.json`, y la implantación.
  - **Precios**:
    - el configurador, que pide el país inicial a `/api/pais` y, si falla, usa `OTRO`;
    - las tablas, que salen de `TARIFA`;
    - las condiciones y el soporte (§7.0);
    - las preguntas frecuentes;
    - la comparación sin nombres de competidores (§15.3), con la fecha de consulta.
  - **Contacto**: el formulario (el envío es de la tarea 5) y los datos de `EMPRESA`.
  - **Legales**: el borrador según §3 del diseño, sin artículos citados salvo la LQPD y el RGPD.
  - **Ilustraciones**: solo SVG o CSS abstractos, nunca capturas.
- [ ] **Paso 4:** `npm run build` y `npx vitest run`. Esperado: PASA.
- [ ] **Paso 5: mirar Inicio y Precios** en `ca` y en `es`, en el navegador, a 1366 px y a 390 px de ancho (capturas a
  `deviceScaleFactor: 1`). Nada se sale ni se corta.
- [ ] **Paso 6: guardar el cambio.**

### Tarea 5: El formulario de contacto (sensible: datos de personas)

**Ficheros:**
- Crear: `worker/contacto.ts` y `worker/correo.ts`.
- Modificar: `worker/index.ts` y `src/components/contacto/Formulario.astro`.
- Prueba: `pruebas/contacto.test.ts`.

**Interfaces:**
- Produce `atiendeContacto(request: Request, env: Env, deps?: { verificaTurnstile; enviaCorreo }): Promise<Response>`.
  Responde JSON `{ ok: true }` o `{ ok: false, error: 'datos' | 'robot' | 'envio' | 'metodo' }`, con 200, 400, 403, 405 y
  502.
- Produce `enviaCorreo(env: Env, m: Mensaje): Promise<void>` (Resend: `POST https://api.resend.com/emails`, con
  `Authorization: Bearer ${env.RESEND_API_KEY}`).
  - Remitente: `web@synentor.com`.
  - Destinatario: `EMPRESA.correo`.
  - `reply_to`: el correo del visitante.
  - Lanza un error si la respuesta no es 2xx.
- Produce `verificaTurnstile(secreto: string, token: string, ip: string | null): Promise<boolean>` (`POST https://challenges.cloudflare.com/turnstile/v0/siteverify`).
- `Mensaje = { nombre; correo; empresa?; telefono?; asunto; mensaje; idioma }`.

- [ ] **Paso 1: escribir las pruebas** (`pruebas/contacto.test.ts`), con dependencias simuladas:
  - `GET` → 405;
  - sin consentimiento → 400 `datos`;
  - correo sin «@» → 400 `datos`;
  - mensaje de más de 5.000 caracteres o cuerpo de más de 20 KB → 400 `datos`;
  - campo trampa `web` relleno → 200 `{ ok: true }` **sin enviar** (al robot no se le avisa);
  - Turnstile falso → 403 `robot`;
  - el envío lanza un error → 502 `envio`;
  - todo bien → 200, `enviaCorreo` llamado una vez con el destinatario de la empresa y `reply_to` del visitante;
  - **ninguna respuesta** contiene los datos enviados;
  - **ningún `console.log`** escribe los datos enviados.
- [ ] **Paso 2:** `npx vitest run pruebas/contacto.test.ts`. Esperado: FALLA.
- [ ] **Paso 3: implementar** `contacto.ts`, `correo.ts` y la ruta `POST /api/contacto` en `worker/index.ts`.
  - **El formulario**:
    - widget de Turnstile con `PUBLIC_TURNSTILE_SITEKEY`;
    - envío con `fetch`;
    - estado `role="status"`;
    - «Enviat» **solo** con `ok: true`;
    - con error, el texto del error y el correo de la empresa;
    - el botón se desactiva mientras se envía;
    - sin JavaScript, el formulario remite al correo de la empresa.
  - **El mensaje no se guarda en ninguna parte.**
- [ ] **Paso 4:** `npx vitest run`. Esperado: PASA.
- [ ] **Paso 5: guardar el cambio.**

### Tarea 6: Traducciones, calidad y puesta en marcha (ordinaria)

**Ficheros:**
- Crear:
  - `src/i18n/textos/en.ts`, `fr.ts`, `pt.ts`, `it.ts` y `de.ts`;
  - `public/_redirects`, `public/robots.txt` y `src/pages/sitemap.xml.ts`;
  - `scripts/comprueba-contenido.mjs`;
  - `pruebas/navegador.spec.ts` (Playwright);
  - `docs/PUESTA-EN-MARCHA.md`.
- Modificar: `package.json` (los scripts `comprueba-contenido` y `prueba-navegador`) y `.github/workflows/ci.yml`.

**Interfaces:**
- Consume todo lo anterior.

- [ ] **Paso 1: escribir la comprobación y la prueba del navegador.**
  - `scripts/comprueba-contenido.mjs` lee `dist/**/*.html` y sale con 1 si encuentra alguna de estas cosas:
    - una expresión prohibida de §6, en sus siete idiomas («100 % local», «únic», «único», «el millor», «el mejor»,
      «the best», «le meilleur», «o melhor», «il migliore», «der beste», «SII», «NIIF», «IFRS», «blockchain»,
      «marketplace»…);
    - un correo distinto de `@synentor.com`;
    - un `tel:` distinto del de `EMPRESA`;
    - una cifra de precio que no sale de `TARIFA` (cada «NNN €» de las páginas debe estar entre los importes de `TARIFA`, de
      `consultoria.json` o de los ejemplos calculados).

    Tiene un control positivo: una página trampa con «100 % local» tiene que dar 1.
  - `pruebas/navegador.spec.ts`:
    - las siete portadas cargan sin errores de consola;
    - el configurador calcula 754 € con el ejemplo de §7.1;
    - el formulario sin Turnstile no dice «enviado».
- [ ] **Paso 2:** `npm run comprueba-contenido`. Esperado: FALLA (faltan los idiomas).
- [ ] **Paso 3: escribir los textos de los cinco idiomas.**
  - Traducción fiel del catalán y del castellano, sin añadir promesas.
  - Para la portada, una frase de marca natural en cada idioma.
- [ ] **Paso 4: preparar lo demás.**
  - **`_redirects`** con 301 de la web actual a la nueva:
    - `/rrhh-espana`, `/payroll-preflight`, `/pymes`, `/asesorias-laborales` y `/casos-de-uso-rrhh` → `/es/servicios/`;
    - `/precios`, `/pricing` y `/paquetes` → `/es/precios/`;
    - `/contact` y `/demo` → `/es/contacto/`;
    - `/privacy` → `/es/privacidad/`;
    - `/terms` → `/es/aviso-legal/`;
    - `/cookies` → `/es/cookies/`;
    - cualquier otra ruta de la web antigua → `/`.
  - **`robots.txt` y `sitemap.xml`** con las 49 direcciones.
  - **`PUESTA-EN-MARCHA.md`**, una orden por bloque, según §14 del diseño:
    - DNS de IONOS a Cloudflare, conservando todos los registros;
    - conectar el repositorio para desplegar desde `main`;
    - Turnstile;
    - Resend y sus registros de DNS (SPF y DKIM), sin tocar los MX;
    - los secretos;
    - la prueba de punta a punta;
    - synentor.es y synentor.eu, con redirección 301 a synentor.com;
    - Cloudflare Web Analytics.
- [ ] **Paso 5: comprobar.** `npm run build && npm run comprueba-contenido && npm test && npm run prueba-navegador`.
  Esperado: todo PASA. Contraste AA comprobado en Inicio y Precios.
- [ ] **Paso 6: guardar el cambio, subir y abrir la propuesta de cambios** (borrador) contra `main`.
