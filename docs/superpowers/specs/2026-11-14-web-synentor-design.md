# Web pública de Synentor — diseño

Fecha: 14/11/2026. Estado: **propuesta para aprobar por gerencia**. Repositorio: `Glacestorm/synentor-web` (público).
Fuentes de este diseño: el código y la documentación del ERP (`Glacestorm/obelixia-ca07508b`, rama `main` a 14/11/2026), el
kit de marca «SYNENTOR_Suite_CEO_Blanc_CA» (octubre de 2026), la web actual de synentor.com (medida el 14/11/2026) y un
estudio de precios de mercado del 14/11/2026 (`docs/estudio-precios-mercado-20261114.md`, con las fuentes).

## 1. Qué se quiere y por qué

Gerencia quiere una **web nueva para Synentor**, alojada en **su propia cuenta de Cloudflare** (hoy synentor.com la sirve
Lovable, con el dominio en IONOS), con **Inicio, Servicios, Precios y Contacto**, que:

- presente a Synentor como lo que es: **una consultoría de IA y de ventas con software propio** (la Suite ERP-CRM y MUV) y
  trabajos de IA **a medida según el presupuesto del cliente**;
- cuente lo que el producto **hace de verdad** (la web de hoy habla de nómina española y enlaza secciones que no existen);
- tenga un **marketing de primera** («como las mejores webs»): que cree necesidad de compra, **sin inventar nada** y sin
  promesas que el producto no acredite (lo pide también el manual de marca);
- destaque el **módulo de RRHH**, el **multiempresa**, y la adaptación a **Andorra** (hoy) y **España** («en desarrollo
  inminente y adaptación a medida del cliente»);
- **publique precios**: una tarifa por módulos con un troncal obligatorio, razonada con el mercado;
- tenga un **formulario de contacto que envíe de verdad** (el de hoy simula el envío y pierde los mensajes).

**Éxito** = una persona que llega a la web entiende en 10 segundos qué es Synentor y por qué le conviene, calcula su precio
sin hablar con nadie y pide una demostración; y nada de lo que lee es falso.

## 2. Objetivos, no objetivos, anti-objetivos

**Objetivos**: las cuatro páginas en siete idiomas; un configurador de precio con las dependencias entre módulos; el
formulario con envío real; las páginas legales; SEO correcto (cada idioma con su dirección, `hreflang`, mapa del sitio);
rápida (estática) y accesible.

**No objetivos** (por ahora): blog, área de clientes, tienda con pago en línea, chat, la web de AndorraFly, contenidos
de MUV más allá de su ficha comercial, las secciones de la web actual que no existen en el producto.

**Anti-objetivos** (lo que la haría fracasar aunque funcione):

- cualquier afirmación que el producto no cumpla hoy (ver §6, la lista de lo que NO se anuncia);
- testimonios, cifras de clientes, logotipos de clientes o capturas inventados;
- un «mensaje enviado» que no se ha enviado;
- datos de contacto de una persona (solo los de la empresa);
- claves o secretos en el repositorio (es público).

## 3. Restricciones

- **Marca** (manual «Identitat de marca», oct. 2026): fondo preferente azul noche `#050918`; degradado dorado
  `#FED44C → #FBBF24 → #FB973A`; texto `#17233F`; dorado legible sobre blanco `#8B6500`; variante alternativa azul-violeta
  `#3F7DFF → #A443EE`. Lema: «La teva empresa, connectada.» Descriptor: «Suite Premium de ERP-CRM». Tipografía del sistema
  de apoyo: Arial / Arial Bold (el nombre del logotipo es imagen). Los logotipos son raster (los SVG llevan una imagen
  dentro): **ancho máximo recomendado 325 px**; marge libre del 15 % de su alto. Voz: «precisa, propera, segura i
  contemporània»; «frases clares, beneficis concrets i llenguatge sense exageracions».
- **Legal**: SYNENTOR, S.L.U. (**constituida**: gerencia, 14/11/2026; antes «en constitución»), NRT e inscripción **en trámite** hasta que gerencia los dé (nunca un NRT de relleno); domicilio
  y datos de contacto de la empresa (§9); ley aplicable la andorrana (Llei 29/2021, LQPD; APDA) y el RGPD para personas de
  la UE. **Los textos legales son un borrador pendiente del asesor jurídico**: se publican solo con el visto bueno de
  gerencia.
- **Alojamiento**: Cloudflare (Workers con ficheros estáticos; el plan gratuito basta). El dominio está en IONOS: hay que
  pasar sus DNS a Cloudflare **conservando los registros del correo** (MX, SPF, DKIM) o el correo de la empresa dejaría de
  llegar. synentor.es y synentor.eu hoy dan error de certificado: se redirigirán a synentor.com.
- **Repositorio público**: ningún secreto (Turnstile, envío de correo) en el código: van como secretos de Cloudflare.
- **Idiomas de la web** (gerencia, 14/11/2026): català (principal), castellano, English, Français, Português, Italiano y
  Deutsch. Los textos los redacta Claude; todos menos catalán y castellano, **pendientes de una lectura nativa** antes de
  campañas en esos mercados.
- **Idioma del programa**: las pantallas del ERP están en castellano y catalán (medido el 14/11/2026: 0 de 1.502 ficheros de
  pantallas del ERP usan traducciones). La web lo dice en las fichas de producto y en las preguntas frecuentes; otros
  idiomas del programa, «en desarrollo inminente y adaptación a medida del cliente».

## 4. Enfoques considerados

