# Textos legales de synentor.com — para la revisión del asesor jurídico

Generado con `npm run revision-legal` desde los textos y datos de la web (no se edita a mano). Fecha de los textos:
14/11/2026. Modelo de partida: guía de la APDA «Ús de cookies, política de privadesa i avís legal», versión 4
(23/01/2024), anexos 1 a 3.

**Cómo se publica**: en la web, la tabla de cookies y la de proveedores solo enseñan las herramientas activas. Aquí salen
todas (Google Analytics, Microsoft Clarity, píxel de Meta y LinkedIn Insight Tag), para revisarlas antes de activarlas.
Las duraciones marcadas «(sin verificar)» no se han podido comprobar en la página oficial del proveedor: la web no deja
activar esa herramienta hasta comprobarlas.

**Activas en esta versión**: Google Analytics.

## Puntos que hay que confirmar

**Asesor jurídico**
1. Base del formulario de contacto: consentimiento (casilla) y, si se pide propuesta, medidas precontractuales.
2. Transferencias a Estados Unidos (Cloudflare, Resend, Microsoft, Umami, Google, Meta, LinkedIn): si el Marco de
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
8. Dónde guarda Microsoft 365 el correo de la empresa (centro de administración → Configuración de la organización →
   Ubicación de los datos); el texto dice «Unión Europea y Estados Unidos».
9. Región de la cuenta de Umami (Estados Unidos o Unión Europea); el texto dice «Estados Unidos y Alemania» (sus
    condiciones).

**Confirmado por gerencia (14/11/2026)**
- Plazo para los mensajes de quien no llega a ser cliente: **1 año** desde el último contacto.
- La base de datos de las pruebas de consentimiento (Cloudflare D1) se creó con la **jurisdicción de la Unión Europea**:
  los registros se guardan en la UE.

**Comprobado y su fuente** (búsqueda en las páginas oficiales del 14/11/2026; abrir cada una antes de activar):
- Google Analytics: `_ga` y `_ga_<ID>`; la web las limita a 395 días (unos 13 meses) con `cookie_expires`:
  https://support.google.com/analytics/answer/11397207 · https://developers.google.com/analytics/devguides/collection/ga4/cookie-usage
- Microsoft Clarity (nombres y finalidades; **duraciones sin verificar**):
  https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies
- Meta: `_fbp` 90 días (página de ayuda de Meta; `_fbc` y `fr` **sin verificar**):
  https://developers.facebook.com/documentation/ads-commerce/conversions-api/parameters/fbp-and-fbc ·
  https://www.facebook.com/privacy/policies/cookies/
- LinkedIn (tabla oficial; no dice qué cookies pone la Insight Tag en concreto): https://www.linkedin.com/legal/l/cookie-table
- Cloudflare (`__cf_bm`, `cf_clearance`): https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
- Registros de Workers: 3 días en el plan gratuito según una página y 7 según otra; el texto dice «hasta 7 días»:
  https://developers.cloudflare.com/workers/observability/logs/workers-logs/ · https://developers.cloudflare.com/observability/pricing/
- Resend guarda todos los datos en Estados Unidos (aunque envíe desde Irlanda): https://resend.com/docs/dashboard/domains/regions ·
  https://resend.com/security/gdpr
- Umami: sin cookies, cláusulas tipo, datos en Estados Unidos y Alemania: https://umami.is/dpa · https://umami.is/terms
- APDA: C/ Dr. Vilanova 15-17, planta -5, AD500 Andorra la Vella · https://www.apda.ad


## Català (prevalece)

### Avís legal

#### Qui n’és el titular

Aquest web, synentor.com, és de SYNENTOR, S.L.U., societat andorrana amb domicili a Avgda. Carlemany, 117, 3-1, AD700 Les Escaldes-Engordany (Andorra). NRT: en tràmit.

Per a qualsevol qüestió, escriu-nos a administracion@synentor.com o truca’ns al +376 692 069.

#### Per a què serveix aquest web

Informa dels nostres serveis de consultoria d’intel·ligència artificial i de vendes i dels nostres programes. Entrar-hi és gratuït i no cal registrar-se.

