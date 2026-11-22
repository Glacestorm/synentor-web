// Textos en catalán (idioma principal). Reglas: nada que el producto no haga hoy (diseño §6); «en desarrollo inminente
// y adaptación a medida del cliente» solo donde el §7.0 lo dice; ningún precio escrito a mano (los pone la plantilla
// desde la tarifa con {marcadores}).
export const ca = {
  meta: {
    marca: 'Synentor',
    lema: 'La teva empresa, connectada.',
    descripcion:
      'Consultoria d’IA i vendes amb programari propi fet a Andorra: Synentor Suite ERP-CRM multiempresa, MUV i treballs d’IA a mida.',
  },
  nav: {
    inicio: 'Inici',
    servicios: 'Serveis',
    precios: 'Preus',
    contacto: 'Contacte',
    demo: 'Demana una demostració',
    idioma: 'Idioma',
    menu: 'Menú',
    saltar: 'Vés al contingut',
  },
  franjaIdioma: {
    /** El nombre de este idioma tal como se escribe dentro de una frase (sustituye a {idioma}). */
    idioma: 'català',
    texto: 'Vols veure aquesta pàgina en {idioma}?',
    aceptar: 'Sí, canvia',
    cerrar: 'No, gràcies',
  },
  pie: {
    empresa: 'Empresa',
    legal: 'Legal',
    avisoLegal: 'Avís legal',
    privacidad: 'Privacitat',
    cookies: 'Galetes',
    nrt: 'NRT en tràmit',
    estadisticas: 'Estadístiques de visites sense galetes (Cloudflare Web Analytics).',
    linkedin: 'Synentor a LinkedIn (s’obre en una pestanya nova)',
  },
  cookiesAviso: {
    titulo: 'Galetes',
    aviso: '{empresas} fan servir galetes per {finalidades}. Només s’activen si les acceptes. Pots rebutjar-les o triar-les, i canviar-ho quan vulguis amb el botó de galetes. Les dades poden sortir d’Andorra i de la Unió Europea.',
    y: ' i ',
    politica: 'Política de galetes',
    aceptar: 'Acceptar-les totes',
    rechazar: 'Rebutjar-les totes',
    configurar: 'Configurar',
    guardar: 'Desar la tria',
    siempre: 'Sempre actives',
    flotante: 'Configuració de galetes',
    necesarias: { nombre: 'Necessàries', texto: 'L’idioma que tries (galeta «lang», 1 any), la teva decisió sobre les galetes («synentor_consentimiento», 12 mesos) i la verificació antirobots del formulari de contacte (Cloudflare). No es poden desactivar.' },
    estadisticas: { nombre: 'Estadístiques', texto: 'Quines pàgines es visiten i com s’hi navega, per millorar la web. Clarity grava la sessió amb el que s’escriu tapat.', finalidad: 'mesurar les visites' },
    publicidad: { nombre: 'Publicitat', texto: 'Per mostrar anuncis de Synentor a qui ja ha visitat la web i saber si funcionen.', finalidad: 'mostrar-te anuncis de Synentor en altres webs' },
    herramientas: {
      ga4: 'Google Analytics (Google): galetes «_ga», fins a 13 mesos.',
      clarity: 'Microsoft Clarity (Microsoft): galetes «_clck», 1 any, i «_clsk», 1 dia.',
      metaPixel: 'Píxel de Meta (Meta Platforms): galeta «_fbp», 90 dies, i les de Meta al seu domini.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): galetes de LinkedIn al seu domini, fins a 1 any.',
    },
  },
  estados: {
    disponible: 'Disponible',
    inminente: 'En desenvolupament imminent',
    a_medida: 'A mida',
    inminenteLargo: 'En desenvolupament imminent i adaptació a mida del client',
  },
  inicio: {
    titulo: 'Consultoria d’IA i ERP-CRM a Andorra, Espanya i Europa',
    descripcion:
      'ERP-CRM multiempresa fet a Andorra, MUV i consultoria d’IA i vendes per a Andorra, Espanya i Europa. Mira què hi ha disponible al teu país, mòdul a mòdul.',
    portada: {
      antetitulo: 'Consultoria d’IA i vendes · Programari propi fet a Andorra',
      titulo: 'La teva empresa, connectada.',
      subtitulo:
        'Comptabilitat, nòmines, compres, vendes i tràmits en un sol lloc. Amb una IA que fa la feina repetitiva i una consultoria que t’acompanya.',
      botonDemo: 'Demana una demostració',
      botonPrecio: 'Calcula el teu preu',
      nota: 'Des de {base} al mes · {usuarios} usuaris inclosos · sense impostos',
      animacion: { pausa: 'Atura l’animació', reanuda: 'Reprèn l’animació' },
      nodos: { compras: 'Compres', ventas: 'Vendes i CRM', rrhh: 'RRHH', contabilidad: 'Comptabilitat', bancos: 'Bancs', muv: 'MUV' },
    },
    problema: {
      titulo: 'Massa programes. Massa fulls de càlcul. Massa feina repetida.',
      puntos: [
        'Factures que algú ha de teclejar una a una.',
        'Nòmines i CASS que depenen d’una sola persona.',
        'Bancs que no quadren fins a final de mes.',
        'Lleis que canvien al BOPA sense que te n’adonis.',
      ],
      cierre: 'Synentor ho posa tot al mateix lloc i fa per tu la feina que es repeteix.',
    },
    pilares: {
      titulo: 'Tres maneres de fer créixer la teva empresa',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'La gestió sencera de l’empresa, feta per a Andorra: comptabilitat amb el pla andorrà, tresoreria, compres, vendes i CRM, recursos humans, fiscal i jurídic.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'El cervell operatiu de l’empresa: mapes de coneixement, tasques amb responsables, dates i dependències, i una IA privada que funciona a la teva oficina.',
      },
      consultoria: {
        titulo: 'Consultoria d’IA i vendes',
        texto:
          'Diagnòstic, formació, assistents i automatitzacions. I treballs d’IA a mida, segons el teu pressupost.',
      },
      mas: 'Descobreix-ho',
    },
    rrhh: {
      antetitulo: 'Recursos humans',
      titulo: 'Recursos humans d’Andorra, de debò.',
      texto:
        'Fitxa, contractes, alta a la CASS, nòmina i IRPF andorrà, vacances, horaris, fitxatge amb portal de l’empleat i finiquits. Tot connectat amb la comptabilitat.',
      puntos: [
        'Els documents de les persones es llegeixen amb una IA que funciona a les teves instal·lacions.',
        'Lectura dels documents d’identitat per omplir la fitxa en segons.',
        'Cada canvi queda registrat.',
      ],
      espana:
        'A Espanya: nòmina i lectura de convenis col·lectius del registre oficial (REGCON i BOE), en desenvolupament imminent i adaptació a mida del client.',
      dato:
        'A l’obrador on va néixer, al segon mes gairebé 8 de cada 10 persones que van treballar el mes sencer ja fitxaven des del portal de l’empleat.',
      cifra: {
        etiqueta: 'fitxaven des del portal de l’empleat',
        texto: '{fichan} de les {total} persones que van treballar el mes sencer ({mes}), a l’obrador on va néixer Synentor.',
        fuente: 'Dada mesurada: recompte a la base del programa, sense dades de persones.',
      },
    },
    multiempresa: {
      antetitulo: 'Multiempresa',
      titulo: 'Moltes empreses. Una sola instal·lació.',
      texto:
        'Cada empresa, aïllada de les altres, amb els seus usuaris i permisos. Ideal per a grups i gestories: canvies d’empresa en un moment.',
      puntos: ['Pagues per empresa, no per cada persona.', '{usuarios} usuaris inclosos.', 'Empresa addicional: {empresaAdicional} al mes.'],
    },
    ia: {
      antetitulo: 'IA privada',
      titulo: 'La teva IA, a casa teva.',
      texto:
        'Les factures dels proveïdors i els documents de les persones es llegeixen amb una IA que funciona en un equip de la teva empresa. Aquests documents no surten cap al núvol.',
    },
    compras: {
      titulo: 'Les factures es llegeixen soles.',
      texto:
        'Envia-les per correu o deixa-les en una carpeta: Synentor les llegeix, dona d’alta el proveïdor si cal i prepara l’esborrany perquè només l’hagis de revisar.',
      pasos: ['Factura per correu', 'La IA la llegeix', 'Esborrany per revisar', 'Comptabilitzada'],
    },
    bancos: {
      titulo: 'Qualsevol banc, conciliat.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV o Excel: Synentor llegeix l’extracte i et proposa la conciliació.',
      pasos: ['Extracte del banc', 'Moviments llegits', 'Conciliació proposada', 'La confirmes'],
    },
    juridico: {
      titulo: 'La llei andorrana, vigilada.',
      texto:
        'Vigilància del BOPA, tràmits oficials amb els seus terminis, llibre d’actes societaris i prevenció del blanqueig per a subjectes obligats.',
    },
    historia: {
      antetitulo: 'Com va néixer',
      titulo: 'Neix dins d’una empresa real.',
      texto:
        'Synentor no és una maqueta: va néixer gestionant cada dia una empresa andorrana, un obrador amb botigues. Cada pantalla s’ha fet resolent un problema de veritat.',
    },
    precio: {
      titulo: 'Un preu clar, sense sorpreses.',
      texto: 'Tria els mòduls que necessites i mira el total al moment. Els que van junts s’afegeixen sols.',
      boton: 'Calcula el teu preu',
    },
    final: {
      titulo: 'Parlem de la teva empresa.',
      texto: 'Et mostrem Synentor amb casos com el teu i et diem, sense compromís, per on començaríem.',
      boton: 'Demana una demostració',
    },
  },
  contacto: {
    titulo: 'Contacte: demana una demostració · Synentor',
    descripcion: 'Escriu-nos i et responem en un dia laborable, de dilluns a divendres de 9:00 a 18:00. Som a les Escaldes-Engordany (Andorra).',
    encabezado: 'Parlem.',
    entrada: 'Explica’ns què necessites. Et responem en un dia laborable, de dilluns a divendres de 9:00 a 18:00 (hora d’Andorra).',
    datos: 'Dades de contacte',
    correo: 'Correu',
    telefono: 'Telèfon',
    direccion: 'Adreça',
    horario: 'Horari',
    horarioTexto: 'De dilluns a divendres, de 9:00 a 18:00 (hora d’Andorra)',
    despues: {
      titulo: 'Què passa després',
      pasos: [
        'Rebem el teu missatge al correu de l’empresa.',
        'Et responem en un dia laborable.',
        'Si ho vols, et preparem una proposta per escrit.',
      ],
    },
    formulario: {
      titulo: 'Envia’ns un missatge',
      nombre: 'Nom',
      correo: 'Correu electrònic',
      empresa: 'Empresa',
      telefono: 'Telèfon',
      asunto: 'Assumpte',
      asuntos: {
        informacion: 'Informació general',
        demostracion: 'Demanar una demostració',
        pedido: 'Sol·licitud de comanda',
        centralita: 'Centraleta amb IA per a consultoris',
        precios: 'Preus i pressupost',
        consultoria: 'Consultoria d’IA i vendes',
        muv: 'MUV',
        web: 'Disseny de pàgines web',
        gestorias: 'Paquet per a despatxos i gestories',
        otro: 'Altres',
      },
      mensaje: 'Missatge',
      consentimiento: 'He llegit la {politica} i accepto que feu servir aquestes dades per respondre’m.',
      politica: 'política de privacitat',
      obligatorio: 'obligatori',
      enviar: 'Envia el missatge',
      enviando: 'S’està enviant…',
      contador: '{n} de {max}',
      ok: 'Enviat. Et respondrem en un dia laborable.',
      errores: {
        datos: 'Revisa els camps marcats: falta alguna dada o no és vàlida.',
        robot: 'No hem pogut comprovar que no ets un robot. Torna-ho a provar.',
        envio: 'No s’ha pogut enviar ara mateix.',
        red: 'No hi ha connexió.',
      },
      alternativa: 'Escriu-nos directament a {correo}.',
      sinJs: 'Si el formulari no funciona, escriu-nos a {correo}.',
    },
  },
  servicios: {
    titulo: 'ERP-CRM, IA i webs a Andorra, Espanya i Europa · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM mòdul a mòdul i què hi ha disponible a Andorra, Espanya i Europa. MUV, consultoria d’IA i vendes, energia, migracions i webs.',
    encabezado: 'Tot el que fem, sense lletra petita.',
    entrada:
      'Programari propi i consultoria. A cada mòdul et diem si funciona avui al teu país, si està en desenvolupament imminent o si s’adapta a mida.',
    columnas: { andorra: 'Andorra', espana: 'Espanya', otros: 'Portugal, França, Itàlia i Alemanya' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'La gestió de l’empresa en un sol lloc. Pagues per empresa i pels mòduls que facis servir.',
      requiere: 'Requereix {modulo}',
      idiomaPrograma:
        'Les pantalles del programa són en català i castellà. Altres idiomes, en desenvolupament imminent i adaptació a mida del client.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'El motor multiempresa: usuaris i permisos, còpies de seguretat, IA local, entrada única de documents, mestres, fitxa d’empresa i llibre d’actes, comptabilitat amb el pla andorrà, tresoreria i conciliació bancària, quadre de comandament i informes.',
      },
      compras: {
        nombre: 'Compres intel·ligents',
        texto:
          'Les factures dels proveïdors arriben per correu o en una carpeta i es llegeixen soles: alta del proveïdor si cal i esborrany per revisar.',
      },
      ventas_crm: {
        nombre: 'Vendes i CRM',
        texto: 'Clients, projectes, contactes, mapa comercial i registre de factures emeses amb l’IGI.',
      },
      rrhh: {
        nombre: 'Recursos humans i nòmines',
        texto:
          'Fitxa, contractes, alta a la CASS, nòmina i IRPF andorrà, vacances, horaris, fitxatge, portal de l’empleat i finiquits.',
      },
      fiscal: { nombre: 'Fiscal', texto: 'IGI, impost de societats, presentacions i impresos de la DTF.' },
      juridico: {
        nombre: 'Jurídic i tràmits',
        texto: 'Vigilància del BOPA, tràmits oficials amb els seus terminis, expedients i llibre d’actes societaris.',
      },
      pbc: {
        nombre: 'Prevenció del blanqueig',
        texto: 'El dossier de cada client per als subjectes obligats: qüestionaris, model de risc, decisions i comunicacions a la UIFAND.',
      },
      productos: { nombre: 'Productes, escandalls i estoc', texto: 'Productes, receptes amb el seu cost i estoc.' },
      costes: {
        nombre: 'Control de costos de compra',
        texto: 'Comparador de preus per proveïdor i article, control de la comanda i avisos de pujades. Amb receptes, el cost de cadascuna; amb el TPV, consum teòric i marge per peça.',
      },
      tpv: {
        nombre: 'TPV i caixa',
        texto: 'Les vendes del TPV HIOPOS i la caixa CashDro, cada dia a la comptabilitat. CashDro, en una sola empresa per instal·lació.',
      },
      electrica: {
        nombre: 'C. Elèctrica',
        texto:
          'Per a assessors energètics: expedients, clients, subministraments i CUPS, factures amb el seu PDF, contractes i venciments, comparació amb el teu catàleg de tarifes, informe i proposta en PDF, seguiment de l’estalvi i portal del client. Mercat elèctric espanyol, tarifes de fins a 3 períodes.',
      },
    },
    costes: {
      titulo: 'Control de costos de compra',
      texto: 'Cada factura i cada albarà que arriben a Compres es converteixen en informació per comprar millor. {precio} al mes, com a complement de Compres.',
      puntos: [
        'Comparador de preus: cada línia es passa a preu per quilo, litre o unitat, i per article veus quin proveïdor surt més barat i quant t’hauries estalviat. Cada xifra obre la seva factura original.',
        'Cistella de compra: prepara comandes en esborrany al proveïdor més barat.',
        'Historial de preus pagats, ofertes de tarifes dels proveïdors i preus sospitosos.',
        'Descomptes de cada proveïdor i control de la comanda: el que s’ha demanat, el que s’ha rebut i el que s’ha facturat, contra el preu promès.',
        'Avisos al quadre de comandament quan un proveïdor apuja un article un 8 % o més, quan pagues més que a un altre proveïdor pel mateix o quan una factura supera el preu de la comanda.',
      ],
      condicionesTitulo: 'Amb receptes i TPV',
      condiciones: [
        'Amb receptes (mòdul Productes): el cost viu de cada recepta amb els últims preus pagats.',
        'Amb receptes i el TPV connectat (avui, HIOPOS): el consum teòric davant del que s’ha comprat i el marge per peça.',
      ],
      nota: 'Cada descripció del proveïdor s’associa una vegada al seu article. Els avisos es veuen al quadre de comandament; no arriben per correu.',
      enlace: 'Afegeix-lo a la calculadora',
    },
    gestorias: {
      titulo: 'Paquet Despatxos i gestories',
      estado: 'En desenvolupament imminent i adaptació a mida del client',
      texto: 'Per a despatxos que porten la comptabilitat, els impostos i les nòmines de les empreses dels seus clients, tot en una sola instal·lació.',
      precio: '{precio} al mes',
      puntos: [
        'Inclou Comptabilitat, Compres amb lectura de factures, Vendes, Fiscal i Nòmines.',
        '{empresas} empreses client i {usuarios} usuaris del despatx inclosos.',
        'Empresa client addicional: {empresa} al mes, fins a {max} empreses.',
        'Nòmines: {nomina} per persona i mes.',
        'Usuari addicional del despatx: {usuario} al mes.',
        'Amb més de {max} empreses, sota proposta.',
      ],
      ejemplo: 'Exemple: {empresasEj} empreses i {personasEj} persones, {totalEj} al mes.',
      condiciones: 'Només per a despatxos professionals que porten empreses dels seus clients. Per a Andorra; en altres països, a mida. Sense impostos, pagament anual.',
      boton: 'Demana una proposta',
    },
    muv: {
      titulo: 'MUV',
      texto:
        'El cervell operatiu de l’empresa: mapes de coneixement, tasques amb responsables, dates i dependències, i una IA privada que funciona a la teva oficina.',
      plazos:
        'Calcula terminis processals i administratius d’Espanya i d’Andorra amb els seus calendaris oficials i els converteix en tasques del mapa. Si la norma admet dues lectures, mostra totes dues i pren la data més primerenca, i avisa si el calendari de l’any encara no s’ha publicat.',
      familyOffices:
        'També per a family offices: el mapa de cada família en un sol lloc, amb el seu patrimoni, les seves societats, els seus documents, les seves decisions i el que venç. Porta cinc plantilles de partida: mapa patrimonial, govern familiar i successió, operació d’inversió, obligacions i venciments, i alta d’una família. No valora carteres ni es connecta amb bancs.',
      precio: 'Llicència per usuari i mes, amb pagament anual, des del primer usuari: de l’1r al {hasta1}è, {precio1}; del {desde2}è al {hasta2}è, {precio2}; del {desde3}è al {hasta3}è, {precio3}. Amb més de {max} usuaris, a mida.',
      equipos: 'Equips recomanats (pagament únic): Bàsic, {basico}: no mou la IA que redacta. Complet, {completo}: porta targeta gràfica i mou tota la IA.',
      enDesarrollo: 'Encara no té aplicació mòbil: en desenvolupament.',
    },
    consultoria: {
      titulo: 'Consultoria d’IA i vendes',
      texto:
        'Som una consultoria d’IA i de vendes. Diagnòstic, formació, assistents, automatitzacions i treballs d’IA a mida, segons el teu pressupost.',
      categorias: {
        estrategia: 'Estratègia i diagnòstic',
        formacion: 'Formació',
        asistentes: 'Assistents i atenció al client',
        automatizacion: 'Automatització de processos',
        documentos: 'Documents i coneixement',
        datos: 'Dades, analítica i previsió',
        medida: 'Desenvolupament a mida',
        cumplimiento: 'Compliment i governança',
        soporte: 'Suport i manteniment',
      },
      desde: 'des de {precio}',
      cuota: 'i des de {cuota} al mes',
      nota: 'Preus per a una microempresa, sense impostos (catàleg del {fecha}). Per a empreses més grans, segons la proposta.',
      medida: 'Treballs d’IA a mida: et fem el pressupost.',
    },
    energia: {
      titulo: 'Energia',
      texto: 'T’ajudem a pagar menys llum i a saber on es gasta cada quilowatt.',
      particulares: {
        titulo: 'Estudi de factura per a particulars',
        texto: 'Revisem la teva factura i la potència contractada per {precio}. Te’l tornem si no trobem un estalvi d’almenys {precio} a l’any.',
      },
      empresas: {
        titulo: 'Empreses (Espanya)',
        texto:
          '{precio} per subministrament, o a èxit: el {porcentaje} de l’estalvi comprovat dels 12 primers mesos. Sense estalvi, no cobrem. Tarifes de 6 períodes, hospitals i promotores: a mida.',
      },
      comisiones: 'Avui no cobrem cap comissió de cap comercialitzadora: et recomanem el que et convé a tu.',
      monitorizacion: {
        titulo: 'Monitorització amb Home Assistant i Grafana',
        texto: 'Mesurem el consum de cada quadre elèctric i el veus en un tauler. Les dades es queden en un equip al teu edifici.',
        vivienda: 'Habitatge o petit negoci (1 quadre)',
        pyme: 'Pime o comerç (fins a 6 quadres)',
        edificio: 'Edifici, hotel o promotora',
        granConsumidor: 'Hospital o gran consumidor',
        instalacionDesde: 'Instal·lació des de {precio}',
        instalacionMedida: 'Instal·lació a mida',
        cuota: '{precio} al mes',
        cuotaDesde: 'des de {precio} al mes',
        incluye: 'La instal·lació inclou els mesuradors d’aquests punts. La quota inclou manteniment, còpies, actualitzacions i un informe mensual.',
      },
      programa: 'Ets assessor energètic? Mira C. Elèctrica, a la Suite.',
    },
    migracion: {
      titulo: 'Migració i convivència',
      texto: 'Portem les teves dades del programa anterior. Només et prometem el que avui s’importa de veritat.',
      arranque: {
        nombre: 'Arrencada',
        texto: 'Proveïdors, empleats, productes i contactes des de CSV o Excel; extractes de qualsevol banc (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Comptabilitat anterior (Andorra)',
        texto: 'Diari, majors i sumes i saldos, comprovats i incorporats; estats del 805-B; llibre de factures emeses; factures de proveïdor en PDF.',
        precio: '{precio} el primer exercici i {adicional} cada un més',
      },
      personal: {
        nombre: 'Personal (Andorra)',
        texto: 'Històric de nòmines, cotitzacions de la CASS, vacances i hores.',
        precio: '{precio} fins a {personas} persones',
      },
      aMedida:
        'La resta (clients, cobraments i pagaments pendents, estoc inicial, immobilitzat, connexió directa amb altres programes): a mida.',
      convivencia: {
        titulo: 'Convivència amb el teu programa',
        texto:
          'Si vols seguir amb el teu programa una temporada, carreguem cada mes el que exporta: {puesta} de posada en marxa i {cuota} al mes, fins a {cargas} càrregues al mes. Una connexió directa, a mida.',
      },
    },
    portal: {
      titulo: 'Portal de l’empleat',
      texto: 'Nòmines, documents, vacances, sol·licituds, fitxatge, perfil i certificats, des de qualsevol navegador.',
      dato:
        'A l’obrador on va néixer, al segon mes gairebé 8 de cada 10 persones que van treballar el mes sencer ja fitxaven des del portal. Sense paper i sense cap fitxatge a mà.',
      precio:
        'Sol, sense la resta del programa: {cuota} al mes fins a {personas} persones, {adicional} per persona més i {implantacion} d’implantació.',
      incluido: 'Amb Recursos humans, ja hi va inclòs.',
    },
    webs: {
      titulo: 'Pàgines web',
      texto: 'Webs ràpides, en diversos idiomes, amb un formulari que envia de debò i estadístiques sense galetes. Aquesta mateixa web l’hem feta així.',
      esencial: { nombre: 'Web Essencial', texto: 'Una pàgina de presentació, en 1 o 2 idiomes.' },
      profesional: { nombre: 'Web Professional', texto: 'Fins a 6 pàgines, 3 idiomes i posicionament bàsic.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Fins a 12 pàgines, fins a 7 idiomes, disseny de marca i una calculadora o configurador a mida.',
      },
      desde: 'des de {precio}',
      tienda: 'Botiga en línia: a mida, segons pressupost.',
      extras: 'Pàgina addicional, {pagina}; idioma addicional, {idioma} (la revisió nativa, a part).',
      mantenimiento: 'Manteniment: {basico} al mes (1 hora de canvis) o {plus} al mes (3 hores i informe mensual de visites).',
    },
    centralita: {
      titulo: 'Centraleta amb IA per a consultoris',
      etiqueta: 'Pròximament',
      texto:
        'Una centraleta que respon les trucades dels pacients les 24 hores: reserves, anul·lacions i canvis de cita, llista d’espera i recordatoris. Sempre diu al pacient que parla amb una IA. Per a consultoris mèdics i clíniques dentals d’Andorra i Espanya.',
      boton: 'Vull més informació',
    },
    implantacion: {
      titulo: 'Implantació i suport',
      texto: 'Instal·lem, configurem, carreguem les dades i formem el teu equip: {jornada} la jornada; la Suite, des de {minimo} jornades.',
      soporte: 'Suport per correu i telèfon, de dilluns a divendres de 9:00 a 18:00 (hora d’Andorra), amb resposta en un dia laborable.',
    },
  },
  precios: {
    titulo: 'Preus de l’ERP-CRM i de MUV a Andorra, Espanya i Europa',
    descripcion: 'Tria país, mòduls i persones i calcula al moment el preu de Synentor Suite ERP-CRM i de MUV. Sense impostos i, a Andorra, també amb l’IGI.',
    encabezado: 'Calcula el teu preu.',
    entrada: 'Tria el país, els mòduls i les persones. El total surt al moment, sense impostos; a Andorra, també amb l’IGI.',
    configurador: {
      pais: 'País',
      paises: { AD: 'Andorra', ES: 'Espanya', PT: 'Portugal', FR: 'França', IT: 'Itàlia', DE: 'Alemanya', OTRO: 'Un altre país' },
      modalidad: 'On el vols',
      modalidadA: 'Instal·lat a la teva empresa',
      modalidadB: 'Allotjat per Synentor a Andorra (+{precio} al mes)',
      pago: 'Pagament',
      anual: 'Anual',
      mensual: 'Mensual (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Paquet Synentor Complet',
      paqueteTexto: 'Base, Compres, Vendes i CRM, Fiscal i MUV, amb {usuarios} usuaris: {precio} al mes.',
      paqueteTitulo: 'Paquet',
      sinPaquete: 'Sense paquet: mòduls a la carta',
      paqueteObrador: 'Paquet Obrador',
      paqueteObradorTexto: 'Base, Compres, Productes, TPV i Recursos humans, amb {usuarios} usuaris: {precio} al mes; amb el control de costos, {conCostes}.',
      conObrador: 'Amb el paquet Obrador',
      usuarios: 'Usuaris del programa',
      empresa: 'Empresa {n}',
      principal: 'Empresa principal',
      personas: 'Persones en plantilla',
      anadirEmpresa: 'Afegeix una empresa',
      quitarEmpresa: 'Treu aquesta empresa',
      menos: 'Menys',
      mas: 'Més',
      verResumen: 'Veure el pressupost',
      alMes: 'al mes',
      muvUsuarios: 'Usuaris de MUV',
      anadidoPor: 'Afegit: el requereix un altre mòdul',
      incluidoPaquete: 'Inclòs al paquet',
      estados: { disponible: 'Disponible', inminente: 'En desenvolupament imminent', a_medida: 'A mida' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Paquet Synentor Complet',
        'empresa-adicional': 'Empresa addicional',
        personas: 'Persones en plantilla (Recursos humans)',
        'usuarios-adicionales': 'Usuaris addicionals',
        'paquete-usuarios': 'Usuaris addicionals del paquet',
        'paquete-obrador': 'Paquet Obrador',
        'paquete-obrador-costes': 'Paquet Obrador amb control de costos',
        'modalidad-b': 'Allotjament per Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Pagament mensual',
      },
      resumen: 'El teu pressupost',
      cuota: 'Quota al mes',
      sinImpuestos: 'sense impostos',
      igi: 'IGI ({porcentaje})',
      total: 'Total al mes',
      implantacion: 'Implantació, des de {precio} (pagament únic)',
      avisos: {
        'impuestos-no-incluidos': 'Impostos no inclosos (IVA, TVA o MwSt., segons el país).',
        'cashdro-una-empresa': 'CashDro funciona en una sola empresa per instal·lació.',
        'volumen-empresas': 'Amb més de {max} empreses, tarifa per volum: et fem la proposta.',
        'modalidad-b-inminente': 'L’allotjament per Synentor està en desenvolupament imminent.',
        'muv-a-medida': 'Amb més de {max} usuaris de MUV, a mida.',
        'requiere-adaptacion': 'Algun mòdul no està disponible avui al teu país: en desenvolupament imminent o a mida.',
      },
      botonDemo: 'Demana una demostració',
      botonPropuesta: 'Demana la teva proposta',
      botonPedido: 'Envia la meva selecció',
      pedidoNota: 'Sense pagament a la web: et responem amb la proposta i el contracte per escrit.',
      pedidoAsunto: 'Sol·licitud de comanda des del calculador',
      sinJs: 'El calculador necessita JavaScript. Mira les taules de sota o escriu-nos.',
    },
    tablas: {
      titulo: 'Totes les tarifes',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Concepte',
      precio: 'Preu',
      alMes: '{precio} al mes',
      porPersona: '+ {precio} per persona en plantilla',
      usuarioAdicional: 'Usuari addicional',
      empresaAdicional: 'Empresa addicional',
      empresaAdicionalPrecio: '{precio} al mes + els seus mòduls al {porcentaje}',
      paquete: 'Paquet Synentor Complet',
      paqueteUsuario: 'Usuari addicional del paquet: {precio} al mes',
      paqueteObrador: 'Paquet Obrador',
      gestorias: 'Paquet Despatxos i gestories',
      gestoriasPrecio: '{precio} al mes amb {empresas} empreses i {usuarios} usuaris; {empresa} per empresa més (fins a {max}) i {nomina} per nòmina',
      muv: 'MUV',
      consultoria: 'Consultoria d’IA i vendes',
      servicios: 'Energia, migracions, portal i webs',
      verServicios: 'Tots els detalls, a Serveis',
      implantacion: 'Implantació: {precio} la jornada',
    },
    condiciones: {
      titulo: 'Condicions',
      puntos: [
        'Llicència anual, sense permanència de més de 12 mesos i amb preavís de 30 dies.',
        'Suport i actualitzacions inclosos.',
        'En acabar, et lliurem l’arxiu amb les dades de la teva empresa.',
        'Preus en euros, sense impostos. A Andorra, IGI del {igi}.',
        'Pagament mensual: {recargo} més.',
      ],
    },
    comparacion: {
      titulo: 'Com ens comparem',
      texto:
        'Un programa de nòmina al núvol cobra entre {nominaMin} i {nominaMax} per persona al mes, més una quota fixa. Un ERP internacional, uns {erp} per usuari al mes. Amb Synentor pagues per empresa i els primers {usuarios} usuaris hi estan inclosos.',
      fuente: 'Fonts: pàgines oficials de preus dels fabricants, consultades el {fecha}.',
      grafico: {
        titulo: 'Exemple: empresa de {personas} persones i {usuarios} usuaris, al mes',
        synentor: 'Synentor: Base, Compres, RRHH, Fiscal, Productes i TPV',
        separado: 'Programa de nòmina al núvol + ERP internacional, per separat',
        rango: 'de {min} a {max}',
        nota: 'Sense impostos. Per separat, cap dels dos porta la nòmina ni la CASS andorranes.',
      },
    },
    faq: {
      titulo: 'Preguntes freqüents',
      preguntas: [
        {
          p: 'En quins idiomes és el programa?',
          r: 'En català i castellà. Altres idiomes, en desenvolupament imminent i adaptació a mida del client.',
        },
        {
          p: 'On s’instal·la?',
          r: 'A la teva empresa, en un servidor o un NAS: disponible avui. Allotjat per Synentor a Andorra: en desenvolupament imminent.',
        },
        {
          p: 'Les dades surten al núvol?',
          r: 'Les factures dels proveïdors i els documents de les persones es llegeixen amb una IA que funciona en un equip de la teva empresa. Si alguna funció fa servir un servei extern, t’ho diem a la proposta.',
        },
        { p: 'Funciona a Espanya?', r: 'Sí. Hi ha mòduls disponibles avui i d’altres en desenvolupament imminent: el calculador t’ho diu mòdul a mòdul.' },
        { p: 'Hi ha permanència?', r: 'Llicència anual, sense permanència de més de 12 mesos i amb preavís de 30 dies.' },
        { p: 'Qui fa servir Synentor?', r: 'Va néixer gestionant cada dia un obrador amb botigues d’Andorra. I és el programa amb què treballa Synentor.' },
      ],
    },
  },
  legal: {
    actualizado: 'Darrera actualització: {fecha}',
    enlaces: {
      privacidad: 'política de privadesa',
      cookies: 'política de galetes',
    },
    aviso: {
      titulo: 'Avís legal · Synentor',
      encabezado: 'Avís legal',
      secciones: [
        {
          t: 'Qui n’és el titular',
          p: [
            'Aquest web, {web}, és de {razon}, societat andorrana amb domicili a {direccion}. NRT: en tràmit.',
            'Per a qualsevol qüestió, escriu-nos a {correo} o truca’ns al {telefono}.',
          ],
        },
        {
          t: 'Per a què serveix aquest web',
          p: [
            'Informa dels nostres serveis de consultoria d’intel·ligència artificial i de vendes i dels nostres programes. Entrar-hi és gratuït i no cal registrar-se.',
            'Al web no es compra ni es paga res. Els preus que s’hi mostren són orientatius i sense impostos: el que val és la proposta i el contracte que signem amb tu per escrit.',
          ],
        },
        {
          t: 'Com el pots fer servir',
          p: [
            'Qui fa servir el web és responsable de l’ús que en fa. No està permès:',
          ],
          lista: [
            'fer-lo servir contra la llei o contra els drets d’altres persones;',
            'intentar entrar als seus servidors, canviar-ne la configuració o saltar-se’n les mesures de seguretat;',
            'enviar pel formulari continguts il·legals o ofensius, publicitat que no hem demanat o dades d’altres persones sense el seu permís;',
            'mostrar-lo dins d’un altre web o copiar-lo de manera automàtica.',
          ],
          despues: [
            'Si algú no compleix aquestes condicions, li podem impedir l’accés.',
          ],
        },
        {
          t: 'Responsabilitat',
          p: [
            'Vetllem perquè la informació sigui correcta i estigui al dia, però pot contenir errors o dades desactualitzades: els corregim tan bon punt els veiem. No responem dels danys que pugui causar l’ús de la informació del web, ni de les interrupcions per manteniment, avaries o causes alienes a nosaltres, tot i que prenem les mesures raonables per evitar-les.',
          ],
        },
        {
          t: 'Enllaços a altres webs',
          p: [
            'El web enllaça amb pàgines d’altres empreses i organismes. No les controlem ni responem del seu contingut, i enllaçar-les no vol dir que hi tinguem cap relació. Consulta’n les condicions pròpies.',
          ],
        },
        {
          t: 'Propietat intel·lectual i industrial',
          p: [
            'La marca i el logotip de Synentor, els textos, el disseny, les imatges i el codi d’aquest web són de {razon} o de qui ens ha donat permís per fer-los servir. Els pots veure i guardar-ne una còpia per al teu ús personal. Per a qualsevol altre ús (copiar-los, publicar-los, modificar-los o fer-los servir amb finalitats comercials) necessites el nostre permís per escrit.',
          ],
        },
        {
          t: 'Dades personals i galetes',
          p: [
            'Com tractem les dades que ens dones ho explica la {privacidad}, i quines galetes fem servir, la {cookies}.',
          ],
        },
        {
          t: 'Idiomes',
          p: [
            'El web és en català, castellà, anglès, francès, portuguès, italià i alemany. Si una traducció no diu el mateix que el text en català, val el català.',
          ],
        },
        {
          t: 'Llei aplicable i tribunals',
          p: [
            'Aquestes condicions es regeixen per la llei andorrana. Per a qualsevol conflicte són competents els tribunals del Principat d’Andorra, llevat que la llei et reconegui el dret d’anar a uns altres.',
          ],
        },
        {
          t: 'Canvis',
          p: [
            'Podem canviar aquest avís legal quan calgui. La data de dalt diu quan es va canviar per última vegada.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Política de privadesa · Synentor',
      encabezado: 'Política de privadesa',
      secciones: [
        {
          t: 'Qui tracta les teves dades',
          p: [
            'El responsable és {razon}, societat andorrana amb domicili a {direccion}. NRT: en tràmit. Correu: {correo}. Telèfon: {telefono}.',
            'No hem designat delegat de protecció de dades: per a qualsevol qüestió sobre les teves dades, escriu-nos a {correo}.',
          ],
        },
        {
          t: 'Quines dades tractem, per a què i durant quant de temps',
          p: [
            'Només les que calen per a cada cosa:',
          ],
          lista: [
            'Formulari de contacte. Dades: nom, correu, assumpte i missatge, i l’empresa i el telèfon si els escrius. Per a què: respondre’t i, si ho demanes, preparar-te una proposta. Base: el teu consentiment, que dones en marcar la casella, i, si demanes una proposta, les mesures prèvies a un contracte. Termini: el missatge ens arriba per correu i el web no el guarda; el conservem {plazoContacto} des de l’últim contacte si no arribes a ser client i, si ho ets, mentre duri la relació i els terminis que exigeixi la llei.',
            'Comprovació antirobots del formulari (Cloudflare Turnstile). Dades: l’adreça IP i dades tècniques del navegador. Per a què: comprovar que el formulari l’envia una persona. Base: el nostre interès legítim a protegir el web de l’abús. Nosaltres no les guardem.',
            'Prova de la teva decisió sobre les galetes. Dades: un identificador a l’atzar que no t’identifica, la versió de la política, el que vas decidir i la data; mai la IP. Per a què: poder demostrar el teu consentiment. Base: l’obligació de poder-lo demostrar. Termini: 12 mesos.',
            'Registres tècnics de l’allotjament (Cloudflare). Dades: l’adreça IP, la data i l’hora, la pàgina demanada i els errors. Per a què: la seguretat i el bon funcionament del web. Base: el nostre interès legítim. Termini: fins a {plazoRegistros}.',
            'Estadístiques de visites (Cloudflare Web Analytics) i un recompte propi d’accions: quantes vegades es demana una demostració, es fa servir la calculadora, s’envia una selecció o el formulari, i des de quina campanya s’arriba. Sense galetes i sense dades que t’identifiquin: només xifres de conjunt, com les pàgines vistes, el país o el tipus de navegador. El recompte propi no guarda la IP ni el navegador.',
            'Galetes d’altres empreses, només si les acceptes: ho explica la {cookies}.',
            'Si ens escrius per correu o ens truques: les teves dades de contacte i el que ens expliquis, per respondre’t, amb la mateixa base i el mateix termini que el formulari.',
          ],
        },
        {
          t: 'Qui més veu les teves dades',
          p: [
            'No venem ni cedim les teves dades. Només les tracten, per encàrrec nostre, els proveïdors que fan funcionar el web i el correu, i les administracions quan la llei ho exigeix:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Dades fora d’Andorra',
          p: [
            'Alguns d’aquests proveïdors són dels Estats Units o hi tracten dades. Triem proveïdors adherits al Marc de Privadesa de Dades entre la Unió Europea i els Estats Units o que s’hi comprometen per contracte amb clàusules tipus. Tot i així, els Estats Units no ofereixen el mateix nivell de protecció que Andorra o la Unió Europea, i les seves autoritats podrien demanar accés a aquestes dades.',
          ],
        },
        {
          t: 'Els teus drets',
          p: [
            'Ens pots demanar accés a les teves dades, rectificar-les, suprimir-les, limitar-ne el tractament, endur-te-les (portabilitat) o oposar-te que les tractem. I pots retirar el teu consentiment quan vulguis, sense que això afecti el que s’ha fet abans.',
            'Escriu-nos a {correo}. Si no podem saber que ets tu, et demanarem un document que t’identifiqui, que només farem servir per a això i després esborrarem. Et respondrem en el termini que marca la llei.',
            'Si creus que no hem atès bé els teus drets, pots reclamar davant l’Agència Andorrana de Protecció de Dades ({apda}).',
          ],
        },
        {
          t: 'Seguretat',
          p: [
            'Protegim les teves dades amb mesures tècniques i organitzatives: connexió xifrada, accés només de qui ho necessita i proveïdors amb garanties de seguretat.',
          ],
        },
        {
          t: 'Menors',
          p: [
            'El web està pensat per a empreses i professionals. Si tens menys de 16 anys, no ens enviïs dades sense el permís del teu pare, la teva mare o el teu tutor.',
          ],
        },
        {
          t: 'Lleis que apliquem',
          p: [
            'La Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (LQPD) i, per a les persones de la Unió Europea, el Reglament general de protecció de dades (RGPD).',
          ],
        },
        {
          t: 'Canvis',
          p: [
            'Si canviem aquesta política, ho direm aquí amb la data nova. Si el canvi afecta una cosa que vas consentir, t’ho tornarem a preguntar.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Política de galetes · Synentor',
      encabezado: 'Política de galetes',
      ninguna: 'Avui no en fem servir cap. Si algun dia en fem servir, t’ho preguntarem abans i apareixeran aquí.',
      secciones: [
        {
          t: 'Què són',
          p: [
            'Les galetes (cookies) són petits fitxers que un web guarda al teu navegador per recordar alguna cosa de la teva visita. Aquí també anomenem galetes altres maneres de guardar dades al navegador, com l’emmagatzematge local.',
          ],
        },
        {
          t: 'Les que fem servir sempre',
          p: [
            'Són les imprescindibles perquè el web funcioni o per recordar el que tries. No necessiten el teu consentiment.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Estadístiques sense galetes',
          p: [
            'Comptem les visites amb Cloudflare Web Analytics i les accions amb un recompte propi. Cap dels dos fa servir galetes ni guarda dades que t’identifiquin.',
          ],
        },
        {
          t: 'Les que només fem servir si les acceptes',
          p: [
            'N’hi ha de dos tipus: estadístiques, per saber com es fa servir el web i millorar-lo, i publicitat, per mesurar els nostres anuncis i mostrar-te anuncis de Synentor en altres webs. Mentre no les acceptis, el web no carrega aquestes eines.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'La teva decisió',
          p: [
            'La primera vegada t’ho preguntem amb un avís: les pots acceptar totes, rebutjar-les totes o triar. Les tres opcions estan igual d’a mà i cap no ve marcada.',
            'Pots canviar d’opinió quan vulguis amb el botó «{boton}» del peu de pàgina. Si retires el consentiment, esborrem les galetes d’aquestes eines que són al nostre domini i el web les deixa de carregar; les que aquestes empreses posen al seu propi domini les pots esborrar des del navegador.',
            'La teva decisió val 12 mesos; després t’ho tornem a preguntar. En guardem una prova sense la teva IP, com explica la {privacidad}.',
          ],
        },
        {
          t: 'Des del navegador',
          p: [
            'També pots bloquejar o esborrar les galetes des del teu navegador:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Revisió',
          p: [
            'Revisem aquesta política com a mínim un cop l’any i sempre que canviem les eines del web.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Galeta',
      titular: 'Qui la posa',
      finalidad: 'Per a què',
      duracion: 'Durada',
      tipo: 'Tipus',
      propia: 'Pròpia',
      terceros: 'D’una altra empresa',
      sesion: 'Fins que tanques el navegador',
      persistente: 'Fins que l’esborris',
      fijaProveedor: 'La fixa el proveïdor',
      proveedor: 'Proveïdor',
      para: 'Per a què',
      donde: 'On tracta les dades',
      garantia: 'Garantia',
    },
    finalidades: {
      lang: 'Recordar l’idioma que tries.',
      consentimiento: 'Guardar la teva decisió sobre les galetes.',
      franja: 'No tornar-te a mostrar l’avís d’idioma si l’has tancat (emmagatzematge local).',
      cfBm: 'Seguretat: distingir les persones dels robots, només quan Cloudflare ho necessita.',
      cfClearance: 'Seguretat: recordar que has superat una comprovació antirobots, només si Cloudflare te l’ha demanada.',
      gaUsuario: 'Distingir els visitants per a les estadístiques.',
      gaSesion: 'Mantenir l’estat de la visita per a les estadístiques.',
      clarityUsuario: 'Guardar l’identificador de Clarity i les seves preferències, només per a aquest web.',
      claritySesion: 'Unir en una sola gravació les pàgines d’una mateixa visita.',
      clarityPrimeraVez: 'Saber la primera vegada que Clarity va veure aquest navegador en qualsevol web que el faci servir.',
      msAnonchk: 'Ús intern de Microsoft sobre l’identificador MUID; Clarity no el fa servir per a publicitat.',
      msMr: 'Saber si cal renovar l’identificador MUID.',
      msMuid: 'Identificar el navegador als llocs de Microsoft.',
      msSm: 'Sincronitzar l’identificador MUID entre els dominis de Microsoft.',
      metaFbp: 'Identificar el navegador per mesurar i mostrar anuncis de Meta.',
      metaFbc: 'Guardar l’anunci de Meta pel qual has arribat.',
      metaFr: 'Mostrar i mesurar anuncis de Meta.',
      liFatId: 'Mesurar els resultats dels anuncis de LinkedIn.',
      liSugr: 'Relacionar la visita amb membres de LinkedIn per a la publicitat.',
      liBcookie: 'Identificar el navegador per detectar abusos.',
      liLidc: 'Triar el centre de dades de LinkedIn.',
      liUserMatch: 'Sincronitzar identificadors per a la publicitat.',
      liAnalyticsSync: 'Registrar quan es va sincronitzar amb la galeta d’analítica de LinkedIn.',
      liLmsAds: 'Reconèixer membres de LinkedIn fora de LinkedIn per a la publicitat.',
      liLmsAnalytics: 'Reconèixer membres de LinkedIn fora de LinkedIn per a l’analítica.',
    },
    proveedores: {
      cloudflare: {
        para: 'Allotjament del web, comprovació antirobots del formulari, prova dels consentiments, registres tècnics, estadístiques de visites sense galetes i recompte d’accions.',
        donde: 'La seva xarxa mundial, amb seu als Estats Units. Les proves de consentiment es guarden a la Unió Europea.',
        garantia: 'Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus.',
      },
      resend: {
        para: 'Enviar a la nostra bústia el missatge del formulari.',
        donde: 'Estats Units.',
        garantia: 'Clàusules contractuals tipus i Marc de Privadesa de Dades UE-EUA.',
      },
      microsoft365: {
        para: 'El correu de l’empresa, on rebem i guardem els missatges.',
        donde: 'Unió Europea (regió europea de Microsoft). L’empresa és dels Estats Units.',
        garantia: 'Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus.',
      },
      google: {
        para: 'Estadístiques de visites (Google Analytics), si les acceptes.',
        donde: 'Estats Units i altres països.',
        garantia: 'Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus.',
      },
      clarity: {
        para: 'Veure com es fa servir el web (Microsoft Clarity), si ho acceptes.',
        donde: 'Estats Units.',
        garantia: 'Marc de Privadesa de Dades UE-EUA.',
      },
      meta: {
        para: 'Mesurar i mostrar anuncis (píxel de Meta), si ho acceptes.',
        donde: 'Irlanda i Estats Units.',
        garantia: 'Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus.',
      },
      linkedin: {
        para: 'Mesurar i mostrar anuncis (LinkedIn Insight Tag), si ho acceptes.',
        donde: 'Estats Units.',
        garantia: 'Marc de Privadesa de Dades UE-EUA i clàusules contractuals tipus.',
      },
    },
  },
} as const;

/** La forma que tienen que tener todos los idiomas: las mismas claves, con texto. */
type Ampliar<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Ampliar<U>[]
    : { [K in keyof T]: Ampliar<T[K]> };
export type Textos = Ampliar<typeof ca>;
