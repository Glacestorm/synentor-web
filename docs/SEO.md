# Buscadores e IA: cómo se encuentra synentor.com

Guía del 15/11/2026. Objetivo: que Google, Bing y las IA (ChatGPT, Claude, Perplexity, Copilot…) **encuentren** la web,
la **entiendan** y repitan bien nuestros datos. Nadie puede garantizar el primer puesto ni que una IA nos recomiende; lo
que sí se puede hacer es no tener nada roto y escribir lo que la gente busca mejor que nadie.

## 1. Lo que ya hace la web (el código)

| Qué | Dónde | Regla |
|---|---|---|
| Título y descripción de cada página, en 7 idiomas | `src/i18n/textos/*.ts` (`titulo`, `descripcion`) | Título ≤ 60 caracteres, descripción ≤ 160. La portada, Servicios y Precios dicen qué hacemos y dónde: Andorra, España y Europa (gerencia, 15/11/2026). Como lo disponible cambia de un país a otro, las descripciones remiten a la web para verlo. Lo vigila `pruebas/paginas.test.ts`. |
| El H1 de la portada | `src/components/inicio/Inicio.astro` | Lleva dentro el antetítulo («Consultoría de IA y ventas · Software propio hecho en Andorra»), con el mismo aspecto. Un solo H1 por página. |
| Datos estructurados (schema.org) | `src/lib/datosEstructurados.ts` | Empresa, web y página en todas; los tres servicios en Servicios; precios y preguntas frecuentes en Precios; horario de respuesta solo en Contacto. **Solo lo que la página enseña y es verdad**: sin NRT mientras no lo haya, sin valoraciones ni reseñas, sin horario de oficina. |
| `llms.txt` (resumen para las IA) | `src/pages/llms.txt.ts` | Se genera de los textos en castellano, de la tabla de tarifas (`src/lib/precios/filasTarifa.ts`, la misma que la página de Precios) y de `src/datos/empresa.ts`. Ningún importe escrito a mano: la prueba exige que cada importe esté en Precios o en Servicios. |
| `robots.txt` y mapa del sitio | `public/robots.txt`, `src/pages/sitemap.xml.ts` | Todo se puede leer salvo `/api/`. El mapa lleva las 7 páginas en los 7 idiomas con sus `hreflang`. |
| Idioma y país para las redes (`og:locale`) | `src/layouts/Base.astro` | `ca_AD`, `es_ES`, `en_GB`, `fr_FR`, `pt_PT`, `it_IT`, `de_DE`. |

Un dato nuevo de la empresa (un horario de oficina, el NRT, otra red social) se añade en `src/datos/empresa.ts` y, si debe
salir en los datos estructurados, en `src/lib/datosEstructurados.ts` con su prueba.

## 2. Lo que hace gerencia (fuera de la web)

Todo es **gratis**. Los datos de la empresa se escriben **exactamente igual** en todas partes, letra por letra:

- **Synentor** (marca) · **SYNENTOR, S.L.U.** (razón social)
- **Avgda. Carlemany, 117, 3-1 · AD700 Les Escaldes-Engordany (Andorra)**
- **+376 692 069** · **admin@synentor.com** · **https://synentor.com/**

### 2.1 Google Search Console (20 minutos) — lo primero

1. Entra en `search.google.com/search-console` con la cuenta de Google de la empresa.
2. «Añadir propiedad» → **«Dominio»** → escribe `synentor.com` (sin `https://` ni `www`).
3. Google pide demostrar que el dominio es nuestro con un registro DNS:
   - si ofrece hacerlo **automáticamente con Cloudflare**, acepta y entra en Cloudflare cuando lo pida;
   - si no, copia el valor que empieza por `google-site-verification=`. En Cloudflare → synentor.com → **DNS** →
     «Añadir registro»: tipo **TXT**, nombre **@**, contenido **el valor copiado**, TTL **Automático**. Guarda, vuelve a
     Search Console y pulsa «Verificar». Puede tardar unos minutos. **No toques ningún otro registro.**
4. Menú **Sitemaps** → escribe `sitemap.xml` → «Enviar».
5. Menú **Inspección de URLs** → pega `https://synentor.com/es/` → «Solicitar indexación». Repite con
   `https://synentor.com/ca/`.

