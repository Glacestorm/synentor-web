# Puesta en marcha de la web nueva

Guía para gerencia: pasar synentor.com de la web actual a esta, sin perder el correo. Diseño, §14.

Las órdenes se ejecutan en un ordenador con el repositorio clonado y Node 22, desde la carpeta del repositorio. Cada bloque
de código es una sola orden. Los menús del panel de Cloudflare cambian de nombre a menudo: si alguno no está donde dice la
guía, se busca por su nombre en el buscador del panel.

> **Lo que no se toca nunca**: los registros MX y los del correo de IONOS. La web cambia, el correo no.

## 0. Antes de empezar

1. En IONOS → Dominios → synentor.com → DNS: haz una captura o copia de **todos** los registros (A, AAAA, CNAME, MX, TXT,
   SRV). Es la lista con la que se comprueba el paso 1.
2. **Decidido (gerencia, 14/11/2026): synentor.com es solo la página web.** Las pantallas del ERP que hoy sirve también
   (`/auth`, `/obelixia-admin`…) dejan de estar en ese dominio y dan «no existe». Nadie entra al ERP por ahí: cada
   instalación del ERP tiene su propia dirección.

### Los registros de synentor.com (captura de IONOS del 14/11/2026: 14 registros)

| Registro | Qué es | En Cloudflare |
|---|---|---|
| MX `@` → `synentor-com.mail.protection.outlook.com` | El correo (Microsoft 365) | **Conservar**, «Solo DNS» |
| TXT `@` `v=spf1 include:spf.protection.outlook.com …` | SPF del correo | **Conservar** (Resend va en `send`, no cambia este) |
| TXT `_dmarc` `v=DMARC1; p=none; …` | DMARC del correo | **Conservar** |
| CNAME `selector1._domainkey` y `selector2._domainkey` | DKIM de Microsoft 365 | **Conservar**, «Solo DNS» |
| CNAME `autodiscover` → `autodiscover.outlook.com` | Configuración automática de Outlook | **Conservar**, «Solo DNS» |
| CNAME `enterpriseenrollment` y `enterpriseregistration` | Alta de equipos en Microsoft 365 | **Conservar**, «Solo DNS» |
| TXT `@` `v=verifydomain MS=…` | Verificación del dominio en Microsoft | **Conservar** |
| A `@` y A `www` → `185.158.133.1` | La web actual en Lovable | Conservar **hasta el paso 6**; entonces se quitan |
| TXT `_lovable` y `_lovable.www` | Verificación de Lovable | Conservar hasta el paso 6; entonces se quitan |
| CNAME `_domainconnect` → `_domainconnect.ionos.com` | Configuración automática de IONOS | No hace falta en Cloudflare: se puede no copiar |

Los valores largos (SPF, DMARC, DKIM) salen cortados en la pantalla de IONOS: se comparan enteros en Cloudflare, abriendo
cada registro, nunca a partir de la captura.

## 1. Cloudflare y los DNS

1. Crea la cuenta de Cloudflare (plan gratuito) y añade el sitio **synentor.com**.
2. Cloudflare lee los registros que hay. Compáralos uno a uno con la lista del paso 0 y añade a mano los que falten,
   **sobre todo MX y TXT** (SPF, DKIM, DMARC).
3. Los registros del correo van en **«Solo DNS»** (nube gris), nunca con el proxy.
4. En IONOS, cambia los servidores de nombres de synentor.com por los dos que te da Cloudflare.
5. Espera a que Cloudflare diga que el sitio está activo (de minutos a 24 horas). Comprueba que el correo sigue llegando.

## 2. La web en Cloudflare Workers

1. En Cloudflare → Workers y Pages → Crear → importar un repositorio de GitHub: `Glacestorm/synentor-web`, rama `main`.
2. Orden de construcción: `npm ci && npm run build`. Orden de despliegue: `npx wrangler deploy`.
3. No hace falta ninguna variable de construcción: la clave pública del widget de Turnstile ya está en el código
   (`src/datos/turnstile.ts`, paso 3).