| Enfoque | Qué es | A favor | En contra |
|---|---|---|---|
| **A. Astro estático + Cloudflare Workers** (elegido) | Páginas generadas en estático (Astro), un Worker pequeño para el idioma de entrada y el formulario | Muy rápida, buen SEO, i18n por rutas, sin servidor que mantener, plan gratuito | Un proyecto nuevo que mantener |
| B. HTML y CSS escritos a mano | Ficheros estáticos sin herramienta | Lo más simple | Cuatro idiomas duplicados a mano; el configurador y los textos se desincronizan |
| C. Reutilizar la aplicación del ERP | Las páginas públicas de la app React | Ya existe | Pesada (SPA), Google la ve mal, ata la web al ERP y arrastra el contenido de Lovable |

**Elegido A** (decisión de Claude, sobre lo que gerencia dejó en sus manos).

## 5. Lo que se cuenta (mensajes)

**Posicionamiento**: «Synentor és una consultoria d'IA i vendes amb programari propi, fet a Andorra.» Tres pilares:

1. **Synentor Suite ERP-CRM** — la gestión entera de la empresa, hecha para Andorra.
2. **MUV** — el «cerebro operativo»: mapas de conocimiento, tareas con responsables, fechas y dependencias, e IA privada.
3. **Consultoría de IA y ventas** — 34 servicios con tarifa y **trabajos de IA a medida según presupuesto**.

**Lo que se destaca (comprobado en el código; evidencia en el repositorio del ERP):**

| Mensaje | Evidencia |
|---|---|
| **Multiempresa**: una instalación lleva muchas empresas, cada una aislada de las otras | `docs/producte/MULTIEMPRESA.md`; migraciones `20260925a`–`20260926d` |
| **RRHH y nóminas de Andorra**: ficha, contratos, alta en la CASS, nómina e IRPF andorrano, vacaciones y bolsa de horas, horarios, fichaje con portal del empleado, finiquitos, documentos de RRHH leídos con IA local, lectura de documentos de identidad | CLAUDE.md del ERP («RRHH…», «Alta de una persona en Andorra», «La fecha de alta en la CASS»); `hr-identity-ocr` |
| **España: en desarrollo inminente y adaptación a medida del cliente**: lectura y aplicación de convenios colectivos del registro oficial (REGCON y BOE), nómina española | 12 funciones `erp-hr-agreement-*` / `erp-hr-collective-agreement*`; `docs/ES_MODULS_APARCATS_AD.md`; `ops/tasques/OTROS-PAISES-PENDIENTES.md` |
| **Compras que se leen solas**: facturas del correo o de una carpeta, proveedores que se crean solos, albaranes y pedidos | `docs/producte/compras/` |
| **Conciliación bancaria** con cualquier formato de banco (Norma 43, OFX, QIF, MT940, CAMT.053, CSV y Excel) | `docs/producte/contabilidad/IMPORTAR-EXTRACTOS.md` |
| **Contabilidad con el plan contable andorrano** (la plantilla oficial de la Guia del Govern), comprobación contra el programa anterior, incorporación de ejercicios | `docs/producte/contabilidad/` |
| **Jurídico andorrano**: asesor sobre la ley andorrana con IA local, vigilancia del BOPA, trámites oficiales y expedientes, libro de actos societarios, prevención del blanqueo (PBC/FT) | CLAUDE.md del ERP (secciones de Jurídico, PBC, trámites) |
| **IA privada** para los documentos de personas: se leen con una IA que funciona en las instalaciones del cliente | `docs/infra/IA-LOCAL-PC-CASA.md`; `intelligent-ocr` con `datos_personales` |
| **Nació gestionando una empresa real de Andorra** (un obrador con tiendas) — sin nombrarla (autorizado por gerencia el 14/11/2026) | — |
| **Trabajos de IA a medida según presupuesto** (autorizado por gerencia el 14/11/2026) | catálogo de consultoría |

**Formato «en desarrollo inminente y adaptación a medida del cliente»** (gerencia, 14/11/2026): para lo que está casi
listo. Solo se usa con: España (nómina y convenios), la facturación de ventas con asiento automático, las salidas de
almacén. **No** con lo que es un cascarón (§6).

## 6. Lo que NO se anuncia

Comercio (financiación), logística de envíos, Academia, LEADER, Auditoría como producto, banca abierta, asistente de
cierre fiscal, cierre de ejercicio automático, NIIF, ESG, remesas SEPA, SII e Intrastat, campañas de correo, «IA 100 %
local» (no lo es en todo el producto), CashDro en varias empresas de una instalación, «único en el mercado» o «el mejor»
(no demostrable), marketplace, portal de socios, API pública, sectores (banca, seguros…) de la web de Lovable.

## 7. Precios (propuesta)

Todos **sin IGI** (en Andorra, el total es la base × 1,045, a confirmar por cliente; en España, IVA aparte). Precio **por
mes con pago anual**; pago mensual, **+20 %**. Revisión prevista tras los 5–10 primeros clientes (unos 90 días).

### 7.0 Países, disponibilidad y modalidades

**El configurador es para todos los países** (gerencia, 14/11/2026): un selector de país arriba (Andorra · España ·
Portugal · France · Italia · Deutschland · otro país). Los precios son los mismos en todos (en euros); lo que cambia es el
**estado de cada módulo**, que se enseña junto a él, y los impuestos:

| Estado | Qué significa (texto de la web) |
|---|---|
| **Disponible** | funciona hoy en ese país |
| **En desarrollo inminente** | casi listo; se entrega con adaptación a medida del cliente |
| **A medida** | se adapta en un proyecto con presupuesto, con la asesoría del cliente |

