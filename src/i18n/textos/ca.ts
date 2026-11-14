// Textos en catalán (idioma principal). Reglas: nada que el producto no haga hoy (diseño §6); «en desarrollo inminente
// y adaptación a medida del cliente» solo donde el §7.0 lo dice; ningún precio escrito a mano (los pone la plantilla
// desde la tarifa con {marcadores}).
export const ca = {
  meta: {
    marca: 'Synentor',
    lema: 'La teva empresa, connectada.',
    descripcion:
      "Consultoria d'IA i vendes amb programari propi fet a Andorra: Synentor Suite ERP-CRM multiempresa, MUV i treballs d'IA a mida.",
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
    enConstitucion: 'en constitució',
    nrt: 'NRT en tràmit',
    estadisticas: 'Estadístiques de visites sense galetes (Umami).',
  },
  estados: {
    disponible: 'Disponible',
    inminente: 'En desenvolupament imminent',
    a_medida: 'A mida',
    inminenteLargo: 'En desenvolupament imminent i adaptació a mida del client',
  },
  inicio: {
    titulo: "Synentor · Consultoria d'IA i vendes amb programari propi",
    descripcion:
      "ERP-CRM multiempresa fet a Andorra, MUV i consultoria d'IA i vendes. Comptabilitat, nòmines, compres, vendes i tràmits en un sol lloc.",
    portada: {
      antetitulo: "Consultoria d'IA i vendes · Programari propi fet a Andorra",
      titulo: 'La teva empresa, connectada.',
      subtitulo:
        'Comptabilitat, nòmines, compres, vendes i tràmits en un sol lloc. Amb una IA que fa la feina repetitiva i una consultoria que t’acompanya.',
      botonDemo: 'Demana una demostració',
      botonPrecio: 'Calcula el teu preu',
      nota: 'Des de {base} al mes · {usuarios} usuaris inclosos · sense impostos',
    },
    problema: {
      titulo: 'Massa programes. Massa fulls de càlcul. Massa feina repetida.',
      puntos: [
        "Factures que algú ha de teclejar una a una.",
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
        titulo: "Consultoria d'IA i vendes",
        texto:
          "Diagnòstic, formació, assistents i automatitzacions. I treballs d'IA a mida, segons el teu pressupost.",
      },
      mas: 'Descobreix-ho',
    },
    rrhh: {
      antetitulo: 'Recursos humans',
      titulo: "Recursos humans d'Andorra, de debò.",
      texto:
        'Fitxa, contractes, alta a la CASS, nòmina i IRPF andorrà, vacances, horaris, fitxatge amb portal de l’empleat i finiquits. Tot connectat amb la comptabilitat.',
      puntos: [
        'Els documents de les persones es llegeixen amb una IA que funciona a les teves instal·lacions.',
        "Lectura dels documents d'identitat per omplir la fitxa en segons.",
        'Cada canvi queda registrat.',
      ],
      espana:
        'A Espanya: nòmina i lectura de convenis col·lectius del registre oficial (REGCON i BOE), en desenvolupament imminent i adaptació a mida del client.',
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
    },
    bancos: {
      titulo: 'Qualsevol banc, conciliat.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV o Excel: Synentor llegeix l’extracte i et proposa la conciliació.',
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
        precios: 'Preus i pressupost',
        consultoria: "Consultoria d'IA i vendes",
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
  legal: {
    actualizado: 'Darrera actualització: {fecha}',
  },
} as const;

/** La forma que tienen que tener todos los idiomas: las mismas claves, con texto. */
type Ampliar<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Ampliar<U>[]
    : { [K in keyof T]: Ampliar<T[K]> };
export type Textos = Ampliar<typeof ca>;