4. Prueba la web en la dirección `*.workers.dev` que da Cloudflare. Todavía no toca synentor.com.

## 3. Turnstile (el «no soy un robot» del formulario)

1. Cloudflare → Turnstile → añadir un widget «Web Synentor» para `synentor.com`, `www.synentor.com` y la dirección de
   pruebas `synentor-web.glacestorm1969.workers.dev`, modo «gestionado» y sin autorización previa. **Hecho el 14/11/2026.**
2. La **clave del sitio** es pública y está en `src/datos/turnstile.ts`. Si se cambia el widget, se cambia ahí.
3. Guarda la **clave secreta** como secreto del Worker. Nunca en el repositorio ni en un chat. Desde el panel: Workers y
   Pages → `synentor-web` → Configuración → Variables y secretos → Añadir → tipo «Secreto», nombre `TURNSTILE_SECRET`.
   O desde la terminal (pide el valor sin enseñarlo):

```bash
npx wrangler secret put TURNSTILE_SECRET
```

## 4. Resend (el envío del correo del formulario) — hecho el 15/11/2026

1. Crea la cuenta de Resend y añade el dominio `synentor.com`.
2. Resend pide unos registros en Cloudflare. Con la configuración automática de Resend (la que se usó el 15/11/2026), los
   pone él mismo: el DKIM (TXT `resend._domainkey`) y los CNAME `send` y `rsend` → `forge.rmta.net`. Si se añaden a mano,
   Resend da un DKIM y, en el subdominio `send`, un MX y un TXT de SPF: se añaden tal cual.
   - **No cambian los MX de synentor.com**: lo de Resend va en `send` (y `rsend`), no en el dominio.
3. Espera a que Resend marque el dominio como verificado.
4. Crea una clave de la API con permiso solo de envío y guárdala como secreto del Worker. El 15/11/2026 quedaron puestos
   los dos secretos, `TURNSTILE_SECRET` y `RESEND_API_KEY`:

```bash
npx wrangler secret put RESEND_API_KEY
```

## 5. Prueba de punta a punta (en la dirección `*.workers.dev`) — hecho el 15/11/2026

Comprobado ese día: el mensaje llega y la respuesta va a la dirección escrita en el formulario.

1. Envía el formulario de contacto. Tiene que decir «enviado» y el mensaje tiene que llegar a `admin@synentor.com` (alias del buzón de
   `administracion@synentor.com`: llega al mismo sitio).
2. Contesta a ese correo: la respuesta tiene que ir a la dirección que se escribió en el formulario.
3. Sin los secretos, el formulario dice que no se ha podido enviar y ofrece el correo: nunca dice «enviado» si no lo está.

## 6. Pasar synentor.com a la web nueva — hecho el 15/11/2026

Es el momento en que la web anterior deja de verse. Comprobado desde fuera ese día: la portada lleva al idioma, las
direcciones de la web anterior redirigen, una inventada da 404 y salen las cabeceras de seguridad. El proyecto de
Lovable quedó despublicado el 15/11/2026 (gerencia).

1. Quita de Cloudflare los cuatro registros de Lovable: A `@`, A `www`, TXT `_lovable` y TXT `_lovable.www`, **sin tocar
   los del correo**. Primero esto: Cloudflare no deja poner un dominio en el Worker si ya hay un registro con ese nombre.
2. En el Worker → Configuración → Dominios: añade `synentor.com`.
3. Para que `www.synentor.com` pueda redirigir (paso 7), añade un registro AAAA `www` → `100::` **con el proxy activado**
   (nube naranja): es una dirección vacía que Cloudflare usa para los nombres que solo redirigen.
4. En Lovable, **despublica el proyecto** (y, si ya no lo usáis, dalo de baja): su dirección propia (`*.lovable.app`)
   seguiría enseñando el código de las pantallas del ERP. Solo después de este paso 6: antes, synentor.com se quedaría sin
   web.
5. Comprueba:
   - `https://synentor.com/` lleva a la portada del idioma del visitante;
   - `https://synentor.com/rrhh-espana` lleva a «Servicios», y una dirección inventada da la página de «no existe»;
   - el formulario funciona;
   - el correo sigue llegando.