| Módulo | Andorra | España | Portugal, Francia, Italia, Alemania |
|---|---|---|---|
| Motor multiempresa, usuarios, copias, documentos, cuadro de mando | Disponible | Disponible | Disponible |
| Tesorería y conciliación (Norma 43, OFX, QIF, MT940, CAMT.053, CSV, Excel) | Disponible | Disponible | Disponible |
| Contabilidad con el plan del país | Disponible (PGC andorrano) | En desarrollo inminente (PGC español) | A medida |
| Compras inteligentes | Disponible | En desarrollo inminente (NIF e IVA) | A medida |
| Ventas y CRM (clientes, proyectos, contactos, mapa comercial) | Disponible | Disponible (el registro de facturas con IVA: en desarrollo inminente) | Disponible (el registro de facturas: a medida) |
| RRHH y nóminas | Disponible | En desarrollo inminente (nómina española y convenios colectivos del REGCON y el BOE) | A medida |
| Fiscal | Disponible (IGI, IS, DTF) | En desarrollo inminente (IVA y modelos) | A medida |
| Jurídico y trámites | Disponible (ley andorrana) | A medida | A medida |
| Prevención del blanqueo | Disponible (UIFAND) | A medida | A medida |
| Productos, escandallos y stock | Disponible | Disponible | Disponible |
| TPV y caja (HIOPOS y CashDro) | Disponible | Disponible | A medida |
| MUV | Disponible | Disponible | Disponible |
| Consultoría de IA y ventas | Disponible | Disponible | Disponible |

- En el configurador, un módulo «en desarrollo inminente» o «a medida» se puede añadir: el total lo suma y la propuesta
  final confirma plazo y adaptación; la llamada a la acción cambia a «Pide tu propuesta».
- **Impuestos**: Andorra, IGI 4,5 % calculado; resto, «impuestos no incluidos (IVA, TVA, IVA, MwSt. según el país)», sin
  calcularlos (en servicios entre empresas de la UE desde Andorra puede aplicar inversión del sujeto pasivo: lo confirma la
  propuesta con el asesor fiscal).
- **Idioma del programa**: aviso visible fuera de Andorra y España: «Interfaz en castellano y catalán; otros idiomas en
  desarrollo inminente».
- **Modalidades** (gerencia, 14/11/2026):
  - **A. Instalado en tu empresa** (en tu servidor o NAS, con tu equipo de IA si lo quieres): **disponible**. La cuota no
    incluye el equipo.
  - **B. Alojado por Synentor en Andorra** (tu empresa aislada dentro de la instalación de Synentor): **en desarrollo
    inminente**, **+50 € al mes** por instalación (alojamiento y copias de seguridad incluidos).
- **Soporte** (gerencia, 14/11/2026): correo y teléfono, de lunes a viernes de 9:00 a 18:00 (hora de Andorra), respuesta en
  un día laborable. **Condiciones de la Suite**, como las ya aprobadas para MUV y la consultoría: licencia anual sin
  permanencia de más de 12 meses y con preaviso de 30 días; soporte y actualizaciones incluidos; al terminar, se entrega el
  archivo con los datos de la empresa.

### 7.1 Synentor Suite ERP-CRM

| Concepto | Precio | Requiere |
|---|---|---|
| **Synentor Base** (obligatorio): el motor multiempresa, usuarios y permisos, copias de seguridad, IA local, entrada única de documentos, maestros, ficha de empresa y libro de actos, contabilidad con el plan andorrano, tesorería y conciliación, cuadro de mando e informes. **Incluye 1 empresa y hasta 5 usuarios** | **149 €** | — |
| Usuario adicional (se cuenta **por instalación**; las cuentas del portal del empleado **no** cuentan: van en RRHH por persona) | **15 €** por usuario | Base |
| Empresa adicional en la misma instalación | **39 €** + sus módulos **al 50 %** | Base |
| Despachos y gestorías con más de 10 empresas | tarifa por volumen, bajo propuesta | Base |
| Compras inteligentes | **69 €** | Base |
| Ventas y CRM (clientes, proyectos, contactos, mapa comercial, registro de facturas con IGI) | **59 €** | Base |
| RRHH y nóminas de Andorra (con el portal del empleado incluido) | **59 € + 18 € por persona en plantilla** | Base |
| Fiscal de Andorra (IGI, IS, presentaciones e impresos de la DTF) | **39 €** | Base |
| Jurídico y trámites | **79 €** | **RRHH** |
| Prevención del blanqueo (PBC/FT) | **49 €** | **Jurídico** |
| Productos, escandallos y stock | **39 €** | **Compras** |
| TPV y caja (HIOPOS y CashDro) | **39 €** | Base |
| **Implantación** (obligatoria): instalación, configuración, carga de los datos del programa anterior, formación | **720 € la jornada**, desde 2 | — |
| Equipo de IA local | presupuesto aparte | — |

**Por qué estos precios** (estudio de mercado del 14/11/2026): contabilidad sola 10–60 € por empresa; programas completos
45–110 € **por usuario** (Odoo Custom 44,90 €; Business Central Essentials 80 €); tesorería y conciliación 59–119 €;
lectura de facturas 25–199 $; nómina 16–22 € por persona más 49–99 € fijos (PayFit); prevención del blanqueo 39–149 € (ningún
competidor andorrano publica precio); gestorías andorranas 120–300 € al mes por la contabilidad; implantación 400–800 € la
jornada.