Al web no es compra ni es paga res. Els preus que s’hi mostren són orientatius i sense impostos: el que val és la proposta i el contracte que signem amb tu per escrit.

#### Com el pots fer servir

Qui fa servir el web és responsable de l’ús que en fa. No està permès:

- fer-lo servir contra la llei o contra els drets d’altres persones;
- intentar entrar als seus servidors, canviar-ne la configuració o saltar-se’n les mesures de seguretat;
- enviar pel formulari continguts il·legals o ofensius, publicitat que no hem demanat o dades d’altres persones sense el seu permís;
- mostrar-lo dins d’un altre web o copiar-lo de manera automàtica.

Si algú no compleix aquestes condicions, li podem impedir l’accés.

#### Responsabilitat

Vetllem perquè la informació sigui correcta i estigui al dia, però pot contenir errors o dades desactualitzades: els corregim tan bon punt els veiem. No responem dels danys que pugui causar l’ús de la informació del web, ni de les interrupcions per manteniment, avaries o causes alienes a nosaltres, tot i que prenem les mesures raonables per evitar-les.

#### Enllaços a altres webs

El web enllaça amb pàgines d’altres empreses i organismes. No les controlem ni responem del seu contingut, i enllaçar-les no vol dir que hi tinguem cap relació. Consulta’n les condicions pròpies.

#### Propietat intel·lectual i industrial

La marca i el logotip de Synentor, els textos, el disseny, les imatges i el codi d’aquest web són de SYNENTOR, S.L.U. o de qui ens ha donat permís per fer-los servir. Els pots veure i guardar-ne una còpia per al teu ús personal. Per a qualsevol altre ús (copiar-los, publicar-los, modificar-los o fer-los servir amb finalitats comercials) necessites el nostre permís per escrit.

#### Dades personals i galetes

Com tractem les dades que ens dones ho explica la política de privadesa, i quines galetes fem servir, la política de galetes.

#### Idiomes

El web és en català, castellà, anglès, francès, portuguès, italià i alemany. Si una traducció no diu el mateix que el text en català, val el català.

#### Llei aplicable i tribunals

Aquestes condicions es regeixen per la llei andorrana. Per a qualsevol conflicte són competents els tribunals del Principat d’Andorra, llevat que la llei et reconegui el dret d’anar a uns altres.

#### Canvis

Podem canviar aquest avís legal quan calgui. La data de dalt diu quan es va canviar per última vegada.

### Política de privadesa

#### Qui tracta les teves dades

El responsable és SYNENTOR, S.L.U., societat andorrana amb domicili a Avgda. Carlemany, 117, 3-1, AD700 Les Escaldes-Engordany (Andorra). NRT: en tràmit. Correu: administracion@synentor.com. Telèfon: +376 692 069.

No hem designat delegat de protecció de dades: per a qualsevol qüestió sobre les teves dades, escriu-nos a administracion@synentor.com.

#### Quines dades tractem, per a què i durant quant de temps

Només les que calen per a cada cosa:

- Formulari de contacte. Dades: nom, correu, assumpte i missatge, i l’empresa i el telèfon si els escrius. Per a què: respondre’t i, si ho demanes, preparar-te una proposta. Base: el teu consentiment, que dones en marcar la casella, i, si demanes una proposta, les mesures prèvies a un contracte. Termini: el missatge ens arriba per correu i el web no el guarda; el conservem 1 any des de l’últim contacte si no arribes a ser client i, si ho ets, mentre duri la relació i els terminis que exigeixi la llei.
- Comprovació antirobots del formulari (Cloudflare Turnstile). Dades: l’adreça IP i dades tècniques del navegador. Per a què: comprovar que el formulari l’envia una persona. Base: el nostre interès legítim a protegir el web de l’abús. Nosaltres no les guardem.
- Prova de la teva decisió sobre les galetes. Dades: un identificador a l’atzar que no t’identifica, la versió de la política, el que vas decidir i la data; mai la IP. Per a què: poder demostrar el teu consentiment. Base: l’obligació de poder-lo demostrar. Termini: 12 mesos.
- Registres tècnics de l’allotjament (Cloudflare). Dades: l’adreça IP, la data i l’hora, la pàgina demanada i els errors. Per a què: la seguretat i el bon funcionament del web. Base: el nostre interès legítim. Termini: fins a 7 dies.
- Estadístiques de visites (Umami). Sense galetes i sense dades que t’identifiquin: només xifres de conjunt, com les pàgines vistes, el país o el navegador.
- Galetes d’altres empreses, només si les acceptes: ho explica la política de galetes.
- Si ens escrius per correu o ens truques: les teves dades de contacte i el que ens expliquis, per respondre’t, amb la mateixa base i el mateix termini que el formulari.