## 7. www, synentor.es y synentor.eu — hecho el 15/11/2026

La dirección buena es siempre `synentor.com`, sin `www`. Todo lo demás va a ella con un 301, conservando el camino y la
consulta (`?…`). Las reglas de redirección son de cada dominio: cada una se crea con su dominio elegido arriba a la
izquierda del panel.

**www.synentor.com** (en el dominio synentor.com): Reglas → Reglas de redireccionamiento → regla con «Patrón comodín»:

| Campo | Valor |
|---|---|
| URL de solicitud | `https://www.*` |
| URL de destino | `https://${1}` |
| Código de estado | 301 |
| Conservar cadena de consulta | marcado |

**synentor.es y synentor.eu** (cada uno en su dominio; aquí, el de .es):

1. Añade el dominio a Cloudflare. De lo que lee de IONOS, **borra** lo de la web de IONOS (A `@`, AAAA `@` y CNAME
   `_domainconnect`) y no copies el TXT `_dep_ws_mutex` (interno de IONOS). **Conserva lo del correo** (MX, TXT de SPF,
   `_dmarc` y los CNAME de Microsoft) en «Solo DNS» (nube gris).
2. Añade dos AAAA → `100::` **con el proxy** (nube naranja): uno `@` y otro `www`.
3. En IONOS → el dominio → «Servidores de nombres»: deja **solo** los dos de Cloudflare (ninguno `ui-dns.*`). Si el dominio
   tiene DNSSEC activado en IONOS, desactívalo antes; se puede volver a activar desde Cloudflare cuando esté activo.
4. Espera a que Cloudflare lo dé por **«Activo»**. Mientras tanto, los dos AAAA salen con un triángulo («Este nombre de host
   no está cubierto por un certificado»): el certificado gratuito solo se emite con el dominio activo. El 15/11/2026, .eu
   quedó activo antes y .es tardó unas horas más.
5. Regla de redirección con «Patrón comodín»:

| Campo | Valor |
|---|---|
| URL de solicitud | `https://*synentor.es/*` |
| URL de destino | `https://synentor.com/${2}` |
| Código de estado | 301 |
| Conservar cadena de consulta | marcado |

   El primer `*` es lo de delante (nada o `www.`), así que una regla vale para la raíz y para `www`; `${2}` es el camino.
   **No** se usa la plantilla «de www a la raíz»: llevaría `www.synentor.es` a `synentor.es`, que no tiene web.
6. SSL/TLS → Certificados perimetrales → **«Usar siempre HTTPS»** activado (en los tres dominios), para que `http://`
   pase antes a `https://`. Activado en los tres el 15/11/2026 (gerencia).

**Comprobado desde fuera el 15/11/2026** (en `https`): `synentor.es`, `www.synentor.es`, `synentor.eu` y `www.synentor.eu`,
con y sin camino y consulta, dan 301 a `https://synentor.com/…` con el mismo camino y la misma consulta; `www.synentor.com`
también. Las direcciones `http://` se comprueban en el navegador (ventana privada).

## 8. Estadísticas

Umami: cuenta en la región **UE (Fráncfort)** y web dada de alta el 14/11/2026 (nombre `Synentor`, dominio
`synentor.com`). El identificador va en `src/datos/analitica.ts` y solo cuenta `synentor.com` y `www.synentor.com`.
Comprueba que llegan visitas después del paso 6.

- El identificador es el **«ID del lloc web»** (Website ID): en Umami, «Llocs web» → la fila de la web → editar, o la
  pestaña «Codi de seguiment». **No es el «Account ID» de la cuenta**, que tiene la misma forma: hasta el 14/11/2026 la
  web llevaba ese por error y Umami no guardaba nada.
- El guion es `https://cloud.umami.is/script.js` también en la región UE (lo dice el código de seguimiento de la cuenta).

## 9. Los cuatro identificadores del aviso de cookies (diseño, §17)