**Ejemplo para la web** (empresa de 20 personas, 5 usuarios, con Base, Compras, RRHH, Fiscal, Productos y TPV):
149 + 69 + (59 + 20 × 18) + 39 + 39 + 39 = **754 € al mes**. Comparación honesta y con fuente: solo la nómina en PayFit
(20 personas), 389–509 € al mes, más Business Central Essentials con 5 usuarios, 400 € al mes: 789–909 € por separado, y
ninguno de los dos con la nómina y la CASS andorranas. RRHH a 18 € por persona (gerencia pidió 18–20 € el 14/11/2026;
Claude recomienda 18: al nivel de PayFit Estándar–Avanzado, 16–19 €).

### 7.2 MUV

| Concepto | Precio |
|---|---|
| **Licencia gratis hasta 5 usuarios** (sin soporte) | **0 €** |
| Usuarios 6.º a 25.º | **39 €** por usuario adicional |
| Usuarios 26.º a 100.º | **32 €** por usuario adicional |
| Más de 100 usuarios | a medida |
| Implantación | 720 € la jornada (de 1 a 4) |
| Equipo MUV Básico · IA · IA+ (pago único, recomendados) | 890 € · 3.200 € · 5.900 € |
| Lanzamiento (aprobado el 03/11/2026) | −30 % el primer año para los 5 primeros clientes de referencia |

Cambia respecto a lo aprobado el 03/11/2026 (pedido por gerencia el 14/11/2026: revisión al alza y 5 usuarios gratis): las
licencias de 10, 25 y 100 usuarios (2.400 / 5.400 / 15.600 € al año) pasan a gratis hasta 5 y por usuario adicional; el
piloto de 300 € desaparece (lo sustituye el plan gratuito). Equivalencias: 10 usuarios, 2.340 € al año (antes 2.400 €);
25 usuarios, 9.360 € (antes 5.400 €); 100 usuarios, 38.160 € (antes 15.600 €). Referencias: Kleos 49–79 € por usuario;
Notion 9,50–19,50 €; OpenProject 5,95–15,95 €.

**Lo que MUV aún no tiene** (se dice): edición simultánea en tiempo real y aplicación móvil — «en desarrollo».

### 7.3 Paquete «Synentor Completo»

Base + Compras + Ventas y CRM + Fiscal + **MUV**, con **10 usuarios en los dos programas**: **469 € al mes** (por separado,
unos 586 €: ahorro del 20 %). Usuario adicional del paquete: **45 €** (ERP-CRM y MUV). RRHH, Jurídico, PBC, Productos y TPV,
a su precio. Un solo paquete; el resto, a la carta.

### 7.4 Consultoría de IA y ventas

Precios «desde» = el **mínimo de microempresa** del catálogo `docs/producte/consultoria/catalogo.json` del ERP, **siempre
con su cuota mensual cuando la tiene** (como la propuesta del ERP, `src/lib/consultoria/propuesta.ts`: «X € + Y €/mes»).
Se leen del catálogo al construir (copia fechada en el repositorio), nunca a mano. Por ejemplo: diagnóstico exprés de IA
950 €; asistente de atención al cliente en web y WhatsApp 1.900 € + 90 €/mes; **asistente comercial 1.900 € + 80 €/mes**;
**contenidos y marketing con IA 1.450 € + 50 €/mes**; **gestión de reseñas 700 € + 40 €/mes**; **previsión de demanda y
ventas 2.400 € + 100 €/mes**; IA privada en servidor propio 2.400 € + 150 €/mes; mantenimiento y soporte 250 € + 150 €/mes.
**Implantación del CRM y del mapa comercial**: por jornadas (720 €).
**Trabajos de IA a medida según presupuesto del cliente.** Ayudas: el catálogo cita el PDE del Govern, Andorra Business,
Kit Consulting/Kit Digital (España) y FUNDAE; la web solo dice «te ayudamos a buscar las ayudas a las que puedas optar»
(las convocatorias cambian).

### 7.4 bis Diseño y creación de páginas web (aprobado por gerencia el 14/11/2026)

Sin IGI. Incluyen formulario que envía de verdad, estadísticas sin cookies (Umami) y alojamiento en Cloudflare.

| Tipo | Qué incluye | Precio |
|---|---|---|
| Web Esencial | Una página de presentación, 1 o 2 idiomas | 1.200 € |
| Web Profesional | Hasta 6 páginas, 3 idiomas, posicionamiento básico | 2.900 € |
| Web Premium | Hasta 12 páginas, hasta 7 idiomas, diseño de marca, calculadora o configurador a medida | desde 6.500 € |
| Tienda online | Pagos, catálogo, pedidos | a medida, según presupuesto |
| Página adicional · idioma adicional | — | 250 € · 350 € (la revisión nativa, aparte) |
| Mantenimiento Básico | Alojamiento, copias, actualizaciones, estadísticas, 1 h de cambios al mes | 49 € al mes |
| Mantenimiento Plus | Lo mismo, 3 h de cambios al mes e informe mensual de visitas | 99 € al mes |

### 7.4 ter Servicios aprobados por gerencia el 14/11/2026

Sin impuestos. Los importes viven solo en `src/lib/precios/tarifa.ts`.

- **C. Eléctrica** (programa para asesores energéticos): 79 € al mes, con la Base. Solo España (CUPS, peajes, OMIE); en
  Andorra y en los demás países, a medida. Se anuncia ya (gerencia), sin lo que no hace: ni Andorra, ni 6 periodos, ni
  precios de mercado en tiempo real, ni gas, ni solar, ni alertas automáticas, ni firma con validez legal.
