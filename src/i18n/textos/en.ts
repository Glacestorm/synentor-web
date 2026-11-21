// Textos en inglés británico. Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts). Traducción de Claude, pendiente de una lectura nativa (diseño §3).
import type { Textos } from './ca';

export const en: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'Your business, connected.',
    descripcion:
      'AI and sales consultancy with our own software, made in Andorra: multi-company Synentor Suite ERP-CRM, MUV and bespoke AI projects.',
  },
  nav: {
    inicio: 'Home',
    servicios: 'Services',
    precios: 'Pricing',
    contacto: 'Contact',
    demo: 'Request a demo',
    idioma: 'Language',
    menu: 'Menu',
    saltar: 'Skip to content',
  },
  franjaIdioma: {
    idioma: 'English',
    texto: 'Would you like to view this page in {idioma}?',
    aceptar: 'Yes, switch',
    cerrar: 'No, thanks',
  },
  pie: {
    empresa: 'Company',
    legal: 'Legal',
    avisoLegal: 'Legal notice',
    privacidad: 'Privacy',
    cookies: 'Cookies',
    nrt: 'NRT pending',
    estadisticas: 'Cookie-free visit statistics (Cloudflare Web Analytics).',
    linkedin: 'Synentor on LinkedIn (opens in a new tab)',
  },
  cookiesAviso: {
    titulo: 'Cookies',
    aviso: '{empresas} use cookies to {finalidades}. They are only switched on if you accept them. You can reject them or choose, and change your mind at any time with the cookie button. Data may leave Andorra and the European Union.',
    y: ' and ',
    politica: 'Cookie policy',
    aceptar: 'Accept all',
    rechazar: 'Reject all',
    configurar: 'Customise',
    guardar: 'Save my choice',
    siempre: 'Always on',
    flotante: 'Cookie settings',
    necesarias: { nombre: 'Necessary', texto: 'The language you choose (cookie “lang”, 1 year), your cookie choice (“synentor_consentimiento”, 12 months) and the anti-bot check on the contact form (Cloudflare). They cannot be switched off.' },
    estadisticas: { nombre: 'Statistics', texto: 'Which pages are visited and how people move around, to improve the site. Clarity records the session with anything typed hidden.', finalidad: 'measure visits' },
    publicidad: { nombre: 'Advertising', texto: 'To show Synentor ads to people who have already visited the site and to know whether they work.', finalidad: 'show you Synentor ads on other websites' },
    herramientas: {
      ga4: 'Google Analytics (Google): “_ga” cookies, up to 13 months.',
      clarity: 'Microsoft Clarity (Microsoft): “_clck” cookie, 1 year, and “_clsk”, 1 day.',
      metaPixel: 'Meta Pixel (Meta Platforms): “_fbp” cookie, 90 days, and Meta’s own cookies on its domain.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): LinkedIn cookies on its domain, up to 1 year.',
    },
  },
  estados: {
    disponible: 'Available',
    inminente: 'Coming very soon',
    a_medida: 'Bespoke',
    inminenteLargo: 'Coming very soon, with adaptation tailored to the client',
  },
  inicio: {
    titulo: 'AI consultancy and ERP-CRM in Andorra, Spain and Europe',
    descripcion:
      'Multi-company ERP-CRM made in Andorra, MUV, and AI and sales consultancy for Andorra, Spain and Europe. See what is available in your country, module by module.',
    portada: {
      antetitulo: 'AI and sales consultancy · Our own software, made in Andorra',
      titulo: 'Your business, connected.',
      subtitulo:
        'Accounting, payroll, purchasing, sales and official procedures in one place. With an AI that takes care of repetitive work and a consultancy that supports you.',
      botonDemo: 'Request a demo',
      botonPrecio: 'Work out your price',
      nota: 'From {base} a month · {usuarios} users included · excluding taxes',
      animacion: { pausa: 'Pause the animation', reanuda: 'Play the animation' },
      nodos: { compras: 'Purchasing', ventas: 'Sales and CRM', rrhh: 'HR', contabilidad: 'Accounting', bancos: 'Banks', muv: 'MUV' },
    },
    problema: {
      titulo: 'Too many programs. Too many spreadsheets. Too much repeated work.',
      puntos: [
        'Invoices that someone has to key in one by one.',
        'Payroll and CASS that depend on a single person.',
        'Bank accounts that do not reconcile until month end.',
        'Law changes in the BOPA that you only hear about later.',
      ],
      cierre: 'Synentor puts everything in one place and does the repetitive work for you.',
    },
    pilares: {
      titulo: 'Three ways to grow your business',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'Complete business management, built for Andorra: accounting with the Andorran chart of accounts, treasury, purchasing, sales and CRM, human resources, tax and legal.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'The operational brain of your business: knowledge maps, tasks with owners, dates and dependencies, and a private AI that runs in your office.',
      },
      consultoria: {
        titulo: 'AI and sales consultancy',
        texto: 'Diagnosis, training, assistants and automation. Plus bespoke AI projects, scoped to your budget.',
      },
      mas: 'Find out more',
    },
    rrhh: {
      antetitulo: 'Human resources',
      titulo: 'Genuine Andorran HR.',
      texto:
        'Employee record, contracts, CASS registration, payroll and Andorran IRPF, holidays, schedules, clocking in through the employee portal, and final settlements. All connected to accounting.',
      puntos: [
        'Employee documents are read by an AI that runs on your own premises.',
        'Identity documents are read to fill in the employee record in seconds.',
        'Every change is logged.',
      ],
      espana:
        'In Spain: payroll and reading of collective agreements from the official register (REGCON and BOE), coming very soon, with adaptation tailored to the client.',
      dato:
        'In the bakery where it began, by the second month almost 8 in 10 of the people who worked the whole month were already clocking in from the employee portal.',
      cifra: {
        etiqueta: 'clocked in from the employee portal',
        texto: '{fichan} of the {total} people who worked the whole month ({mes}), in the bakery where Synentor began.',
        fuente: 'Measured figure: a count in the program’s database, with no personal data.',
      },
    },
    multiempresa: {
      antetitulo: 'Multi-company',
      titulo: 'Many companies. One installation.',
      texto:
        'Each company is kept separate from the others, with its own users and permissions. Ideal for groups and accountancy firms: switch company in a moment.',
      puntos: ['You pay per company, not per person.', '{usuarios} users included.', 'Additional company: {empresaAdicional} a month.'],
    },
    ia: {
      antetitulo: 'Private AI',
      titulo: 'Your AI, under your own roof.',
      texto:
        'Supplier invoices and employee documents are read by an AI that runs on a machine in your company. Those documents never leave for the cloud.',
    },
    compras: {
      titulo: 'Invoices that read themselves.',
      texto:
        'Send them by email or drop them in a folder: Synentor reads them, creates the supplier if needed and prepares a draft, so all you have to do is review it.',
      pasos: ['Invoice by email', 'The AI reads it', 'Draft to review', 'Posted'],
    },
    bancos: {
      titulo: 'Any bank, reconciled.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV or Excel: Synentor reads the statement and proposes the reconciliation.',
      pasos: ['Bank statement', 'Transactions read', 'Reconciliation proposed', 'You confirm it'],
    },
    juridico: {
      titulo: 'Andorran law, monitored.',
      texto:
        'BOPA monitoring, official procedures with their deadlines, a corporate acts register and anti-money-laundering compliance for obliged entities.',
    },
    historia: {
      antetitulo: 'How it began',
      titulo: 'Born inside a real business.',
      texto:
        'Synentor is not a mock-up: it began by running an Andorran business every day, a bakery with shops. Every screen was built by solving a real problem.',
    },
    precio: {
      titulo: 'Clear pricing, no surprises.',
      texto: 'Choose the modules you need and see the total straight away. Modules that go together are added automatically.',
      boton: 'Work out your price',
    },
    final: {
      titulo: 'Let’s talk about your business.',
      texto: 'We will show you Synentor with cases like yours and tell you, with no commitment, where we would start.',
      boton: 'Request a demo',
    },
  },
  contacto: {
    titulo: 'Contact us: request a demo · Synentor',
    descripcion: 'Write to us and we will reply within one working day, Monday to Friday, 9:00 to 18:00. We are in Escaldes-Engordany, Andorra.',
    encabezado: 'Let’s talk.',
    entrada: 'Tell us what you need. We reply within one working day, Monday to Friday, 9:00 to 18:00 (Andorra time).',
    datos: 'Contact details',
    correo: 'Email',
    telefono: 'Telephone',
    direccion: 'Address',
    horario: 'Opening hours',
    horarioTexto: 'Monday to Friday, 9:00 to 18:00 (Andorra time)',
    despues: {
      titulo: 'What happens next',
      pasos: [
        'We receive your message at the company email address.',
        'We reply within one working day.',
        'If you wish, we prepare a written proposal for you.',
      ],
    },
    formulario: {
      titulo: 'Send us a message',
      nombre: 'Name',
      correo: 'Email address',
      empresa: 'Company',
      telefono: 'Telephone',
      asunto: 'Subject',
      asuntos: {
        informacion: 'General information',
        demostracion: 'Request a demo',
        pedido: 'Order request',
        centralita: 'AI switchboard for medical practices',
        precios: 'Pricing and quotation',
        consultoria: 'AI and sales consultancy',
        muv: 'MUV',
        web: 'Website design',
        gestorias: 'Package for accountancy and advisory firms',
        otro: 'Other',
      },
      mensaje: 'Message',
      consentimiento: 'I have read the {politica} and agree that you may use this data to reply to me.',
      politica: 'privacy policy',
      obligatorio: 'required',
      enviar: 'Send message',
      enviando: 'Sending…',
      contador: '{n} of {max}',
      ok: 'Sent. We will reply within one working day.',
      errores: {
        datos: 'Please check the highlighted fields: some information is missing or invalid.',
        robot: 'We could not verify that you are not a robot. Please try again.',
        envio: 'The message could not be sent right now.',
        red: 'No connection.',
      },
      alternativa: 'Write to us directly at {correo}.',
      sinJs: 'If the form does not work, write to us at {correo}.',
    },
  },
  servicios: {
    titulo: 'ERP-CRM, AI and websites in Andorra, Spain and Europe',
    descripcion:
      'Synentor Suite ERP-CRM module by module and what is available in Andorra, Spain and Europe. MUV, AI and sales consultancy, energy, migrations and websites.',
    encabezado: 'Everything we do, no small print.',
    entrada:
      'Our own software and consultancy. For each module we tell you whether it works today in your country, is coming very soon, or is adapted to order.',
    columnas: { andorra: 'Andorra', espana: 'Spain', otros: 'Portugal, France, Italy and Germany' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'Business management in one place. You pay per company and for the modules you use.',
      requiere: 'Requires {modulo}',
      idiomaPrograma:
        'The program’s screens are in Spanish and Catalan. Other languages are coming very soon, with adaptation tailored to the client.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'The multi-company engine: users and permissions, backups, local AI, single document intake, master data, company record and corporate acts register, accounting with the Andorran chart of accounts, treasury and bank reconciliation, dashboard and reports.',
      },
      compras: {
        nombre: 'Smart purchasing',
        texto:
          'Supplier invoices arrive by email or in a folder and are read automatically: the supplier is created if needed and a draft is ready for review.',
      },
      ventas_crm: {
        nombre: 'Sales and CRM',
        texto: 'Customers, projects, contacts, a sales map and a register of issued invoices with IGI.',
      },
      rrhh: {
        nombre: 'Human resources and payroll',
        texto:
          'Employee record, contracts, CASS registration, payroll and Andorran IRPF, holidays, schedules, clocking in, the employee portal and final settlements.',
      },
      fiscal: { nombre: 'Tax', texto: 'IGI, corporate tax, filings and DTF forms.' },
      juridico: {
        nombre: 'Legal and procedures',
        texto: 'BOPA monitoring, official procedures with their deadlines, case files and a corporate acts register.',
      },
      pbc: {
        nombre: 'Anti-money-laundering',
        texto: 'A file for each client of obliged entities: questionnaires, risk model, decisions and reports to the UIFAND.',
      },
      productos: { nombre: 'Products, costed recipes and stock', texto: 'Products, recipes with their cost, and stock.' },
      costes: {
        nombre: 'Purchase cost control',
        texto: 'Price comparison by supplier and item, order checking and price-rise alerts. With recipes, the cost of each one; with the POS, theoretical consumption and margin per item.',
      },
      tpv: {
        nombre: 'POS and cash',
        texto: 'Sales from the HIOPOS POS and the CashDro cash machine, in your accounts every day. CashDro: one company per installation.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'For energy advisers: case files, customers, supply points and CUPS, invoices with their PDF, contracts and expiry dates, comparison against your tariff catalogue, report and proposal in PDF, savings tracking and a customer portal. Spanish electricity market, tariffs of up to 3 periods.',
      },
    },
    costes: {
      titulo: 'Purchase cost control',
      texto: 'Every invoice and delivery note that reaches Purchasing becomes information to help you buy better. {precio} a month, as an add-on to Purchasing.',
      puntos: [
        'Price comparison: each line is converted to a price per kilo, litre or unit, and for each item you see which supplier works out cheapest and how much you would have saved. Every figure opens its original invoice.',
        'Purchase basket: prepares draft orders to the cheapest supplier.',
        'History of prices paid, suppliers’ price-list offers and suspicious prices.',
        'Each supplier’s discounts and order checking: what was ordered, received and invoiced, against the promised price.',
        'Alerts on the dashboard when a supplier raises the price of an item by 8% or more, when you pay one supplier more than another for the same thing, or when an invoice exceeds the order price.',
      ],
      condicionesTitulo: 'With recipes and POS',
      condiciones: [
        'With recipes (Products module): the live cost of each recipe at the latest prices paid.',
        'With recipes and the POS connected (currently HIOPOS): theoretical consumption against what was bought, and the margin per item.',
      ],
      nota: 'Each supplier description is matched to its item once. Alerts are shown on the dashboard; they are not sent by email.',
      enlace: 'Add it in the calculator',
    },
    gestorias: {
      titulo: 'Accountancy and Advisory Firms Package',
      estado: 'Coming very soon, with adaptation tailored to the client',
      texto: 'For firms that handle the accounting, taxes and payroll of their clients’ companies, all in a single installation.',
      precio: '{precio} a month',
      puntos: [
        'Includes Accounting, Purchasing with invoice reading, Sales, Tax and Payroll.',
        '{empresas} client companies and {usuarios} firm users included.',
        'Additional client company: {empresa} a month, up to {max} companies.',
        'Payroll: {nomina} per person per month.',
        'Additional firm user: {usuario} a month.',
        'With more than {max} companies, by proposal.',
      ],
      ejemplo: 'Example: {empresasEj} companies and {personasEj} people, {totalEj} a month.',
      condiciones: 'Only for professional firms that look after their clients’ companies. For Andorra; in other countries, bespoke. Excluding taxes, paid annually.',
      boton: 'Request a proposal',
    },
    muv: {
      titulo: 'MUV',
      texto:
        'The operational brain of your business: knowledge maps, tasks with owners, dates and dependencies, and a private AI that runs in your office.',
      plazos:
        'It calculates procedural and administrative deadlines for Spain and Andorra using their official calendars and turns them into tasks on the map. Where a rule can be read two ways, it shows both and takes the earlier date, and it warns you if that year’s calendar has not been published yet.',
      familyOffices:
        'Also for family offices: each family’s map in one place, with its assets, its companies, its documents, its decisions and what falls due. It comes with five starter templates: asset map, family governance and succession, investment transaction, obligations and due dates, and onboarding a family. It does not value portfolios or connect to banks.',
      precio: 'Free up to {gratis} users. Users {desde1} to {hasta1}: {precio1} per user a month; up to {hasta2}, {precio2}.',
      equipos: 'Recommended hardware (one-off payment): Basic {basico} · AI {ia} · AI+ {iaPlus}.',
      enDesarrollo: 'It does not yet have a mobile app: in development.',
    },
    consultoria: {
      titulo: 'AI and sales consultancy',
      texto:
        'We are an AI and sales consultancy. Diagnosis, training, assistants, automation and bespoke AI projects, scoped to your budget.',
      categorias: {
        estrategia: 'Strategy and diagnosis',
        formacion: 'Training',
        asistentes: 'Assistants and customer service',
        automatizacion: 'Process automation',
        documentos: 'Documents and knowledge',
        datos: 'Data, analytics and forecasting',
        medida: 'Bespoke development',
        cumplimiento: 'Compliance and governance',
        soporte: 'Support and maintenance',
      },
      desde: 'from {precio}',
      cuota: 'and from {cuota} a month',
      nota: 'Prices for a micro-business, excluding taxes (catalogue of {fecha}). For larger companies, as set out in the proposal.',
      medida: 'Bespoke AI projects: we will prepare a quotation.',
    },
    energia: {
      titulo: 'Energy',
      texto: 'We help you pay less for electricity and see where every kilowatt goes.',
      particulares: {
        titulo: 'Bill review for individuals',
        texto: 'We review your bill and your contracted power for {precio}. We refund it if we do not find savings of at least {precio} a year.',
      },
      empresas: {
        titulo: 'Businesses (Spain)',
        texto:
          '{precio} per supply point, or on results: {porcentaje} of the verified savings over the first 12 months. No savings, no fee. 6-period tariffs, hospitals and developers: bespoke.',
      },
      comisiones: 'We do not currently take commission from any energy supplier: we recommend what is best for you.',
      monitorizacion: {
        titulo: 'Monitoring with Home Assistant and Grafana',
        texto: 'We measure the consumption of each electrical panel and you see it on a dashboard. The data stays on a machine in your building.',
        vivienda: 'Home or small business (1 panel)',
        pyme: 'SME or shop (up to 6 panels)',
        edificio: 'Building, hotel or developer',
        granConsumidor: 'Hospital or large consumer',
        instalacionDesde: 'Installation from {precio}',
        instalacionMedida: 'Bespoke installation',
        cuota: '{precio} a month',
        cuotaDesde: 'from {precio} a month',
        incluye: 'The installation includes the meters for those points. The monthly fee includes maintenance, backups, updates and a monthly report.',
      },
      programa: 'Are you an energy adviser? See C. Eléctrica, in the Suite.',
    },
    migracion: {
      titulo: 'Migration and coexistence',
      texto: 'We bring over your data from your previous program. We only promise what can genuinely be imported today.',
      arranque: {
        nombre: 'Kick-off',
        texto: 'Suppliers, employees, products and contacts from CSV or Excel; statements from any bank (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Previous accounting (Andorra)',
        texto: 'Journal, ledgers and trial balance, checked and brought in; 805-B statements; register of issued invoices; supplier invoices in PDF.',
        precio: '{precio} for the first financial year and {adicional} for each additional one',
      },
      personal: {
        nombre: 'Staff (Andorra)',
        texto: 'Payroll history, CASS contributions, holidays and hours.',
        precio: '{precio} up to {personas} people',
      },
      aMedida:
        'Everything else (customers, outstanding receipts and payments, opening stock, fixed assets, direct connection to other programs): bespoke.',
      convivencia: {
        titulo: 'Running alongside your program',
        texto:
          'If you want to keep your program for a while, we load what it exports every month: {puesta} set-up and {cuota} a month, up to {cargas} loads a month. A direct connection is bespoke.',
      },
    },
    portal: {
      titulo: 'Employee portal',
      texto: 'Payslips, documents, holidays, requests, clocking in, profile and certificates, from any browser.',
      dato:
        'In the bakery where it began, by the second month almost 8 in 10 of the people who worked the whole month were already clocking in from the portal. No paper and no manual clocking entries.',
      precio:
        'On its own, without the rest of the program: {cuota} a month up to {personas} people, {adicional} per additional person and {implantacion} for implementation.',
      incluido: 'With Human resources, it is already included.',
    },
    webs: {
      titulo: 'Websites',
      texto: 'Fast, multilingual websites with a form that genuinely sends and cookie-free statistics. We built this very website that way.',
      esencial: { nombre: 'Essential Website', texto: 'A single presentation page, in 1 or 2 languages.' },
      profesional: { nombre: 'Professional Website', texto: 'Up to 6 pages, 3 languages and basic search optimisation.' },
      premium: {
        nombre: 'Premium Website',
        texto: 'Up to 12 pages, up to 7 languages, brand design and a bespoke calculator or configurator.',
      },
      desde: 'from {precio}',
      tienda: 'Online shop: bespoke, quoted individually.',
      extras: 'Additional page, {pagina}; additional language, {idioma} (native proofreading extra).',
      mantenimiento: 'Maintenance: {basico} a month (1 hour of changes) or {plus} a month (3 hours and a monthly visits report).',
    },
    centralita: {
      titulo: 'AI switchboard for medical practices',
      etiqueta: 'Coming soon',
      texto:
        'A switchboard that answers patients’ calls 24 hours a day: bookings, cancellations and changes of appointment, waiting list and reminders. It always tells the patient they are speaking to an AI. For medical practices and dental clinics in Andorra and Spain.',
      boton: 'I would like more information',
    },
    implantacion: {
      titulo: 'Implementation and support',
      texto: 'We install, configure, load the data and train your team: {jornada} per day; the Suite, from {minimo} days.',
      soporte: 'Support by email and telephone, Monday to Friday, 9:00 to 18:00 (Andorra time), with a reply within one working day.',
    },
  },
  precios: {
    titulo: 'ERP-CRM and MUV pricing in Andorra, Spain and Europe',
    descripcion: 'Choose the country, modules and people and see the price of Synentor Suite ERP-CRM and MUV instantly. Excluding taxes and, in Andorra, with IGI too.',
    encabezado: 'Work out your price.',
    entrada: 'Choose the country, the modules and the number of people. The total appears instantly, excluding taxes; in Andorra, also with IGI.',
    configurador: {
      pais: 'Country',
      paises: { AD: 'Andorra', ES: 'Spain', PT: 'Portugal', FR: 'France', IT: 'Italy', DE: 'Germany', OTRO: 'Another country' },
      modalidad: 'Where you want it',
      modalidadA: 'Installed at your company',
      modalidadB: 'Hosted by Synentor in Andorra (+{precio} a month)',
      pago: 'Payment',
      anual: 'Annual',
      mensual: 'Monthly (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Synentor Complete Package',
      paqueteTexto: 'Base, Purchasing, Sales and CRM, Tax and MUV, with {usuarios} users: {precio} a month.',
      paqueteTitulo: 'Package',
      sinPaquete: 'No package: modules à la carte',
      paqueteObrador: 'Obrador Package',
      paqueteObradorTexto: 'Base, Purchasing, Products, POS and Human resources, with {usuarios} users: {precio} a month; with purchase cost control, {conCostes}.',
      conObrador: 'With the Obrador Package',
      usuarios: 'Program users',
      empresa: 'Company {n}',
      principal: 'Main company',
      personas: 'Staff headcount',
      anadirEmpresa: 'Add a company',
      quitarEmpresa: 'Remove this company',
      menos: 'Fewer',
      mas: 'More',
      verResumen: 'See the quotation',
      alMes: 'a month',
      muvUsuarios: 'MUV users',
      anadidoPor: 'Added: required by another module',
      incluidoPaquete: 'Included in the package',
      estados: { disponible: 'Available', inminente: 'Coming very soon', a_medida: 'Bespoke' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Synentor Complete Package',
        'empresa-adicional': 'Additional company',
        personas: 'Staff headcount (Human resources)',
        'usuarios-adicionales': 'Additional users',
        'paquete-usuarios': 'Additional package users',
        'paquete-obrador': 'Obrador Package',
        'paquete-obrador-costes': 'Obrador Package with purchase cost control',
        'modalidad-b': 'Hosting by Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Monthly payment',
      },
      resumen: 'Your quotation',
      cuota: 'Monthly fee',
      sinImpuestos: 'excluding taxes',
      igi: 'IGI ({porcentaje})',
      total: 'Total per month',
      implantacion: 'Implementation, from {precio} (one-off payment)',
      avisos: {
        'impuestos-no-incluidos': 'Taxes not included (VAT, TVA or MwSt., depending on the country).',
        'cashdro-una-empresa': 'CashDro works for one company per installation.',
        'volumen-empresas': 'With more than {max} companies, volume pricing applies: we will prepare a proposal for you.',
        'modalidad-b-inminente': 'Hosting by Synentor is coming very soon.',
        'muv-a-medida': 'With more than {max} MUV users, bespoke.',
        'requiere-adaptacion': 'Some modules are not available today in your country: coming very soon or bespoke.',
      },
      botonDemo: 'Request a demo',
      botonPropuesta: 'Request your proposal',
      botonPedido: 'Send my selection',
      pedidoNota: 'No payment on the website: we reply with the proposal and the contract in writing.',
      pedidoAsunto: 'Order request from the calculator',
      sinJs: 'The calculator needs JavaScript. See the tables below or write to us.',
    },
    tablas: {
      titulo: 'All prices',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Item',
      precio: 'Price',
      alMes: '{precio} a month',
      porPersona: '+ {precio} per person on the payroll',
      usuarioAdicional: 'Additional user',
      empresaAdicional: 'Additional company',
      empresaAdicionalPrecio: '{precio} a month + its modules at {porcentaje}',
      paquete: 'Synentor Complete Package',
      paqueteUsuario: 'Additional package user: {precio} a month',
      paqueteObrador: 'Obrador Package',
      gestorias: 'Accountancy and Advisory Firms Package',
      gestoriasPrecio: '{precio} a month with {empresas} companies and {usuarios} users; {empresa} per additional company (up to {max}) and {nomina} per payslip',
      muv: 'MUV',
      consultoria: 'AI and sales consultancy',
      servicios: 'Energy, migrations, portal and websites',
      verServicios: 'Full details, in Services',
      implantacion: 'Implementation: {precio} per day',
    },
    condiciones: {
      titulo: 'Terms',
      puntos: [
        'Annual licence, with no commitment of more than 12 months and 30 days’ notice.',
        'Support and updates included.',
        'When you finish, we hand over the archive with your company’s data.',
        'Prices in euros, excluding taxes. In Andorra, IGI at {igi}.',
        'Monthly payment: {recargo} extra.',
      ],
    },
    comparacion: {
      titulo: 'How we compare',
      texto:
        'A cloud payroll program charges between {nominaMin} and {nominaMax} per person a month, plus a fixed fee. An international ERP, around {erp} per user a month. With Synentor you pay per company and the first {usuarios} users are included.',
      fuente: 'Sources: the manufacturers’ official pricing pages, consulted on {fecha}.',
      grafico: {
        titulo: 'Example: a company of {personas} people and {usuarios} users, per month',
        synentor: 'Synentor: Base, Purchasing, HR, Tax, Products and POS',
        separado: 'Cloud payroll program + international ERP, bought separately',
        rango: 'from {min} to {max}',
        nota: 'Excluding taxes. Bought separately, neither handles Andorran payroll or CASS.',
      },
    },
    faq: {
      titulo: 'Frequently asked questions',
      preguntas: [
        {
          p: 'Which languages is the program available in?',
          r: 'Spanish and Catalan. Other languages are coming very soon, with adaptation tailored to the client.',
        },
        {
          p: 'Where is it installed?',
          r: 'At your company, on a server or a NAS: available today. Hosted by Synentor in Andorra: coming very soon.',
        },
        {
          p: 'Does my data go to the cloud?',
          r: 'Supplier invoices and employee documents are read by an AI that runs on a machine in your company. If any feature uses an external service, we tell you in the proposal.',
        },
        { p: 'Does it work in Spain?', r: 'Yes. Some modules are available today and others are coming very soon: the calculator tells you module by module.' },
        { p: 'Is there a minimum term?', r: 'Annual licence, with no commitment of more than 12 months and 30 days’ notice.' },
        { p: 'Who uses Synentor?', r: 'It began by running a bakery with shops in Andorra every day. And it is the program Synentor itself works with.' },
      ],
    },
  },
  legal: {
    actualizado: 'Last updated: {fecha}',
    enlaces: {
      privacidad: 'privacy policy',
      cookies: 'cookie policy',
    },
    aviso: {
      titulo: 'Legal notice · Synentor',
      encabezado: 'Legal notice',
      secciones: [
        {
          t: 'Who owns this website',
          p: [
            'This website, {web}, belongs to {razon}, an Andorran company with its registered office at {direccion}. NRT (Andorran tax number): pending.',
            'For any question, write to us at {correo} or call us on {telefono}.',
          ],
        },
        {
          t: 'What this website is for',
          p: [
            'It provides information about our artificial intelligence and sales consultancy services and our software. Visiting it is free and you do not need to register.',
            'Nothing is bought or paid for on the website. The prices shown are indicative and exclude taxes: what counts is the proposal and the contract we sign with you in writing.',
          ],
        },
        {
          t: 'How you may use it',
          p: [
            'Whoever uses the website is responsible for how they use it. It is not permitted to:',
          ],
          lista: [
            'use it against the law or against the rights of other people;',
            'try to get into its servers, change its configuration or get around its security measures;',
            'send through the form illegal or offensive content, advertising we have not asked for, or other people’s data without their permission;',
            'display it inside another website or copy it automatically.',
          ],
          despues: [
            'If someone does not comply with these conditions, we may block their access.',
          ],
        },
        {
          t: 'Liability',
          p: [
            'We take care that the information is correct and up to date, but it may contain errors or outdated data: we correct them as soon as we notice them. We are not liable for any damage that may be caused by the use of the information on the website, or for interruptions due to maintenance, breakdowns or causes beyond our control, although we take reasonable measures to prevent them.',
          ],
        },
        {
          t: 'Links to other websites',
          p: [
            'The website links to pages of other companies and organisations. We do not control them and are not responsible for their content, and linking to them does not mean that we have any relationship with them. Please check their own terms.',
          ],
        },
        {
          t: 'Intellectual and industrial property',
          p: [
            'The Synentor brand and logo, and the texts, design, images and code of this website, belong to {razon} or to whoever has given us permission to use them. You may view them and save a copy for your personal use. For any other use (copying, publishing or modifying them, or using them for commercial purposes) you need our written permission.',
          ],
        },
        {
          t: 'Personal data and cookies',
          p: [
            'How we process the data you give us is explained in the {privacidad}, and which cookies we use, in the {cookies}.',
          ],
        },
        {
          t: 'Languages',
          p: [
            'The website is available in Catalan, Spanish, English, French, Portuguese, Italian and German. If a translation does not say the same as the Catalan text, the Catalan text prevails.',
          ],
        },
        {
          t: 'Governing law and courts',
          p: [
            'These terms are governed by Andorran law. The courts of the Principality of Andorra have jurisdiction over any dispute, unless the law gives you the right to go to other courts.',
          ],
        },
        {
          t: 'Changes',
          p: [
            'We may change this legal notice when necessary. The date at the top shows when it was last changed.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Privacy policy · Synentor',
      encabezado: 'Privacy policy',
      secciones: [
        {
          t: 'Who processes your data',
          p: [
            'The controller is {razon}, an Andorran company with its registered office at {direccion}. NRT (Andorran tax number): pending. Email: {correo}. Telephone: {telefono}.',
            'We have not appointed a data protection officer: for any question about your data, write to us at {correo}.',
          ],
        },
        {
          t: 'What data we process, why and for how long',
          p: [
            'Only what is needed for each purpose:',
          ],
          lista: [
            'Contact form. Data: name, email, subject and message, and your company and telephone if you enter them. Purpose: to reply to you and, if you ask, to prepare a proposal for you. Legal basis: your consent, which you give by ticking the box, and, if you ask for a proposal, steps taken before entering into a contract. Retention: the message reaches us by email and the website does not store it; we keep it for {plazoContacto} from the last contact if you do not become a client and, if you do, for as long as the relationship lasts and for the periods required by law.',
            'Anti-bot check on the form (Cloudflare Turnstile). Data: your IP address and technical data from your browser. Purpose: to check that the form is sent by a person. Legal basis: our legitimate interest in protecting the website from abuse. We do not keep this data.',
            'Record of your cookie choice. Data: a random identifier that does not identify you, the version of the policy, what you decided and the date; never your IP address. Purpose: to be able to prove your consent. Legal basis: the obligation to be able to prove it. Retention: 12 months.',
            'Technical logs from our hosting (Cloudflare). Data: the IP address, the date and time, the page requested and any errors. Purpose: the security and proper functioning of the website. Legal basis: our legitimate interest. Retention: up to {plazoRegistros}.',
            'Visit statistics (Cloudflare Web Analytics) and our own count of actions: how many times a demonstration is requested, the calculator is used, a selection or the form is sent, and which campaign brought you here. No cookies and no data that identifies you: only aggregate figures, such as the pages viewed, the country or the type of browser. Our own count does not store the IP address or the browser.',
            'Cookies from other companies, only if you accept them: these are explained in the {cookies}.',
            'If you email or call us: your contact details and what you tell us, in order to reply to you, with the same legal basis and retention period as the form.',
          ],
        },
        {
          t: 'Who else sees your data',
          p: [
            'We do not sell or pass on your data. It is processed only by the providers that run the website and email on our behalf, and by public authorities when the law requires it:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Data outside Andorra',
          p: [
            'Some of these providers are based in the United States or process data there. We choose providers that participate in the EU-U.S. Data Privacy Framework or that commit themselves contractually through standard contractual clauses. Even so, the United States does not offer the same level of protection as Andorra or the European Union, and its authorities could request access to that data.',
          ],
        },
        {
          t: 'Your rights',
          p: [
            'You may ask us for access to your data, and to rectify it, erase it, restrict its processing, take it with you (portability) or object to our processing it. You may also withdraw your consent whenever you wish, without this affecting what was done before.',
            'Write to us at {correo}. If we cannot tell that it is you, we will ask you for a document that identifies you, which we will use only for that purpose and then delete. We will reply within the period set by law.',
            'If you believe we have not handled your rights properly, you may lodge a complaint with the Agència Andorrana de Protecció de Dades (Andorran Data Protection Agency, APDA) at {apda}.',
          ],
        },
        {
          t: 'Security',
          p: [
            'We protect your data with technical and organisational measures: an encrypted connection, access only for those who need it, and providers with security guarantees.',
          ],
        },
        {
          t: 'Minors',
          p: [
            'The website is intended for businesses and professionals. If you are under 16, do not send us any data without the permission of your father, your mother or your guardian.',
          ],
        },
        {
          t: 'Laws we apply',
          p: [
            'The Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (Andorran Qualified Law 29/2021 of 28 October on the protection of personal data, LQPD) and, for people in the European Union, the General Data Protection Regulation (GDPR).',
          ],
        },
        {
          t: 'Changes',
          p: [
            'If we change this policy, we will say so here with the new date. If the change affects something you consented to, we will ask you again.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Cookie policy · Synentor',
      encabezado: 'Cookie policy',
      ninguna: 'We do not use any at the moment. If we ever do, we will ask you first and they will appear here.',
      secciones: [
        {
          t: 'What they are',
          p: [
            'Cookies are small files that a website stores in your browser to remember something about your visit. Here we also use the word cookies for other ways of storing data in the browser, such as local storage.',
          ],
        },
        {
          t: 'The ones we always use',
          p: [
            'These are the ones essential for the website to work or to remember what you choose. They do not need your consent.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Statistics without cookies',
          p: [
            'We count visits with Cloudflare Web Analytics and actions with our own count. Neither uses cookies or stores data that identifies you.',
          ],
        },
        {
          t: 'The ones we only use if you accept them',
          p: [
            'There are two types: statistics, to find out how the website is used and improve it, and advertising, to measure our ads and show you Synentor ads on other websites. Until you accept them, the website does not load these tools.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'Your choice',
          p: [
            'The first time, we ask you with a notice: you can accept them all, reject them all or choose. The three options are equally easy to reach and none is preselected.',
            'You can change your mind at any time with the “{boton}” button in the footer. If you withdraw your consent, we delete the cookies of those tools that are on our domain and the website stops loading them; the ones those companies place on their own domain you can delete from your browser.',
            'Your choice is valid for 12 months; after that we ask you again. We keep proof of it without your IP address, as explained in the {privacidad}.',
          ],
        },
        {
          t: 'From your browser',
          p: [
            'You can also block or delete cookies from your browser:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Review',
          p: [
            'We review this policy at least once a year and whenever we change the tools on the website.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Set by',
      finalidad: 'Purpose',
      duracion: 'Duration',
      tipo: 'Type',
      propia: 'Our own',
      terceros: 'From another company',
      sesion: 'Until you close your browser',
      persistente: 'Until you delete it',
      fijaProveedor: 'Set by the provider',
      proveedor: 'Provider',
      para: 'Purpose',
      donde: 'Where it processes the data',
      garantia: 'Safeguard',
    },
    finalidades: {
      lang: 'Remember the language you choose.',
      consentimiento: 'Store your cookie choice.',
      franja: 'Avoid showing you the language notice again if you have closed it (local storage).',
      cfBm: 'Security: tell people apart from bots, only when Cloudflare needs to.',
      cfClearance: 'Security: remember that you have passed an anti-bot check, only if Cloudflare has asked you to take one.',
      gaUsuario: 'Tell visitors apart for statistics.',
      gaSesion: 'Keep the state of the visit for statistics.',
      clarityUsuario: 'Store the Clarity identifier and its preferences, for this website only.',
      claritySesion: 'Combine the pages of a single visit into one recording.',
      clarityPrimeraVez: 'Know when Clarity first saw this browser on any website that uses it.',
      msAnonchk: 'Internal Microsoft use relating to the MUID identifier; Clarity does not use it for advertising.',
      msMr: 'Know whether the MUID identifier needs to be renewed.',
      msMuid: 'Identify the browser on Microsoft sites.',
      msSm: 'Synchronise the MUID identifier across Microsoft domains.',
      metaFbp: 'Identify the browser to measure and show Meta ads.',
      metaFbc: 'Store the Meta ad through which you arrived.',
      metaFr: 'Show and measure Meta ads.',
      liFatId: 'Measure the results of LinkedIn ads.',
      liSugr: 'Match the visit with LinkedIn members for advertising.',
      liBcookie: 'Identify the browser to detect abuse.',
      liLidc: 'Choose the LinkedIn data centre.',
      liUserMatch: 'Synchronise identifiers for advertising.',
      liAnalyticsSync: 'Record when it was synchronised with the LinkedIn analytics cookie.',
      liLmsAds: 'Recognise LinkedIn members outside LinkedIn for advertising.',
      liLmsAnalytics: 'Recognise LinkedIn members outside LinkedIn for analytics.',
    },
    proveedores: {
      cloudflare: {
        para: 'Website hosting, anti-bot check on the form, record of consents, technical logs, cookie-free visit statistics and the count of actions.',
        donde: 'Its global network, headquartered in the United States. Consent records are stored in the European Union.',
        garantia: 'EU-U.S. Data Privacy Framework and standard contractual clauses.',
      },
      resend: {
        para: 'Sending the form message to our mailbox.',
        donde: 'United States.',
        garantia: 'Standard contractual clauses and EU-U.S. Data Privacy Framework.',
      },
      microsoft365: {
        para: 'The company email, where we receive and keep messages.',
        donde: 'European Union (Microsoft’s European region). The company is based in the United States.',
        garantia: 'EU-U.S. Data Privacy Framework and standard contractual clauses.',
      },
      google: {
        para: 'Visit statistics (Google Analytics), if you accept them.',
        donde: 'United States and other countries.',
        garantia: 'EU-U.S. Data Privacy Framework and standard contractual clauses.',
      },
      clarity: {
        para: 'Seeing how the website is used (Microsoft Clarity), if you accept it.',
        donde: 'United States.',
        garantia: 'EU-U.S. Data Privacy Framework.',
      },
      meta: {
        para: 'Measuring and showing ads (Meta Pixel), if you accept it.',
        donde: 'Ireland and United States.',
        garantia: 'EU-U.S. Data Privacy Framework and standard contractual clauses.',
      },
      linkedin: {
        para: 'Measuring and showing ads (LinkedIn Insight Tag), if you accept it.',
        donde: 'United States.',
        garantia: 'EU-U.S. Data Privacy Framework and standard contractual clauses.',
      },
    },
  },
};