Ninguno es un secreto: van dentro de la página. Pásalos por el chat y se ponen en `src/datos/analitica.ts`. Mientras falten,
el aviso de cookies no sale y la web no carga esas herramientas.

**Antes de empezar**:
- Abre las cuatro cuentas con el correo de la empresa (`admin@synentor.com`; las ya abiertas usan
  `administracion@synentor.com`, el mismo buzón), no con uno personal: así son de la
  empresa y no de una persona.
- **No pegues en la web ningún código que te den** (etiqueta, fragmento, «snippet»). Solo hace falta el identificador:
  el aviso de cookies carga cada herramienta después de que el visitante acepte.
- Los menús de estas plataformas cambian de nombre a menudo. Si algo no está donde dice la guía, búscalo por el nombre
  que se da entre comillas.

### 9.1 Google Analytics 4 — el «ID de medición» (`G-` y 10 letras o cifras) — hecho el 14/11/2026

**ID de medición: `G-KB0654M7HP`** (cuenta de Google de la empresa, administracion@synentor.com). Está en
`src/datos/analitica.ts` y se publica con los textos legales cuando los apruebe el asesor.

Cómo se creó (por si hay que repetirlo):
1. Entra en `analytics.google.com` con la cuenta de Google de la empresa y pulsa «Empezar a medir».
2. Cuenta: nombre `Synentor`. Desmarca las opciones de compartir datos con Google que no necesites.
3. Propiedad: nombre `synentor.com`, zona horaria `Andorra`, moneda `Euro (EUR)`.
4. Rellena el tamaño y el sector de la empresa. Objetivos: «Generar oportunidades de venta» y «Conocer el tráfico web».
5. Plataforma: «Web». URL `https://synentor.com`, nombre del flujo `Web Synentor`. Deja activada la «medición
   mejorada» y pulsa «Crear flujo». Si te ofrece instalar la etiqueta, ciérralo: la pone el código de la web.
6. En «Detalles del flujo web», arriba a la derecha, aparece el **«ID de medición»**. Ese es el identificador.

Ajustes que deben quedar así (Administrar → «Recopilación y modificación de datos»). Cuadran con los textos legales:
Analytics solo para estadísticas, sin publicidad y con los datos justos.
- «Recogida de datos»:
  - **Google signals: sin activar**;
  - **Recogida de datos proporcionados por los usuarios: desactivada**, y también la detección automática. Si no, la
    etiqueta de Google buscaría correos y teléfonos en la web (el formulario) y los enviaría a Google;
  - **Recogida de datos granulares de ubicación y dispositivo: desactivada** (Analytics sigue sabiendo el país y la región);
  - **Personalización de anuncios: 0 regiones** (no usamos Google Ads);
  - Consentimiento de recogida de datos de usuario: confirmado (la web pide el consentimiento antes de cargar Analytics).
- «Conservación de datos»: datos de eventos **14 meses**, datos de usuario **14 meses** y «Borrar cuando haya actividad
  nueva del usuario» **desactivado** (así se borran a los 14 meses, aunque la persona vuelva).

### 9.2 Microsoft Clarity — el «ID del proyecto» (unos 10 caracteres)

1. Entra en `clarity.microsoft.com` y regístrate (con una cuenta de Microsoft, Google o Facebook de la empresa).
2. «Nuevo proyecto»: nombre `Synentor`, sitio web `https://synentor.com`, categoría la que más se parezca (servicios
   profesionales o tecnología).
3. Cuando ofrezca formas de instalarlo, elige la manual y no copies nada.
4. Ve a «Configuración» → «Información general»: el **«ID del proyecto»** es el identificador.
5. En «Configuración» → «Enmascaramiento» deja como mínimo el modo **«Equilibrado»**, que tapa lo que se escribe en los
   formularios. Las grabaciones no deben ver nunca el nombre, el correo ni el mensaje de quien escribe.

### 9.3 Píxel de Meta (Facebook e Instagram) — el «identificador del conjunto de datos» (15–16 cifras)