- **Energía (servicios)**: estudio de factura para particulares, 49 € (se devuelve si no encontramos un ahorro de al menos
  49 € al año); empresas, 290 € por suministro o a éxito, 30 % del ahorro comprobado de los 12 primeros meses (sin ahorro,
  no se cobra); 6 periodos, hospitales y promotoras, a medida. **No se nombra ningún caso** (gerencia: hay una propuesta
  presentada a un hospital de Andorra, sin respuesta). Hoy no hay tratos con ninguna comercializadora.
- **Monitorización con Home Assistant y Grafana**: vivienda o pequeño negocio desde 690 € y 19 € al mes; pyme o comercio
  (hasta 6 cuadros) desde 2.900 € y 49 €; edificio, hotel o promotora desde 6.900 € y 99 €; hospital o gran consumidor, a
  medida y desde 290 € al mes. La instalación incluye los medidores de esos puntos.
- **Migraciones** (pago único, solo lo que hoy importa de verdad el ERP): arranque 1.440 €; contabilidad anterior
  (Andorra) 1.440 € el primer ejercicio y 720 € cada uno más; personal (Andorra) 1.440 € hasta 25 personas. Lo que hoy no se
  importa (maestro de clientes, cartera, stock, inmovilizado, conectores directos), a medida.
- **Convivencia con el programa actual**, por ficheros: 720 € de puesta en marcha y 99 € al mes (hasta 4 cargas al mes).
  No hay conectores directos (los de Odoo y TPV del ERP son simulados): un conector, a medida.
- **Solo el portal del empleado**: 59 € al mes hasta 10 personas, 4 € por persona más, 720 € de implantación, sin la Base.
  Andorra disponible; España, en desarrollo inminente. **Dato medido** (consulta de solo lectura en la base de la 3041,
  14/11/2026, solo recuentos): el portal empezó el 12/08/2026; en septiembre (datos hasta el 25/09, cuando el portal dejó
  de verse desde fuera), **15 de las 19 personas que trabajaron el mes entero ficharon desde el portal (78,9 %)** y los
  192 fichajes del mes se hicieron por el portal, ninguno a mano. Contando a todos los que estaban de alta el 25/09, 15 de
  22 (68 %). La web dice «casi 8 de cada 10 personas que trabajaron el mes entero», en pasado y sin nombrar la empresa.
- **Centralita de IA para consultorios** (proyecto nuevo, aún sin construir): en la web, «próximamente», sin precios y con
  formulario para clínicas interesadas. Tarifa para presupuestos (la de Claude, aprobada): Esencial 290 € al mes, 1.500 € de
  implantación y 1.000 minutos; Avanzada 450 €, 2.900 € y 2.000 minutos; Élite 890 €, desde 5.900 € y 3.500 minutos; minuto
  adicional 0,15 €. El teléfono lo contrata la clínica con su operador (en Andorra, Andorra Telecom). IA de voz en la nube
  de la UE con contrato de encargado: aprobada por gerencia, pendiente de la verificación legal y técnica completa.

### 7.5 Nota para el ERP

La base del ERP tiene planes de licencia de agosto (`license_plans`: 49 / 189 / 79 / 269 €) que no casan con esta tarifa y
un mapa de módulos con defectos (`maestros` frente a `masters`, módulos fuera del mapa). Alinearlos es trabajo del ERP,
**fuera de esta web**: se apunta en su cola.

## 8. La web, página a página

Estilo: gran marca de consumo aplicada a software empresarial — frases cortas y rotundas, mucho aire, contraste azul noche
y dorado, una idea por bloque, llamadas a la acción claras («Demana una demostració», «Calcula el teu preu»). Ilustraciones
abstractas y de interfaz **claramente ilustrativas** (nunca capturas falsas presentadas como reales); las capturas reales,
más adelante y con datos de ejemplo.

- **Inicio**: portada con el lema y el posicionamiento; el problema (programas sueltos, hojas de cálculo, trabajo repetido,
  la ley andorrana que cambia); los tres pilares; RRHH de Andorra; multiempresa; IA privada; «nació en una empresa real»;
  precio de entrada («des de 149 € al mes, 5 usuaris inclosos») con enlace al configurador; llamada final.
- **Serveis**: la Suite módulo a módulo (solo lo real) y el bloque de España; MUV; consultoría de IA y ventas por
  categorías; implantación.
- **Preus**: el **configurador** (elige módulos, usuarios, personas en plantilla, empresas y forma de pago; añade solo los
  módulos que se requieren y lo explica; calcula el total sin IGI y con IGI andorrano); tablas de la Suite, el paquete, MUV
  y la consultoría; condiciones; preguntas frecuentes; «cómo nos comparamos» con las cifras de §7.1 y sus fuentes.
- **Contacte**: formulario; correo, teléfono y dirección de la empresa; la razón social en la identificación.
- **Legal**: avís legal, política de privacitat, política de cookies.

## 9. Datos de la empresa en la web

Razón social «SYNENTOR, S.L.U.» (constituida; gerencia, 14/11/2026); NRT «en trámite»; dirección la que dio gerencia el 14/11/2026 (en
`src/datos/empresa.ts`); correo admin@synentor.com (desde el 15/11/2026, alias del buzón de administracion@synentor.com); teléfono de la empresa confirmado por gerencia el 14/11/2026.
**Ningún nombre de persona.** WhatsApp no (el kit lo trae desactivado). Redes sociales: ninguna hasta que existan las
cuentas (el kit las trae vacías).

## 10. Idioma