#### Qui més veu les teves dades

No venem ni cedim les teves dades. Només les tracten, per encàrrec nostre, els proveïdors que fan funcionar el web i el correu, i les administracions quan la llei ho exigeix:

| Proveïdor | Per a què | On tracta les dades | Garantia | Herramienta |
|---|---|---|---|---|
| Cloudflare | Allotjament del web, comprovació antirobots del formulari, prova dels consentiments i registres tècnics. | La seva xarxa mundial, amb seu als Estats Units. Les proves de consentiment es guarden a la Unió Europea. | Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus. | siempre |
| Resend | Enviar a la nostra bústia el missatge del formulari. | Estats Units. | Clàusules contractuals tipus i Marc de Privadesa de Dades UE-EUA. | siempre |
| Microsoft | El correu de l’empresa, on rebem i guardem els missatges. | Unió Europea i Estats Units. | Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus. | siempre |
| Umami | Estadístiques de visites sense galetes. | Estats Units i Alemanya. | Clàusules contractuals tipus. | siempre |
| Google | Estadístiques de visites (Google Analytics), si les acceptes. | Estats Units i altres països. | Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus. | ga4 |
| Microsoft | Veure com es fa servir el web (Microsoft Clarity), si ho acceptes. | Estats Units. | Marc de Privadesa de Dades UE-EUA. | clarity |
| Meta | Mesurar i mostrar anuncis (píxel de Meta), si ho acceptes. | Irlanda i Estats Units. | Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus. | metaPixel |
| LinkedIn | Mesurar i mostrar anuncis (LinkedIn Insight Tag), si ho acceptes. | Estats Units. | Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus. | linkedin |

#### Dades fora d’Andorra

Alguns d’aquests proveïdors són dels Estats Units o hi tracten dades. Triem proveïdors adherits al Marc de Privadesa de Dades entre la Unió Europea i els Estats Units o que s’hi comprometen per contracte amb clàusules tipus. Tot i així, els Estats Units no ofereixen el mateix nivell de protecció que Andorra o la Unió Europea, i les seves autoritats podrien demanar accés a aquestes dades.

#### Els teus drets

Ens pots demanar accés a les teves dades, rectificar-les, suprimir-les, limitar-ne el tractament, endur-te-les (portabilitat) o oposar-te que les tractem. I pots retirar el teu consentiment quan vulguis, sense que això afecti el que s’ha fet abans.

Escriu-nos a administracion@synentor.com. Si no podem saber que ets tu, et demanarem un document que t’identifiqui, que només farem servir per a això i després esborrarem. Et respondrem en el termini que marca la llei.

Si creus que no hem atès bé els teus drets, pots reclamar davant l’Agència Andorrana de Protecció de Dades (apda.ad).

#### Seguretat

Protegim les teves dades amb mesures tècniques i organitzatives: connexió xifrada, accés només de qui ho necessita i proveïdors amb garanties de seguretat.

#### Menors

El web està pensat per a empreses i professionals. Si tens menys de 16 anys, no ens enviïs dades sense el permís del teu pare, la teva mare o el teu tutor.

#### Lleis que apliquem

La Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (LQPD) i, per a les persones de la Unió Europea, el Reglament general de protecció de dades (RGPD).

#### Canvis

Si canviem aquesta política, ho direm aquí amb la data nova. Si el canvi afecta una cosa que vas consentir, t’ho tornarem a preguntar.

### Política de galetes

#### Què són

