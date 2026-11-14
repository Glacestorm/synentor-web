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
    estadisticas: 'Estadístiques de visites sense galetes (Umami).',
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
    titulo: 'Synentor · Consultoria d’IA i vendes amb programari propi',
    descripcion:
      'ERP-CRM multiempresa fet a Andorra, MUV i consultoria d’IA i vendes. Comptabilitat, nòmines, compres, vendes i tràmits en un sol lloc.',
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
    titulo: 'Contacte · Synentor',
    descripcion: 'Escriu-nos i et responem en un dia laborable.',
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
    titulo: 'Serveis · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM mòdul a mòdul, MUV, consultoria d’IA i vendes, energia, migracions, portal de l’empleat i pàgines web.',
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
    muv: {
      titulo: 'MUV',
      texto:
        'El cervell operatiu de l’empresa: mapes de coneixement, tasques amb responsables, dates i dependències, i una IA privada que funciona a la teva oficina.',
      precio: 'Gratis fins a {gratis} usuaris. Del {desde1}è al {hasta1}è, {precio1} per usuari al mes; fins a {hasta2}, {precio2}.',
      equipos: 'Equips recomanats (pagament únic): Bàsic {basico} · IA {ia} · IA+ {iaPlus}.',
      enDesarrollo: 'Encara no té edició simultània en temps real ni aplicació mòbil: en desenvolupament.',
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
    titulo: 'Preus · Synentor',
    descripcion: 'Calcula el preu de Synentor Suite ERP-CRM i de MUV al moment, sense sorpreses.',
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
    aviso: {
      titulo: 'Avís legal · Synentor',
      encabezado: 'Avís legal',
      secciones: [
        {
          t: 'Titular',
          p: 'Aquesta web és de {razon}, amb domicili a {direccion}. Correu: {correo}. Telèfon: {telefono}. NRT: en tràmit.',
        },
        {
          t: 'Ús de la web',
          p: 'La informació d’aquesta web és orientativa. Els preus i les condicions que valen són els de la proposta que et fem per escrit.',
        },
        {
          t: 'Propietat intel·lectual',
          p: 'Els textos, el logotip i el disseny d’aquesta web són de {razon}. No els facis servir sense el nostre permís.',
        },
        { t: 'Llei aplicable', p: 'S’aplica la llei andorrana. Per a qualsevol conflicte, els jutjats del Principat d’Andorra.' },
      ],
    },
    privacidad: {
      titulo: 'Política de privacitat · Synentor',
      encabezado: 'Política de privacitat',
      secciones: [
        { t: 'Qui és el responsable', p: '{razon}, {direccion}. Correu: {correo}.' },
        { t: 'Delegat de protecció de dades', p: '{razon} no ha designat delegat de protecció de dades. Per a qualsevol qüestió sobre les teves dades, escriu a {correo}.' },
        {
          t: 'Quines dades tractem',
          p: 'Les del formulari de contacte: nom, correu, empresa i telèfon (aquests dos, si els escrius), assumpte i missatge. El missatge ens arriba per correu: la web no el desa.',
        },
        { t: 'Per a què', p: 'Per respondre’t i, si ho demanes, preparar-te una proposta. La base és el teu consentiment.' },
        { t: 'Quant de temps', p: 'El temps necessari per atendre’t i el que exigeixi la llei.' },
        {
          t: 'Qui més les veu',
          p: 'Els proveïdors que fan funcionar la web: l’allotjament i la comprovació antirobot (Cloudflare) i l’enviament del correu. Les estadístiques de visites (Umami) no fan servir galetes ni guarden dades que t’identifiquin.',
        },
        {
          t: 'Els teus drets',
          p: 'Pots demanar accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a {correo}. Si no hi estàs d’acord, pots reclamar a l’Agència Andorrana de Protecció de Dades (apda.ad).',
        },
        {
          t: 'Lleis',
          p: 'Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals, i el Reglament general de protecció de dades de la Unió Europea per a les persones de la UE.',
        },
      ],
    },
    cookies: {
      titulo: 'Política de galetes · Synentor',
      encabezado: 'Política de galetes',
      secciones: [
        {
          t: 'Què fem servir',
          p: 'Una sola galeta, «lang», que guarda l’idioma que tries (un any). I al teu navegador, una marca per no tornar-te a ensenyar l’avís d’idioma si el tanques.',
        },
        { t: 'Estadístiques', p: 'Comptem les visites amb Umami, sense galetes i sense guardar dades que t’identifiquin.' },
        { t: 'Com treure-les', p: 'Pots esborrar-les quan vulguis des de la configuració del teu navegador.' },
      ],
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