- Rutas `/ca/`, `/es/`, `/en/`, `/fr/`, `/pt/`, `/it/`, `/de/`, cada página con `hreflang` y `canonical`.
- La raíz `/` la atiende el Worker: idioma de la cookie de preferencia si existe; si no, el del navegador
  (`Accept-Language`); si no, el país de la conexión (`request.cf.country`: AD → ca, ES → es, FR → fr, PT y BR → pt, IT → it,
  DE, AT y CH → de, otros → en); por defecto, ca. Redirección 302. **No se guarda nada del visitante** salvo su elección.
- El país preseleccionado en el configurador sale del mismo `request.cf.country` (AD, ES, PT, FR, IT, DE; si no, «otro
  país»), y se puede cambiar.
- **Sin ventana obligatoria**: selector arriba en todas las páginas; si el navegador pide otro idioma que el de la página,
  una franja discreta lo sugiere una vez.
- La elección se recuerda con una cookie técnica `lang` (necesaria para el servicio pedido: no pide consentimiento).

## 11. Formulario de contacto

- Campos (los de la web actual): nombre*, correo*, empresa, teléfono, asunto (información, demostración, precios,
  consultoría de IA, MUV, otro), mensaje*, **consentimiento** de privacidad* (casilla sin marcar).
- Protección: **Cloudflare Turnstile** y un campo trampa; límite de tamaño.
- Envío: el Worker valida, comprueba Turnstile y **envía el mensaje a admin@synentor.com**. Proveedor del envío:
  el servicio de correo de Cloudflare si la cuenta lo permite sin tocar los MX; si no, Resend (plan gratuito). Las claves,
  como secretos de Cloudflare. **No se guarda el mensaje en ninguna base**.
- Respuesta honesta: «Enviat» solo si el proveedor confirma; si falla, el error y el correo de la empresa. Nunca un éxito
  falso.

## 12. Analítica, SEO y rendimiento

- **Umami** (gerencia, 14/11/2026; sustituye a Cloudflare Web Analytics): código abierto, sin cookies (no hace falta aviso
  de cookies), con API para la futura pestaña «Web» del ERP. Para synentor.com, su nube (`cloud.umami.is`), con el
  identificador de la web en `src/datos/analitica.ts` y solo para los dominios de producción. La analítica de Plausible de
  la web actual no se traslada.
- Mapa del sitio, `robots.txt`, metadatos y Open Graph por idioma (imagen: la portada del kit).
- Redirecciones 301 de las direcciones de la web actual (`/rrhh-espana`, `/precios`, `/contact`…) a su equivalente nuevo.
- Objetivo: Lighthouse ≥ 95 en rendimiento, accesibilidad, buenas prácticas y SEO; contraste AA.

## 13. Pruebas

- Lógica del configurador (dependencias, totales, IGI, pago mensual) con pruebas unitarias contra los ejemplos de §7.
- Worker: idioma de entrada y formulario (Turnstile, validación, fallo del envío) con el proveedor simulado.
- Contenido: ninguna página con datos de persona; enlaces internos vivos; las siete lenguas con las mismas claves.
- Navegador (Playwright): las páginas en los siete idiomas, el configurador y el formulario.

## 14. Puesta en marcha (lo hace gerencia, con guía)

1. Cuenta de Cloudflare; añadir synentor.com (y .es, .eu); **revisar que los registros del correo de IONOS estén
   importados**; cambiar los servidores de nombres en IONOS.
2. Conectar el repositorio con Cloudflare (despliegue automático al guardar en `main`).
3. Crear el widget de Turnstile y la clave del envío de correo; guardarlos como secretos.
4. Comprobar el formulario de punta a punta y retirar el dominio de Lovable.

## 15. Decisiones tomadas tras la revisión del diseño (de Claude, corregibles)

1. **Configurador**:
   - Cada empresa adicional elige sus módulos. El 50 % se aplica a las cuotas fijas de los módulos, **no** a los 18 € por
     persona de RRHH. Las dependencias se cumplen **en cada empresa**.
   - TPV y caja se puede contratar en varias empresas (HIOPOS), con la nota de que **CashDro solo funciona en una empresa
     por instalación**.
   - El paquete se combina con empresas adicionales (que van a la carta, al 50 %). Sus usuarios cuentan a la vez en el
     ERP-CRM y en MUV.
   - El pago mensual (+20 %) vale para todas las cuotas: Suite, personas, MUV y paquete.
2. **España y otros países**: sustituido por la decisión de gerencia del 14/11/2026 (configurador para todos los países con
   el estado de cada módulo, §7.0).
3. **Comparación con el mercado sin nombres de competidores** (evita el riesgo de publicidad comparativa en España y
   Francia): «un programa de nómina en la nube cobra 16–22 € por persona más una cuota fija; un ERP internacional, unos 80 €
   por usuario», con nota de fuentes y fecha de consulta, y solo con cifras tomadas de páginas oficiales del fabricante
   (PayFit y Microsoft en el estudio). Corrección: PayFit para 20 personas es 389–509 € (16–22 € × 20 + la cuota fija de su
   tramo de 10–24 personas, 69 €).
4. **El descuento de lanzamiento (−30 %) no se publica en la web**: es para las propuestas comerciales (una oferta con
   plazas que siguiera publicada cuando se acaben sería falsa).
5. **Kit de marca en el repositorio**: solo los logotipos (versiones dorada y alternativa, con y sin descriptor), el símbolo,
   los iconos de la web (`icona-*`), `tokens-marca.json` y la portada (comprobada: solo el logotipo y el lema). **Nada** de
   `signatures/`, `papeleria/`, `textos-marca/` ni `xarxes-socials.*`, que llevan datos de una persona.