1. Necesitas un portfolio comercial de Meta. Si no lo tienes, créalo en `business.facebook.com` con el nombre
   `SYNENTOR, S.L.U.` y el correo de la empresa.
2. Abre el «Administrador de eventos» (en el menú de herramientas del portfolio) → «Conectar orígenes de datos» → «Web» →
   nombre `Web synentor.com`.
3. Si te pide la dirección, escribe `https://synentor.com`. Cuando te ofrezca instalarlo con una plataforma o con el código,
   elige **«Instalar el código manualmente»** y cierra sin copiar el código.
4. El número que sale bajo el nombre del conjunto de datos («identificador del conjunto de datos» o «ID del píxel») es el
   identificador.
5. En la configuración del conjunto de datos, **desactiva la «Coincidencia avanzada automática»**: si no, Meta leería los
   correos y teléfonos que se escriben en el formulario, y la web se ha comprometido a no enviarlos nunca.
6. Recomendado, para los anuncios: en la configuración del portfolio → «Seguridad de la marca» → «Dominios», añade
   `synentor.com` y verifícalo con el registro TXT que te dé, puesto en Cloudflare (paso 1).

### 9.4 LinkedIn — el «ID de socio» de la Insight Tag (6–8 cifras)

1. Necesitas una página de empresa de Synentor en LinkedIn. Si no existe, créala antes desde tu perfil («Para negocios» →
   «Crear una página de empresa»).
2. Entra en `linkedin.com/campaignmanager` y crea una cuenta publicitaria: nombre `Synentor`, moneda `EUR`, y asóciala a la
   página de empresa. Crear la cuenta no cobra nada: la forma de pago solo se pide al lanzar una campaña.
3. En la cuenta: «Activos de la cuenta» (o «Datos») → «Insight Tag» → «Instalar mi Insight Tag» → **«Instalaré la etiqueta
   yo mismo»**.
4. En el código que enseña aparece `_linkedin_partner_id = "1234567"`: ese número es el identificador. No copies el resto.

### 9.5 La prueba de los consentimientos (base D1) — hecho el 14/11/2026

Cada vez que alguien acepta o rechaza las cookies, el Worker guarda un identificador al azar, la versión de la política,
las dos decisiones y la fecha (ni la IP ni nada de la persona) y borra cada día lo de más de 12 meses.

1. Cloudflare → Almacenamiento y bases de datos → D1 → Crear: nombre `synentor-consentimientos`, **«Especificar
   jurisdicción» → Unión Europea**. Su identificador está en `wrangler.jsonc` (no es secreto).
2. En la base, pestaña «Consola», se ejecuta una vez lo de `migraciones/0001_consentimientos.sql`, una orden detrás de otra:

```sql
CREATE TABLE IF NOT EXISTS consentimientos (id TEXT PRIMARY KEY, version TEXT NOT NULL, estadisticas INTEGER NOT NULL CHECK (estadisticas IN (0, 1)), publicidad INTEGER NOT NULL CHECK (publicidad IN (0, 1)), fecha TEXT NOT NULL);
```

```sql
CREATE INDEX IF NOT EXISTS consentimientos_fecha ON consentimientos (fecha);
```

3. Comprueba en la consola que la tabla existe: `SELECT count(*) FROM consentimientos;` tiene que dar 0 (o lo que se haya
   guardado ya).

### 9.6 Antes de poner los identificadores

1. El asesor jurídico revisa la política de cookies y la de privacidad nuevas (enumeran las cuatro empresas, lo que guarda
   cada una, cuánto tiempo y que los datos salen de Andorra y de la UE).
2. Se ponen los identificadores, se publica y se comprueba en la web:
   - sin aceptar, ninguna de las cuatro herramientas se carga;
   - al aceptar, empiezan a llegar datos (Google Analytics → «Tiempo real»; Clarity y Meta tardan unos minutos);
   - «Configuración de cookies», en el pie, deja cambiar la decisión.

## 10. Buscadores e IA (SEO)

Search Console, Bing Webmaster Tools, el Perfil de Empresa de Google, directorios, la nota de prensa y la comprobación
mensual: `docs/SEO.md`.