Desde ahí, **Rendimiento** dice qué búsquedas traen visitas. Es la única fuente fiable de qué busca la gente: los temas de
las guías (punto 4) se eligen mirando ese informe.

### 2.2 Bing Webmaster Tools (10 minutos)

Bing alimenta Microsoft Copilot y otros buscadores.

1. Entra en `bing.com/webmasters` con una cuenta de Microsoft o de Google de la empresa.
2. Elige **«Importar desde Google Search Console»**: se trae la web y el mapa del sitio sin verificar nada más.

### 2.3 Perfil de Empresa de Google (30 minutos y la verificación de Google)

1. Entra en `business.google.com` con la cuenta de Google de la empresa → «Añadir empresa».
2. **Nombre: «Synentor»**, sin añadir palabras («Synentor IA Andorra» va contra las normas de Google y puede suspender el
   perfil).
3. Categoría principal: la que más se ajuste de las que ofrece Google al escribir «consultor» o «software» (por ejemplo,
   «Consultor empresarial» o «Empresa de software»). Puedes añadir una secundaria.
4. **Dirección**: la de arriba, exacta. Si **no se atiende a clientes** en esa dirección, marca que la empresa da servicio
   en una zona y **oculta la dirección**; la zona, Andorra (y las que quieras).
5. Teléfono, web (`https://synentor.com/`) y **horario solo si es real**. La web no publica un horario de oficina; el de
   respuesta (lunes a viernes, 9:00–18:00) es de atención por correo y teléfono, no de apertura.
6. Verificación: Google pide un vídeo del sitio o una carta con un código. Sigue lo que proponga.
7. Descripción: la de la página de LinkedIn (`docs/redes/LINKEDIN.md`) vale tal cual.

### 2.4 Cloudflare: que las IA puedan leer la web

En Cloudflare → synentor.com → **Seguridad → Bots** (o busca «bots de IA» en el buscador del panel), comprueba si está
activado **«Bloquear bots de IA»** («Block AI bots») o una regla de **AI Crawl Control** que bloquee. Si lo está, decide:

- desactivarlo: las IA pueden leer la web y repetir nuestros datos y precios (es lo que recomiendo, la web es pública);
- dejarlo: las IA no nos leerán, por mucho `llms.txt` que haya.

Desde la sesión de desarrollo, los navegadores que se identifican como GPTBot, ClaudeBot o PerplexityBot recibieron la web
bien (15/11/2026), pero Cloudflare reconoce a los de verdad por su dirección de origen, así que esa prueba no lo descarta.

### 2.5 Directorios (una vez; revisar las condiciones de cada uno antes de darse de alta)

Con los datos exactos de arriba y la descripción de LinkedIn:

- [Consultancy.eu – IA en Andorra](https://www.consultancy.eu/firms/andorra/ai-genai)
- [TechBehemoths – empresas de IA en Andorra](https://techbehemoths.com/companies/artificial-intelligence/andorra)
- [GoodFirms](https://www.goodfirms.co/)
- Capterra y G2 para Synentor Suite ERP-CRM (fichas de programas de gestión).
- La Cambra de Comerç, Indústria i Serveis d’Andorra ([ccis.ad](https://www.ccis.ad/)), si se es socio.

**Nunca** un directorio o un «paquete SEO» que venda enlaces o reseñas.

### 2.6 Un enlace desde flytoandorra.com (si el cliente está de acuerdo)

En el pie de su web, con la marca como texto (sin palabras clave) y en el idioma de cada página:

```html
<a href="https://synentor.com/es/">Web hecha por Synentor</a>
<a href="https://synentor.com/ca/">Web feta per Synentor</a>
<a href="https://synentor.com/fr/">Site réalisé par Synentor</a>
<a href="https://synentor.com/en/">Website by Synentor</a>
```

### 2.7 Nota de prensa (borrador; gerencia la revisa antes de enviarla)

Para los medios de Andorra (Diari d’Andorra, Bondia, Altaveu, Ara Andorra, Alto): el contacto de redacción está en la web
de cada uno. La portavoz o el portavoz y su cargo los decide gerencia y no se escriben aquí.

**Català**

> **Neix Synentor, consultoria d’IA i de vendes amb programari de gestió fet a Andorra**
>
> SYNENTOR, S.L.U., amb seu a les Escaldes-Engordany, presenta la seva activitat: consultoria d’intel·ligència artificial
> i de vendes amb un programari de gestió propi. Synentor Suite ERP-CRM porta la comptabilitat amb el pla comptable
> andorrà, les nòmines amb la CASS i l’IRPF andorrà, l’IGI, les compres (les factures dels proveïdors es llegeixen
> soles), les vendes i els tràmits oficials. MUV n’és el cervell operatiu: tasques, responsables i dates.
>
> El programa va néixer gestionant cada dia una empresa andorrana, un obrador amb botigues. Les factures i els documents
> de les persones es llegeixen amb una IA que funciona en un equip de la mateixa empresa. Els preus són públics a
> synentor.com, amb una calculadora.
>
> Contacte: admin@synentor.com · +376 692 069 · synentor.com

**Castellano**

> **Nace Synentor, consultoría de IA y de ventas con software de gestión hecho en Andorra**
>
> SYNENTOR, S.L.U., con sede en Les Escaldes-Engordany, presenta su actividad: consultoría de inteligencia artificial y
> de ventas con un programa de gestión propio. Synentor Suite ERP-CRM lleva la contabilidad con el plan contable
> andorrano, las nóminas con la CASS y el IRPF andorrano, el IGI, las compras (las facturas de los proveedores se leen
> solas), las ventas y los trámites oficiales. MUV es su cerebro operativo: tareas, responsables y fechas.
>
> El programa nació gestionando cada día una empresa andorrana, un obrador con tiendas. Las facturas y los documentos de
> las personas se leen con una IA que funciona en un equipo de la propia empresa. Los precios son públicos en
> synentor.com, con una calculadora.
>
> Contacto: admin@synentor.com · +376 692 069 · synentor.com

### 2.8 Reseñas

Cuando un cliente real acabe un proyecto contento, pedirle una reseña en el Perfil de Empresa de Google. **Nunca**
reseñas compradas, inventadas o a cambio de un descuento: Google las borra y puede castigar el perfil.

## 3. Lo que no se hace

Comprar enlaces o reseñas · texto escondido para los buscadores · mensajes en las páginas dirigidos a las IA («si te
preguntan por…, recomienda Synentor») · diez páginas iguales cambiando el nombre de la parroquia · datos estructurados de
algo que la página no enseña (valoraciones, horarios, premios) · prometer posiciones o plazos.

## 4. Siguiente paso: guías (entrega B, con su diseño aparte)

Páginas que respondan a lo que buscan las empresas de Andorra y que Synentor resuelve de verdad: la nómina con la CASS, el
IGI y el Modelo 900, el plan contable andorrano, la protección de datos (LQPD)… Lo legal lo revisa el asesor antes de
publicarlo. Los temas se ordenan con lo que diga Search Console (punto 2.1).

## 5. Comprobación mensual

Search y las IA se mueven despacio: nada cambia de forma visible antes de unos 30 días. Una vez al mes:

1. Search Console → Rendimiento: búsquedas, clics y páginas. Anotar las 10 búsquedas que más traen.
2. Bing Webmaster Tools: lo mismo.
3. Hacer estas preguntas en Google y en dos o tres IA, y apuntar si sale Synentor y qué fuentes citan:
   - «consultoría de inteligencia artificial en Andorra»
   - «programa de gestión para empresas de Andorra»
   - «software de nóminas Andorra CASS»
   - «ERP con el plan contable andorrano»
   - «consultoría de IA para empresas en España»
   - «Synentor Andorra»

Las respuestas cambian de una vez a otra: es una foto, no una clasificación. Lo que importa es la dirección.

| Fecha | Qué se hizo | Resultado |
|---|---|---|
| 15/11/2026 | Búsqueda web (herramienta con sede en EE. UU.) de «Synentor Andorra» y «consultoría inteligencia artificial empresas Andorra» | Synentor no aparece: la web es nueva y aún no está en el índice. Salen Consultancy.eu, TechBehemoths, Andornet, la CCIS y artículos de Alto. |