6. **Datos de la empresa**: dirección y teléfono los dio gerencia el 14/11/2026 para publicarlos; se escriben en
   `src/datos/empresa.ts`.
7. **Sin «Acceso clientes»** en la cabecera mientras la aplicación no se pueda alcanzar desde fuera. Al pasar los DNS a
   Cloudflare se conservan **todos** los registros que hoy existan (correo y cualquier subdominio), no solo los del correo.

## 16. Lo que queda al constructor

La estructura del proyecto Astro, los componentes, la redacción final de los textos dentro de este marco, las
ilustraciones, el diseño visual dentro de la marca, la herramienta de pruebas y la guía de despliegue.

## 17. Cookies y medición con consentimiento (gerencia, 14/11/2026: «Todo con aviso desde ya») — APROBADO el 14/11/2026

**Por qué**: gerencia quiere «las mejores cookies y que nos aporten muchos datos». Hasta hoy la web solo medía con Umami,
sin cookies y sin aviso (§12). Se eligió, de tres opciones, la que da más detalle por visitante: Google Analytics 4,
Microsoft Clarity y los píxeles de Meta y LinkedIn, con un aviso de consentimiento desde el primer día.

**Lo que dice la guía de la APDA** («Ús de cookies, política de privadesa i avís legal», versión 4, 23/01/2024, leída el
14/11/2026, con sus modelos de aviso legal y de cookies):
- Las técnicas o estrictamente necesarias no piden consentimiento, pero se explican en la política. Las de preferencias que
  elige la persona (el idioma) tampoco. La medición de audiencia solo para el editor, con estadísticas anónimas, sin
  cruzarla con otros datos ni seguir a la persona por otras webs, tampoco (el caso de Umami); la APDA recomienda informar.
- Las demás, consentimiento expreso con un acto positivo; nunca «seguir navegando»; sin muro de cookies.
- **Primera capa**: «aceptar todas», «rechazar todas» y personalizar; **sin «rechazar» es un incumplimiento**; **colores y
  contrastes que empujen a una opción pueden invalidar el consentimiento**; nada marcado de antemano en la segunda capa.
- Antes de consentir: quién es el responsable, qué datos, para qué, cuánto tiempo, cómo aceptar o rechazar y qué pasa en
  cada caso, el derecho a retirarlo y cómo, y los destinatarios.
- **Retirarlo tan fácil como darlo**: un botón flotante permanente y visible, o algo igual de ágil.
Para visitantes de la UE rige además el RGPD y la directiva de privacidad electrónica. **La redacción final la revisa el
asesor jurídico**, como el resto de las páginas legales.

**Enfoques considerados**: (a) solo Umami con eventos, sin aviso; (b) eventos y aviso solo para anuncios; (c) todo con
aviso desde ya. Gerencia eligió (c). Para el aviso: un gestor de consentimiento propio, pequeño y en los siete idiomas
(recomendado: sin dependencias ni otra empresa más que lea las visitas), frente a una plataforma de consentimiento de pago.

**Diseño**:
1. **Nada se carga sin aceptar.** Google Analytics 4 y Clarity («Estadísticas») y los píxeles de Meta y LinkedIn
   («Publicidad») se insertan en la página solo después de aceptar su categoría; al rechazar o retirar, no se cargan más y
   se borran las cookies de la propia web que dejaron (las de los dominios de Meta y LinkedIn no se pueden borrar desde
   aquí: la política lo dice).
2. **El aviso**: franja inferior con «Aceptar todas», «Rechazar todas» y «Configurar», **los tres con el mismo estilo,
   tamaño y color** (APDA); «Configurar» abre las categorías con un interruptor cada una, apagados de entrada (las
   necesarias, siempre activas y sin interruptor). Sin muro: la web se usa igual sin decidir. Una vez decidido, un
   **botón flotante pequeño y fijo** (abajo a la izquierda) y «Configuración de cookies» en el pie lo vuelven a abrir.
3. **La decisión** se guarda en una cookie propia (`synentor_consentimiento`: versión de la política, fecha y una marca por
   categoría) durante 12 meses (el modelo de la APDA); pasado ese plazo, o si cambia la política, se vuelve a preguntar.
4. **Prueba del consentimiento**: cada decisión se apunta en el servidor (Worker → Cloudflare D1): un identificador al azar
   que no es de la persona, la decisión, la fecha y la versión de la política; **sin la IP**. Se conserva 12 meses.
5. **Sin identificadores no hay aviso**: las cuatro herramientas tienen su identificador en `src/datos/analitica.ts`
   (no son secretos: van en la página). Mientras estén vacíos, el aviso no aparece y la web sigue como hoy.
6. **Eventos** (lo que da «muchos datos»): una sola función manda cada evento a Umami siempre (sin cookies) y a las demás
   herramientas solo si su categoría está aceptada: clic en «Pide una demostración», configurador (país, número de
   módulos, tramo del total), pedido enviado, formulario enviado (solo el asunto), cambio de idioma. **Nunca** el nombre,
   el correo, el teléfono ni el texto del mensaje.
7. **Google Analytics 4** con su duración de cookie reducida a 13 meses y sin señales de Google para anuncios salvo que se
   acepte «Publicidad».
