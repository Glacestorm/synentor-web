// Textos en italiano. Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts). Traducción de Claude, pendiente de una lectura nativa (diseño §3).
import type { Textos } from './ca';

export const it: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'La sua azienda, connessa.',
    descripcion:
      'Consulenza di IA e vendite con software proprio sviluppato in Andorra: Synentor Suite ERP-CRM multiazienda, MUV e progetti di IA su misura.',
  },
  nav: {
    inicio: 'Home',
    servicios: 'Servizi',
    precios: 'Prezzi',
    contacto: 'Contatti',
    demo: 'Richieda una demo',
    idioma: 'Lingua',
    menu: 'Menu',
    saltar: 'Vai al contenuto',
  },
  franjaIdioma: {
    idioma: 'italiano',
    texto: 'Desidera vedere questa pagina in {idioma}?',
    aceptar: 'Sì, cambia',
    cerrar: 'No, grazie',
  },
  pie: {
    empresa: 'Azienda',
    legal: 'Note legali',
    avisoLegal: 'Avviso legale',
    privacidad: 'Privacy',
    cookies: 'Cookie',
    nrt: 'NRT in corso di rilascio',
    estadisticas: 'Statistiche delle visite senza cookie (Umami).',
  },
  cookiesAviso: {
    titulo: 'Cookie',
    aviso: '{empresas} usano i cookie per {finalidades}. Si attivano solo se li accetta. Può rifiutarli o sceglierli, e cambiare idea quando vuole con il pulsante dei cookie. I dati possono uscire da Andorra e dall’Unione europea.',
    y: ' e ',
    politica: 'Cookie policy',
    aceptar: 'Accetta tutti',
    rechazar: 'Rifiuta tutti',
    configurar: 'Personalizza',
    guardar: 'Salva la mia scelta',
    siempre: 'Sempre attivi',
    flotante: 'Impostazioni dei cookie',
    necesarias: { nombre: 'Necessari', texto: 'La lingua che sceglie (cookie «lang», 1 anno), la sua scelta sui cookie («synentor_consentimiento», 12 mesi) e la verifica antirobot del modulo di contatto (Cloudflare). Non si possono disattivare.' },
    estadisticas: { nombre: 'Statistiche', texto: 'Quali pagine si visitano e come si naviga, per migliorare il sito. Clarity registra la sessione oscurando ciò che si scrive.', finalidad: 'misurare le visite' },
    publicidad: { nombre: 'Pubblicità', texto: 'Per mostrare annunci di Synentor a chi ha già visitato il sito e sapere se funzionano.', finalidad: 'mostrarle annunci di Synentor su altri siti' },
    herramientas: {
      ga4: 'Google Analytics (Google): cookie «_ga», fino a 13 mesi.',
      clarity: 'Microsoft Clarity (Microsoft): cookie «_clck», 1 anno, e «_clsk», 1 giorno.',
      metaPixel: 'Pixel di Meta (Meta Platforms): cookie «_fbp», 90 giorni, e quelli di Meta sul suo dominio.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): cookie di LinkedIn sul suo dominio, fino a 1 anno.',
    },
  },
  estados: {
    disponible: 'Disponibile',
    inminente: 'In sviluppo imminente',
    a_medida: 'Su misura',
    inminenteLargo: 'In sviluppo imminente e adattamento su misura per il cliente',
  },
  inicio: {
    titulo: 'Synentor · Consulenza di IA e vendite con software proprio',
    descripcion:
      'ERP-CRM multiazienda sviluppato in Andorra, MUV e consulenza di IA e vendite. Contabilità, buste paga, acquisti, vendite e pratiche in un unico posto.',
    portada: {
      antetitulo: 'Consulenza di IA e vendite · Software proprio sviluppato in Andorra',
      titulo: 'La sua azienda, connessa.',
      subtitulo:
        'Contabilità, buste paga, acquisti, vendite e pratiche in un unico posto. Con un’IA che svolge il lavoro ripetitivo e una consulenza che La accompagna.',
      botonDemo: 'Richieda una demo',
      botonPrecio: 'Calcoli il suo prezzo',
      nota: 'Da {base} al mese · {usuarios} utenti inclusi · imposte escluse',
      animacion: { pausa: 'Metti in pausa l’animazione', reanuda: 'Riprendi l’animazione' },
      nodos: { compras: 'Acquisti', ventas: 'Vendite e CRM', rrhh: 'Risorse umane', contabilidad: 'Contabilità', bancos: 'Banche', muv: 'MUV' },
    },
    problema: {
      titulo: 'Troppi programmi. Troppi fogli di calcolo. Troppo lavoro ripetuto.',
      puntos: [
        'Fatture che qualcuno deve digitare una per una.',
        'Buste paga e CASS che dipendono da una sola persona.',
        'Banche che non quadrano fino a fine mese.',
        'Leggi che cambiano sul BOPA senza che Lei se ne accorga.',
      ],
      cierre: 'Synentor mette tutto nello stesso posto e svolge al posto Suo il lavoro che si ripete.',
    },
    pilares: {
      titulo: 'Tre modi per far crescere la sua azienda',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'La gestione completa dell’azienda, pensata per l’Andorra: contabilità con il piano dei conti andorrano, tesoreria, acquisti, vendite e CRM, risorse umane, fiscale e giuridico.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'Il cervello operativo dell’azienda: mappe di conoscenza, attività con responsabili, scadenze e dipendenze, e un’IA privata che funziona nel Suo ufficio.',
      },
      consultoria: {
        titulo: 'Consulenza di IA e vendite',
        texto: 'Diagnosi, formazione, assistenti e automazioni. E progetti di IA su misura, in base al Suo budget.',
      },
      mas: 'Scopra di più',
    },
    rrhh: {
      antetitulo: 'Risorse umane',
      titulo: 'Risorse umane dell’Andorra, davvero.',
      texto:
        'Scheda, contratti, iscrizione alla CASS, busta paga e IRPF andorrano, ferie, orari, timbratura con portale del dipendente e liquidazioni. Tutto collegato alla contabilità.',
      puntos: [
        'I documenti delle persone vengono letti da un’IA che funziona nei Suoi locali.',
        'Lettura dei documenti di identità per compilare la scheda in pochi secondi.',
        'Ogni modifica viene registrata.',
      ],
      espana:
        'In Spagna: buste paga e lettura dei contratti collettivi dal registro ufficiale (REGCON e BOE), in sviluppo imminente e adattamento su misura per il cliente.',
      dato:
        'Nel laboratorio in cui è nato, già al secondo mese quasi 8 persone su 10 tra quelle che avevano lavorato tutto il mese timbravano dal portale del dipendente.',
      cifra: {
        etiqueta: 'timbravano dal portale del dipendente',
        texto: '{fichan} su {total} persone che hanno lavorato tutto il mese ({mes}), nel laboratorio in cui è nato Synentor.',
        fuente: 'Dato misurato: conteggio nella base dati del programma, senza dati personali.',
      },
    },
    multiempresa: {
      antetitulo: 'Multiazienda',
      titulo: 'Molte aziende. Una sola installazione.',
      texto:
        'Ogni azienda è isolata dalle altre, con i propri utenti e permessi. Ideale per gruppi e studi di consulenza: si cambia azienda in un attimo.',
      puntos: ['Si paga per azienda, non per ogni persona.', '{usuarios} utenti inclusi.', 'Azienda aggiuntiva: {empresaAdicional} al mese.'],
    },
    ia: {
      antetitulo: 'IA privata',
      titulo: 'La Sua IA, a casa Sua.',
      texto:
        'Le fatture dei fornitori e i documenti delle persone vengono letti da un’IA che funziona su un computer della Sua azienda. Questi documenti non vanno nel cloud.',
    },
    compras: {
      titulo: 'Le fatture si leggono da sole.',
      texto:
        'Le invii per e-mail o le lasci in una cartella: Synentor le legge, registra il fornitore se serve e prepara la bozza, così Lei deve solo verificarla.',
      pasos: ['Fattura per e-mail', 'L’IA la legge', 'Bozza da verificare', 'Contabilizzata'],
    },
    bancos: {
      titulo: 'Qualsiasi banca, riconciliata.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV o Excel: Synentor legge l’estratto conto e Le propone la riconciliazione.',
      pasos: ['Estratto conto della banca', 'Movimenti letti', 'Riconciliazione proposta', 'Lei la conferma'],
    },
    juridico: {
      titulo: 'La legge andorrana, sotto controllo.',
      texto:
        'Monitoraggio del BOPA, pratiche ufficiali con le loro scadenze, libro degli atti societari e prevenzione del riciclaggio per i soggetti obbligati.',
    },
    historia: {
      antetitulo: 'Com’è nato',
      titulo: 'Nasce all’interno di un’azienda reale.',
      texto:
        'Synentor non è un prototipo: è nato gestendo ogni giorno un’azienda andorrana, un laboratorio con negozi. Ogni schermata è stata realizzata risolvendo un problema vero.',
    },
    precio: {
      titulo: 'Un prezzo chiaro, senza sorprese.',
      texto: 'Scelga i moduli di cui ha bisogno e veda subito il totale. Quelli che vanno insieme si aggiungono da soli.',
      boton: 'Calcoli il suo prezzo',
    },
    final: {
      titulo: 'Parliamo della Sua azienda.',
      texto: 'Le mostriamo Synentor con casi simili al Suo e Le diciamo, senza impegno, da dove cominceremmo.',
      boton: 'Richieda una demo',
    },
  },
  contacto: {
    titulo: 'Contatti · Synentor',
    descripcion: 'Ci scriva e Le risponderemo entro un giorno lavorativo.',
    encabezado: 'Parliamone.',
    entrada: 'Ci racconti di cosa ha bisogno. Rispondiamo entro un giorno lavorativo, dal lunedì al venerdì dalle 9:00 alle 18:00 (ora dell’Andorra).',
    datos: 'Dati di contatto',
    correo: 'E-mail',
    telefono: 'Telefono',
    direccion: 'Indirizzo',
    horario: 'Orario',
    horarioTexto: 'Dal lunedì al venerdì, dalle 9:00 alle 18:00 (ora dell’Andorra)',
    despues: {
      titulo: 'Cosa succede dopo',
      pasos: [
        'Riceviamo il Suo messaggio nella casella e-mail dell’azienda.',
        'Le rispondiamo entro un giorno lavorativo.',
        'Se lo desidera, Le prepariamo una proposta scritta.',
      ],
    },
    formulario: {
      titulo: 'Ci invii un messaggio',
      nombre: 'Nome',
      correo: 'Indirizzo e-mail',
      empresa: 'Azienda',
      telefono: 'Telefono',
      asunto: 'Oggetto',
      asuntos: {
        informacion: 'Informazioni generali',
        demostracion: 'Richiedere una demo',
        pedido: 'Richiesta d’ordine',
        centralita: 'Centralino con IA per ambulatori',
        precios: 'Prezzi e preventivo',
        consultoria: 'Consulenza di IA e vendite',
        muv: 'MUV',
        web: 'Realizzazione di siti web',
        otro: 'Altro',
      },
      mensaje: 'Messaggio',
      consentimiento: 'Ho letto l’{politica} e accetto che questi dati vengano utilizzati per rispondermi.',
      politica: 'informativa sulla privacy',
      obligatorio: 'obbligatorio',
      enviar: 'Invia il messaggio',
      enviando: 'Invio in corso…',
      contador: '{n} di {max}',
      ok: 'Inviato. Le risponderemo entro un giorno lavorativo.',
      errores: {
        datos: 'Controlli i campi segnalati: manca qualche dato oppure non è valido.',
        robot: 'Non siamo riusciti a verificare che Lei non sia un robot. Riprovi.',
        envio: 'In questo momento non è stato possibile inviare il messaggio.',
        red: 'Nessuna connessione.',
      },
      alternativa: 'Ci scriva direttamente a {correo}.',
      sinJs: 'Se il modulo non funziona, ci scriva a {correo}.',
    },
  },
  servicios: {
    titulo: 'Servizi · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM modulo per modulo, MUV, consulenza di IA e vendite, energia, migrazioni, portale del dipendente e siti web.',
    encabezado: 'Tutto ciò che facciamo, senza clausole nascoste.',
    entrada:
      'Software proprio e consulenza. Per ogni modulo Le diciamo se funziona oggi nel Suo Paese, se è in sviluppo imminente o se viene adattato su misura.',
    columnas: { andorra: 'Andorra', espana: 'Spagna', otros: 'Portogallo, Francia, Italia e Germania' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'La gestione dell’azienda in un unico posto. Si paga per azienda e per i moduli che si usano.',
      requiere: 'Richiede {modulo}',
      idiomaPrograma:
        'Le schermate del programma sono in spagnolo e catalano. Altre lingue: in sviluppo imminente e adattamento su misura per il cliente.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'Il motore multiazienda: utenti e permessi, copie di sicurezza, IA locale, ingresso unico dei documenti, anagrafiche, scheda dell’azienda e libro degli atti, contabilità con il piano dei conti andorrano, tesoreria e riconciliazione bancaria, cruscotto e report.',
      },
      compras: {
        nombre: 'Acquisti intelligenti',
        texto:
          'Le fatture dei fornitori arrivano per e-mail o in una cartella e si leggono da sole: registrazione del fornitore se serve e bozza da verificare.',
      },
      ventas_crm: {
        nombre: 'Vendite e CRM',
        texto: 'Clienti, progetti, contatti, mappa commerciale e registro delle fatture emesse con l’IGI.',
      },
      rrhh: {
        nombre: 'Risorse umane e buste paga',
        texto:
          'Scheda, contratti, iscrizione alla CASS, busta paga e IRPF andorrano, ferie, orari, timbratura, portale del dipendente e liquidazioni.',
      },
      fiscal: { nombre: 'Fiscale', texto: 'IGI, imposta sulle società, dichiarazioni e moduli della DTF.' },
      juridico: {
        nombre: 'Giuridico e pratiche',
        texto: 'Monitoraggio del BOPA, pratiche ufficiali con le loro scadenze, fascicoli e libro degli atti societari.',
      },
      pbc: {
        nombre: 'Prevenzione del riciclaggio',
        texto: 'Il dossier di ogni cliente per i soggetti obbligati: questionari, modello di rischio, decisioni e comunicazioni alla UIFAND.',
      },
      productos: { nombre: 'Prodotti, distinte base e magazzino', texto: 'Prodotti, ricette con il relativo costo e magazzino.' },
      tpv: {
        nombre: 'POS e cassa',
        texto: 'Le vendite del POS HIOPOS e la cassa CashDro, ogni giorno in contabilità. CashDro, in una sola azienda per installazione.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'Per i consulenti energetici: pratiche, clienti, forniture e CUPS, fatture con il relativo PDF, contratti e scadenze, confronto con il Suo catalogo di tariffe, rapporto e proposta in PDF, monitoraggio del risparmio e portale del cliente. Mercato elettrico spagnolo, tariffe fino a 3 periodi.',
      },
    },
    muv: {
      titulo: 'MUV',
      texto:
        'Il cervello operativo dell’azienda: mappe di conoscenza, attività con responsabili, scadenze e dipendenze, e un’IA privata che funziona nel Suo ufficio.',
      precio: 'Gratis fino a {gratis} utenti. Dal {desde1}º al {hasta1}º, {precio1} per utente al mese; fino a {hasta2}, {precio2}.',
      equipos: 'Computer consigliati (pagamento unico): Base {basico} · IA {ia} · IA+ {iaPlus}.',
      enDesarrollo: 'Non ha ancora la modifica simultanea in tempo reale né l’app per dispositivi mobili: in sviluppo.',
    },
    consultoria: {
      titulo: 'Consulenza di IA e vendite',
      texto:
        'Siamo una consulenza di IA e di vendite. Diagnosi, formazione, assistenti, automazioni e progetti di IA su misura, in base al Suo budget.',
      categorias: {
        estrategia: 'Strategia e diagnosi',
        formacion: 'Formazione',
        asistentes: 'Assistenti e assistenza clienti',
        automatizacion: 'Automazione dei processi',
        documentos: 'Documenti e conoscenza',
        datos: 'Dati, analisi e previsioni',
        medida: 'Sviluppo su misura',
        cumplimiento: 'Conformità e governance',
        soporte: 'Supporto e manutenzione',
      },
      desde: 'da {precio}',
      cuota: 'e da {cuota} al mese',
      nota: 'Prezzi per una microimpresa, imposte escluse (catalogo del {fecha}). Per aziende più grandi, secondo la proposta.',
      medida: 'Progetti di IA su misura: Le prepariamo il preventivo.',
    },
    energia: {
      titulo: 'Energia',
      texto: 'La aiutiamo a pagare meno la luce e a sapere dove si consuma ogni kilowatt.',
      particulares: {
        titulo: 'Analisi della bolletta per privati',
        texto: 'Esaminiamo la Sua bolletta e la potenza contrattuale a {precio}. Gliela rimborsiamo se non troviamo un risparmio di almeno {precio} all’anno.',
      },
      empresas: {
        titulo: 'Aziende (Spagna)',
        texto:
          '{precio} per fornitura, oppure a risultato: il {porcentaje} del risparmio verificato nei primi 12 mesi. Senza risparmio, non addebitiamo nulla. Tariffe a 6 periodi, ospedali e imprese di costruzione: su misura.',
      },
      comisiones: 'Oggi non riceviamo alcuna commissione da nessun fornitore di energia: Le consigliamo ciò che conviene a Lei.',
      monitorizacion: {
        titulo: 'Monitoraggio con Home Assistant e Grafana',
        texto: 'Misuriamo il consumo di ogni quadro elettrico e Lei lo vede in una dashboard. I dati restano su un computer nel Suo edificio.',
        vivienda: 'Abitazione o piccola attività (1 quadro)',
        pyme: 'PMI o negozio (fino a 6 quadri)',
        edificio: 'Edificio, hotel o impresa di costruzione',
        granConsumidor: 'Ospedale o grande consumatore',
        instalacionDesde: 'Installazione da {precio}',
        instalacionMedida: 'Installazione su misura',
        cuota: '{precio} al mese',
        cuotaDesde: 'da {precio} al mese',
        incluye: 'L’installazione include i contatori di quei punti. Il canone include manutenzione, copie di sicurezza, aggiornamenti e un rapporto mensile.',
      },
      programa: 'È un consulente energetico? Scopra C. Eléctrica, nella Suite.',
    },
    migracion: {
      titulo: 'Migrazione e convivenza',
      texto: 'Portiamo i Suoi dati dal programma precedente. Le promettiamo solo ciò che oggi si importa davvero.',
      arranque: {
        nombre: 'Avvio',
        texto: 'Fornitori, dipendenti, prodotti e contatti da CSV o Excel; estratti conto di qualsiasi banca (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Contabilità precedente (Andorra)',
        texto: 'Libro giornale, mastri e bilancio di verifica, controllati e incorporati; bilanci del 805-B; registro delle fatture emesse; fatture dei fornitori in PDF.',
        precio: '{precio} il primo esercizio e {adicional} per ciascuno in più',
      },
      personal: {
        nombre: 'Personale (Andorra)',
        texto: 'Storico delle buste paga, contributi alla CASS, ferie e ore.',
        precio: '{precio} fino a {personas} persone',
      },
      aMedida:
        'Il resto (clienti, incassi e pagamenti in sospeso, magazzino iniziale, immobilizzazioni, collegamento diretto con altri programmi): su misura.',
      convivencia: {
        titulo: 'Convivenza con il Suo programma',
        texto:
          'Se desidera continuare per un po’ con il Suo programma, carichiamo ogni mese ciò che esporta: {puesta} di avviamento e {cuota} al mese, fino a {cargas} caricamenti al mese. Un collegamento diretto, su misura.',
      },
    },
    portal: {
      titulo: 'Portale del dipendente',
      texto: 'Buste paga, documenti, ferie, richieste, timbratura, profilo e certificati, da qualsiasi browser.',
      dato:
        'Nel laboratorio in cui è nato, già al secondo mese quasi 8 persone su 10 tra quelle che avevano lavorato tutto il mese timbravano dal portale. Senza carta e senza nessuna timbratura a mano.',
      precio:
        'Da solo, senza il resto del programma: {cuota} al mese fino a {personas} persone, {adicional} per ogni persona in più e {implantacion} di implementazione.',
      incluido: 'Con Risorse umane è già incluso.',
    },
    webs: {
      titulo: 'Siti web',
      texto: 'Siti veloci, in più lingue, con un modulo che invia davvero e statistiche senza cookie. Anche questo sito è stato realizzato così.',
      esencial: { nombre: 'Web Esencial', texto: 'Una pagina di presentazione, in 1 o 2 lingue.' },
      profesional: { nombre: 'Web Profesional', texto: 'Fino a 6 pagine, 3 lingue e posizionamento di base.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Fino a 12 pagine, fino a 7 lingue, design di marca e un calcolatore o configuratore su misura.',
      },
      desde: 'da {precio}',
      tienda: 'Negozio online: su misura, secondo preventivo.',
      extras: 'Pagina aggiuntiva, {pagina}; lingua aggiuntiva, {idioma} (la revisione madrelingua è a parte).',
      mantenimiento: 'Manutenzione: {basico} al mese (1 ora di modifiche) oppure {plus} al mese (3 ore e rapporto mensile delle visite).',
    },
    centralita: {
      titulo: 'Centralino con IA per ambulatori',
      etiqueta: 'In arrivo',
      texto:
        'Un centralino che risponde alle chiamate dei pazienti 24 ore su 24: prenotazioni, annullamenti e cambi di appuntamento, lista d’attesa e promemoria. Dice sempre al paziente che sta parlando con un’IA. Per studi medici e cliniche dentistiche di Andorra e Spagna.',
      boton: 'Desidero maggiori informazioni',
    },
    implantacion: {
      titulo: 'Implementazione e supporto',
      texto: 'Installiamo, configuriamo, carichiamo i dati e formiamo il Suo team: {jornada} a giornata; la Suite, da {minimo} giornate.',
      soporte: 'Supporto per e-mail e telefono, dal lunedì al venerdì dalle 9:00 alle 18:00 (ora dell’Andorra), con risposta entro un giorno lavorativo.',
    },
  },
  precios: {
    titulo: 'Prezzi · Synentor',
    descripcion: 'Calcoli subito il prezzo di Synentor Suite ERP-CRM e di MUV, senza sorprese.',
    encabezado: 'Calcoli il suo prezzo.',
    entrada: 'Scelga il Paese, i moduli e le persone. Il totale appare subito, imposte escluse; in Andorra anche con l’IGI.',
    configurador: {
      pais: 'Paese',
      paises: { AD: 'Andorra', ES: 'Spagna', PT: 'Portogallo', FR: 'Francia', IT: 'Italia', DE: 'Germania', OTRO: 'Altro Paese' },
      modalidad: 'Dove lo desidera',
      modalidadA: 'Installato nella Sua azienda',
      modalidadB: 'Ospitato da Synentor in Andorra (+{precio} al mese)',
      pago: 'Pagamento',
      anual: 'Annuale',
      mensual: 'Mensile (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Pacchetto Synentor Completo',
      paqueteTexto: 'Base, Acquisti, Vendite e CRM, Fiscale e MUV, con {usuarios} utenti: {precio} al mese.',
      usuarios: 'Utenti del programma',
      empresa: 'Azienda {n}',
      principal: 'Azienda principale',
      personas: 'Persone in organico',
      anadirEmpresa: 'Aggiunga un’azienda',
      quitarEmpresa: 'Rimuova questa azienda',
      menos: 'Meno',
      mas: 'Più',
      verResumen: 'Veda il preventivo',
      alMes: 'al mese',
      muvUsuarios: 'Utenti di MUV',
      anadidoPor: 'Aggiunto: richiesto da un altro modulo',
      incluidoPaquete: 'Incluso nel pacchetto',
      estados: { disponible: 'Disponibile', inminente: 'In sviluppo imminente', a_medida: 'Su misura' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Pacchetto Synentor Completo',
        'empresa-adicional': 'Azienda aggiuntiva',
        personas: 'Persone in organico (Risorse umane)',
        'usuarios-adicionales': 'Utenti aggiuntivi',
        'paquete-usuarios': 'Utenti aggiuntivi del pacchetto',
        'modalidad-b': 'Hosting da parte di Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Pagamento mensile',
      },
      resumen: 'Il Suo preventivo',
      cuota: 'Canone al mese',
      sinImpuestos: 'imposte escluse',
      igi: 'IGI ({porcentaje})',
      total: 'Totale al mese',
      implantacion: 'Implementazione, da {precio} (pagamento unico)',
      avisos: {
        'impuestos-no-incluidos': 'Imposte escluse (IVA, TVA o MwSt., a seconda del Paese).',
        'cashdro-una-empresa': 'CashDro funziona in una sola azienda per installazione.',
        'volumen-empresas': 'Con più di {max} aziende, tariffa a volume: Le prepariamo una proposta.',
        'modalidad-b-inminente': 'L’hosting da parte di Synentor è in sviluppo imminente.',
        'muv-a-medida': 'Con più di {max} utenti di MUV, su misura.',
        'requiere-adaptacion': 'Qualche modulo oggi non è disponibile nel Suo Paese: in sviluppo imminente o su misura.',
      },
      botonDemo: 'Richieda una demo',
      botonPropuesta: 'Richieda la sua proposta',
      botonPedido: 'Invii la mia selezione',
      pedidoNota: 'Nessun pagamento sul sito: Le rispondiamo con la proposta e il contratto per iscritto.',
      pedidoAsunto: 'Richiesta d’ordine dal calcolatore',
      sinJs: 'Il calcolatore richiede JavaScript. Consulti le tabelle qui sotto oppure ci scriva.',
    },
    tablas: {
      titulo: 'Tutte le tariffe',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Voce',
      precio: 'Prezzo',
      alMes: '{precio} al mese',
      porPersona: '+ {precio} per persona in organico',
      usuarioAdicional: 'Utente aggiuntivo',
      empresaAdicional: 'Azienda aggiuntiva',
      empresaAdicionalPrecio: '{precio} al mese + i suoi moduli al {porcentaje}',
      paquete: 'Pacchetto Synentor Completo',
      paqueteUsuario: 'Utente aggiuntivo del pacchetto: {precio} al mese',
      muv: 'MUV',
      consultoria: 'Consulenza di IA e vendite',
      servicios: 'Energia, migrazioni, portale e siti web',
      verServicios: 'Tutti i dettagli, in Servizi',
      implantacion: 'Implementazione: {precio} a giornata',
    },
    condiciones: {
      titulo: 'Condizioni',
      puntos: [
        'Licenza annuale, senza vincolo superiore a 12 mesi e con preavviso di 30 giorni.',
        'Supporto e aggiornamenti inclusi.',
        'Al termine, Le consegniamo l’archivio con i dati della Sua azienda.',
        'Prezzi in euro, imposte escluse. In Andorra, IGI del {igi}.',
        'Pagamento mensile: un {recargo} in più.',
      ],
    },
    comparacion: {
      titulo: 'Come ci confrontiamo',
      texto:
        'Un programma di buste paga nel cloud costa tra {nominaMin} e {nominaMax} per persona al mese, più un canone fisso. Un ERP internazionale, circa {erp} per utente al mese. Con Synentor si paga per azienda e i primi {usuarios} utenti sono inclusi.',
      fuente: 'Fonti: pagine ufficiali dei prezzi dei produttori, consultate il {fecha}.',
      grafico: {
        titulo: 'Esempio: azienda di {personas} persone e {usuarios} utenti, al mese',
        synentor: 'Synentor: Base, Acquisti, Risorse umane, Fiscale, Prodotti e POS',
        separado: 'Programma di buste paga nel cloud + ERP internazionale, separati',
        rango: 'da {min} a {max}',
        nota: 'Imposte escluse. Separati, nessuno dei due gestisce le buste paga né la CASS andorrane.',
      },
    },
    faq: {
      titulo: 'Domande frequenti',
      preguntas: [
        {
          p: 'In quali lingue è il programma?',
          r: 'In spagnolo e catalano. Altre lingue: in sviluppo imminente e adattamento su misura per il cliente.',
        },
        {
          p: 'Dove si installa?',
          r: 'Nella Sua azienda, su un server o un NAS: disponibile oggi. Ospitato da Synentor in Andorra: in sviluppo imminente.',
        },
        {
          p: 'I dati vanno nel cloud?',
          r: 'Le fatture dei fornitori e i documenti delle persone vengono letti da un’IA che funziona su un computer della Sua azienda. Se qualche funzione usa un servizio esterno, Glielo diciamo nella proposta.',
        },
        { p: 'Funziona in Spagna?', r: 'Sì. Ci sono moduli disponibili oggi e altri in sviluppo imminente: il calcolatore Glielo indica modulo per modulo.' },
        { p: 'C’è un vincolo contrattuale?', r: 'Licenza annuale, senza vincolo superiore a 12 mesi e con preavviso di 30 giorni.' },
        { p: 'Chi usa Synentor?', r: 'È nato gestendo ogni giorno un laboratorio con negozi in Andorra. Ed è il programma con cui lavora Synentor.' },
      ],
    },
  },
  legal: {
    actualizado: 'Ultimo aggiornamento: {fecha}',
    aviso: {
      titulo: 'Avviso legale · Synentor',
      encabezado: 'Avviso legale',
      secciones: [
        {
          t: 'Titolare',
          p: 'Questo sito appartiene a {razon}, con sede in {direccion}. E-mail: {correo}. Telefono: {telefono}. NRT: in corso di rilascio.',
        },
        {
          t: 'Uso del sito',
          p: 'Le informazioni di questo sito sono indicative. I prezzi e le condizioni validi sono quelli della proposta che Le inviamo per iscritto.',
        },
        {
          t: 'Proprietà intellettuale',
          p: 'I testi, il logotipo e il design di questo sito appartengono a {razon}. Non li utilizzi senza il nostro permesso.',
        },
        { t: 'Legge applicabile', p: 'Si applica la legge andorrana. Per qualsiasi controversia, sono competenti i tribunali del Principato di Andorra.' },
      ],
    },
    privacidad: {
      titulo: 'Informativa sulla privacy · Synentor',
      encabezado: 'Informativa sulla privacy',
      secciones: [
        { t: 'Chi è il responsabile', p: '{razon}, {direccion}. E-mail: {correo}.' },
        { t: 'Responsabile della protezione dei dati', p: '{razon} non ha designato un responsabile della protezione dei dati. Per qualsiasi domanda sui suoi dati, scriva a {correo}.' },
        {
          t: 'Quali dati trattiamo',
          p: 'Quelli del modulo di contatto: nome, e-mail, azienda e telefono (questi ultimi due, se li inserisce), oggetto e messaggio. Il messaggio ci arriva per e-mail: il sito non lo conserva.',
        },
        { t: 'Per quale scopo', p: 'Per risponderLe e, se lo richiede, prepararLe una proposta. La base giuridica è il Suo consenso.' },
        { t: 'Per quanto tempo', p: 'Il tempo necessario per assisterLa e quello richiesto dalla legge.' },
        {
          t: 'Chi altro li vede',
          p: 'I fornitori che fanno funzionare il sito: l’hosting e il controllo anti-robot (Cloudflare) e l’invio dell’e-mail. Le statistiche delle visite (Umami) non usano cookie né conservano dati che La identifichino.',
        },
        {
          t: 'I Suoi diritti',
          p: 'Può chiedere accesso, rettifica, cancellazione, opposizione, limitazione e portabilità scrivendo a {correo}. Se non è d’accordo, può presentare reclamo all’Agenzia andorrana per la protezione dei dati (apda.ad).',
        },
        {
          t: 'Leggi',
          p: 'Legge andorrana sulla protezione dei dati personali (Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals) e Regolamento generale sulla protezione dei dati (GDPR) dell’Unione europea per le persone dell’UE.',
        },
      ],
    },
    cookies: {
      titulo: 'Cookie policy · Synentor',
      encabezado: 'Cookie policy',
      secciones: [
        {
          t: 'Cosa utilizziamo',
          p: 'Un solo cookie, «lang», che memorizza la lingua scelta (un anno). E, nel Suo browser, un segno per non mostrarLe di nuovo l’avviso sulla lingua se lo chiude.',
        },
        { t: 'Statistiche', p: 'Contiamo le visite con Umami, senza cookie e senza conservare dati che La identifichino.' },
        { t: 'Come eliminarli', p: 'Può cancellarli quando vuole dalle impostazioni del Suo browser.' },
      ],
    },
  },
};
