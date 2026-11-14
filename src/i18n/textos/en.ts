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
    enConstitucion: 'being incorporated',
    nrt: 'NRT pending',
    estadisticas: 'Cookie-free visit statistics (Umami).',
  },
  estados: {
    disponible: 'Available',
    inminente: 'Coming very soon',
    a_medida: 'Bespoke',
    inminenteLargo: 'Coming very soon, with adaptation tailored to the client',
  },
  inicio: {
    titulo: 'Synentor · AI and sales consultancy with our own software',
    descripcion:
      'Multi-company ERP-CRM made in Andorra, MUV, and AI and sales consultancy. Accounting, payroll, purchasing, sales and official procedures in one place.',
    portada: {
      antetitulo: 'AI and sales consultancy · Our own software, made in Andorra',
      titulo: 'Your business, connected.',
      subtitulo:
        'Accounting, payroll, purchasing, sales and official procedures in one place. With an AI that takes care of repetitive work and a consultancy that supports you.',
      botonDemo: 'Request a demo',
      botonPrecio: 'Work out your price',
      nota: 'From {base} a month · {usuarios} users included · excluding taxes',
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
    titulo: 'Contact · Synentor',
    descripcion: 'Write to us and we will reply within one working day.',
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
    titulo: 'Services · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM module by module, MUV, AI and sales consultancy, energy, migrations, the employee portal and websites.',
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
    muv: {
      titulo: 'MUV',
      texto:
        'The operational brain of your business: knowledge maps, tasks with owners, dates and dependencies, and a private AI that runs in your office.',
      precio: 'Free up to {gratis} users. Users {desde1} to {hasta1}: {precio1} per user a month; up to {hasta2}, {precio2}.',
      equipos: 'Recommended hardware (one-off payment): Basic {basico} · AI {ia} · AI+ {iaPlus}.',
      enDesarrollo: 'It does not yet have real-time simultaneous editing or a mobile app: in development.',
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
    titulo: 'Pricing · Synentor',
    descripcion: 'Work out the price of Synentor Suite ERP-CRM and MUV instantly, with no surprises.',
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
    aviso: {
      titulo: 'Legal notice · Synentor',
      encabezado: 'Legal notice',
      secciones: [
        {
          t: 'Owner',
          p: 'This website belongs to {razon} ({estado}), registered at {direccion}. Email: {correo}. Telephone: {telefono}. NRT and entry in the Register of Commercial Companies: pending.',
        },
        {
          t: 'Use of the website',
          p: 'The information on this website is indicative. The prices and terms that apply are those in the written proposal we send you.',
        },
        {
          t: 'Intellectual property',
          p: 'The texts, logo and design of this website belong to {razon}. Please do not use them without our permission.',
        },
        { t: 'Governing law', p: 'Andorran law applies. Any dispute falls under the courts of the Principality of Andorra.' },
      ],
    },
    privacidad: {
      titulo: 'Privacy policy · Synentor',
      encabezado: 'Privacy policy',
      secciones: [
        { t: 'Who is the controller', p: '{razon} ({estado}), {direccion}. Email: {correo}.' },
        {
          t: 'What data we process',
          p: 'The data in the contact form: name, email, company and telephone (the last two, if you enter them), subject and message. The message reaches us by email: the website does not store it.',
        },
        { t: 'Why', p: 'To reply to you and, if you ask, to prepare a proposal for you. The legal basis is your consent.' },
        { t: 'For how long', p: 'For as long as needed to deal with your request and as long as the law requires.' },
        {
          t: 'Who else sees it',
          p: 'The providers that keep the website running: hosting and the anti-robot check (Cloudflare) and email delivery. Visit statistics (Umami) use no cookies and store no data that identifies you.',
        },
        {
          t: 'Your rights',
          p: 'You may request access, rectification, erasure, objection, restriction and portability by writing to {correo}. If you disagree, you may complain to the Andorran Data Protection Agency (apda.ad).',
        },
        {
          t: 'Laws',
          p: 'The Andorran qualified law on the protection of personal data (Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals), and the European Union General Data Protection Regulation (GDPR) for people in the EU.',
        },
      ],
    },
    cookies: {
      titulo: 'Cookie policy · Synentor',
      encabezado: 'Cookie policy',
      secciones: [
        {
          t: 'What we use',
          p: 'A single cookie, “lang”, which stores the language you choose (one year). And, in your browser, a flag so we do not show you the language notice again if you close it.',
        },
        { t: 'Statistics', p: 'We count visits with Umami, with no cookies and without storing data that identifies you.' },
        { t: 'How to remove them', p: 'You can delete them at any time from your browser settings.' },
      ],
    },
  },
};