8. **Textos**: el pie deja de decir «estadísticas sin cookies»; la política de cookies enumera cada cookie (nombre,
   empresa, finalidad, duración), también la verificación antirrobots del formulario (necesaria); la de privacidad añade
   los destinatarios (Google, Microsoft, Meta, LinkedIn), la base (el consentimiento) y las transferencias fuera de
   Andorra y de la UE. Las duraciones exactas se copian de la documentación de cada proveedor al construir.

**No objetivos**: plataforma de consentimiento de terceros, cookies sin consentimiento, «seguir navegando» como aceptación.

**Lo que hace gerencia**: crear las cuentas y dar los cuatro identificadores (GA4 `G-…`, Clarity, píxel de Meta, socio de
LinkedIn); el asesor jurídico revisa las dos políticas antes de poner los identificadores.

## 18. Control de costes, paquete Obrador y paquete Despachos y gestorías — APROBADO el 14/11/2026

**Por qué**: gerencia quiere vender ya tres productos que salen de lo que el ERP hace hoy: el control de costes de compra
(que estaba escondido dentro de Compras y Productos), un paquete para obradores con tiendas y otro para despachos que
llevan las empresas de sus clientes. Cifras propuestas por Claude con el estudio de mercado y aprobadas por gerencia.

**Enfoques considerados**: el control de costes destacado dentro de Compras sin precio propio (descartado por gerencia:
«visto el ahorro, tendría que ser superior»), o como complemento de pago (elegido). Las gestorías, solo anunciadas sin
precio (descartado) o con precio y la etiqueta de desarrollo inminente (elegido). El Obrador, a la carta (descartado)
o como paquete en el configurador (elegido).

**Lo decidido**:
1. **Control de costes de compra**: módulo nuevo `costes`, **59 €/mes**, requiere Compras; en las empresas adicionales,
   al 50 % como todos. Disponibilidad igual que Compras (Andorra disponible, España inminente, resto a medida). La web
   explica con detalle lo que hace hoy (inventario del ERP del 14/11/2026): comparador de precios por proveedor y
   artículo (precio por kilo, litro o unidad; mejor proveedor y ahorro; cesta de pedidos al más barato; precios pagados,
   ofertas de tarifas y precios sospechosos), descuentos de proveedor y control de pedido, recepción y factura contra el
   precio prometido, y avisos de subidas en el cuadro de mando. Con recetas (Productos): coste vivo de cada receta. Con
   recetas y el TPV conectado (hoy HIOPOS): consumo teórico frente a lo comprado y margen por pieza. **No se promete**:
   avisos por correo, recuento de inventario, recargo de aduanas, otro TPV que HIOPOS.
2. **Paquete Obrador**: **299 €/mes** (Base, Compras, Productos, TPV y Recursos humanos, 5 usuarios; usuario adicional
   y personas en plantilla a la tarifa normal) y **329 €/mes con el control de costes**. En el configurador, el
   interruptor del paquete pasa a una elección: sin paquete, Completo u Obrador.
3. **Paquete Despachos y gestorías**: **249 €/mes**, con Contabilidad (la Base), Compras con lectura de facturas,
   Ventas, Fiscal y Nóminas, **10 empresas cliente y 5 usuarios** del despacho; empresa cliente adicional **9 €/mes**
   hasta **25**; nóminas **5 € por persona y mes**; más de 25 empresas, bajo propuesta. **Solo para despachos que
   llevan empresas de sus clientes.** Para Andorra, con la etiqueta «En desarrollo inminente y adaptación a medida del
   cliente» (el aislamiento entre empresas del ERP está por terminar, y es lo siguiente del ERP); en otros países, a
   medida. Va en una tarjeta en Precios y en Servicios, fuera del configurador, con «Pide una propuesta» (asunto
   `gestorias` en el formulario). Ningún texto dice «aislado» ni que los clientes no se ven entre sí.

**Lo que queda al constructor**: la redacción en los siete idiomas, el icono del control de costes y dónde va cada
bloque dentro de las páginas.

**Para el ERP** (no es de la web): vender el control de costes aparte obliga a que esas pantallas pidan su propia clave
(hoy las ve cualquiera con Compras). Se hará después del aislamiento entre empresas.

## 19. Textos legales con el modelo de la APDA — en curso (gerencia: «empieza con los textos legales», 14/11/2026)

**Por qué**: antes de poner los identificadores de las cuatro herramientas de cookies, el aviso legal y las políticas de
privacidad y de cookies tienen que decir con exactitud qué se trata, para qué, cuánto tiempo, quién más lo ve y dónde.

**Lo decidido**:
1. Estructura de la guía de la APDA «Ús de cookies, política de privadesa i avís legal», versión 4 (23/01/2024), anexos
   1 a 3, y lo útil de andornet.ad (el catalán prevalece, enlaces, responsabilidad, propiedad intelectual, ley aplicable).
2. Las tablas (cookies y proveedores) salen de `src/datos/legal.ts` y solo enseñan las herramientas con identificador:
   la web nunca dice que usa una herramienta que no usa.
3. Lo que no se pudo comprobar en la página oficial del proveedor lleva `verificado: false`, y una prueba impide activar
   esa herramienta hasta comprobarlo.
4. El asesor revisa `docs/legal/REVISION-TEXTOS-LEGALES.md` (catalán y castellano, con todas las herramientas y los
   puntos a confirmar), generado con `npm run revision-legal` de los mismos textos y datos. **Gerencia decidió el
   14/11/2026 publicarlos ya** («implementalo y ya lo modificaremos llegado el caso»): lo que diga el asesor se cambia
   después.
5. Plazo de los mensajes de quien no llega a ser cliente: 1 año desde el último contacto (gerencia, 14/11/2026).