Les galetes (cookies) són petits fitxers que un web guarda al teu navegador per recordar alguna cosa de la teva visita. Aquí també anomenem galetes altres maneres de guardar dades al navegador, com l’emmagatzematge local.

#### Les que fem servir sempre

Són les imprescindibles perquè el web funcioni o per recordar el que tries. No necessiten el teu consentiment.

| Galeta | Qui la posa | Per a què | Durada | Tipus | Herramienta |
|---|---|---|---|---|---|
| `lang` | Synentor | Recordar l’idioma que tries. | 1 any | Pròpia | — |
| `synentor_consentimiento` | Synentor | Guardar la teva decisió sobre les galetes. | 12 mesos | Pròpia | — |
| `synentor-franja-idioma` | Synentor | No tornar-te a mostrar l’avís d’idioma si l’has tancat (emmagatzematge local). | Fins que l’esborris | Pròpia | — |
| `__cf_bm` | Cloudflare | Seguretat: distingir les persones dels robots, només quan Cloudflare ho necessita. | 30 minuts | Pròpia | — |
| `cf_clearance` | Cloudflare | Seguretat: recordar que has superat una comprovació antirobots, només si Cloudflare te l’ha demanada. | 30 minuts | Pròpia | — |

#### Estadístiques sense galetes

Comptem les visites amb Umami, que no fa servir galetes ni guarda dades que t’identifiquin.

#### Les que només fem servir si les acceptes

N’hi ha de dos tipus: estadístiques, per saber com es fa servir el web i millorar-lo, i publicitat, per mesurar els nostres anuncis i mostrar-te anuncis de Synentor en altres webs. Mentre no les acceptis, el web no carrega aquestes eines.

| Galeta | Qui la posa | Per a què | Durada | Tipus | Herramienta |
|---|---|---|---|---|---|
| `_ga` | Google | Distingir els visitants per a les estadístiques. | 13 mesos | Pròpia | ga4 |
| `_ga_<ID>` | Google | Mantenir l’estat de la visita per a les estadístiques. | 13 mesos | Pròpia | ga4 |
| `_clck` | Microsoft | Guardar l’identificador de Clarity i les seves preferències, només per a aquest web. | 1 any **(sin verificar)** | Pròpia | clarity |
| `_clsk` | Microsoft | Unir en una sola gravació les pàgines d’una mateixa visita. | 1 dia **(sin verificar)** | Pròpia | clarity |
| `CLID` | Microsoft | Saber la primera vegada que Clarity va veure aquest navegador en qualsevol web que el faci servir. | 1 any **(sin verificar)** | D’una altra empresa | clarity |
| `ANONCHK` | Microsoft | Ús intern de Microsoft sobre l’identificador MUID; Clarity no el fa servir per a publicitat. | 10 minuts **(sin verificar)** | D’una altra empresa | clarity |
| `MR` | Microsoft | Saber si cal renovar l’identificador MUID. | 7 dies **(sin verificar)** | D’una altra empresa | clarity |
| `MUID` | Microsoft | Identificar el navegador als llocs de Microsoft. | 1 any **(sin verificar)** | D’una altra empresa | clarity |
| `SM` | Microsoft | Sincronitzar l’identificador MUID entre els dominis de Microsoft. | Fins que tanques el navegador **(sin verificar)** | D’una altra empresa | clarity |
| `_fbp` | Meta | Identificar el navegador per mesurar i mostrar anuncis de Meta. | 90 dies | Pròpia | metaPixel |
| `_fbc` | Meta | Guardar l’anunci de Meta pel qual has arribat. | 90 dies **(sin verificar)** | Pròpia | metaPixel |
| `fr` | Meta | Mostrar i mesurar anuncis de Meta. | 90 dies **(sin verificar)** | D’una altra empresa | metaPixel |
| `li_fat_id` | LinkedIn | Mesurar els resultats dels anuncis de LinkedIn. | 30 dies | Pròpia | linkedin |
| `li_sugr` | LinkedIn | Relacionar la visita amb membres de LinkedIn per a la publicitat. | 90 dies | D’una altra empresa | linkedin |
| `bcookie` | LinkedIn | Identificar el navegador per detectar abusos. | 1 any | D’una altra empresa | linkedin |
| `lidc` | LinkedIn | Triar el centre de dades de LinkedIn. | 1 dia | D’una altra empresa | linkedin |
| `UserMatchHistory` | LinkedIn | Sincronitzar identificadors per a la publicitat. | 30 dies | D’una altra empresa | linkedin |
| `AnalyticsSyncHistory` | LinkedIn | Registrar quan es va sincronitzar amb la galeta d’analítica de LinkedIn. | 30 dies | D’una altra empresa | linkedin |
| `lms_ads` | LinkedIn | Reconèixer membres de LinkedIn fora de LinkedIn per a la publicitat. | 30 dies | D’una altra empresa | linkedin |
| `lms_analytics` | LinkedIn | Reconèixer membres de LinkedIn fora de LinkedIn per a l’analítica. | 30 dies | D’una altra empresa | linkedin |

