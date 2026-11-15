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
        gestorias: 'Pacchetto per studi professionali e di consulenza',
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
      costes: {
        nombre: 'Controllo dei costi di acquisto',
        texto: 'Confronto dei prezzi per fornitore e articolo, controllo dell’ordine e avvisi sugli aumenti. Con le ricette, il costo di ciascuna; con il POS, consumo teorico e margine per pezzo.',
      },
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
    costes: {
      titulo: 'Controllo dei costi di acquisto',
      texto: 'Ogni fattura e ogni documento di trasporto che arrivano in Acquisti diventano informazioni per acquistare meglio. {precio} al mese, come complemento di Acquisti.',
      puntos: [
        'Confronto prezzi: ogni riga viene riportata a un prezzo al chilo, al litro o all’unità e, per ogni articolo, vede quale fornitore costa meno e quanto avrebbe risparmiato. Ogni cifra apre la relativa fattura originale.',
        'Carrello acquisti: prepara ordini in bozza al fornitore più conveniente.',
        'Storico dei prezzi pagati, offerte di listino dei fornitori e prezzi sospetti.',
        'Sconti di ogni fornitore e controllo dell’ordine: quanto ordinato, ricevuto e fatturato, rispetto al prezzo promesso.',
        'Avvisi nel cruscotto quando un fornitore aumenta il prezzo di un articolo dell’8% o più, quando paga a un fornitore più che a un altro per lo stesso articolo o quando una fattura supera il prezzo dell’ordine.',
      ],
      condicionesTitulo: 'Con ricette e POS',
      condiciones: [
        'Con le ricette (modulo Prodotti): il costo aggiornato di ogni ricetta con gli ultimi prezzi pagati.',
        'Con le ricette e il POS collegato (oggi, HIOPOS): il consumo teorico rispetto a quanto acquistato e il margine per pezzo.',
      ],
      nota: 'Ogni descrizione del fornitore viene associata una sola volta al relativo articolo. Gli avvisi compaiono nel cruscotto; non arrivano per e-mail.',
      enlace: 'Lo aggiunga nel calcolatore',
    },
    gestorias: {
      titulo: 'Pacchetto Studi professionali e di consulenza',
      estado: 'In sviluppo imminente e adattamento su misura per il cliente',
      texto: 'Per gli studi che tengono la contabilità, le imposte e le buste paga delle aziende dei propri clienti, tutto in un’unica installazione.',
      precio: '{precio} al mese',
      puntos: [
        'Include Contabilità, Acquisti con lettura delle fatture, Vendite, Fiscale e Buste paga.',
        '{empresas} aziende clienti e {usuarios} utenti dello studio inclusi.',
        'Azienda cliente aggiuntiva: {empresa} al mese, fino a {max} aziende.',
        'Buste paga: {nomina} per persona al mese.',
        'Utente aggiuntivo dello studio: {usuario} al mese.',
        'Oltre {max} aziende, su proposta.',
      ],
      ejemplo: 'Esempio: {empresasEj} aziende e {personasEj} persone, {totalEj} al mese.',
      condiciones: 'Solo per studi professionali che gestiscono le aziende dei propri clienti. Per Andorra; negli altri Paesi, su misura. Imposte escluse, pagamento annuale.',
      boton: 'Richieda una proposta',
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
      paqueteTitulo: 'Pacchetto',
      sinPaquete: 'Senza pacchetto: moduli a scelta',
      paqueteObrador: 'Pacchetto Obrador',
      paqueteObradorTexto: 'Base, Acquisti, Prodotti, POS e Risorse umane, con {usuarios} utenti: {precio} al mese; con il controllo dei costi, {conCostes}.',
      conObrador: 'Con il pacchetto Obrador',
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
        'paquete-obrador': 'Pacchetto Obrador',
        'paquete-obrador-costes': 'Pacchetto Obrador con controllo dei costi',
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
      paqueteObrador: 'Pacchetto Obrador',
      gestorias: 'Pacchetto Studi professionali e di consulenza',
      gestoriasPrecio: '{precio} al mese con {empresas} aziende e {usuarios} utenti; {empresa} per ogni azienda in più (fino a {max}) e {nomina} per busta paga',
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
    enlaces: {
      privacidad: 'informativa sulla privacy',
      cookies: 'cookie policy',
    },
    aviso: {
      titulo: 'Avviso legale · Synentor',
      encabezado: 'Avviso legale',
      secciones: [
        {
          t: 'Chi è il titolare',
          p: [
            'Questo sito, {web}, appartiene a {razon}, società andorrana con sede in {direccion}. NRT (codice fiscale andorrano): in corso di rilascio.',
            'Per qualsiasi questione, ci scriva a {correo} o ci chiami al {telefono}.',
          ],
        },
        {
          t: 'A cosa serve questo sito',
          p: [
            'Informa sui nostri servizi di consulenza in intelligenza artificiale e vendite e sui nostri programmi. L’accesso è gratuito e non è necessario registrarsi.',
            'Sul sito non si compra né si paga nulla. I prezzi mostrati sono indicativi e al netto delle imposte: ciò che vale sono la proposta e il contratto che firmiamo con Lei per iscritto.',
          ],
        },
        {
          t: 'Come può usarlo',
          p: [
            'Chi usa il sito è responsabile dell’uso che ne fa. Non è consentito:',
          ],
          lista: [
            'usarlo contro la legge o contro i diritti di altre persone;',
            'tentare di entrare nei suoi server, modificarne la configurazione o aggirarne le misure di sicurezza;',
            'inviare tramite il modulo contenuti illeciti od offensivi, pubblicità che non abbiamo richiesto o dati di altre persone senza il loro permesso;',
            'mostrarlo all’interno di un altro sito o copiarlo in modo automatico.',
          ],
          despues: [
            'Se qualcuno non rispetta queste condizioni, possiamo impedirgli l’accesso.',
          ],
        },
        {
          t: 'Responsabilità',
          p: [
            'Ci impegniamo affinché le informazioni siano corrette e aggiornate, ma possono contenere errori o dati non aggiornati: li correggiamo non appena li notiamo. Non rispondiamo dei danni che possano derivare dall’uso delle informazioni del sito, né delle interruzioni dovute a manutenzione, guasti o cause a noi non imputabili, anche se adottiamo misure ragionevoli per evitarle.',
          ],
        },
        {
          t: 'Link ad altri siti',
          p: [
            'Il sito contiene link a pagine di altre aziende ed enti. Non le controlliamo né rispondiamo del loro contenuto, e il fatto di inserire un link non significa che abbiamo rapporti con loro. Consulti le loro condizioni.',
          ],
        },
        {
          t: 'Proprietà intellettuale e industriale',
          p: [
            'Il marchio e il logo di Synentor, i testi, il design, le immagini e il codice di questo sito appartengono a {razon} o a chi ci ha autorizzato a usarli. Può visualizzarli e salvarne una copia per uso personale. Per qualsiasi altro uso (copiarli, pubblicarli, modificarli o usarli a fini commerciali) occorre la nostra autorizzazione scritta.',
          ],
        },
        {
          t: 'Dati personali e cookie',
          p: [
            'Come trattiamo i dati che ci fornisce è spiegato nell’{privacidad}; quali cookie usiamo, nella {cookies}.',
          ],
        },
        {
          t: 'Lingue',
          p: [
            'Il sito è disponibile in catalano, spagnolo, inglese, francese, portoghese, italiano e tedesco. Se una traduzione non dice la stessa cosa del testo in catalano, prevale il catalano.',
          ],
        },
        {
          t: 'Legge applicabile e tribunali',
          p: [
            'Queste condizioni sono regolate dalla legge andorrana. Per qualsiasi controversia sono competenti i tribunali del Principato di Andorra, salvo che la legge Le riconosca il diritto di rivolgersi ad altri.',
          ],
        },
        {
          t: 'Modifiche',
          p: [
            'Possiamo modificare questo avviso legale quando necessario. La data in alto indica quando è stato modificato l’ultima volta.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Informativa sulla privacy · Synentor',
      encabezado: 'Informativa sulla privacy',
      secciones: [
        {
          t: 'Chi tratta i Suoi dati',
          p: [
            'Il titolare del trattamento è {razon}, società andorrana con sede in {direccion}. NRT (codice fiscale andorrano): in corso di rilascio. E-mail: {correo}. Telefono: {telefono}.',
            'Non abbiamo nominato un responsabile della protezione dei dati: per qualsiasi questione sui Suoi dati, ci scriva a {correo}.',
          ],
        },
        {
          t: 'Quali dati trattiamo, per quale scopo e per quanto tempo',
          p: [
            'Solo quelli necessari per ciascuna finalità:',
          ],
          lista: [
            'Modulo di contatto. Dati: nome, e-mail, oggetto e messaggio e, se li indica, l’azienda e il telefono. Finalità: risponderLe e, se lo richiede, prepararLe una proposta. Base giuridica: il Suo consenso, che presta spuntando la casella, e, se richiede una proposta, le misure precontrattuali. Durata: il messaggio ci arriva per e-mail e il sito non lo conserva; lo conserviamo per {plazoContacto} dall’ultimo contatto se non diventa cliente e, se lo diventa, per tutta la durata del rapporto e per i termini previsti dalla legge.',
            'Verifica antirobot del modulo (Cloudflare Turnstile). Dati: l’indirizzo IP e dati tecnici del browser. Finalità: verificare che il modulo sia inviato da una persona. Base giuridica: il nostro legittimo interesse a proteggere il sito dagli abusi. Noi non li conserviamo.',
            'Prova della Sua scelta sui cookie. Dati: un identificativo casuale che non La identifica, la versione dell’informativa, ciò che ha deciso e la data; mai l’IP. Finalità: poter dimostrare il Suo consenso. Base giuridica: l’obbligo di poterlo dimostrare. Durata: 12 mesi.',
            'Log tecnici dell’hosting (Cloudflare). Dati: l’indirizzo IP, la data e l’ora, la pagina richiesta e gli errori. Finalità: la sicurezza e il corretto funzionamento del sito. Base giuridica: il nostro legittimo interesse. Durata: fino a {plazoRegistros}.',
            'Statistiche delle visite (Umami). Senza cookie e senza dati che La identifichino: solo dati aggregati, come le pagine viste, il Paese o il browser.',
            'Cookie di altre aziende, solo se li accetta: è spiegato nella {cookies}.',
            'Se ci scrive per e-mail o ci telefona: i Suoi dati di contatto e ciò che ci racconta, per risponderLe, con la stessa base giuridica e la stessa durata del modulo.',
          ],
        },
        {
          t: 'Chi altro vede i Suoi dati',
          p: [
            'Non vendiamo né cediamo i Suoi dati. Li trattano soltanto i fornitori che, per nostro conto, fanno funzionare il sito e la posta elettronica, e le pubbliche amministrazioni quando la legge lo richiede:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Dati fuori da Andorra',
          p: [
            'Alcuni di questi fornitori hanno sede negli Stati Uniti o vi trattano dati. Scegliamo fornitori che aderiscono al quadro UE-USA per la protezione dei dati personali o che si impegnano contrattualmente tramite clausole contrattuali standard. Ciononostante, gli Stati Uniti non offrono lo stesso livello di protezione di Andorra o dell’Unione europea, e le loro autorità potrebbero chiedere l’accesso a tali dati.',
          ],
        },
        {
          t: 'I Suoi diritti',
          p: [
            'Può chiederci di accedere ai Suoi dati, di rettificarli, di cancellarli, di limitarne il trattamento, di portarli con sé (portabilità) oppure opporsi al loro trattamento. E può revocare il Suo consenso quando vuole, senza che ciò incida su quanto fatto in precedenza.',
            'Ci scriva a {correo}. Se non possiamo verificare che sia Lei, Le chiederemo un documento che La identifichi, che useremo solo a questo scopo e poi cancelleremo. Le risponderemo entro il termine previsto dalla legge.',
            'Se ritiene che non abbiamo dato seguito correttamente ai Suoi diritti, può presentare reclamo all’Agència Andorrana de Protecció de Dades (Agenzia andorrana per la protezione dei dati, APDA): {apda}.',
          ],
        },
        {
          t: 'Sicurezza',
          p: [
            'Proteggiamo i Suoi dati con misure tecniche e organizzative: connessione cifrata, accesso riservato a chi ne ha bisogno e fornitori con garanzie di sicurezza.',
          ],
        },
        {
          t: 'Minori',
          p: [
            'Il sito è rivolto ad aziende e professionisti. Se ha meno di 16 anni, non ci invii dati senza il permesso di Suo padre, di Sua madre o del Suo tutore.',
          ],
        },
        {
          t: 'Leggi che applichiamo',
          p: [
            'La Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (legge qualificata andorrana 29/2021, del 28 ottobre, sulla protezione dei dati personali, LQPD) e, per le persone dell’Unione europea, il Regolamento generale sulla protezione dei dati (GDPR).',
          ],
        },
        {
          t: 'Modifiche',
          p: [
            'Se modifichiamo questa informativa, lo indicheremo qui con la nuova data. Se la modifica riguarda qualcosa a cui ha acconsentito, Glielo chiederemo di nuovo.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Cookie policy · Synentor',
      encabezado: 'Cookie policy',
      ninguna: 'Al momento non ne usiamo nessuno. Se un giorno li useremo, Glielo chiederemo prima e compariranno qui.',
      secciones: [
        {
          t: 'Cosa sono',
          p: [
            'I cookie sono piccoli file che un sito salva nel Suo browser per ricordare qualcosa della Sua visita. Qui chiamiamo cookie anche altri modi di salvare dati nel browser, come la memoria locale.',
          ],
        },
        {
          t: 'Quelli che usiamo sempre',
          p: [
            'Sono quelli indispensabili perché il sito funzioni o per ricordare ciò che sceglie. Non richiedono il Suo consenso.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Statistiche senza cookie',
          p: [
            'Contiamo le visite con Umami, che non usa cookie né conserva dati che La identifichino.',
          ],
        },
        {
          t: 'Quelli che usiamo solo se li accetta',
          p: [
            'Sono di due tipi: statistiche, per sapere come viene usato il sito e migliorarlo, e pubblicità, per misurare i nostri annunci e mostrarLe annunci di Synentor su altri siti. Finché non li accetta, il sito non carica questi strumenti.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'La Sua scelta',
          p: [
            'La prima volta Glielo chiediamo con un avviso: può accettarli tutti, rifiutarli tutti o scegliere. Le tre opzioni sono ugualmente a portata di mano e nessuna è preselezionata.',
            'Può cambiare idea quando vuole con il pulsante «{boton}» a piè di pagina. Se revoca il consenso, cancelliamo i cookie di questi strumenti che si trovano sul nostro dominio e il sito smette di caricarli; quelli che queste aziende mettono sul proprio dominio può cancellarli dal browser.',
            'La Sua scelta vale 12 mesi; poi Glielo chiediamo di nuovo. Ne conserviamo una prova senza il Suo IP, come spiegato nell’{privacidad}.',
          ],
        },
        {
          t: 'Dal browser',
          p: [
            'Può anche bloccare o cancellare i cookie dal Suo browser:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Revisione',
          p: [
            'Rivediamo questa cookie policy almeno una volta all’anno e ogni volta che cambiamo gli strumenti del sito.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Chi lo installa',
      finalidad: 'Finalità',
      duracion: 'Durata',
      tipo: 'Tipo',
      propia: 'Nostro',
      terceros: 'Di un’altra azienda',
      sesion: 'Fino alla chiusura del browser',
      persistente: 'Finché non lo cancella',
      fijaProveedor: 'Stabilita dal fornitore',
      proveedor: 'Fornitore',
      para: 'Finalità',
      donde: 'Dove tratta i dati',
      garantia: 'Garanzia',
    },
    finalidades: {
      lang: 'Ricordare la lingua che sceglie.',
      consentimiento: 'Salvare la Sua scelta sui cookie.',
      franja: 'Non mostrarLe più l’avviso della lingua se lo ha chiuso (memoria locale).',
      cfBm: 'Sicurezza: distinguere le persone dai robot, solo quando Cloudflare ne ha bisogno.',
      cfClearance: 'Sicurezza: ricordare che ha superato una verifica antirobot, solo se Cloudflare l’ha richiesta.',
      gaUsuario: 'Distinguere i visitatori per le statistiche.',
      gaSesion: 'Mantenere lo stato della visita per le statistiche.',
      clarityUsuario: 'Salvare l’identificativo di Clarity e le sue preferenze, solo per questo sito.',
      claritySesion: 'Riunire in un’unica registrazione le pagine di una stessa visita.',
      clarityPrimeraVez: 'Sapere quando Clarity ha visto per la prima volta questo browser su qualsiasi sito che lo utilizzi.',
      msAnonchk: 'Uso interno di Microsoft relativo all’identificativo MUID; Clarity non lo usa per la pubblicità.',
      msMr: 'Sapere se occorre rinnovare l’identificativo MUID.',
      msMuid: 'Identificare il browser sui siti di Microsoft.',
      msSm: 'Sincronizzare l’identificativo MUID tra i domini di Microsoft.',
      metaFbp: 'Identificare il browser per misurare e mostrare annunci di Meta.',
      metaFbc: 'Salvare l’annuncio di Meta da cui proviene la visita.',
      metaFr: 'Mostrare e misurare annunci di Meta.',
      liFatId: 'Misurare i risultati degli annunci di LinkedIn.',
      liSugr: 'Collegare la visita a membri di LinkedIn per la pubblicità.',
      liBcookie: 'Identificare il browser per rilevare abusi.',
      liLidc: 'Scegliere il data center di LinkedIn.',
      liUserMatch: 'Sincronizzare identificativi per la pubblicità.',
      liAnalyticsSync: 'Registrare quando è avvenuta la sincronizzazione con il cookie di analisi di LinkedIn.',
      liLmsAds: 'Riconoscere membri di LinkedIn fuori da LinkedIn per la pubblicità.',
      liLmsAnalytics: 'Riconoscere membri di LinkedIn fuori da LinkedIn per l’analisi.',
    },
    proveedores: {
      cloudflare: {
        para: 'Hosting del sito, verifica antirobot del modulo, prova dei consensi e log tecnici.',
        donde: 'La sua rete mondiale, con sede negli Stati Uniti. Le prove del consenso sono conservate nell’Unione europea.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali e clausole contrattuali standard.',
      },
      resend: {
        para: 'Inviare alla nostra casella di posta il messaggio del modulo.',
        donde: 'Stati Uniti.',
        garantia: 'Clausole contrattuali standard e quadro UE-USA per la protezione dei dati personali.',
      },
      microsoft365: {
        para: 'La posta elettronica aziendale, dove riceviamo e conserviamo i messaggi.',
        donde: 'Unione europea (regione europea di Microsoft). L’azienda ha sede negli Stati Uniti.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali e clausole contrattuali standard.',
      },
      umami: {
        para: 'Statistiche delle visite senza cookie.',
        donde: 'Unione europea (Francoforte, Germania). L’azienda ha sede negli Stati Uniti.',
        garantia: 'Clausole contrattuali standard.',
      },
      google: {
        para: 'Statistiche delle visite (Google Analytics), se le accetta.',
        donde: 'Stati Uniti e altri Paesi.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali e clausole contrattuali standard.',
      },
      clarity: {
        para: 'Vedere come viene usato il sito (Microsoft Clarity), se lo accetta.',
        donde: 'Stati Uniti.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali.',
      },
      meta: {
        para: 'Misurare e mostrare annunci (pixel di Meta), se lo accetta.',
        donde: 'Irlanda e Stati Uniti.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali e clausole contrattuali standard.',
      },
      linkedin: {
        para: 'Misurare e mostrare annunci (LinkedIn Insight Tag), se lo accetta.',
        donde: 'Stati Uniti.',
        garantia: 'Quadro UE-USA per la protezione dei dati personali e clausole contrattuali standard.',
      },
    },
  },
};
