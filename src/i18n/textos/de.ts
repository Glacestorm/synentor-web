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
    idioma: 'Deutsch',
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
    nrt: 'NRT in Bearbeitung',
    estadisticas: 'Besucherstatistik ohne Cookies (Umami).',
  },
  cookiesAviso: {
    titulo: 'Cookies',
    aviso: '{empresas} verwenden Cookies, um {finalidades}. Sie werden nur aktiviert, wenn Sie zustimmen. Sie können sie ablehnen oder auswählen und Ihre Wahl jederzeit über die Cookie-Schaltfläche ändern. Daten können Andorra und die Europäische Union verlassen.',
    y: ' und ',
    politica: 'Cookie-Richtlinie',
    aceptar: 'Alle akzeptieren',
    rechazar: 'Alle ablehnen',
    configurar: 'Anpassen',
    guardar: 'Auswahl speichern',
    siempre: 'Immer aktiv',
    flotante: 'Cookie-Einstellungen',
    necesarias: { nombre: 'Notwendig', texto: 'Die gewählte Sprache (Cookie „lang“, 1 Jahr), Ihre Cookie-Auswahl („synentor_consentimiento“, 12 Monate) und die Bot-Prüfung des Kontaktformulars (Cloudflare). Sie lassen sich nicht deaktivieren.' },
    estadisticas: { nombre: 'Statistik', texto: 'Welche Seiten besucht werden und wie man sich bewegt, um die Website zu verbessern. Clarity zeichnet die Sitzung auf, Eingaben bleiben verdeckt.', finalidad: 'die Besuche zu messen' },
    publicidad: { nombre: 'Werbung', texto: 'Um Personen, die die Website schon besucht haben, Synentor-Anzeigen zu zeigen und zu messen, ob sie wirken.', finalidad: 'Ihnen Synentor-Anzeigen auf anderen Websites zu zeigen' },
    herramientas: {
      ga4: 'Google Analytics (Google): Cookies „_ga“, bis zu 13 Monate.',
      clarity: 'Microsoft Clarity (Microsoft): Cookie „_clck“, 1 Jahr, und „_clsk“, 1 Tag.',
      metaPixel: 'Meta-Pixel (Meta Platforms): Cookie „_fbp“, 90 Tage, und die von Meta auf ihrer Domain.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): LinkedIn-Cookies auf ihrer Domain, bis zu 1 Jahr.',
    },
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
      animacion: { pausa: 'Animation anhalten', reanuda: 'Animation fortsetzen' },
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
        gestorias: 'Paket für Kanzleien und Steuerbüros',
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
      costes: {
        nombre: 'Kontrolle der Einkaufskosten',
        texto: 'Preisvergleich nach Lieferant und Artikel, Bestellkontrolle und Warnhinweise bei Preiserhöhungen. Mit Rezepturen: die Kosten jeder Rezeptur; mit dem Kassensystem: theoretischer Verbrauch und Marge pro Stück.',
      },
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
    costes: {
      titulo: 'Kontrolle der Einkaufskosten',
      texto: 'Jede Rechnung und jeder Lieferschein, die im Einkauf eingehen, werden zu Informationen, mit denen Sie besser einkaufen. {precio} pro Monat, als Ergänzung zum Einkauf.',
      puntos: [
        'Preisvergleich: Jede Position wird auf einen Preis pro Kilo, Liter oder Einheit umgerechnet, und je Artikel sehen Sie, welcher Lieferant am günstigsten ist und wie viel Sie hätten sparen können. Jede Zahl öffnet die zugehörige Originalrechnung.',
        'Einkaufskorb: bereitet Bestellentwürfe an den günstigsten Lieferanten vor.',
        'Verlauf der gezahlten Preise, Preisangebote der Lieferanten und verdächtige Preise.',
        'Rabatte jedes Lieferanten und Bestellkontrolle: Bestelltes, Geliefertes und Berechnetes im Abgleich mit dem zugesagten Preis.',
        'Warnhinweise im Cockpit, wenn ein Lieferant einen Artikel um 8 % oder mehr verteuert, wenn Sie einem Lieferanten für dasselbe mehr zahlen als einem anderen oder wenn eine Rechnung den Bestellpreis übersteigt.',
      ],
      condicionesTitulo: 'Mit Rezepturen und Kassensystem',
      condiciones: [
        'Mit Rezepturen (Modul Produkte): die aktuellen Kosten jeder Rezeptur zu den zuletzt gezahlten Preisen.',
        'Mit Rezepturen und angeschlossenem Kassensystem (derzeit HIOPOS): der theoretische Verbrauch im Vergleich zum Eingekauften und die Marge pro Stück.',
      ],
      nota: 'Jede Artikelbezeichnung des Lieferanten wird einmalig dem passenden Artikel zugeordnet. Die Warnhinweise erscheinen im Cockpit; sie werden nicht per E-Mail verschickt.',
      enlace: 'Im Rechner hinzufügen',
    },
    gestorias: {
      titulo: 'Paket Kanzleien und Steuerbüros',
      estado: 'Entwicklung steht unmittelbar bevor, mit individueller Anpassung an den Kunden',
      texto: 'Für Kanzleien, die Buchhaltung, Steuern und Lohnabrechnung für die Unternehmen ihrer Mandanten erledigen, alles in einer einzigen Installation.',
      precio: '{precio} pro Monat',
      puntos: [
        'Enthält Buchhaltung, Einkauf mit Rechnungserkennung, Vertrieb, Steuern und Lohnabrechnung.',
        '{empresas} Mandantenunternehmen und {usuarios} Nutzer der Kanzlei inklusive.',
        'Zusätzliches Mandantenunternehmen: {empresa} pro Monat, bis zu {max} Unternehmen.',
        'Lohnabrechnung: {nomina} pro Person und Monat.',
        'Zusätzlicher Nutzer der Kanzlei: {usuario} pro Monat.',
        'Bei mehr als {max} Unternehmen nach Angebot.',
      ],
      ejemplo: 'Beispiel: {empresasEj} Unternehmen und {personasEj} Personen, {totalEj} pro Monat.',
      condiciones: 'Nur für Kanzleien, die Unternehmen ihrer Mandanten betreuen. Für Andorra; in anderen Ländern individuell. Preise zzgl. Steuern, jährliche Zahlung.',
      boton: 'Angebot anfordern',
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
      paqueteTitulo: 'Paket',
      sinPaquete: 'Ohne Paket: Module nach Wahl',
      paqueteObrador: 'Paket Obrador',
      paqueteObradorTexto: 'Base, Einkauf, Produkte, Kassensystem und Personalwesen, mit {usuarios} Nutzern: {precio} pro Monat; mit der Kontrolle der Einkaufskosten {conCostes}.',
      conObrador: 'Mit dem Paket Obrador',
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
        'paquete-obrador': 'Paket Obrador',
        'paquete-obrador-costes': 'Paket Obrador mit Kontrolle der Einkaufskosten',
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
      paqueteObrador: 'Paket Obrador',
      gestorias: 'Paket Kanzleien und Steuerbüros',
      gestoriasPrecio: '{precio} pro Monat mit {empresas} Unternehmen und {usuarios} Nutzern; {empresa} je weiteres Unternehmen (bis {max}) und {nomina} pro Lohnabrechnung',
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
    enlaces: {
      privacidad: 'Datenschutzerklärung',
      cookies: 'Cookie-Richtlinie',
    },
    aviso: {
      titulo: 'Impressum · Synentor',
      encabezado: 'Impressum und rechtliche Hinweise',
      secciones: [
        {
          t: 'Wem diese Website gehört',
          p: [
            'Diese Website, {web}, gehört {razon}, einer andorranischen Gesellschaft mit Sitz unter der Anschrift {direccion}. NRT (andorranische Steuernummer): in Bearbeitung.',
            'Bei Fragen schreiben Sie uns an {correo} oder rufen Sie uns unter {telefono} an.',
          ],
        },
        {
          t: 'Wozu diese Website dient',
          p: [
            'Sie informiert über unsere Beratungsleistungen in künstlicher Intelligenz und Vertrieb sowie über unsere Programme. Der Zugang ist kostenlos und eine Registrierung ist nicht nötig.',
            'Auf der Website wird nichts gekauft oder bezahlt. Die angezeigten Preise sind Richtwerte und verstehen sich ohne Steuern: Maßgeblich sind das Angebot und der Vertrag, die wir mit Ihnen schriftlich unterzeichnen.',
          ],
        },
        {
          t: 'Wie Sie sie nutzen dürfen',
          p: [
            'Wer die Website nutzt, ist dafür verantwortlich, wie er sie nutzt. Es ist nicht erlaubt,',
          ],
          lista: [
            'sie gesetzwidrig oder gegen die Rechte anderer Personen zu nutzen;',
            'zu versuchen, in ihre Server einzudringen, ihre Konfiguration zu ändern oder ihre Sicherheitsmaßnahmen zu umgehen;',
            'über das Formular rechtswidrige oder beleidigende Inhalte, unaufgeforderte Werbung oder Daten anderer Personen ohne deren Erlaubnis zu senden;',
            'sie innerhalb einer anderen Website anzuzeigen oder automatisiert zu kopieren.',
          ],
          despues: [
            'Wenn jemand diese Bedingungen nicht einhält, können wir ihm den Zugang sperren.',
          ],
        },
        {
          t: 'Haftung',
          p: [
            'Wir achten darauf, dass die Informationen richtig und aktuell sind, sie können aber Fehler oder veraltete Angaben enthalten: Wir korrigieren sie, sobald wir sie bemerken. Wir haften weder für Schäden, die durch die Nutzung der Informationen der Website entstehen können, noch für Unterbrechungen durch Wartung, Störungen oder Ursachen, die außerhalb unseres Einflusses liegen, auch wenn wir angemessene Maßnahmen treffen, um sie zu vermeiden.',
          ],
        },
        {
          t: 'Links zu anderen Websites',
          p: [
            'Die Website verlinkt auf Seiten anderer Unternehmen und Einrichtungen. Wir kontrollieren sie nicht und sind für ihren Inhalt nicht verantwortlich, und ein Link bedeutet nicht, dass wir mit ihnen in Verbindung stehen. Bitte beachten Sie deren eigene Bedingungen.',
          ],
        },
        {
          t: 'Geistiges und gewerbliches Eigentum',
          p: [
            'Die Marke und das Logo von Synentor sowie die Texte, das Design, die Bilder und der Code dieser Website gehören {razon} oder denjenigen, die uns ihre Nutzung erlaubt haben. Sie dürfen sie ansehen und eine Kopie für Ihren persönlichen Gebrauch speichern. Für jede andere Nutzung (sie zu kopieren, zu veröffentlichen, zu verändern oder zu kommerziellen Zwecken zu nutzen) benötigen Sie unsere schriftliche Erlaubnis.',
          ],
        },
        {
          t: 'Personenbezogene Daten und Cookies',
          p: [
            'Wie wir die Daten verarbeiten, die Sie uns geben, erklärt die {privacidad}; welche Cookies wir verwenden, die {cookies}.',
          ],
        },
        {
          t: 'Sprachen',
          p: [
            'Die Website ist auf Katalanisch, Spanisch, Englisch, Französisch, Portugiesisch, Italienisch und Deutsch verfügbar. Wenn eine Übersetzung nicht dasselbe aussagt wie der katalanische Text, gilt der katalanische Text.',
          ],
        },
        {
          t: 'Anwendbares Recht und Gerichtsstand',
          p: [
            'Diese Bedingungen unterliegen andorranischem Recht. Für alle Streitigkeiten sind die Gerichte des Fürstentums Andorra zuständig, es sei denn, das Gesetz räumt Ihnen das Recht ein, andere Gerichte anzurufen.',
          ],
        },
        {
          t: 'Änderungen',
          p: [
            'Wir können diese rechtlichen Hinweise ändern, wenn es nötig ist. Das Datum oben zeigt, wann sie zuletzt geändert wurden.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Datenschutzerklärung · Synentor',
      encabezado: 'Datenschutzerklärung',
      secciones: [
        {
          t: 'Wer Ihre Daten verarbeitet',
          p: [
            'Verantwortlich ist {razon}, eine andorranische Gesellschaft mit Sitz unter der Anschrift {direccion}. NRT (andorranische Steuernummer): in Bearbeitung. E-Mail: {correo}. Telefon: {telefono}.',
            'Wir haben keinen Datenschutzbeauftragten benannt: Bei Fragen zu Ihren Daten schreiben Sie uns an {correo}.',
          ],
        },
        {
          t: 'Welche Daten wir verarbeiten, wozu und wie lange',
          p: [
            'Nur die, die für den jeweiligen Zweck nötig sind:',
          ],
          lista: [
            'Kontaktformular. Daten: Name, E-Mail-Adresse, Betreff und Nachricht sowie Unternehmen und Telefonnummer, wenn Sie sie angeben. Zweck: Ihnen zu antworten und, wenn Sie es wünschen, ein Angebot für Sie zu erstellen. Rechtsgrundlage: Ihre Einwilligung, die Sie durch Anklicken des Kästchens erteilen, und, wenn Sie ein Angebot anfordern, vorvertragliche Maßnahmen. Speicherdauer: Die Nachricht erreicht uns per E-Mail und die Website speichert sie nicht; wir bewahren sie {plazoContacto} ab dem letzten Kontakt auf, wenn Sie nicht Kunde werden, und, wenn Sie es werden, für die Dauer der Geschäftsbeziehung und die gesetzlich vorgeschriebenen Fristen.',
            'Bot-Prüfung des Formulars (Cloudflare Turnstile). Daten: die IP-Adresse und technische Daten des Browsers. Zweck: zu prüfen, dass das Formular von einem Menschen gesendet wird. Rechtsgrundlage: unser berechtigtes Interesse, die Website vor Missbrauch zu schützen. Wir selbst speichern sie nicht.',
            'Nachweis Ihrer Cookie-Entscheidung. Daten: eine zufällige Kennung, die Sie nicht identifiziert, die Version der Richtlinie, Ihre Entscheidung und das Datum; niemals die IP-Adresse. Zweck: Ihre Einwilligung nachweisen zu können. Rechtsgrundlage: die Pflicht, sie nachweisen zu können. Speicherdauer: 12 Monate.',
            'Technische Protokolle des Hostings (Cloudflare). Daten: die IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite und Fehler. Zweck: die Sicherheit und der reibungslose Betrieb der Website. Rechtsgrundlage: unser berechtigtes Interesse. Speicherdauer: höchstens {plazoRegistros}.',
            'Besucherstatistik (Umami). Ohne Cookies und ohne Daten, die Sie identifizieren: nur Gesamtzahlen, etwa aufgerufene Seiten, Land oder Browser.',
            'Cookies anderer Unternehmen, nur wenn Sie sie akzeptieren: Das erklärt die {cookies}.',
            'Wenn Sie uns eine E-Mail schreiben oder uns anrufen: Ihre Kontaktdaten und was Sie uns mitteilen, um Ihnen zu antworten, mit derselben Rechtsgrundlage und derselben Speicherdauer wie beim Formular.',
          ],
        },
        {
          t: 'Wer Ihre Daten noch sieht',
          p: [
            'Wir verkaufen Ihre Daten nicht und geben sie nicht weiter. Verarbeitet werden sie nur von den Dienstleistern, die in unserem Auftrag die Website und die E-Mail betreiben, sowie von Behörden, wenn das Gesetz es verlangt:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Daten außerhalb Andorras',
          p: [
            'Einige dieser Dienstleister haben ihren Sitz in den Vereinigten Staaten oder verarbeiten dort Daten. Wir wählen Dienstleister, die dem EU-US-Datenschutzrahmen beigetreten sind oder sich vertraglich durch Standardvertragsklauseln verpflichten. Dennoch bieten die Vereinigten Staaten nicht dasselbe Schutzniveau wie Andorra oder die Europäische Union, und ihre Behörden könnten Zugriff auf diese Daten verlangen.',
          ],
        },
        {
          t: 'Ihre Rechte',
          p: [
            'Sie können von uns Auskunft über Ihre Daten verlangen sowie deren Berichtigung, Löschung, die Einschränkung ihrer Verarbeitung oder ihre Herausgabe, um sie mitzunehmen (Datenübertragbarkeit), und Sie können der Verarbeitung widersprechen. Außerdem können Sie Ihre Einwilligung jederzeit widerrufen, ohne dass dies das bis dahin Geschehene berührt.',
            'Schreiben Sie uns an {correo}. Wenn wir nicht feststellen können, dass Sie es sind, bitten wir Sie um ein Dokument, das Sie identifiziert, das wir nur dafür verwenden und anschließend löschen. Wir antworten Ihnen innerhalb der gesetzlichen Frist.',
            'Wenn Sie der Meinung sind, dass wir Ihre Rechte nicht richtig beachtet haben, können Sie sich bei der Agència Andorrana de Protecció de Dades (Andorranische Datenschutzagentur, APDA) beschweren: {apda}.',
          ],
        },
        {
          t: 'Sicherheit',
          p: [
            'Wir schützen Ihre Daten mit technischen und organisatorischen Maßnahmen: verschlüsselte Verbindung, Zugriff nur für diejenigen, die ihn benötigen, und Dienstleister mit Sicherheitsgarantien.',
          ],
        },
        {
          t: 'Minderjährige',
          p: [
            'Die Website richtet sich an Unternehmen und Fachleute. Wenn Sie unter 16 Jahre alt sind, senden Sie uns keine Daten ohne die Erlaubnis Ihres Vaters, Ihrer Mutter oder Ihres Vormunds.',
          ],
        },
        {
          t: 'Gesetze, die wir anwenden',
          p: [
            'Die Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (andorranisches qualifiziertes Gesetz 29/2021 vom 28. Oktober zum Schutz personenbezogener Daten, LQPD) und, für Personen in der Europäischen Union, die Datenschutz-Grundverordnung (DSGVO).',
          ],
        },
        {
          t: 'Änderungen',
          p: [
            'Wenn wir diese Erklärung ändern, sagen wir es hier mit dem neuen Datum. Wenn die Änderung etwas betrifft, in das Sie eingewilligt haben, fragen wir Sie erneut.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Cookie-Richtlinie · Synentor',
      encabezado: 'Cookie-Richtlinie',
      ninguna: 'Derzeit verwenden wir keine. Sollten wir eines Tages welche verwenden, fragen wir Sie vorher, und sie erscheinen hier.',
      secciones: [
        {
          t: 'Was Cookies sind',
          p: [
            'Cookies sind kleine Dateien, die eine Website in Ihrem Browser speichert, um sich an etwas von Ihrem Besuch zu erinnern. Hier bezeichnen wir auch andere Arten, Daten im Browser zu speichern, als Cookies, etwa den lokalen Speicher.',
          ],
        },
        {
          t: 'Die wir immer verwenden',
          p: [
            'Das sind die unverzichtbaren, damit die Website funktioniert oder um sich Ihre Auswahl zu merken. Dafür ist Ihre Einwilligung nicht erforderlich.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Statistik ohne Cookies',
          p: [
            'Wir zählen die Besuche mit Umami, das keine Cookies verwendet und keine Daten speichert, die Sie identifizieren.',
          ],
        },
        {
          t: 'Die wir nur verwenden, wenn Sie sie akzeptieren',
          p: [
            'Es gibt zwei Arten: Statistik, um zu erfahren, wie die Website genutzt wird, und sie zu verbessern, und Werbung, um unsere Anzeigen zu messen und Ihnen Anzeigen von Synentor auf anderen Websites zu zeigen. Solange Sie sie nicht akzeptieren, lädt die Website diese Tools nicht.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'Ihre Entscheidung',
          p: [
            'Beim ersten Mal fragen wir Sie mit einem Hinweis: Sie können alle akzeptieren, alle ablehnen oder auswählen. Die drei Möglichkeiten sind gleich leicht erreichbar und keine ist vorausgewählt.',
            'Sie können Ihre Meinung jederzeit über die Schaltfläche „{boton}“ in der Fußzeile ändern. Wenn Sie Ihre Einwilligung widerrufen, löschen wir die Cookies dieser Tools, die auf unserer Domain liegen, und die Website lädt sie nicht mehr; die Cookies, die diese Unternehmen auf ihrer eigenen Domain setzen, können Sie in Ihrem Browser löschen.',
            'Ihre Entscheidung gilt 12 Monate; danach fragen wir Sie erneut. Wir speichern einen Nachweis davon ohne Ihre IP-Adresse, wie in der {privacidad} erklärt.',
          ],
        },
        {
          t: 'Im Browser',
          p: [
            'Sie können Cookies auch in Ihrem Browser blockieren oder löschen:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Überprüfung',
          p: [
            'Wir überprüfen diese Richtlinie mindestens einmal im Jahr und immer dann, wenn wir die Tools der Website ändern.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Gesetzt von',
      finalidad: 'Zweck',
      duracion: 'Dauer',
      tipo: 'Art',
      propia: 'Eigenes',
      terceros: 'Von einem anderen Unternehmen',
      sesion: 'Bis Sie den Browser schließen',
      persistente: 'Bis Sie es löschen',
      proveedor: 'Dienstleister',
      para: 'Zweck',
      donde: 'Wo die Daten verarbeitet werden',
      garantia: 'Garantie',
    },
    finalidades: {
      lang: 'Die von Ihnen gewählte Sprache speichern.',
      consentimiento: 'Ihre Cookie-Entscheidung speichern.',
      franja: 'Den Sprachhinweis nicht erneut anzeigen, wenn Sie ihn geschlossen haben (lokaler Speicher).',
      cfBm: 'Sicherheit: Menschen von Bots unterscheiden, nur wenn Cloudflare es benötigt.',
      cfClearance: 'Sicherheit: speichern, dass Sie eine Bot-Prüfung bestanden haben, nur wenn Cloudflare sie verlangt hat.',
      gaUsuario: 'Besucher für die Statistik unterscheiden.',
      gaSesion: 'Den Stand des Besuchs für die Statistik festhalten.',
      clarityUsuario: 'Die Clarity-Kennung und ihre Einstellungen speichern, nur für diese Website.',
      claritySesion: 'Die Seiten eines Besuchs zu einer einzigen Aufzeichnung zusammenfassen.',
      clarityPrimeraVez: 'Erfahren, wann Clarity diesen Browser zum ersten Mal auf einer beliebigen Website gesehen hat, die es verwendet.',
      msAnonchk: 'Interne Nutzung durch Microsoft in Bezug auf die MUID-Kennung; Clarity nutzt sie nicht für Werbung.',
      msMr: 'Erkennen, ob die MUID-Kennung erneuert werden muss.',
      msMuid: 'Den Browser auf Websites von Microsoft identifizieren.',
      msSm: 'Die MUID-Kennung zwischen den Domains von Microsoft synchronisieren.',
      metaFbp: 'Den Browser identifizieren, um Anzeigen von Meta zu messen und anzuzeigen.',
      metaFbc: 'Die Anzeige von Meta speichern, über die Sie gekommen sind.',
      metaFr: 'Anzeigen von Meta anzeigen und messen.',
      liFatId: 'Die Ergebnisse von LinkedIn-Anzeigen messen.',
      liSugr: 'Den Besuch für Werbezwecke mit LinkedIn-Mitgliedern verknüpfen.',
      liBcookie: 'Den Browser identifizieren, um Missbrauch zu erkennen.',
      liLidc: 'Das Rechenzentrum von LinkedIn auswählen.',
      liUserMatch: 'Kennungen für Werbezwecke synchronisieren.',
      liAnalyticsSync: 'Erfassen, wann die Synchronisierung mit dem Analyse-Cookie von LinkedIn erfolgt ist.',
      liLmsAds: 'LinkedIn-Mitglieder außerhalb von LinkedIn für Werbezwecke wiedererkennen.',
      liLmsAnalytics: 'LinkedIn-Mitglieder außerhalb von LinkedIn für Analysezwecke wiedererkennen.',
    },
    proveedores: {
      cloudflare: {
        para: 'Hosting der Website, Bot-Prüfung des Formulars, Nachweis der Einwilligungen und technische Protokolle.',
        donde: 'Das weltweite Netz des Unternehmens, mit Sitz in den Vereinigten Staaten. Die Einwilligungsnachweise werden in der Europäischen Union gespeichert.',
        garantia: 'EU-US-Datenschutzrahmen und Standardvertragsklauseln.',
      },
      resend: {
        para: 'Die Nachricht aus dem Formular an unser Postfach senden.',
        donde: 'Vereinigte Staaten.',
        garantia: 'Standardvertragsklauseln und EU-US-Datenschutzrahmen.',
      },
      microsoft365: {
        para: 'Die E-Mail des Unternehmens, in der wir die Nachrichten empfangen und aufbewahren.',
        donde: 'Europäische Union und Vereinigte Staaten.',
        garantia: 'EU-US-Datenschutzrahmen und Standardvertragsklauseln.',
      },
      umami: {
        para: 'Besucherstatistik ohne Cookies.',
        donde: 'Vereinigte Staaten und Deutschland.',
        garantia: 'Standardvertragsklauseln.',
      },
      google: {
        para: 'Besucherstatistik (Google Analytics), wenn Sie sie akzeptieren.',
        donde: 'Vereinigte Staaten und andere Länder.',
        garantia: 'EU-US-Datenschutzrahmen und Standardvertragsklauseln.',
      },
      clarity: {
        para: 'Sehen, wie die Website genutzt wird (Microsoft Clarity), wenn Sie es akzeptieren.',
        donde: 'Vereinigte Staaten.',
        garantia: 'EU-US-Datenschutzrahmen.',
      },
      meta: {
        para: 'Anzeigen messen und anzeigen (Meta-Pixel), wenn Sie es akzeptieren.',
        donde: 'Irland und Vereinigte Staaten.',
        garantia: 'EU-US-Datenschutzrahmen und Standardvertragsklauseln.',
      },
      linkedin: {
        para: 'Anzeigen messen und anzeigen (LinkedIn Insight Tag), wenn Sie es akzeptieren.',
        donde: 'Vereinigte Staaten.',
        garantia: 'EU-US-Datenschutzrahmen und Standardvertragsklauseln.',
      },
    },
  },
};