#### La teva decisió

La primera vegada t’ho preguntem amb un avís: les pots acceptar totes, rebutjar-les totes o triar. Les tres opcions estan igual d’a mà i cap no ve marcada.

Pots canviar d’opinió quan vulguis amb el botó «Configuració de galetes» del peu de pàgina. Si retires el consentiment, esborrem les galetes d’aquestes eines que són al nostre domini i el web les deixa de carregar; les que aquestes empreses posen al seu propi domini les pots esborrar des del navegador.

La teva decisió val 12 mesos; després t’ho tornem a preguntar. En guardem una prova sense la teva IP, com explica la política de privadesa.

#### Des del navegador

També pots bloquejar o esborrar les galetes des del teu navegador:

- Google Chrome (https://support.google.com/chrome/answer/95647)
- Mozilla Firefox (https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox)
- Safari (https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)
- Microsoft Edge (https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

#### Revisió

Revisem aquesta política com a mínim un cop l’any i sempre que canviem les eines del web.

## Castellano

### Aviso legal

#### Quién es el titular

Esta web, synentor.com, es de SYNENTOR, S.L.U., sociedad andorrana con domicilio en Avgda. Carlemany, 117, 3-1, AD700 Les Escaldes-Engordany (Andorra). NRT: en trámite.

Para cualquier cuestión, escríbenos a administracion@synentor.com o llámanos al +376 692 069.

#### Para qué sirve esta web

Informa de nuestros servicios de consultoría de inteligencia artificial y de ventas y de nuestros programas. Entrar es gratis y no hace falta registrarse.

En la web no se compra ni se paga nada. Los precios que se enseñan son orientativos y sin impuestos: lo que vale es la propuesta y el contrato que firmamos contigo por escrito.

#### Cómo puedes usarla

Quien usa la web es responsable de cómo la usa. No está permitido:

- usarla contra la ley o contra los derechos de otras personas;
- intentar entrar en sus servidores, cambiar su configuración o saltarse sus medidas de seguridad;
- enviar por el formulario contenidos ilegales u ofensivos, publicidad que no hemos pedido o datos de otras personas sin su permiso;
- mostrarla dentro de otra web o copiarla de forma automática.

Si alguien no cumple estas condiciones, podemos impedirle el acceso.

#### Responsabilidad

Cuidamos que la información sea correcta y esté al día, pero puede contener errores o datos desactualizados: los corregimos en cuanto los vemos. No respondemos de los daños que pueda causar el uso de la información de la web, ni de las interrupciones por mantenimiento, averías o causas ajenas a nosotros, aunque tomamos las medidas razonables para evitarlas.

#### Enlaces a otras webs

La web enlaza con páginas de otras empresas y organismos. No las controlamos ni respondemos de su contenido, y enlazarlas no quiere decir que tengamos relación con ellas. Consulta sus propias condiciones.

#### Propiedad intelectual e industrial

La marca y el logotipo de Synentor, los textos, el diseño, las imágenes y el código de esta web son de SYNENTOR, S.L.U. o de quien nos ha dado permiso para usarlos. Puedes verlos y guardar una copia para tu uso personal. Para cualquier otro uso (copiarlos, publicarlos, modificarlos o usarlos con fines comerciales) necesitas nuestro permiso por escrito.

#### Datos personales y cookies

Cómo tratamos los datos que nos das lo explica la política de privacidad, y qué cookies usamos, la política de cookies.

#### Idiomas

La web está en catalán, castellano, inglés, francés, portugués, italiano y alemán. Si una traducción no dice lo mismo que el texto en catalán, vale el catalán.

#### Ley aplicable y tribunales

Estas condiciones se rigen por la ley andorrana. Para cualquier conflicto son competentes los tribunales del Principado de Andorra, salvo que la ley te reconozca el derecho a acudir a otros.

#### Cambios

Podemos cambiar este aviso legal cuando haga falta. La fecha de arriba dice cuándo se cambió por última vez.

### Política de privacidad

#### Quién trata tus datos

El responsable es SYNENTOR, S.L.U., sociedad andorrana con domicilio en Avgda. Carlemany, 117, 3-1, AD700 Les Escaldes-Engordany (Andorra). NRT: en trámite. Correo: administracion@synentor.com. Teléfono: +376 692 069.

No hemos designado delegado de protección de datos: para cualquier cuestión sobre tus datos, escríbenos a administracion@synentor.com.

#### Qué datos tratamos, para qué y durante cuánto tiempo

Solo los que hacen falta para cada cosa:

- Formulario de contacto. Datos: nombre, correo, asunto y mensaje, y la empresa y el teléfono si los escribes. Para qué: responderte y, si lo pides, prepararte una propuesta. Base: tu consentimiento, que das al marcar la casilla, y, si pides una propuesta, las medidas previas a un contrato. Plazo: el mensaje nos llega por correo y la web no lo guarda; lo conservamos 1 año desde el último contacto si no llegas a ser cliente y, si lo eres, mientras dure la relación y los plazos que exija la ley.
- Comprobación antirrobot del formulario (Cloudflare Turnstile). Datos: la dirección IP y datos técnicos del navegador. Para qué: comprobar que el formulario lo envía una persona. Base: nuestro interés legítimo en proteger la web del abuso. Nosotros no los guardamos.
- Prueba de tu decisión sobre las cookies. Datos: un identificador al azar que no te identifica, la versión de la política, lo que decidiste y la fecha; nunca la IP. Para qué: poder demostrar tu consentimiento. Base: la obligación de poder demostrarlo. Plazo: 12 meses.
- Registros técnicos del alojamiento (Cloudflare). Datos: la dirección IP, la fecha y la hora, la página pedida y los errores. Para qué: la seguridad y el buen funcionamiento de la web. Base: nuestro interés legítimo. Plazo: hasta 7 días.
- Estadísticas de visitas (Umami). Sin cookies y sin datos que te identifiquen: solo cifras de conjunto, como las páginas vistas, el país o el navegador.
- Cookies de otras empresas, solo si las aceptas: lo explica la política de cookies.
- Si nos escribes por correo o nos llamas: tus datos de contacto y lo que nos cuentes, para responderte, con la misma base y el mismo plazo que el formulario.

#### Quién más ve tus datos

No vendemos ni cedemos tus datos. Solo los tratan, por encargo nuestro, los proveedores que hacen funcionar la web y el correo, y las administraciones cuando la ley lo exige:

| Proveedor | Para qué | Dónde trata los datos | Garantía | Herramienta |
|---|---|---|---|---|
| Cloudflare | Alojamiento de la web, comprobación antirrobot del formulario, prueba de los consentimientos y registros técnicos. | Su red mundial, con sede en Estados Unidos. Las pruebas de consentimiento se guardan en la Unión Europea. | Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo. | siempre |
| Resend | Enviar a nuestro buzón el mensaje del formulario. | Estados Unidos. | Cláusulas contractuales tipo y Marco de Privacidad de Datos UE-EE. UU. | siempre |
| Microsoft | El correo de la empresa, donde recibimos y guardamos los mensajes. | Unión Europea y Estados Unidos. | Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo. | siempre |
| Umami | Estadísticas de visitas sin cookies. | Estados Unidos y Alemania. | Cláusulas contractuales tipo. | siempre |
| Google | Estadísticas de visitas (Google Analytics), si las aceptas. | Estados Unidos y otros países. | Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo. | ga4 |
| Microsoft | Ver cómo se usa la web (Microsoft Clarity), si lo aceptas. | Estados Unidos. | Marco de Privacidad de Datos UE-EE. UU. | clarity |
| Meta | Medir y mostrar anuncios (píxel de Meta), si lo aceptas. | Irlanda y Estados Unidos. | Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo. | metaPixel |
| LinkedIn | Medir y mostrar anuncios (LinkedIn Insight Tag), si lo aceptas. | Estados Unidos. | Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo. | linkedin |

#### Datos fuera de Andorra

Algunos de estos proveedores son de Estados Unidos o tratan datos allí. Elegimos proveedores adheridos al Marco de Privacidad de Datos entre la Unión Europea y Estados Unidos o que se comprometen por contrato con cláusulas tipo. Aun así, Estados Unidos no ofrece el mismo nivel de protección que Andorra o la Unión Europea, y sus autoridades podrían pedir acceso a esos datos.

#### Tus derechos

Puedes pedirnos acceso a tus datos, rectificarlos, suprimirlos, limitar su tratamiento, llevártelos (portabilidad) u oponerte a que los tratemos. Y puedes retirar tu consentimiento cuando quieras, sin que eso afecte a lo hecho antes.

Escríbenos a administracion@synentor.com. Si no podemos saber que eres tú, te pediremos un documento que te identifique, que solo usaremos para eso y borraremos después. Te responderemos en el plazo que marca la ley.

Si crees que no hemos atendido bien tus derechos, puedes reclamar ante la Agencia Andorrana de Protección de Datos (apda.ad).

#### Seguridad

Protegemos tus datos con medidas técnicas y organizativas: conexión cifrada, acceso solo de quien lo necesita y proveedores con garantías de seguridad.

#### Menores

La web está pensada para empresas y profesionales. Si tienes menos de 16 años, no nos envíes datos sin el permiso de tu padre, tu madre o tu tutor.

#### Leyes que aplicamos

La Llei 29/2021, del 28 de octubre, cualificada de protección de datos personales (LQPD) y, para las personas de la Unión Europea, el Reglamento general de protección de datos (RGPD).

#### Cambios

Si cambiamos esta política, lo diremos aquí con la fecha nueva. Si el cambio afecta a algo que consentiste, te lo volveremos a preguntar.

### Política de cookies

#### Qué son

Las cookies son pequeños ficheros que una web guarda en tu navegador para recordar algo de tu visita. Aquí también llamamos cookies a otras formas de guardar datos en el navegador, como el almacenamiento local.

#### Las que usamos siempre

Son las imprescindibles para que la web funcione o para recordar lo que eliges. No necesitan tu consentimiento.

| Cookie | Quién la pone | Para qué | Duración | Tipo | Herramienta |
|---|---|---|---|---|---|
| `lang` | Synentor | Recordar el idioma que eliges. | 1 año | Propia | — |
| `synentor_consentimiento` | Synentor | Guardar tu decisión sobre las cookies. | 12 meses | Propia | — |
| `synentor-franja-idioma` | Synentor | No volver a enseñarte el aviso de idioma si lo has cerrado (almacenamiento local). | Hasta que la borres | Propia | — |
| `__cf_bm` | Cloudflare | Seguridad: distinguir a las personas de los robots, solo cuando Cloudflare lo necesita. | 30 minutos | Propia | — |
| `cf_clearance` | Cloudflare | Seguridad: recordar que has superado una comprobación antirrobot, solo si Cloudflare te la ha pedido. | 30 minutos | Propia | — |

#### Estadísticas sin cookies

Contamos las visitas con Umami, que no usa cookies ni guarda datos que te identifiquen.

#### Las que solo usamos si las aceptas

Son de dos tipos: estadísticas, para saber cómo se usa la web y mejorarla, y publicidad, para medir nuestros anuncios y mostrarte anuncios de Synentor en otras webs. Mientras no las aceptes, la web no carga estas herramientas.

| Cookie | Quién la pone | Para qué | Duración | Tipo | Herramienta |
|---|---|---|---|---|---|
| `_ga` | Google | Distinguir a los visitantes para las estadísticas. | 13 meses | Propia | ga4 |
| `_ga_<ID>` | Google | Mantener el estado de la visita para las estadísticas. | 13 meses | Propia | ga4 |
| `_clck` | Microsoft | Guardar el identificador de Clarity y sus preferencias, solo para esta web. | 1 año **(sin verificar)** | Propia | clarity |
| `_clsk` | Microsoft | Unir en una sola grabación las páginas de una misma visita. | 1 día **(sin verificar)** | Propia | clarity |
| `CLID` | Microsoft | Saber la primera vez que Clarity vio este navegador en cualquier web que lo use. | 1 año **(sin verificar)** | De otra empresa | clarity |
| `ANONCHK` | Microsoft | Uso interno de Microsoft sobre el identificador MUID; Clarity no lo usa para publicidad. | 10 minutos **(sin verificar)** | De otra empresa | clarity |
| `MR` | Microsoft | Saber si hay que renovar el identificador MUID. | 7 días **(sin verificar)** | De otra empresa | clarity |
| `MUID` | Microsoft | Identificar el navegador en los sitios de Microsoft. | 1 año **(sin verificar)** | De otra empresa | clarity |
| `SM` | Microsoft | Sincronizar el identificador MUID entre los dominios de Microsoft. | Hasta que cierras el navegador **(sin verificar)** | De otra empresa | clarity |
| `_fbp` | Meta | Identificar el navegador para medir y mostrar anuncios de Meta. | 90 días | Propia | metaPixel |
| `_fbc` | Meta | Guardar el anuncio de Meta por el que has llegado. | 90 días **(sin verificar)** | Propia | metaPixel |
| `fr` | Meta | Mostrar y medir anuncios de Meta. | 90 días **(sin verificar)** | De otra empresa | metaPixel |
| `li_fat_id` | LinkedIn | Medir los resultados de los anuncios de LinkedIn. | 30 días | Propia | linkedin |
| `li_sugr` | LinkedIn | Relacionar la visita con miembros de LinkedIn para la publicidad. | 90 días | De otra empresa | linkedin |
| `bcookie` | LinkedIn | Identificar el navegador para detectar abusos. | 1 año | De otra empresa | linkedin |
| `lidc` | LinkedIn | Elegir el centro de datos de LinkedIn. | 1 día | De otra empresa | linkedin |
| `UserMatchHistory` | LinkedIn | Sincronizar identificadores para la publicidad. | 30 días | De otra empresa | linkedin |
| `AnalyticsSyncHistory` | LinkedIn | Registrar cuándo se sincronizó con la cookie de analítica de LinkedIn. | 30 días | De otra empresa | linkedin |
| `lms_ads` | LinkedIn | Reconocer a miembros de LinkedIn fuera de LinkedIn para la publicidad. | 30 días | De otra empresa | linkedin |
| `lms_analytics` | LinkedIn | Reconocer a miembros de LinkedIn fuera de LinkedIn para la analítica. | 30 días | De otra empresa | linkedin |

#### Tu decisión

La primera vez te lo preguntamos con un aviso: puedes aceptarlas todas, rechazarlas todas o elegir. Las tres opciones están igual de a mano y ninguna viene marcada.

Puedes cambiar de opinión cuando quieras con el botón «Configuración de cookies» del pie de página. Si retiras el consentimiento, borramos las cookies de esas herramientas que están en nuestro dominio y la web deja de cargarlas; las que esas empresas ponen en su propio dominio puedes borrarlas desde el navegador.

Tu decisión vale 12 meses; después te lo volvemos a preguntar. Guardamos una prueba de ella sin tu IP, como explica la política de privacidad.

#### Desde el navegador

También puedes bloquear o borrar las cookies desde tu navegador:

- Google Chrome (https://support.google.com/chrome/answer/95647)
- Mozilla Firefox (https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox)
- Safari (https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)
- Microsoft Edge (https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

#### Revisión

Revisamos esta política al menos una vez al año y siempre que cambiamos las herramientas de la web.
