// Textos en alemán. Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts). Traducción de Claude, pendiente de una lectura nativa (diseño §3).
import type { Textos } from './ca';

export const de: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'Ihr Unternehmen, vernetzt.',
    descripcion:
      'KI- und Vertriebsberatung mit eigener Software aus Andorra: Synentor Suite ERP-CRM für mehrere Unternehmen, MUV und maßgeschneiderte KI-Projekte.',
  },
  nav: {
    inicio: 'Startseite',
    servicios: 'Leistungen',
    precios: 'Preise',
    contacto: 'Kontakt',
    demo: 'Demo anfragen',
    idioma: 'Sprache',
    menu: 'Menü',
    saltar: 'Zum Inhalt springen',
  },
  franjaIdioma: {
    texto: 'Möchten Sie diese Seite auf {idioma} ansehen?',
    aceptar: 'Ja, wechseln',
    cerrar: 'Nein, danke',
  },
  pie: {
    empresa: 'Unternehmen',
    legal: 'Rechtliches',
    avisoLegal: 'Impressum',
    privacidad: 'Datenschutz',
    cookies: 'Cookies',
    enConstitucion: 'in Gründung',
    nrt: 'NRT in Bearbeitung',
    estadisticas: 'Besucherstatistik ohne Cookies (Umami).',
  },
  estados: {
    disponible: 'Verfügbar',
    inminente: 'Kurz vor der Entwicklung',
    a_medida: 'Individuell',
    inminenteLargo: 'Entwicklung steht unmittelbar bevor, mit individueller Anpassung an den Kunden',
  },
  inicio: {
    titulo: 'Synentor · KI- und Vertriebsberatung mit eigener Software',
    descripcion:
      'Mehrmandanten-ERP-CRM aus Andorra, MUV sowie KI- und Vertriebsberatung. Buchhaltung, Lohnabrechnung, Einkauf, Vertrieb und Behördengänge an einem Ort.',
    portada: {
      antetitulo: 'KI- und Vertriebsberatung · Eigene Software aus Andorra',
      titulo: 'Ihr Unternehmen, vernetzt.',
      subtitulo:
        'Buchhaltung, Lohnabrechnung, Einkauf, Vertrieb und Behördengänge an einem Ort. Mit einer KI, die die Routinearbeit übernimmt, und einer Beratung, die Sie begleitet.',
      botonDemo: 'Demo anfragen',
      botonPrecio: 'Preis berechnen',
      nota: 'Ab {base} pro Monat · {usuarios} Nutzer inklusive · zzgl. Steuern',
      nodos: { compras: 'Einkauf', ventas: 'Vertrieb und CRM', rrhh: 'Personal', contabilidad: 'Buchhaltung', bancos: 'Banken', muv: 'MUV' },
    },
    problema: {
      titulo: 'Zu viele Programme. Zu viele Tabellen. Zu viel doppelte Arbeit.',
      puntos: [
        'Rechnungen, die jemand einzeln abtippen muss.',
        'Lohnabrechnung und CASS, die von einer einzigen Person abhängen.',
        'Bankkonten, die erst zum Monatsende stimmen.',
        'Gesetze, die sich im BOPA ändern, ohne dass Sie es erfahren.',
      ],
      cierre: 'Synentor bringt alles an einen Ort und erledigt die wiederkehrende Arbeit für Sie.',
    },
    pilares: {
      titulo: 'Drei Wege, Ihr Unternehmen wachsen zu lassen',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'Die komplette Unternehmensverwaltung, gemacht für Andorra: Buchhaltung nach andorranischem Kontenplan, Liquidität, Einkauf, Vertrieb und CRM, Personalwesen, Steuern und Recht.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'Das operative Gehirn des Unternehmens: Wissenslandkarten, Aufgaben mit Verantwortlichen, Terminen und Abhängigkeiten sowie eine private KI, die in Ihrem Büro läuft.',
      },
      consultoria: {
        titulo: 'KI- und Vertriebsberatung',
        texto: 'Diagnose, Schulung, Assistenten und Automatisierungen. Dazu maßgeschneiderte KI-Projekte, passend zu Ihrem Budget.',
      },
      mas: 'Mehr erfahren',
    },
    rrhh: {
      antetitulo: 'Personalwesen',
      titulo: 'Personalwesen für Andorra, wirklich.',
      texto:
        'Personalakte, Verträge, Anmeldung bei der CASS, Lohnabrechnung und andorranische Einkommensteuer (IRPF), Urlaub, Arbeitszeiten, Zeiterfassung mit Mitarbeiterportal und Abschlussabrechnungen. Alles mit der Buchhaltung verbunden.',
      puntos: [
        'Die Dokumente der Mitarbeitenden werden von einer KI gelesen, die in Ihren Räumen läuft.',
        'Ausweisdokumente werden gelesen, um die Personalakte in Sekunden auszufüllen.',
        'Jede Änderung wird protokolliert.',
      ],
      espana:
        'In Spanien: Lohnabrechnung und Auslesen der Tarifverträge aus dem amtlichen Register (REGCON und BOE), Entwicklung steht unmittelbar bevor, mit individueller Anpassung an den Kunden.',
      dato:
        'In der Backstube, in der alles begann, stempelten im zweiten Monat fast 8 von 10 Personen, die den ganzen Monat gearbeitet hatten, bereits über das Mitarbeiterportal.',
      cifra: {
        etiqueta: 'stempelten über das Mitarbeiterportal',
        texto: '{fichan} von {total} Personen, die den ganzen Monat gearbeitet haben ({mes}), in der Backstube, in der Synentor entstanden ist.',
        fuente: 'Gemessener Wert: Zählung in der Datenbank des Programms, ohne personenbezogene Daten.',
      },
    },
    multiempresa: {
      antetitulo: 'Mehrere Unternehmen',
      titulo: 'Viele Unternehmen. Eine einzige Installation.',
      texto:
        'Jedes Unternehmen ist von den anderen getrennt, mit eigenen Nutzern und Berechtigungen. Ideal für Unternehmensgruppen und Kanzleien: Sie wechseln im Handumdrehen zwischen den Unternehmen.',
      puntos: ['Sie zahlen pro Unternehmen, nicht pro Person.', '{usuarios} Nutzer inklusive.', 'Zusätzliches Unternehmen: {empresaAdicional} pro Monat.'],
    },
    ia: {
      antetitulo: 'Private KI',
      titulo: 'Ihre KI, bei Ihnen zu Hause.',
      texto:
        'Lieferantenrechnungen und Dokumente der Mitarbeitenden werden von einer KI gelesen, die auf einem Rechner in Ihrem Unternehmen läuft. Diese Dokumente gelangen nicht in die Cloud.',
    },
    compras: {
      titulo: 'Rechnungen lesen sich von selbst.',
      texto:
        'Senden Sie sie per E-Mail oder legen Sie sie in einem Ordner ab: Synentor liest sie, legt bei Bedarf den Lieferanten an und bereitet den Entwurf vor, sodass Sie ihn nur noch prüfen müssen.',
      pasos: ['Rechnung per E-Mail', 'Die KI liest sie', 'Entwurf zur Prüfung', 'Gebucht'],
    },
    bancos: {
      titulo: 'Jede Bank, abgestimmt.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV oder Excel: Synentor liest den Kontoauszug und schlägt Ihnen den Abgleich vor.',
      pasos: ['Kontoauszug der Bank', 'Buchungen gelesen', 'Abgleich vorgeschlagen', 'Sie bestätigen'],
    },
    juridico: {
      titulo: 'Das andorranische Recht, im Blick.',
      texto:
        'Überwachung des BOPA, amtliche Verfahren mit ihren Fristen, Gesellschaftsbeschlussbuch und Geldwäscheprävention für Verpflichtete.',
    },
    historia: {
      antetitulo: 'Wie es entstand',
      titulo: 'Entstanden in einem echten Unternehmen.',
      texto:
        'Synentor ist kein Modell: Es entstand, indem es jeden Tag ein andorranisches Unternehmen verwaltete, eine Backstube mit Filialen. Jeder Bildschirm wurde gebaut, um ein echtes Problem zu lösen.',
    },
    precio: {
      titulo: 'Ein klarer Preis, ohne Überraschungen.',
      texto: 'Wählen Sie die Module, die Sie brauchen, und sehen Sie sofort die Summe. Module, die zusammengehören, werden automatisch ergänzt.',
      boton: 'Preis berechnen',
    },
    final: {
      titulo: 'Sprechen wir über Ihr Unternehmen.',
      texto: 'Wir zeigen Ihnen Synentor an Beispielen wie Ihrem und sagen Ihnen unverbindlich, wo wir anfangen würden.',
      boton: 'Demo anfragen',
    },
  },
  contacto: {
    titulo: 'Kontakt · Synentor',
    descripcion: 'Schreiben Sie uns, wir antworten innerhalb eines Werktags.',
    encabezado: 'Sprechen wir miteinander.',
    entrada: 'Sagen Sie uns, was Sie brauchen. Wir antworten innerhalb eines Werktags, montags bis freitags von 9:00 bis 18:00 Uhr (Ortszeit Andorra).',
    datos: 'Kontaktdaten',
    correo: 'E-Mail',
    telefono: 'Telefon',
    direccion: 'Adresse',
    horario: 'Öffnungszeiten',
    horarioTexto: 'Montag bis Freitag, 9:00 bis 18:00 Uhr (Ortszeit Andorra)',
    despues: {
      titulo: 'Wie es danach weitergeht',
      pasos: [
        'Wir erhalten Ihre Nachricht im E-Mail-Postfach des Unternehmens.',
        'Wir antworten Ihnen innerhalb eines Werktags.',
        'Auf Wunsch erstellen wir Ihnen ein schriftliches Angebot.',
      ],
    },
    formulario: {
      titulo: 'Senden Sie uns eine Nachricht',
      nombre: 'Name',
      correo: 'E-Mail-Adresse',
      empresa: 'Unternehmen',
      telefono: 'Telefon',
      asunto: 'Betreff',
      asuntos: {
        informacion: 'Allgemeine Informationen',
        demostracion: 'Demo anfragen',
        pedido: 'Bestellanfrage',
        centralita: 'KI-Telefonzentrale für Arztpraxen',
        precios: 'Preise und Angebot',
        consultoria: 'KI- und Vertriebsberatung',
        muv: 'MUV',
        web: 'Webseitengestaltung',
        otro: 'Sonstiges',
      },
      mensaje: 'Nachricht',
      consentimiento: 'Ich habe die {politica} gelesen und bin damit einverstanden, dass Sie diese Daten verwenden, um mir zu antworten.',
      politica: 'Datenschutzerklärung',
      obligatorio: 'Pflichtfeld',
      enviar: 'Nachricht senden',
      enviando: 'Wird gesendet…',
      contador: '{n} von {max}',
      ok: 'Gesendet. Wir antworten Ihnen innerhalb eines Werktags.',
      errores: {
        datos: 'Bitte prüfen Sie die markierten Felder: Es fehlt eine Angabe oder sie ist ungültig.',
        robot: 'Wir konnten nicht bestätigen, dass Sie kein Roboter sind. Bitte versuchen Sie es erneut.',
        envio: 'Die Nachricht konnte gerade nicht gesendet werden.',
        red: 'Keine Verbindung.',
      },
      alternativa: 'Schreiben Sie uns direkt an {correo}.',
      sinJs: 'Wenn das Formular nicht funktioniert, schreiben Sie uns an {correo}.',
    },
  },
  servicios: {
    titulo: 'Leistungen · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM Modul für Modul, MUV, KI- und Vertriebsberatung, Energie, Migrationen, Mitarbeiterportal und Webseiten.',
    encabezado: 'Alles, was wir tun, ohne Kleingedrucktes.',
    entrada:
      'Eigene Software und Beratung. Bei jedem Modul sagen wir Ihnen, ob es heute in Ihrem Land funktioniert, ob die Entwicklung unmittelbar bevorsteht oder ob es individuell angepasst wird.',
    columnas: { andorra: 'Andorra', espana: 'Spanien', otros: 'Portugal, Frankreich, Italien und Deutschland' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'Die Unternehmensverwaltung an einem Ort. Sie zahlen pro Unternehmen und für die Module, die Sie nutzen.',
      requiere: 'Setzt {modulo} voraus',
      idiomaPrograma:
        'Die Oberfläche des Programms gibt es auf Spanisch und Katalanisch. Weitere Sprachen: Entwicklung steht unmittelbar bevor, mit individueller Anpassung an den Kunden.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'Der Mehrmandanten-Kern: Nutzer und Berechtigungen, Datensicherungen, lokale KI, zentraler Dokumenteneingang, Stammdaten, Unternehmensakte und Beschlussbuch, Buchhaltung nach andorranischem Kontenplan, Liquidität und Bankabgleich, Cockpit und Berichte.',
      },
      compras: {
        nombre: 'Intelligenter Einkauf',
        texto:
          'Lieferantenrechnungen kommen per E-Mail oder in einem Ordner an und werden von selbst gelesen: bei Bedarf Anlage des Lieferanten und Entwurf zur Prüfung.',
      },
      ventas_crm: {
        nombre: 'Vertrieb und CRM',
        texto: 'Kunden, Projekte, Kontakte, Vertriebskarte und Register der ausgestellten Rechnungen mit IGI.',
      },
      rrhh: {
        nombre: 'Personalwesen und Lohnabrechnung',
        texto:
          'Personalakte, Verträge, Anmeldung bei der CASS, Lohnabrechnung und andorranische Einkommensteuer (IRPF), Urlaub, Arbeitszeiten, Zeiterfassung, Mitarbeiterportal und Abschlussabrechnungen.',
      },
      fiscal: { nombre: 'Steuern', texto: 'IGI, Körperschaftsteuer, Steuererklärungen und Formulare der DTF.' },
      juridico: {
        nombre: 'Recht und Verfahren',
        texto: 'Überwachung des BOPA, amtliche Verfahren mit ihren Fristen, Akten und Gesellschaftsbeschlussbuch.',
      },
      pbc: {
        nombre: 'Geldwäscheprävention',
        texto: 'Die Akte jedes Kunden für Verpflichtete: Fragebögen, Risikomodell, Entscheidungen und Meldungen an die UIFAND.',
      },
      productos: { nombre: 'Produkte, Rezepturen und Lagerbestand', texto: 'Produkte, Rezepturen mit ihren Kosten und Lagerbestand.' },
      tpv: {
        nombre: 'Kassensystem und Kasse',
        texto: 'Die Umsätze des Kassensystems HIOPOS und der Kasse CashDro, jeden Tag in der Buchhaltung. CashDro nur in einem Unternehmen pro Installation.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'Für Energieberater: Vorgänge, Kunden, Anschlüsse und CUPS, Rechnungen mit PDF, Verträge und Fristen, Vergleich mit Ihrem Tarifkatalog, Bericht und Angebot als PDF, Verfolgung der Einsparung und Kundenportal. Spanischer Strommarkt, Tarife mit bis zu 3 Perioden.',
      },
    },
    muv: {
      titulo: 'MUV',
      texto:
        'Das operative Gehirn des Unternehmens: Wissenslandkarten, Aufgaben mit Verantwortlichen, Terminen und Abhängigkeiten sowie eine private KI, die in Ihrem Büro läuft.',
      precio: 'Kostenlos bis {gratis} Nutzer. Vom {desde1}. bis zum {hasta1}. Nutzer: {precio1} pro Nutzer und Monat; bis {hasta2} Nutzer: {precio2}.',
      equipos: 'Empfohlene Rechner (Einmalzahlung): Basis {basico} · KI {ia} · KI+ {iaPlus}.',
      enDesarrollo: 'Noch ohne gleichzeitiges Bearbeiten in Echtzeit und ohne mobile App: in Entwicklung.',
    },
    consultoria: {
      titulo: 'KI- und Vertriebsberatung',
      texto:
        'Wir sind eine Beratung für KI und Vertrieb. Diagnose, Schulung, Assistenten, Automatisierungen und maßgeschneiderte KI-Projekte, passend zu Ihrem Budget.',
      categorias: {
        estrategia: 'Strategie und Diagnose',
        formacion: 'Schulung',
        asistentes: 'Assistenten und Kundenservice',
        automatizacion: 'Prozessautomatisierung',
        documentos: 'Dokumente und Wissen',
        datos: 'Daten, Analyse und Prognose',
        medida: 'Individualentwicklung',
        cumplimiento: 'Compliance und Governance',
        soporte: 'Support und Wartung',
      },
      desde: 'ab {precio}',
      cuota: 'und ab {cuota} pro Monat',
      nota: 'Preise für ein Kleinstunternehmen, zzgl. Steuern (Katalog vom {fecha}). Für größere Unternehmen gemäß Angebot.',
      medida: 'Maßgeschneiderte KI-Projekte: Wir erstellen Ihnen ein Angebot.',
    },
    energia: {
      titulo: 'Energie',
      texto: 'Wir helfen Ihnen, weniger für Strom zu zahlen und zu wissen, wo jede Kilowattstunde verbraucht wird.',
      particulares: {
        titulo: 'Rechnungsprüfung für Privatpersonen',
        texto: 'Wir prüfen Ihre Rechnung und die vertraglich vereinbarte Leistung für {precio}. Wir erstatten es Ihnen, wenn wir keine Einsparung von mindestens {precio} pro Jahr finden.',
      },
      empresas: {
        titulo: 'Unternehmen (Spanien)',
        texto:
          '{precio} pro Anschluss oder erfolgsabhängig: {porcentaje} der nachgewiesenen Einsparung der ersten 12 Monate. Ohne Einsparung berechnen wir nichts. Tarife mit 6 Perioden, Krankenhäuser und Bauträger: individuell.',
      },
      comisiones: 'Heute erhalten wir von keinem Energieversorger eine Provision: Wir empfehlen Ihnen, was für Sie passt.',
      monitorizacion: {
        titulo: 'Monitoring mit Home Assistant und Grafana',
        texto: 'Wir messen den Verbrauch jedes Stromverteilers, und Sie sehen ihn in einem Dashboard. Die Daten bleiben auf einem Rechner in Ihrem Gebäude.',
        vivienda: 'Wohnung oder kleiner Betrieb (1 Verteiler)',
        pyme: 'Mittelstand oder Geschäft (bis zu 6 Verteiler)',
        edificio: 'Gebäude, Hotel oder Bauträger',
        granConsumidor: 'Krankenhaus oder Großverbraucher',
        instalacionDesde: 'Installation ab {precio}',
        instalacionMedida: 'Installation individuell',
        cuota: '{precio} pro Monat',
        cuotaDesde: 'ab {precio} pro Monat',
        incluye: 'Die Installation umfasst die Messgeräte für diese Punkte. Die Monatsgebühr umfasst Wartung, Sicherungen, Updates und einen Monatsbericht.',
      },
      programa: 'Sind Sie Energieberater? Sehen Sie sich C. Eléctrica in der Suite an.',
    },
    migracion: {
      titulo: 'Migration und Parallelbetrieb',
      texto: 'Wir holen Ihre Daten aus dem bisherigen Programm. Wir versprechen Ihnen nur, was heute tatsächlich importiert wird.',
      arranque: {
        nombre: 'Start',
        texto: 'Lieferanten, Mitarbeitende, Produkte und Kontakte aus CSV oder Excel; Kontoauszüge jeder Bank (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Bisherige Buchhaltung (Andorra)',
        texto: 'Journal, Hauptbücher sowie Summen- und Saldenliste, geprüft und übernommen; Abschlüsse des Formulars 805-B; Register der ausgestellten Rechnungen; Lieferantenrechnungen als PDF.',
        precio: '{precio} für das erste Geschäftsjahr und {adicional} für jedes weitere',
      },
      personal: {
        nombre: 'Personal (Andorra)',
        texto: 'Lohnabrechnungshistorie, CASS-Beiträge, Urlaub und Arbeitsstunden.',
        precio: '{precio} bis {personas} Personen',
      },
      aMedida:
        'Alles Weitere (Kunden, offene Forderungen und Verbindlichkeiten, Anfangsbestand, Anlagevermögen, direkte Anbindung an andere Programme): individuell.',
      convivencia: {
        titulo: 'Parallelbetrieb mit Ihrem Programm',
        texto:
          'Wenn Sie Ihr Programm noch eine Zeit lang weiterverwenden möchten, laden wir jeden Monat, was es exportiert: {puesta} für die Einrichtung und {cuota} pro Monat, bis zu {cargas} Ladevorgänge pro Monat. Eine direkte Anbindung: individuell.',
      },
    },
    portal: {
      titulo: 'Mitarbeiterportal',
      texto: 'Lohnabrechnungen, Dokumente, Urlaub, Anträge, Zeiterfassung, Profil und Bescheinigungen, von jedem Browser aus.',
      dato:
        'In der Backstube, in der alles begann, stempelten im zweiten Monat fast 8 von 10 Personen, die den ganzen Monat gearbeitet hatten, bereits über das Portal. Ohne Papier und ohne eine einzige handschriftliche Zeiterfassung.',
      precio:
        'Einzeln, ohne den Rest des Programms: {cuota} pro Monat bis {personas} Personen, {adicional} für jede weitere Person und {implantacion} für die Einführung.',
      incluido: 'Mit Personalwesen bereits enthalten.',
    },
    webs: {
      titulo: 'Webseiten',
      texto: 'Schnelle, mehrsprachige Webseiten mit einem Formular, das wirklich sendet, und Statistiken ohne Cookies. Diese Webseite haben wir genau so gebaut.',
      esencial: { nombre: 'Web Essenziell', texto: 'Eine Vorstellungsseite in 1 oder 2 Sprachen.' },
      profesional: { nombre: 'Web Professionell', texto: 'Bis zu 6 Seiten, 3 Sprachen und grundlegende Suchmaschinenoptimierung.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Bis zu 12 Seiten, bis zu 7 Sprachen, Markendesign und ein individueller Rechner oder Konfigurator.',
      },
      desde: 'ab {precio}',
      tienda: 'Onlineshop: individuell, nach Angebot.',
      extras: 'Zusätzliche Seite, {pagina}; zusätzliche Sprache, {idioma} (muttersprachliche Prüfung gesondert).',
      mantenimiento: 'Wartung: {basico} pro Monat (1 Stunde Änderungen) oder {plus} pro Monat (3 Stunden und monatlicher Besucherbericht).',
    },
    centralita: {
      titulo: 'KI-Telefonzentrale für Arztpraxen',
      etiqueta: 'In Kürze',
      texto:
        'Eine Telefonzentrale, die Anrufe von Patientinnen und Patienten rund um die Uhr beantwortet: Terminbuchungen, Absagen und Terminänderungen, Warteliste und Erinnerungen. Sie sagt dem Patienten immer, dass er mit einer KI spricht. Für Arztpraxen und Zahnkliniken in Andorra und Spanien.',
      boton: 'Ich möchte mehr Informationen',
    },
    implantacion: {
      titulo: 'Einführung und Support',
      texto: 'Wir installieren, konfigurieren, laden die Daten und schulen Ihr Team: {jornada} pro Tag; die Suite ab {minimo} Tagen.',
      soporte: 'Support per E-Mail und Telefon, montags bis freitags von 9:00 bis 18:00 Uhr (Ortszeit Andorra), mit Antwort innerhalb eines Werktags.',
    },
  },
  precios: {
    titulo: 'Preise · Synentor',
    descripcion: 'Berechnen Sie den Preis von Synentor Suite ERP-CRM und MUV sofort, ohne Überraschungen.',
    encabezado: 'Berechnen Sie Ihren Preis.',
    entrada: 'Wählen Sie Land, Module und Personen. Die Summe erscheint sofort, zzgl. Steuern; in Andorra auch inklusive IGI.',
    configurador: {
      pais: 'Land',
      paises: { AD: 'Andorra', ES: 'Spanien', PT: 'Portugal', FR: 'Frankreich', IT: 'Italien', DE: 'Deutschland', OTRO: 'Anderes Land' },
      modalidad: 'Wo Sie es haben möchten',
      modalidadA: 'Bei Ihnen im Unternehmen installiert',
      modalidadB: 'Von Synentor in Andorra gehostet (+{precio} pro Monat)',
      pago: 'Zahlung',
      anual: 'Jährlich',
      mensual: 'Monatlich (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Paket Synentor Komplett',
      paqueteTexto: 'Base, Einkauf, Vertrieb und CRM, Steuern und MUV, mit {usuarios} Nutzern: {precio} pro Monat.',
      usuarios: 'Nutzer des Programms',
      empresa: 'Unternehmen {n}',
      principal: 'Hauptunternehmen',
      personas: 'Personen in der Belegschaft',
      anadirEmpresa: 'Unternehmen hinzufügen',
      quitarEmpresa: 'Dieses Unternehmen entfernen',
      menos: 'Weniger',
      mas: 'Mehr',
      verResumen: 'Angebot ansehen',
      alMes: 'pro Monat',
      muvUsuarios: 'MUV-Nutzer',
      anadidoPor: 'Ergänzt: wird von einem anderen Modul vorausgesetzt',
      incluidoPaquete: 'Im Paket enthalten',
      estados: { disponible: 'Verfügbar', inminente: 'Kurz vor der Entwicklung', a_medida: 'Individuell' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Paket Synentor Komplett',
        'empresa-adicional': 'Zusätzliches Unternehmen',
        personas: 'Personen in der Belegschaft (Personalwesen)',
        'usuarios-adicionales': 'Zusätzliche Nutzer',
        'paquete-usuarios': 'Zusätzliche Nutzer des Pakets',
        'modalidad-b': 'Hosting durch Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Monatliche Zahlung',
      },
      resumen: 'Ihr Angebot',
      cuota: 'Gebühr pro Monat',
      sinImpuestos: 'zzgl. Steuern',
      igi: 'IGI ({porcentaje})',
      total: 'Summe pro Monat',
      implantacion: 'Einführung, ab {precio} (Einmalzahlung)',
      avisos: {
        'impuestos-no-incluidos': 'Steuern nicht enthalten (IVA, TVA oder MwSt., je nach Land).',
        'cashdro-una-empresa': 'CashDro funktioniert nur in einem Unternehmen pro Installation.',
        'volumen-empresas': 'Bei mehr als {max} Unternehmen gilt ein Mengentarif: Wir erstellen Ihnen ein Angebot.',
        'modalidad-b-inminente': 'Das Hosting durch Synentor steht kurz vor der Entwicklung.',
        'muv-a-medida': 'Bei mehr als {max} MUV-Nutzern: individuell.',
        'requiere-adaptacion': 'Ein Modul ist heute in Ihrem Land nicht verfügbar: Entwicklung steht unmittelbar bevor oder individuell.',
      },
      botonDemo: 'Demo anfragen',
      botonPropuesta: 'Angebot anfordern',
      botonPedido: 'Meine Auswahl senden',
      pedidoNota: 'Keine Zahlung auf der Webseite: Wir antworten Ihnen mit dem Angebot und dem Vertrag in Schriftform.',
      pedidoAsunto: 'Bestellanfrage über den Rechner',
      sinJs: 'Der Rechner benötigt JavaScript. Sehen Sie sich die Tabellen unten an oder schreiben Sie uns.',
    },
    tablas: {
      titulo: 'Alle Tarife',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Posten',
      precio: 'Preis',
      alMes: '{precio} pro Monat',
      porPersona: '+ {precio} pro Person in der Belegschaft',
      usuarioAdicional: 'Zusätzlicher Nutzer',
      empresaAdicional: 'Zusätzliches Unternehmen',
      empresaAdicionalPrecio: '{precio} pro Monat + dessen Module zu {porcentaje}',
      paquete: 'Paket Synentor Komplett',
      paqueteUsuario: 'Zusätzlicher Nutzer des Pakets: {precio} pro Monat',
      muv: 'MUV',
      consultoria: 'KI- und Vertriebsberatung',
      servicios: 'Energie, Migrationen, Portal und Webseiten',
      verServicios: 'Alle Details unter Leistungen',
      implantacion: 'Einführung: {precio} pro Tag',
    },
    condiciones: {
      titulo: 'Bedingungen',
      puntos: [
        'Jahreslizenz, ohne Bindung über 12 Monate hinaus und mit 30 Tagen Kündigungsfrist.',
        'Support und Updates inklusive.',
        'Zum Vertragsende übergeben wir Ihnen das Archiv mit den Daten Ihres Unternehmens.',
        'Preise in Euro, zzgl. Steuern. In Andorra IGI von {igi}.',
        'Monatliche Zahlung: {recargo} Aufschlag.',
      ],
    },
    comparacion: {
      titulo: 'So schneiden wir im Vergleich ab',
      texto:
        'Ein Cloud-Lohnabrechnungsprogramm kostet zwischen {nominaMin} und {nominaMax} pro Person und Monat, zuzüglich einer Grundgebühr. Ein internationales ERP kostet etwa {erp} pro Nutzer und Monat. Bei Synentor zahlen Sie pro Unternehmen, und die ersten {usuarios} Nutzer sind inklusive.',
      fuente: 'Quellen: offizielle Preisseiten der Hersteller, abgerufen am {fecha}.',
      grafico: {
        titulo: 'Beispiel: Unternehmen mit {personas} Personen und {usuarios} Nutzern, pro Monat',
        synentor: 'Synentor: Base, Einkauf, Personalwesen, Steuern, Produkte und Kassensystem',
        separado: 'Cloud-Lohnabrechnungsprogramm + internationales ERP, getrennt',
        rango: 'von {min} bis {max}',
        nota: 'Zzgl. Steuern. Getrennt bietet keines von beiden die andorranische Lohnabrechnung oder CASS.',
      },
    },
    faq: {
      titulo: 'Häufige Fragen',
      preguntas: [
        {
          p: 'In welchen Sprachen gibt es das Programm?',
          r: 'Auf Spanisch und Katalanisch. Weitere Sprachen: Entwicklung steht unmittelbar bevor, mit individueller Anpassung an den Kunden.',
        },
        {
          p: 'Wo wird es installiert?',
          r: 'Bei Ihnen im Unternehmen, auf einem Server oder NAS: heute verfügbar. Von Synentor in Andorra gehostet: Entwicklung steht unmittelbar bevor.',
        },
        {
          p: 'Gelangen die Daten in die Cloud?',
          r: 'Lieferantenrechnungen und Dokumente der Mitarbeitenden werden von einer KI gelesen, die auf einem Rechner in Ihrem Unternehmen läuft. Falls eine Funktion einen externen Dienst nutzt, sagen wir es Ihnen im Angebot.',
        },
        { p: 'Funktioniert es in Spanien?', r: 'Ja. Einige Module sind heute verfügbar, bei anderen steht die Entwicklung unmittelbar bevor: Der Rechner sagt es Ihnen Modul für Modul.' },
        { p: 'Gibt es eine Vertragsbindung?', r: 'Jahreslizenz, ohne Bindung über 12 Monate hinaus und mit 30 Tagen Kündigungsfrist.' },
        { p: 'Wer nutzt Synentor?', r: 'Es entstand, indem es jeden Tag eine Backstube mit Filialen in Andorra verwaltete. Und es ist das Programm, mit dem Synentor selbst arbeitet.' },
      ],
    },
  },
  legal: {
    actualizado: 'Zuletzt aktualisiert: {fecha}',
    aviso: {
      titulo: 'Impressum · Synentor',
      encabezado: 'Impressum und rechtliche Hinweise',
      secciones: [
        {
          t: 'Anbieter',
          p: 'Diese Webseite gehört {razon} ({estado}), mit Sitz in {direccion}. E-Mail: {correo}. Telefon: {telefono}. NRT und Eintragung im Handelsgesellschaftsregister: in Bearbeitung.',
        },
        {
          t: 'Nutzung der Webseite',
          p: 'Die Informationen auf dieser Webseite sind unverbindlich. Maßgeblich sind die Preise und Bedingungen des Angebots, das wir Ihnen schriftlich unterbreiten.',
        },
        {
          t: 'Geistiges Eigentum',
          p: 'Die Texte, das Logo und das Design dieser Webseite gehören {razon}. Bitte verwenden Sie sie nicht ohne unsere Erlaubnis.',
        },
        { t: 'Anwendbares Recht', p: 'Es gilt andorranisches Recht. Für Streitigkeiten sind die Gerichte des Fürstentums Andorra zuständig.' },
      ],
    },
    privacidad: {
      titulo: 'Datenschutzerklärung · Synentor',
      encabezado: 'Datenschutzerklärung',
      secciones: [
        { t: 'Wer verantwortlich ist', p: '{razon} ({estado}), {direccion}. E-Mail: {correo}.' },
        {
          t: 'Welche Daten wir verarbeiten',
          p: 'Die Daten aus dem Kontaktformular: Name, E-Mail-Adresse, Unternehmen und Telefon (die beiden Letzteren, wenn Sie sie angeben), Betreff und Nachricht. Die Nachricht erreicht uns per E-Mail: Die Webseite speichert sie nicht.',
        },
        { t: 'Wozu', p: 'Um Ihnen zu antworten und, wenn Sie es wünschen, ein Angebot für Sie vorzubereiten. Rechtsgrundlage ist Ihre Einwilligung.' },
        { t: 'Wie lange', p: 'So lange, wie es für Ihre Betreuung erforderlich ist und wie es das Gesetz verlangt.' },
        {
          t: 'Wer sie sonst noch sieht',
          p: 'Die Dienstleister, die die Webseite betreiben: das Hosting und die Roboterprüfung (Cloudflare) sowie der E-Mail-Versand. Die Besucherstatistik (Umami) verwendet keine Cookies und speichert keine Daten, die Sie identifizieren.',
        },
        {
          t: 'Ihre Rechte',
          p: 'Sie können Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen, indem Sie an {correo} schreiben. Wenn Sie nicht einverstanden sind, können Sie sich bei der andorranischen Datenschutzagentur (apda.ad) beschweren.',
        },
        {
          t: 'Gesetze',
          p: 'Das andorranische Gesetz zum Schutz personenbezogener Daten (Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals) und die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union für Personen in der EU.',
        },
      ],
    },
    cookies: {
      titulo: 'Cookie-Richtlinie · Synentor',
      encabezado: 'Cookie-Richtlinie',
      secciones: [
        {
          t: 'Was wir verwenden',
          p: 'Ein einziges Cookie, „lang“, das die von Ihnen gewählte Sprache speichert (ein Jahr). Und in Ihrem Browser eine Markierung, damit Sie den Sprachhinweis nicht erneut sehen, wenn Sie ihn schließen.',
        },
        { t: 'Statistik', p: 'Wir zählen die Besuche mit Umami, ohne Cookies und ohne Daten zu speichern, die Sie identifizieren.' },
        { t: 'Wie Sie sie entfernen', p: 'Sie können sie jederzeit in den Einstellungen Ihres Browsers löschen.' },
      ],
    },
  },
};
