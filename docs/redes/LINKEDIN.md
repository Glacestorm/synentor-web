# La página de empresa de Synentor en LinkedIn

Textos e imágenes para la página de empresa (15/11/2026). Idea: **no parecer «una tecnológica más»**. Synentor nació
gestionando un obrador con tiendas en Andorra; quien abre la página tiene que pensar «estos saben lo que es llevar una
empresa» antes que «otro software». Por eso:

- portada clara y cálida (el oro de la marca, las montañas de Andorra y el anillo del símbolo como un sol), no la pantalla
  oscura con redes de puntos de casi todas las tecnológicas;
- sector «Servicios y consultoría empresarial», no «Desarrollo de software»;
- los mismos mensajes que la web, con las mismas reglas: nada que el programa no haga hoy, ningún cliente ni cifra
  inventados (el único dato, el del portal del empleado, es el medido que ya publica la web), sin «único» ni «el mejor».

Las cifras de precio que salen aquí son las de `src/lib/precios/tarifa.ts` (la Base, 149 € al mes con 5 usuarios): si la
tarifa cambia, se cambian también aquí.

## 1. Imágenes

| Imagen | Fichero | Medida |
|---|---|---|
| Logotipo | `public/marca/simbol-cercle-perfecte.png` (el que ya tiene la página) | 512 × 512 (LinkedIn recomienda 400 × 400, mínimo 268 × 268) |
| Portada, en castellano | `docs/redes/portada-linkedin-es.png` | 4200 × 700 (la medida que da la ayuda de LinkedIn) |
| Portada, en catalán (de reserva) | `docs/redes/portada-linkedin-ca.png` | 4200 × 700 |

LinkedIn tiene **una sola portada** para todos los idiomas: la castellana, si la página está en castellano. El logotipo tapa
la esquina de abajo a la izquierda y en el móvil la portada se recorta por los lados: por eso el texto va en el centro.

LinkedIn pone el logotipo sobre un **cuadro blanco** (rellena de blanco lo transparente). Para que ese cuadro no se vea,
la portada lleva una niebla blanca en el valle de la izquierda: debajo del logotipo es blanco puro (`#ffffff`), como el
cuadro y como la página, y el paisaje aparece poco a poco hacia la derecha (15/11/2026, a petición de gerencia). Si se
cambia la portada, esa esquina tiene que seguir siendo blanca.

La portada sale de `docs/redes/linkedin-portada.html` (con la tipografía Manrope de la web): para cambiarla, se edita ese
fichero y se captura a 4200 × 700 con el navegador (`?idioma=es` o `?idioma=ca`).

## 2. Los datos de la página (Editar página → Información de la página / Información)

| Campo | Valor |
|---|---|
| Nombre | `Synentor` (la marca; la razón social va en la descripción) |
| URL pública | hoy `linkedin.com/company/145468024/` (la que enlaza la web, por su número, que no cambia). Se puede añadir `linkedin.com/company/synentor`, si está libre: el número sigue funcionando |
| Sitio web | `https://synentor.com` |
| Sector | **Servicios y consultoría empresarial** |
| Tamaño de la empresa | el real |
| Tipo de empresa | Empresa privada |
| Año de fundación | 2026 (la sociedad está constituida; el NRT, en trámite) |
| Ubicación | Avgda. Carlemany, 117, 3-1 · AD700 Les Escaldes-Engordany · Andorra (la dirección que publica la web) |
| Botón | «Contactar» → `https://synentor.com/es/contacto/` |

### Eslogan (máximo 120 caracteres)

**LinkedIn no ofrece el catalán** entre los idiomas de una página (comprobado por gerencia el 15/11/2026): la página va en
castellano, con el inglés como segundo idioma (Editar página → «Gestionar idiomas»). El catalán queda para la web y, si
se quiere, para alguna publicación.

Castellano (107):

```text
Nació gestionando un obrador de Andorra. Gestión, nóminas e IA para tu empresa, con los precios a la vista.
```

Inglés (107):

```text
Born running a bakery business in Andorra. Management software, payroll and AI, with prices in plain sight.
```

### Descripción («Acerca de», máximo 2.000 caracteres)

Castellano:

```text
Synentor no nació en Silicon Valley. Nació gestionando un obrador con tiendas, en Andorra: turnos, facturas de proveedores, nóminas, la CASS, el IGI y los bancos de cada día. Lo que funcionó allí es lo que ofrecemos hoy.

Synentor Suite ERP-CRM. La gestión entera de la empresa, hecha para Andorra: contabilidad con el plan contable andorrano, tesorería y conciliación con los ficheros de cualquier banco, compras que se leen solas, ventas y CRM, recursos humanos y nóminas de Andorra, fiscal (IGI, IS) y jurídico. Muchas empresas en una sola instalación, cada una aislada de las demás.

MUV. El cerebro operativo de la empresa: mapas de conocimiento y tareas con responsables, fechas y dependencias.

Consultoría de IA y ventas. Diagnóstico, formación, asistentes y automatizaciones, y trabajos de IA a medida según tu presupuesto.

Cómo trabajamos:
• Que el trabajo que se repite lo haga el programa, y las personas, lo que importa.
• Los documentos de las personas se leen con una IA que funciona en tus instalaciones.
• Precios publicados: en synentor.com calculas el tuyo antes de hablar con nadie.
• Decimos lo que el programa hace hoy y lo que todavía no.

En España, la nómina y los convenios colectivos están en desarrollo inminente, con adaptación a medida del cliente.

SYNENTOR, S.L.U. · Les Escaldes-Engordany (Andorra) · admin@synentor.com
```

Inglés:

```text
Synentor wasn't born in Silicon Valley. It was born running a bakery with shops in Andorra: shifts, supplier invoices, payroll, CASS social security, IGI tax and the banks, every single day. What worked there is what we offer today.

Synentor Suite ERP-CRM. The whole management of a company, built for Andorra: accounting with the Andorran chart of accounts, treasury and reconciliation with any bank's files, purchase invoices that read themselves, sales and CRM, HR and Andorran payroll, tax (IGI, corporate tax) and legal. Many companies in a single installation, each one isolated from the others.

MUV. The company's operational brain: knowledge maps and tasks with owners, dates and dependencies.

AI and sales consulting. Assessment, training, assistants and automations, plus custom AI work to fit your budget.

How we work:
• The software does the repetitive work, so people can do what matters.
• Personal documents are read by an AI that runs on your own premises.
• Published prices: on synentor.com you can work out yours before talking to anyone.
• We say what the software does today, and what it doesn't do yet.

In Spain, payroll and collective agreements are in imminent development, with custom adaptation for each client.

SYNENTOR, S.L.U. · Les Escaldes-Engordany (Andorra) · admin@synentor.com
```

### Especialidades (máximo 20; se escriben una a una)

```text
Inteligencia artificial
Consultoría de IA
Consultoría de ventas
ERP
CRM
Contabilidad
Plan contable andorrano
Nóminas de Andorra
CASS
IGI
Conciliación bancaria
Lectura automática de facturas
Prevención del blanqueo
Gestión del conocimiento
IA privada
Multiempresa
Automatización
Gestorías
Pymes
Andorra
```

## 2 bis. La página de servicios (publicada el 15/11/2026)

LinkedIn solo deja elegir servicios de su lista (hasta 10). Los publicados: Consultoría empresarial, Consultoría de
gestión, Planificación estratégica, Formación, Generación de contactos, Elaboración de informes de datos, Marketing
digital, Desarrollo de software personalizado, Desarrollo web y Diseño web. En la lista de LinkedIn no hay nada de ventas
(salvo «Generación de contactos»), transformación digital, automatización ni energía. Ni «Contabilidad» ni «Recursos
humanos»: Synentor da el programa, no lleva la contabilidad ni las nóminas de nadie.

- **Ubicación**: Escaldes-Engordany y «Ofrecemos servicios a distancia».
- **Precios**: «Consultar precios». LinkedIn solo admite una tarifa por hora y Synentor no tiene ninguna aprobada (sus
  precios son cuotas al mes, proyectos y la jornada de implantación); una tarifa por hora la decide gerencia y, si se pone,
  va también a `src/lib/precios/tarifa.ts`.
- **Mensajes**: con los servicios publicados, los mensajes de la página quedan activados y alguien tiene que contestarlos.

Resumen (máximo 500 caracteres; este tiene 499):

```text
Ayudamos a empresas de Andorra, España y otros países a dedicar menos tiempo a lo que se repite: consultoría de IA y ventas, con software de gestión propio (Synentor Suite ERP-CRM y MUV). Diagnóstico, formación, asistentes, automatizaciones y trabajos de IA a medida según tu presupuesto. Implantamos el programa, cargamos los datos del anterior y formamos al equipo. Nació gestionando un obrador con tiendas en Andorra. Precios publicados en synentor.com: calcula el tuyo antes de hablar con nadie.
```

### Ejemplos de trabajo («Carga ejemplos de tu trabajo»)

Capturas reales a 1200 × 627 (en alta resolución): tres de synentor.com y una de un cliente. **Nunca** capturas del
programa con datos de una empresa real, ni pantallas inventadas. El campo «Cargo laboral» de LinkedIn es el título (58
caracteres como mucho).

| Imagen | Título | Enlace |
|---|---|---|
| Portada de synentor.com | Web de Synentor: diseño y desarrollo propios | `https://synentor.com/es/` |
| Calculadora de precios (Andorra) | Precios a la vista: calcula el tuyo | `https://synentor.com/es/precios/` |
| Página de servicios | Todo lo que hacemos, sin letra pequeña | `https://synentor.com/es/servicios/` |
| Portada de flytoandorra.com | FlytoAndorra: portal para llegar a Andorra por aire | `https://flytoandorra.com/` |

