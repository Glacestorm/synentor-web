# Puesta en marcha de la web nueva

Guía para gerencia: pasar synentor.com de la web actual a esta, sin perder el correo. Diseño, §14.

Las órdenes se ejecutan en un ordenador con el repositorio clonado y Node 22, desde la carpeta del repositorio. Cada bloque
de código es una sola orden. Los menús del panel de Cloudflare cambian de nombre a menudo: si alguno no está donde dice la
guía, se busca por su nombre en el buscador del panel.

> **Lo que no se toca nunca**: los registros MX y los del correo de IONOS. La web cambia, el correo no.

## 0. Antes de empezar

1. En IONOS → Dominios → synentor.com → DNS: haz una captura o copia de **todos** los registros (A, AAAA, CNAME, MX, TXT,
   SRV). Es la lista con la que se comprueba el paso 1.
2. Decide qué pasa con las pantallas del ERP que hoy sirve también synentor.com (`/auth`, `/obelixia-admin`…): con la web
   nueva dejan de existir en ese dominio y dan «no existe». Si alguien entra al ERP por ahí, hay que darle otra dirección
   antes.

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
3. Antes del primer despliegue, en las variables de **construcción**, añade `PUBLIC_TURNSTILE_SITEKEY` (paso 3). Es la
   clave pública del widget: va en la página.
4. Prueba la web en la dirección `*.workers.dev` que da Cloudflare. Todavía no toca synentor.com.

## 3. Turnstile (el «no soy un robot» del formulario)

1. Cloudflare → Turnstile → añadir un widget para `synentor.com` y `www.synentor.com`, modo «gestionado».
2. Copia la **clave del sitio** a la variable de construcción del paso 2.3.
3. Guarda la **clave secreta** como secreto del Worker (pide el valor sin enseñarlo):

```bash
npx wrangler secret put TURNSTILE_SECRET
```

## 4. Resend (el envío del correo del formulario)

1. Crea la cuenta de Resend y añade el dominio `synentor.com`.
2. Resend pide unos registros en Cloudflare: el DKIM (`resend._domainkey`) y, en el subdominio `send`, un MX y un TXT de SPF.
   Añádelos tal cual.
   - **No cambian los MX de synentor.com**: el MX de Resend va en `send.synentor.com`, no en el dominio.
3. Espera a que Resend marque el dominio como verificado.
4. Crea una clave de la API con permiso solo de envío y guárdala como secreto del Worker:

```bash
npx wrangler secret put RESEND_API_KEY
```

## 5. Prueba de punta a punta (en la dirección `*.workers.dev`)

1. Envía el formulario de contacto. Tiene que decir «enviado» y el mensaje tiene que llegar a `administracion@synentor.com`.
2. Contesta a ese correo: la respuesta tiene que ir a la dirección que se escribió en el formulario.
3. Sin los secretos, el formulario dice que no se ha podido enviar y ofrece el correo: nunca dice «enviado» si no lo está.

## 6. Pasar synentor.com a la web nueva

Es el momento en que la web anterior deja de verse.

1. En el Worker → Configuración → Dominios: añade `synentor.com`.
2. Quita de Cloudflare los registros que apuntaban la web a la plataforma anterior (A o CNAME de `synentor.com` y `www`),
   **sin tocar los del correo**.
3. Comprueba:
   - `https://synentor.com/` lleva a la portada del idioma del visitante;
   - `https://synentor.com/rrhh-espana` lleva a «Servicios», y una dirección inventada da la página de «no existe»;
   - el formulario funciona;
   - el correo sigue llegando.

## 7. www, synentor.es y synentor.eu

1. Añade synentor.es y synentor.eu a Cloudflare (como el paso 1, conservando sus registros de correo si los tienen).
2. Crea una regla de redirección para `www.synentor.com`, `synentor.es` y `synentor.eu` (y sus `www`): todo, con 301, a
   `https://synentor.com` conservando el camino. La dirección buena es siempre `synentor.com`, sin `www`.

## 8. Estadísticas

1. En Umami, la web ya tiene su identificador (`src/datos/analitica.ts`) y solo cuenta `synentor.com` y `www.synentor.com`.
   Comprueba que llegan visitas después del paso 6.
2. Google Analytics, Clarity y los píxeles de Meta y LinkedIn necesitan el aviso de cookies (diseño, §17), que se construye
   después de aprobarlo. Hasta entonces la web no los carga.