**FlytoAndorra** la hizo Synentor y el cliente está de acuerdo en enseñarla (gerencia, 15/11/2026). No es la web de un
helipuerto: es un portal independiente de información («No somos operador de ningún aeropuerto, heliport ni aerolínea»).
Descripción (473 caracteres), comprobada contra la web ese día:

```text
Diseño y creación de flytoandorra.com, hecho por Synentor: un portal independiente para llegar a Andorra por aire. Eliges el aeropuerto de origen (18, de Barcelona a Londres o París) y ves la distancia, el tiempo por carretera y las opciones: avión, helicóptero, jet privado, bus o traslado. Con el tiempo, las noticias, la agenda, el esquí, un blog, un directorio de socios y espacios de patrocinio por aeropuerto. En cuatro idiomas: castellano, catalán, francés e inglés.
```

## 3. Las tres primeras publicaciones

Una por semana, mejor por la mañana de martes a jueves. La primera, con la imagen vertical
`docs/redes/linkedin-publicacion-1.png` (1080 × 1350, la idea de la portada en el formato que más ocupa en el móvil;
sale de `docs/redes/linkedin-publicacion-1.html`). La portada (4200 × 700) en el muro saldría como una tira fina.

### 1. Presentación

```text
Synentor no nació en Silicon Valley. Nació en un obrador con tiendas, en Andorra.

Se construyó allí, con el trabajo de cada día: turnos, facturas de proveedores, nóminas, la CASS, el IGI y los bancos.

Hoy es esto:
→ Synentor Suite ERP-CRM: contabilidad con el plan andorrano, bancos, compras que se leen solas, ventas, nóminas de Andorra, fiscal y jurídico.
→ MUV: el cerebro operativo de la empresa, con tareas, responsables y fechas.
→ Consultoría de IA y ventas, con trabajos a medida según tu presupuesto.

Y con los precios a la vista: en synentor.com calculas el tuyo antes de hablar con nadie.

Si llevas una empresa en Andorra, nos encantará enseñártelo.

#Andorra #empresa #IA
```

### 2. Los precios, a la vista

```text
¿Cuánto cuesta un programa de gestión? En muchos, el precio llega después de varias reuniones.

Nosotros preferimos que lo veas antes. En synentor.com/es/precios eliges los módulos y cuántas personas lo usarán, y sale lo que pagarías al mes, sin impuestos.

La Base, con contabilidad, bancos y cuadro de mando, cuesta 149 € al mes con 5 usuarios incluidos. El resto, a la carta.

Sin sorpresas: si algo todavía no lo hace el programa, la web lo dice.

#Andorra #pymes #transparencia
```

### 3. Las personas primero

```text
Casi 8 de cada 10.

En el obrador donde nació Synentor, al segundo mes casi 8 de cada 10 personas que trabajaron el mes entero ya fichaban desde el portal del empleado.

Detrás del portal: la ficha y los contratos, el alta en la CASS, la nómina y el IRPF de Andorra, las vacaciones, los horarios y los finiquitos. Todo conectado con la contabilidad.

Y los documentos de las personas se leen con una IA que funciona en la propia empresa.

#Andorra #RRHH #nóminas
```

### 4. Un proyecto: FlytoAndorra

```text
Nuevo proyecto: flytoandorra.com.

Hemos diseñado y creado FlytoAndorra, un portal independiente para llegar a Andorra por aire.

Eliges tu aeropuerto de origen (18, de Barcelona y Toulouse a Londres, París o las Baleares) y ves la distancia, el tiempo por carretera y las formas de llegar: avión, helicóptero, jet privado, bus o traslado. Además, el tiempo, las noticias, la agenda, el esquí, un blog y un directorio de socios. En castellano, catalán, francés e inglés.

Gracias al equipo de FlytoAndorra por la confianza.

¿Necesitas una web así? synentor.com/es/servicios/

#Andorra #DiseñoWeb
```

## 4. Vincularla

1. **De LinkedIn a la web**: el sitio web y el botón «Contactar» de la tabla de arriba.
2. **De la web a LinkedIn**: el pie de todas las páginas, en los siete idiomas, enlaza a
   `https://www.linkedin.com/company/145468024/` (15/11/2026; el dato está en `src/datos/empresa.ts`).
3. **Los perfiles personales**: en «Experiencia», elegir «Synentor» de la lista (no escribirlo a mano): así sale el
   logotipo y la persona aparece en la página.
4. **La Insight Tag** (opcional, para medir visitas que llegan de anuncios): guía de puesta en marcha, §9.4. La web ya
   la carga solo con el consentimiento del visitante.
5. **La verificación de pago** («Verificar con Premium»): no compensa con una página que empieza.
