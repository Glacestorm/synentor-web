// Textos en castellano. Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts) y las mismas reglas.
import type { Textos } from './ca';

export const es: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'Tu empresa, conectada.',
    descripcion:
      'Consultoría de IA y ventas con software propio hecho en Andorra: Synentor Suite ERP-CRM multiempresa, MUV y trabajos de IA a medida.',
  },
  nav: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    precios: 'Precios',
    contacto: 'Contacto',
    demo: 'Pide una demostración',
    idioma: 'Idioma',
    menu: 'Menú',
    saltar: 'Ir al contenido',
  },
  franjaIdioma: {
    idioma: 'español',
    texto: '¿Quieres ver esta página en {idioma}?',
    aceptar: 'Sí, cambiar',
    cerrar: 'No, gracias',
  },
  pie: {
    empresa: 'Empresa',
    legal: 'Legal',
    avisoLegal: 'Aviso legal',
    privacidad: 'Privacidad',
    cookies: 'Cookies',
    nrt: 'NRT en trámite',
    estadisticas: 'Estadísticas de visitas sin cookies (Cloudflare Web Analytics).',
    linkedin: 'Synentor en LinkedIn (se abre en una pestaña nueva)',
  },
  cookiesAviso: {
    titulo: 'Cookies',
    aviso: '{empresas} usan cookies para {finalidades}. Solo se activan si las aceptas. Puedes rechazarlas o elegirlas, y cambiarlo cuando quieras con el botón de cookies. Los datos pueden salir de Andorra y de la Unión Europea.',
    y: ' y ',
    politica: 'Política de cookies',
    aceptar: 'Aceptar todas',
    rechazar: 'Rechazar todas',
    configurar: 'Configurar',
    guardar: 'Guardar mi elección',
    siempre: 'Siempre activas',
    flotante: 'Configuración de cookies',
    necesarias: { nombre: 'Necesarias', texto: 'El idioma que eliges (cookie «lang», 1 año), tu decisión sobre las cookies («synentor_consentimiento», 12 meses) y la verificación antirrobots del formulario de contacto (Cloudflare). No se pueden desactivar.' },
    estadisticas: { nombre: 'Estadísticas', texto: 'Qué páginas se visitan y cómo se navega, para mejorar la web. Clarity graba la sesión con lo que se escribe tapado.', finalidad: 'medir las visitas' },
    publicidad: { nombre: 'Publicidad', texto: 'Para mostrar anuncios de Synentor a quien ya ha visitado la web y saber si funcionan.', finalidad: 'mostrarte anuncios de Synentor en otras webs' },
    herramientas: {
      ga4: 'Google Analytics (Google): cookies «_ga», hasta 13 meses.',
      clarity: 'Microsoft Clarity (Microsoft): cookies «_clck», 1 año, y «_clsk», 1 día.',
      metaPixel: 'Píxel de Meta (Meta Platforms): cookie «_fbp», 90 días, y las de Meta en su dominio.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): cookies de LinkedIn en su dominio, hasta 1 año.',
    },
  },
  estados: {
    disponible: 'Disponible',
    inminente: 'En desarrollo inminente',
    a_medida: 'A medida',
    inminenteLargo: 'En desarrollo inminente y adaptación a medida del cliente',
  },
  inicio: {
    titulo: 'Consultoría de IA y ERP-CRM en Andorra, España y Europa',
    descripcion:
      'ERP-CRM multiempresa hecho en Andorra, MUV y consultoría de IA y ventas para Andorra, España y Europa. Mira qué está disponible en tu país, módulo a módulo.',
    portada: {
      antetitulo: 'Consultoría de IA y ventas · Software propio hecho en Andorra',
      titulo: 'Tu empresa, conectada.',
      subtitulo:
        'Contabilidad, nóminas, compras, ventas y trámites en un solo lugar. Con una IA que hace el trabajo repetitivo y una consultoría que te acompaña.',
      botonDemo: 'Pide una demostración',
      botonPrecio: 'Calcula tu precio',
      nota: 'Desde {base} al mes · {usuarios} usuarios incluidos · sin impuestos',
      animacion: { pausa: 'Detener la animación', reanuda: 'Reanudar la animación' },
      nodos: { compras: 'Compras', ventas: 'Ventas y CRM', rrhh: 'RRHH', contabilidad: 'Contabilidad', bancos: 'Bancos', muv: 'MUV' },
    },
    problema: {
      titulo: 'Demasiados programas. Demasiadas hojas de cálculo. Demasiado trabajo repetido.',
      puntos: [
        'Facturas que alguien tiene que teclear una a una.',
        'Nóminas y CASS que dependen de una sola persona.',
        'Bancos que no cuadran hasta final de mes.',
        'Leyes que cambian en el BOPA sin que te enteres.',
      ],
      cierre: 'Synentor lo pone todo en el mismo sitio y hace por ti el trabajo que se repite.',
    },
    pilares: {
      titulo: 'Tres maneras de hacer crecer tu empresa',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'La gestión entera de la empresa, hecha para Andorra: contabilidad con el plan andorrano, tesorería, compras, ventas y CRM, recursos humanos, fiscal y jurídico.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'El cerebro operativo de la empresa: mapas de conocimiento, tareas con responsables, fechas y dependencias, y una IA privada que funciona en tu oficina.',
      },
      consultoria: {
        titulo: 'Consultoría de IA y ventas',
        texto: 'Diagnóstico, formación, asistentes y automatizaciones. Y trabajos de IA a medida, según tu presupuesto.',
      },
      mas: 'Descúbrelo',
    },
    rrhh: {
      antetitulo: 'Recursos humanos',
      titulo: 'Recursos humanos de Andorra, de verdad.',
      texto:
        'Ficha, contratos, alta en la CASS, nómina e IRPF andorrano, vacaciones, horarios, fichaje con portal del empleado y finiquitos. Todo conectado con la contabilidad.',
      puntos: [
        'Los documentos de las personas se leen con una IA que funciona en tus instalaciones.',
        'Lectura de los documentos de identidad para rellenar la ficha en segundos.',
        'Cada cambio queda registrado.',
      ],
      espana:
        'En España: nómina y lectura de convenios colectivos del registro oficial (REGCON y BOE), en desarrollo inminente y adaptación a medida del cliente.',
      dato:
        'En el obrador donde nació, al segundo mes casi 8 de cada 10 personas que trabajaron el mes entero ya fichaban desde el portal del empleado.',
      cifra: {
        etiqueta: 'fichaban desde el portal del empleado',
        texto: '{fichan} de las {total} personas que trabajaron el mes entero ({mes}), en el obrador donde nació Synentor.',
        fuente: 'Dato medido: recuento en la base del programa, sin datos de personas.',
      },
    },
    multiempresa: {
      antetitulo: 'Multiempresa',
      titulo: 'Muchas empresas. Una sola instalación.',
      texto:
        'Cada empresa, aislada de las demás, con sus usuarios y permisos. Ideal para grupos y gestorías: cambias de empresa en un momento.',
      puntos: ['Pagas por empresa, no por cada persona.', '{usuarios} usuarios incluidos.', 'Empresa adicional: {empresaAdicional} al mes.'],
    },
    ia: {
      antetitulo: 'IA privada',
      titulo: 'Tu IA, en tu casa.',
      texto:
        'Las facturas de los proveedores y los documentos de las personas se leen con una IA que funciona en un equipo de tu empresa. Esos documentos no salen a la nube.',
    },
    compras: {
      titulo: 'Las facturas se leen solas.',
      texto:
        'Envíalas por correo o déjalas en una carpeta: Synentor las lee, da de alta al proveedor si hace falta y prepara el borrador para que solo tengas que revisarlo.',
      pasos: ['Factura por correo', 'La IA la lee', 'Borrador para revisar', 'Contabilizada'],
    },
    bancos: {
      titulo: 'Cualquier banco, conciliado.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV o Excel: Synentor lee el extracto y te propone la conciliación.',
      pasos: ['Extracto del banco', 'Movimientos leídos', 'Conciliación propuesta', 'La confirmas'],
    },
    juridico: {
      titulo: 'La ley andorrana, vigilada.',
      texto:
        'Vigilancia del BOPA, trámites oficiales con sus plazos, libro de actos societarios y prevención del blanqueo para sujetos obligados.',
    },
    historia: {
      antetitulo: 'Cómo nació',
      titulo: 'Nace dentro de una empresa real.',
      texto:
        'Synentor no es una maqueta: nació gestionando cada día una empresa andorrana, un obrador con tiendas. Cada pantalla se ha hecho resolviendo un problema de verdad.',
    },
    precio: {
      titulo: 'Un precio claro, sin sorpresas.',
      texto: 'Elige los módulos que necesitas y mira el total al momento. Los que van juntos se añaden solos.',
      boton: 'Calcula tu precio',
    },
    final: {
      titulo: 'Hablemos de tu empresa.',
      texto: 'Te enseñamos Synentor con casos como el tuyo y te decimos, sin compromiso, por dónde empezaríamos.',
      boton: 'Pide una demostración',
    },
  },
  contacto: {
    titulo: 'Contacto: pide una demostración · Synentor',
    descripcion: 'Escríbenos y te respondemos en un día laborable, de lunes a viernes de 9:00 a 18:00. Estamos en Les Escaldes-Engordany (Andorra).',
    encabezado: 'Hablemos.',
    entrada: 'Cuéntanos qué necesitas. Te respondemos en un día laborable, de lunes a viernes de 9:00 a 18:00 (hora de Andorra).',
    datos: 'Datos de contacto',
    correo: 'Correo',
    telefono: 'Teléfono',
    direccion: 'Dirección',
    horario: 'Horario',
    horarioTexto: 'De lunes a viernes, de 9:00 a 18:00 (hora de Andorra)',
    despues: {
      titulo: 'Qué pasa después',
      pasos: [
        'Recibimos tu mensaje en el correo de la empresa.',
        'Te respondemos en un día laborable.',
        'Si lo quieres, te preparamos una propuesta por escrito.',
      ],
    },
    formulario: {
      titulo: 'Envíanos un mensaje',
      nombre: 'Nombre',
      correo: 'Correo electrónico',
      empresa: 'Empresa',
      telefono: 'Teléfono',
      asunto: 'Asunto',
      asuntos: {
        informacion: 'Información general',
        demostracion: 'Pedir una demostración',
        pedido: 'Solicitud de pedido',
        centralita: 'Centralita con IA para consultorios',
        precios: 'Precios y presupuesto',
        consultoria: 'Consultoría de IA y ventas',
        muv: 'MUV',
        web: 'Diseño de páginas web',
        gestorias: 'Paquete para despachos y gestorías',
        otro: 'Otros',
      },
      mensaje: 'Mensaje',
      consentimiento: 'He leído la {politica} y acepto que uséis estos datos para responderme.',
      politica: 'política de privacidad',
      obligatorio: 'obligatorio',
      enviar: 'Enviar el mensaje',
      enviando: 'Enviando…',
      contador: '{n} de {max}',
      ok: 'Enviado. Te responderemos en un día laborable.',
      errores: {
        datos: 'Revisa los campos marcados: falta algún dato o no es válido.',
        robot: 'No hemos podido comprobar que no eres un robot. Vuelve a intentarlo.',
        envio: 'No se ha podido enviar ahora mismo.',
        red: 'No hay conexión.',
      },
      alternativa: 'Escríbenos directamente a {correo}.',
      sinJs: 'Si el formulario no funciona, escríbenos a {correo}.',
    },
  },
  servicios: {
    titulo: 'ERP-CRM, IA y webs en Andorra, España y Europa · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM módulo a módulo y qué está disponible en Andorra, España y Europa. MUV, consultoría de IA y ventas, energía, migraciones y webs.',
    encabezado: 'Todo lo que hacemos, sin letra pequeña.',
    entrada:
      'Software propio y consultoría. En cada módulo te decimos si funciona hoy en tu país, si está en desarrollo inminente o si se adapta a medida.',
    columnas: { andorra: 'Andorra', espana: 'España', otros: 'Portugal, Francia, Italia y Alemania' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'La gestión de la empresa en un solo lugar. Pagas por empresa y por los módulos que uses.',
      requiere: 'Requiere {modulo}',
      idiomaPrograma:
        'Las pantallas del programa están en castellano y catalán. Otros idiomas, en desarrollo inminente y adaptación a medida del cliente.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'El motor multiempresa: usuarios y permisos, copias de seguridad, IA local, entrada única de documentos, maestros, ficha de empresa y libro de actos, contabilidad con el plan andorrano, tesorería y conciliación bancaria, cuadro de mando e informes.',
      },
      compras: {
        nombre: 'Compras inteligentes',
        texto:
          'Las facturas de los proveedores llegan por correo o en una carpeta y se leen solas: alta del proveedor si hace falta y borrador para revisar.',
      },
      ventas_crm: {
        nombre: 'Ventas y CRM',
        texto: 'Clientes, proyectos, contactos, mapa comercial y registro de facturas emitidas con el IGI.',
      },
      rrhh: {
        nombre: 'Recursos humanos y nóminas',
        texto:
          'Ficha, contratos, alta en la CASS, nómina e IRPF andorrano, vacaciones, horarios, fichaje, portal del empleado y finiquitos.',
      },
      fiscal: { nombre: 'Fiscal', texto: 'IGI, impuesto de sociedades, presentaciones e impresos de la DTF.' },
      juridico: {
        nombre: 'Jurídico y trámites',
        texto: 'Vigilancia del BOPA, trámites oficiales con sus plazos, expedientes y libro de actos societarios.',
      },
      pbc: {
        nombre: 'Prevención del blanqueo',
        texto: 'El dosier de cada cliente para los sujetos obligados: cuestionarios, modelo de riesgo, decisiones y comunicaciones a la UIFAND.',
      },
      productos: { nombre: 'Productos, escandallos y stock', texto: 'Productos, recetas con su coste y stock.' },
      costes: {
        nombre: 'Control de costes de compra',
        texto: 'Comparador de precios por proveedor y artículo, control del pedido y avisos de subidas. Con recetas, el coste de cada una; con el TPV, consumo teórico y margen por pieza.',
      },
      tpv: {
        nombre: 'TPV y caja',
        texto: 'Las ventas del TPV HIOPOS y la caja CashDro, cada día en la contabilidad. CashDro, en una sola empresa por instalación.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'Para asesores energéticos: expedientes, clientes, suministros y CUPS, facturas con su PDF, contratos y vencimientos, comparación con tu catálogo de tarifas, informe y propuesta en PDF, seguimiento del ahorro y portal del cliente. Mercado eléctrico español, tarifas de hasta 3 periodos.',
      },
    },
    costes: {
      titulo: 'Control de costes de compra',
      texto: 'Cada factura y cada albarán que llegan a Compras se convierten en información para comprar mejor. {precio} al mes, como complemento de Compras.',
      puntos: [
        'Comparador de precios: cada línea se pasa a precio por kilo, litro o unidad, y por artículo ves qué proveedor sale más barato y cuánto te habrías ahorrado. Cada cifra abre su factura original.',
        'Cesta de compra: prepara pedidos en borrador al proveedor más barato.',
        'Historial de precios pagados, ofertas de tarifas de los proveedores y precios sospechosos.',
        'Descuentos de cada proveedor y control del pedido: lo pedido, lo recibido y lo facturado, contra el precio prometido.',
        'Avisos en el cuadro de mando cuando un proveedor sube un artículo un 8 % o más, cuando pagas más que a otro proveedor por lo mismo o cuando una factura supera el precio del pedido.',
      ],
      condicionesTitulo: 'Con recetas y TPV',
      condiciones: [
        'Con recetas (módulo Productos): el coste vivo de cada receta con los últimos precios pagados.',
        'Con recetas y el TPV conectado (hoy, HIOPOS): el consumo teórico frente a lo comprado y el margen por pieza.',
      ],
      nota: 'Cada descripción del proveedor se asocia una vez a su artículo. Los avisos se ven en el cuadro de mando; no llegan por correo.',
      enlace: 'Añádelo en la calculadora',
    },
    gestorias: {
      titulo: 'Paquete Despachos y gestorías',
      estado: 'En desarrollo inminente y adaptación a medida del cliente',
      texto: 'Para despachos que llevan la contabilidad, los impuestos y las nóminas de las empresas de sus clientes, todo en una sola instalación.',
      precio: '{precio} al mes',
      puntos: [
        'Incluye Contabilidad, Compras con lectura de facturas, Ventas, Fiscal y Nóminas.',
        '{empresas} empresas cliente y {usuarios} usuarios del despacho incluidos.',
        'Empresa cliente adicional: {empresa} al mes, hasta {max} empresas.',
        'Nóminas: {nomina} por persona y mes.',
        'Usuario adicional del despacho: {usuario} al mes.',
        'Con más de {max} empresas, bajo propuesta.',
      ],
      ejemplo: 'Ejemplo: {empresasEj} empresas y {personasEj} personas, {totalEj} al mes.',
      condiciones: 'Solo para despachos profesionales que llevan empresas de sus clientes. Para Andorra; en otros países, a medida. Sin impuestos, pago anual.',
      boton: 'Pide una propuesta',
    },
    muv: {
      titulo: 'MUV',
      texto:
        'El cerebro operativo de la empresa: mapas de conocimiento, tareas con responsables, fechas y dependencias, y una IA privada que funciona en tu oficina.',
      plazos:
        'Calcula plazos procesales y administrativos de España y de Andorra con sus calendarios oficiales y los convierte en tareas del mapa. Si la norma admite dos lecturas, enseña las dos y toma la fecha más temprana, y avisa si el calendario del año aún no se ha publicado.',
      familyOffices:
        'También para family offices: el mapa de cada familia en un solo sitio, con su patrimonio, sus sociedades, sus documentos, sus decisiones y lo que vence. Trae cinco plantillas de partida: mapa patrimonial, gobierno familiar y sucesión, operación de inversión, obligaciones y vencimientos, y alta de una familia. No valora carteras ni se conecta con bancos.',
      precio: 'Licencia por usuario y mes, con pago anual, desde el primer usuario: del 1.º al {hasta1}.º, {precio1}; del {desde2}.º al {hasta2}.º, {precio2}; del {desde3}.º al {hasta3}.º, {precio3}. Con más de {max} usuarios, a medida.',
      equipos: 'Equipos recomendados (pago único): Básico, {basico}: no mueve la IA que redacta. Completo, {completo}: lleva tarjeta gráfica y mueve toda la IA.',
      enDesarrollo: 'Aún no tiene aplicación móvil: en desarrollo.',
    },
    consultoria: {
      titulo: 'Consultoría de IA y ventas',
      texto:
        'Somos una consultoría de IA y de ventas. Diagnóstico, formación, asistentes, automatizaciones y trabajos de IA a medida, según tu presupuesto.',
      categorias: {
        estrategia: 'Estrategia y diagnóstico',
        formacion: 'Formación',
        asistentes: 'Asistentes y atención al cliente',
        automatizacion: 'Automatización de procesos',
        documentos: 'Documentos y conocimiento',
        datos: 'Datos, analítica y previsión',
        medida: 'Desarrollo a medida',
        cumplimiento: 'Cumplimiento y gobernanza',
        soporte: 'Soporte y mantenimiento',
      },
      desde: 'desde {precio}',
      cuota: 'y desde {cuota} al mes',
      nota: 'Precios para una microempresa, sin impuestos (catálogo del {fecha}). Para empresas más grandes, según la propuesta.',
      medida: 'Trabajos de IA a medida: te hacemos el presupuesto.',
    },
    energia: {
      titulo: 'Energía',
      texto: 'Te ayudamos a pagar menos luz y a saber dónde se gasta cada kilovatio.',
      particulares: {
        titulo: 'Estudio de factura para particulares',
        texto: 'Revisamos tu factura y la potencia contratada por {precio}. Te lo devolvemos si no encontramos un ahorro de al menos {precio} al año.',
      },
      empresas: {
        titulo: 'Empresas (España)',
        texto:
          '{precio} por suministro, o a éxito: el {porcentaje} del ahorro comprobado de los 12 primeros meses. Sin ahorro, no cobramos. Tarifas de 6 periodos, hospitales y promotoras: a medida.',
      },
      comisiones: 'Hoy no cobramos ninguna comisión de ninguna comercializadora: te recomendamos lo que te conviene a ti.',
      monitorizacion: {
        titulo: 'Monitorización con Home Assistant y Grafana',
        texto: 'Medimos el consumo de cada cuadro eléctrico y lo ves en un panel. Los datos se quedan en un equipo en tu edificio.',
        vivienda: 'Vivienda o pequeño negocio (1 cuadro)',
        pyme: 'Pyme o comercio (hasta 6 cuadros)',
        edificio: 'Edificio, hotel o promotora',
        granConsumidor: 'Hospital o gran consumidor',
        instalacionDesde: 'Instalación desde {precio}',
        instalacionMedida: 'Instalación a medida',
        cuota: '{precio} al mes',
        cuotaDesde: 'desde {precio} al mes',
        incluye: 'La instalación incluye los medidores de esos puntos. La cuota incluye mantenimiento, copias, actualizaciones y un informe mensual.',
      },
      programa: '¿Eres asesor energético? Mira C. Eléctrica, en la Suite.',
    },
    migracion: {
      titulo: 'Migración y convivencia',
      texto: 'Traemos tus datos del programa anterior. Solo te prometemos lo que hoy se importa de verdad.',
      arranque: {
        nombre: 'Arranque',
        texto: 'Proveedores, empleados, productos y contactos desde CSV o Excel; extractos de cualquier banco (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Contabilidad anterior (Andorra)',
        texto: 'Diario, mayores y sumas y saldos, comprobados e incorporados; estados del 805-B; libro de facturas emitidas; facturas de proveedor en PDF.',
        precio: '{precio} el primer ejercicio y {adicional} cada uno más',
      },
      personal: {
        nombre: 'Personal (Andorra)',
        texto: 'Histórico de nóminas, cotizaciones de la CASS, vacaciones y horas.',
        precio: '{precio} hasta {personas} personas',
      },
      aMedida:
        'Lo demás (clientes, cobros y pagos pendientes, stock inicial, inmovilizado, conexión directa con otros programas): a medida.',
      convivencia: {
        titulo: 'Convivencia con tu programa',
        texto:
          'Si quieres seguir con tu programa una temporada, cargamos cada mes lo que exporta: {puesta} de puesta en marcha y {cuota} al mes, hasta {cargas} cargas al mes. Una conexión directa, a medida.',
      },
    },
    portal: {
      titulo: 'Portal del empleado',
      texto: 'Nóminas, documentos, vacaciones, solicitudes, fichaje, perfil y certificados, desde cualquier navegador.',
      dato:
        'En el obrador donde nació, al segundo mes casi 8 de cada 10 personas que trabajaron el mes entero ya fichaban desde el portal. Sin papel y sin ningún fichaje a mano.',
      precio:
        'Solo, sin el resto del programa: {cuota} al mes hasta {personas} personas, {adicional} por persona más y {implantacion} de implantación.',
      incluido: 'Con Recursos humanos, ya va incluido.',
    },
    webs: {
      titulo: 'Páginas web',
      texto: 'Webs rápidas, en varios idiomas, con un formulario que envía de verdad y estadísticas sin cookies. Esta misma web la hemos hecho así.',
      esencial: { nombre: 'Web Esencial', texto: 'Una página de presentación, en 1 o 2 idiomas.' },
      profesional: { nombre: 'Web Profesional', texto: 'Hasta 6 páginas, 3 idiomas y posicionamiento básico.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Hasta 12 páginas, hasta 7 idiomas, diseño de marca y una calculadora o configurador a medida.',
      },
      desde: 'desde {precio}',
      tienda: 'Tienda en línea: a medida, según presupuesto.',
      extras: 'Página adicional, {pagina}; idioma adicional, {idioma} (la revisión nativa, aparte).',
      mantenimiento: 'Mantenimiento: {basico} al mes (1 hora de cambios) o {plus} al mes (3 horas e informe mensual de visitas).',
    },
    centralita: {
      titulo: 'Centralita con IA para consultorios',
      etiqueta: 'Próximamente',
      texto:
        'Una centralita que contesta las llamadas de los pacientes las 24 horas: reservas, anulaciones y cambios de cita, lista de espera y recordatorios. Siempre le dice al paciente que habla con una IA. Para consultorios médicos y clínicas dentales de Andorra y España.',
      boton: 'Quiero más información',
    },
    implantacion: {
      titulo: 'Implantación y soporte',
      texto: 'Instalamos, configuramos, cargamos los datos y formamos a tu equipo: {jornada} la jornada; la Suite, desde {minimo} jornadas.',
      soporte: 'Soporte por correo y teléfono, de lunes a viernes de 9:00 a 18:00 (hora de Andorra), con respuesta en un día laborable.',
    },
  },
  precios: {
    titulo: 'Precios del ERP-CRM y de MUV en Andorra, España y Europa',
    descripcion: 'Elige país, módulos y personas y calcula al momento el precio de Synentor Suite ERP-CRM y de MUV. Sin impuestos y, en Andorra, también con el IGI.',
    encabezado: 'Calcula tu precio.',
    entrada: 'Elige el país, los módulos y las personas. El total sale al momento, sin impuestos; en Andorra, también con el IGI.',
    configurador: {
      pais: 'País',
      paises: { AD: 'Andorra', ES: 'España', PT: 'Portugal', FR: 'Francia', IT: 'Italia', DE: 'Alemania', OTRO: 'Otro país' },
      modalidad: 'Dónde lo quieres',
      modalidadA: 'Instalado en tu empresa',
      modalidadB: 'Alojado por Synentor en Andorra (+{precio} al mes)',
      pago: 'Pago',
      anual: 'Anual',
      mensual: 'Mensual (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Paquete Synentor Completo',
      paqueteTexto: 'Base, Compras, Ventas y CRM, Fiscal y MUV, con {usuarios} usuarios: {precio} al mes.',
      paqueteTitulo: 'Paquete',
      sinPaquete: 'Sin paquete: módulos a la carta',
      paqueteObrador: 'Paquete Obrador',
      paqueteObradorTexto: 'Base, Compras, Productos, TPV y Recursos humanos, con {usuarios} usuarios: {precio} al mes; con el control de costes, {conCostes}.',
      conObrador: 'Con el paquete Obrador',
      usuarios: 'Usuarios del programa',
      empresa: 'Empresa {n}',
      principal: 'Empresa principal',
      personas: 'Personas en plantilla',
      anadirEmpresa: 'Añade una empresa',
      quitarEmpresa: 'Quita esta empresa',
      menos: 'Menos',
      mas: 'Más',
      verResumen: 'Ver el presupuesto',
      alMes: 'al mes',
      muvUsuarios: 'Usuarios de MUV',
      anadidoPor: 'Añadido: lo requiere otro módulo',
      incluidoPaquete: 'Incluido en el paquete',
      estados: { disponible: 'Disponible', inminente: 'En desarrollo inminente', a_medida: 'A medida' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Paquete Synentor Completo',
        'empresa-adicional': 'Empresa adicional',
        personas: 'Personas en plantilla (Recursos humanos)',
        'usuarios-adicionales': 'Usuarios adicionales',
        'paquete-usuarios': 'Usuarios adicionales del paquete',
        'paquete-obrador': 'Paquete Obrador',
        'paquete-obrador-costes': 'Paquete Obrador con control de costes',
        'modalidad-b': 'Alojamiento por Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Pago mensual',
      },
      resumen: 'Tu presupuesto',
      cuota: 'Cuota al mes',
      sinImpuestos: 'sin impuestos',
      igi: 'IGI ({porcentaje})',
      total: 'Total al mes',
      implantacion: 'Implantación, desde {precio} (pago único)',
      avisos: {
        'impuestos-no-incluidos': 'Impuestos no incluidos (IVA, TVA o MwSt., según el país).',
        'cashdro-una-empresa': 'CashDro funciona en una sola empresa por instalación.',
        'volumen-empresas': 'Con más de {max} empresas, tarifa por volumen: te hacemos la propuesta.',
        'modalidad-b-inminente': 'El alojamiento por Synentor está en desarrollo inminente.',
        'muv-a-medida': 'Con más de {max} usuarios de MUV, a medida.',
        'requiere-adaptacion': 'Algún módulo no está disponible hoy en tu país: en desarrollo inminente o a medida.',
      },
      botonDemo: 'Pide una demostración',
      botonPropuesta: 'Pide tu propuesta',
      botonPedido: 'Envía mi selección',
      pedidoNota: 'Sin pago en la web: te respondemos con la propuesta y el contrato por escrito.',
      pedidoAsunto: 'Solicitud de pedido desde la calculadora',
      sinJs: 'La calculadora necesita JavaScript. Mira las tablas de abajo o escríbenos.',
    },
    tablas: {
      titulo: 'Todas las tarifas',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Concepto',
      precio: 'Precio',
      alMes: '{precio} al mes',
      porPersona: '+ {precio} por persona en plantilla',
      usuarioAdicional: 'Usuario adicional',
      empresaAdicional: 'Empresa adicional',
      empresaAdicionalPrecio: '{precio} al mes + sus módulos al {porcentaje}',
      paquete: 'Paquete Synentor Completo',
      paqueteUsuario: 'Usuario adicional del paquete: {precio} al mes',
      paqueteObrador: 'Paquete Obrador',
      gestorias: 'Paquete Despachos y gestorías',
      gestoriasPrecio: '{precio} al mes con {empresas} empresas y {usuarios} usuarios; {empresa} por empresa más (hasta {max}) y {nomina} por nómina',
      muv: 'MUV',
      consultoria: 'Consultoría de IA y ventas',
      servicios: 'Energía, migraciones, portal y webs',
      verServicios: 'Todos los detalles, en Servicios',
      implantacion: 'Implantación: {precio} la jornada',
    },
    condiciones: {
      titulo: 'Condiciones',
      puntos: [
        'Licencia anual, sin permanencia de más de 12 meses y con preaviso de 30 días.',
        'Soporte y actualizaciones incluidos.',
        'Al terminar, te entregamos el archivo con los datos de tu empresa.',
        'Precios en euros, sin impuestos. En Andorra, IGI del {igi}.',
        'Pago mensual: un {recargo} más.',
      ],
    },
    comparacion: {
      titulo: 'Cómo nos comparamos',
      texto:
        'Un programa de nómina en la nube cobra entre {nominaMin} y {nominaMax} por persona al mes, más una cuota fija. Un ERP internacional, unos {erp} por usuario al mes. Con Synentor pagas por empresa y los primeros {usuarios} usuarios están incluidos.',
      fuente: 'Fuentes: páginas oficiales de precios de los fabricantes, consultadas el {fecha}.',
      grafico: {
        titulo: 'Ejemplo: empresa de {personas} personas y {usuarios} usuarios, al mes',
        synentor: 'Synentor: Base, Compras, RRHH, Fiscal, Productos y TPV',
        separado: 'Programa de nómina en la nube + ERP internacional, por separado',
        rango: 'de {min} a {max}',
        nota: 'Sin impuestos. Por separado, ninguno de los dos lleva la nómina ni la CASS andorranas.',
      },
    },
    faq: {
      titulo: 'Preguntas frecuentes',
      preguntas: [
        {
          p: '¿En qué idiomas está el programa?',
          r: 'En castellano y catalán. Otros idiomas, en desarrollo inminente y adaptación a medida del cliente.',
        },
        {
          p: '¿Dónde se instala?',
          r: 'En tu empresa, en un servidor o un NAS: disponible hoy. Alojado por Synentor en Andorra: en desarrollo inminente.',
        },
        {
          p: '¿Los datos salen a la nube?',
          r: 'Las facturas de los proveedores y los documentos de las personas se leen con una IA que funciona en un equipo de tu empresa. Si alguna función usa un servicio externo, te lo decimos en la propuesta.',
        },
        { p: '¿Funciona en España?', r: 'Sí. Hay módulos disponibles hoy y otros en desarrollo inminente: la calculadora te lo dice módulo a módulo.' },
        { p: '¿Hay permanencia?', r: 'Licencia anual, sin permanencia de más de 12 meses y con preaviso de 30 días.' },
        { p: '¿Quién usa Synentor?', r: 'Nació gestionando cada día un obrador con tiendas de Andorra. Y es el programa con el que trabaja Synentor.' },
      ],
    },
  },
  legal: {
    actualizado: 'Última actualización: {fecha}',
    enlaces: {
      privacidad: 'política de privacidad',
      cookies: 'política de cookies',
    },
    aviso: {
      titulo: 'Aviso legal · Synentor',
      encabezado: 'Aviso legal',
      secciones: [
        {
          t: 'Quién es el titular',
          p: [
            'Esta web, {web}, es de {razon}, sociedad andorrana con domicilio en {direccion}. NRT: en trámite.',
            'Para cualquier cuestión, escríbenos a {correo} o llámanos al {telefono}.',
          ],
        },
        {
          t: 'Para qué sirve esta web',
          p: [
            'Informa de nuestros servicios de consultoría de inteligencia artificial y de ventas y de nuestros programas. Entrar es gratis y no hace falta registrarse.',
            'En la web no se compra ni se paga nada. Los precios que se enseñan son orientativos y sin impuestos: lo que vale es la propuesta y el contrato que firmamos contigo por escrito.',
          ],
        },
        {
          t: 'Cómo puedes usarla',
          p: [
            'Quien usa la web es responsable de cómo la usa. No está permitido:',
          ],
          lista: [
            'usarla contra la ley o contra los derechos de otras personas;',
            'intentar entrar en sus servidores, cambiar su configuración o saltarse sus medidas de seguridad;',
            'enviar por el formulario contenidos ilegales u ofensivos, publicidad que no hemos pedido o datos de otras personas sin su permiso;',
            'mostrarla dentro de otra web o copiarla de forma automática.',
          ],
          despues: [
            'Si alguien no cumple estas condiciones, podemos impedirle el acceso.',
          ],
        },
        {
          t: 'Responsabilidad',
          p: [
            'Cuidamos que la información sea correcta y esté al día, pero puede contener errores o datos desactualizados: los corregimos en cuanto los vemos. No respondemos de los daños que pueda causar el uso de la información de la web, ni de las interrupciones por mantenimiento, averías o causas ajenas a nosotros, aunque tomamos las medidas razonables para evitarlas.',
          ],
        },
        {
          t: 'Enlaces a otras webs',
          p: [
            'La web enlaza con páginas de otras empresas y organismos. No las controlamos ni respondemos de su contenido, y enlazarlas no quiere decir que tengamos relación con ellas. Consulta sus propias condiciones.',
          ],
        },
        {
          t: 'Propiedad intelectual e industrial',
          p: [
            'La marca y el logotipo de Synentor, los textos, el diseño, las imágenes y el código de esta web son de {razon} o de quien nos ha dado permiso para usarlos. Puedes verlos y guardar una copia para tu uso personal. Para cualquier otro uso (copiarlos, publicarlos, modificarlos o usarlos con fines comerciales) necesitas nuestro permiso por escrito.',
          ],
        },
        {
          t: 'Datos personales y cookies',
          p: [
            'Cómo tratamos los datos que nos das lo explica la {privacidad}, y qué cookies usamos, la {cookies}.',
          ],
        },
        {
          t: 'Idiomas',
          p: [
            'La web está en catalán, castellano, inglés, francés, portugués, italiano y alemán. Si una traducción no dice lo mismo que el texto en catalán, vale el catalán.',
          ],
        },
        {
          t: 'Ley aplicable y tribunales',
          p: [
            'Estas condiciones se rigen por la ley andorrana. Para cualquier conflicto son competentes los tribunales del Principado de Andorra, salvo que la ley te reconozca el derecho a acudir a otros.',
          ],
        },
        {
          t: 'Cambios',
          p: [
            'Podemos cambiar este aviso legal cuando haga falta. La fecha de arriba dice cuándo se cambió por última vez.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Política de privacidad · Synentor',
      encabezado: 'Política de privacidad',
      secciones: [
        {
          t: 'Quién trata tus datos',
          p: [
            'El responsable es {razon}, sociedad andorrana con domicilio en {direccion}. NRT: en trámite. Correo: {correo}. Teléfono: {telefono}.',
            'No hemos designado delegado de protección de datos: para cualquier cuestión sobre tus datos, escríbenos a {correo}.',
          ],
        },
        {
          t: 'Qué datos tratamos, para qué y durante cuánto tiempo',
          p: [
            'Solo los que hacen falta para cada cosa:',
          ],
          lista: [
            'Formulario de contacto. Datos: nombre, correo, asunto y mensaje, y la empresa y el teléfono si los escribes. Para qué: responderte y, si lo pides, prepararte una propuesta. Base: tu consentimiento, que das al marcar la casilla, y, si pides una propuesta, las medidas previas a un contrato. Plazo: el mensaje nos llega por correo y la web no lo guarda; lo conservamos {plazoContacto} desde el último contacto si no llegas a ser cliente y, si lo eres, mientras dure la relación y los plazos que exija la ley.',
            'Comprobación antirrobot del formulario (Cloudflare Turnstile). Datos: la dirección IP y datos técnicos del navegador. Para qué: comprobar que el formulario lo envía una persona. Base: nuestro interés legítimo en proteger la web del abuso. Nosotros no los guardamos.',
            'Prueba de tu decisión sobre las cookies. Datos: un identificador al azar que no te identifica, la versión de la política, lo que decidiste y la fecha; nunca la IP. Para qué: poder demostrar tu consentimiento. Base: la obligación de poder demostrarlo. Plazo: 12 meses.',
            'Registros técnicos del alojamiento (Cloudflare). Datos: la dirección IP, la fecha y la hora, la página pedida y los errores. Para qué: la seguridad y el buen funcionamiento de la web. Base: nuestro interés legítimo. Plazo: hasta {plazoRegistros}.',
            'Estadísticas de visitas (Cloudflare Web Analytics) y un recuento propio de acciones: cuántas veces se pide una demostración, se usa la calculadora, se envía una selección o el formulario, y desde qué campaña se llega. Sin cookies y sin datos que te identifiquen: solo cifras de conjunto, como las páginas vistas, el país o el tipo de navegador. El recuento propio no guarda la IP ni el navegador.',
            'Cookies de otras empresas, solo si las aceptas: lo explica la {cookies}.',
            'Si nos escribes por correo o nos llamas: tus datos de contacto y lo que nos cuentes, para responderte, con la misma base y el mismo plazo que el formulario.',
          ],
        },
        {
          t: 'Quién más ve tus datos',
          p: [
            'No vendemos ni cedemos tus datos. Solo los tratan, por encargo nuestro, los proveedores que hacen funcionar la web y el correo, y las administraciones cuando la ley lo exige:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Datos fuera de Andorra',
          p: [
            'Algunos de estos proveedores son de Estados Unidos o tratan datos allí. Elegimos proveedores adheridos al Marco de Privacidad de Datos entre la Unión Europea y Estados Unidos o que se comprometen por contrato con cláusulas tipo. Aun así, Estados Unidos no ofrece el mismo nivel de protección que Andorra o la Unión Europea, y sus autoridades podrían pedir acceso a esos datos.',
          ],
        },
        {
          t: 'Tus derechos',
          p: [
            'Puedes pedirnos acceso a tus datos, rectificarlos, suprimirlos, limitar su tratamiento, llevártelos (portabilidad) u oponerte a que los tratemos. Y puedes retirar tu consentimiento cuando quieras, sin que eso afecte a lo hecho antes.',
            'Escríbenos a {correo}. Si no podemos saber que eres tú, te pediremos un documento que te identifique, que solo usaremos para eso y borraremos después. Te responderemos en el plazo que marca la ley.',
            'Si crees que no hemos atendido bien tus derechos, puedes reclamar ante la Agencia Andorrana de Protección de Datos ({apda}).',
          ],
        },
        {
          t: 'Seguridad',
          p: [
            'Protegemos tus datos con medidas técnicas y organizativas: conexión cifrada, acceso solo de quien lo necesita y proveedores con garantías de seguridad.',
          ],
        },
        {
          t: 'Menores',
          p: [
            'La web está pensada para empresas y profesionales. Si tienes menos de 16 años, no nos envíes datos sin el permiso de tu padre, tu madre o tu tutor.',
          ],
        },
        {
          t: 'Leyes que aplicamos',
          p: [
            'La Llei 29/2021, del 28 de octubre, cualificada de protección de datos personales (LQPD) y, para las personas de la Unión Europea, el Reglamento general de protección de datos (RGPD).',
          ],
        },
        {
          t: 'Cambios',
          p: [
            'Si cambiamos esta política, lo diremos aquí con la fecha nueva. Si el cambio afecta a algo que consentiste, te lo volveremos a preguntar.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Política de cookies · Synentor',
      encabezado: 'Política de cookies',
      ninguna: 'Hoy no usamos ninguna. Si un día las usamos, te lo preguntaremos antes y aparecerán aquí.',
      secciones: [
        {
          t: 'Qué son',
          p: [
            'Las cookies son pequeños ficheros que una web guarda en tu navegador para recordar algo de tu visita. Aquí también llamamos cookies a otras formas de guardar datos en el navegador, como el almacenamiento local.',
          ],
        },
        {
          t: 'Las que usamos siempre',
          p: [
            'Son las imprescindibles para que la web funcione o para recordar lo que eliges. No necesitan tu consentimiento.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Estadísticas sin cookies',
          p: [
            'Contamos las visitas con Cloudflare Web Analytics y las acciones con un recuento propio. Ninguno usa cookies ni guarda datos que te identifiquen.',
          ],
        },
        {
          t: 'Las que solo usamos si las aceptas',
          p: [
            'Son de dos tipos: estadísticas, para saber cómo se usa la web y mejorarla, y publicidad, para medir nuestros anuncios y mostrarte anuncios de Synentor en otras webs. Mientras no las aceptes, la web no carga estas herramientas.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'Tu decisión',
          p: [
            'La primera vez te lo preguntamos con un aviso: puedes aceptarlas todas, rechazarlas todas o elegir. Las tres opciones están igual de a mano y ninguna viene marcada.',
            'Puedes cambiar de opinión cuando quieras con el botón «{boton}» del pie de página. Si retiras el consentimiento, borramos las cookies de esas herramientas que están en nuestro dominio y la web deja de cargarlas; las que esas empresas ponen en su propio dominio puedes borrarlas desde el navegador.',
            'Tu decisión vale 12 meses; después te lo volvemos a preguntar. Guardamos una prueba de ella sin tu IP, como explica la {privacidad}.',
          ],
        },
        {
          t: 'Desde el navegador',
          p: [
            'También puedes bloquear o borrar las cookies desde tu navegador:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Revisión',
          p: [
            'Revisamos esta política al menos una vez al año y siempre que cambiamos las herramientas de la web.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Quién la pone',
      finalidad: 'Para qué',
      duracion: 'Duración',
      tipo: 'Tipo',
      propia: 'Propia',
      terceros: 'De otra empresa',
      sesion: 'Hasta que cierras el navegador',
      persistente: 'Hasta que la borres',
      fijaProveedor: 'La fija el proveedor',
      proveedor: 'Proveedor',
      para: 'Para qué',
      donde: 'Dónde trata los datos',
      garantia: 'Garantía',
    },
    finalidades: {
      lang: 'Recordar el idioma que eliges.',
      consentimiento: 'Guardar tu decisión sobre las cookies.',
      franja: 'No volver a enseñarte el aviso de idioma si lo has cerrado (almacenamiento local).',
      cfBm: 'Seguridad: distinguir a las personas de los robots, solo cuando Cloudflare lo necesita.',
      cfClearance: 'Seguridad: recordar que has superado una comprobación antirrobot, solo si Cloudflare te la ha pedido.',
      gaUsuario: 'Distinguir a los visitantes para las estadísticas.',
      gaSesion: 'Mantener el estado de la visita para las estadísticas.',
      clarityUsuario: 'Guardar el identificador de Clarity y sus preferencias, solo para esta web.',
      claritySesion: 'Unir en una sola grabación las páginas de una misma visita.',
      clarityPrimeraVez: 'Saber la primera vez que Clarity vio este navegador en cualquier web que lo use.',
      msAnonchk: 'Uso interno de Microsoft sobre el identificador MUID; Clarity no lo usa para publicidad.',
      msMr: 'Saber si hay que renovar el identificador MUID.',
      msMuid: 'Identificar el navegador en los sitios de Microsoft.',
      msSm: 'Sincronizar el identificador MUID entre los dominios de Microsoft.',
      metaFbp: 'Identificar el navegador para medir y mostrar anuncios de Meta.',
      metaFbc: 'Guardar el anuncio de Meta por el que has llegado.',
      metaFr: 'Mostrar y medir anuncios de Meta.',
      liFatId: 'Medir los resultados de los anuncios de LinkedIn.',
      liSugr: 'Relacionar la visita con miembros de LinkedIn para la publicidad.',
      liBcookie: 'Identificar el navegador para detectar abusos.',
      liLidc: 'Elegir el centro de datos de LinkedIn.',
      liUserMatch: 'Sincronizar identificadores para la publicidad.',
      liAnalyticsSync: 'Registrar cuándo se sincronizó con la cookie de analítica de LinkedIn.',
      liLmsAds: 'Reconocer a miembros de LinkedIn fuera de LinkedIn para la publicidad.',
      liLmsAnalytics: 'Reconocer a miembros de LinkedIn fuera de LinkedIn para la analítica.',
    },
    proveedores: {
      cloudflare: {
        para: 'Alojamiento de la web, comprobación antirrobot del formulario, prueba de los consentimientos, registros técnicos, estadísticas de visitas sin cookies y recuento de acciones.',
        donde: 'Su red mundial, con sede en Estados Unidos. Las pruebas de consentimiento se guardan en la Unión Europea.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.',
      },
      resend: {
        para: 'Enviar a nuestro buzón el mensaje del formulario.',
        donde: 'Estados Unidos.',
        garantia: 'Cláusulas contractuales tipo y Marco de Privacidad de Datos UE-EE. UU.',
      },
      microsoft365: {
        para: 'El correo de la empresa, donde recibimos y guardamos los mensajes.',
        donde: 'Unión Europea (región europea de Microsoft). La empresa es de Estados Unidos.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.',
      },
      google: {
        para: 'Estadísticas de visitas (Google Analytics), si las aceptas.',
        donde: 'Estados Unidos y otros países.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.',
      },
      clarity: {
        para: 'Ver cómo se usa la web (Microsoft Clarity), si lo aceptas.',
        donde: 'Estados Unidos.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU.',
      },
      meta: {
        para: 'Medir y mostrar anuncios (píxel de Meta), si lo aceptas.',
        donde: 'Irlanda y Estados Unidos.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.',
      },
      linkedin: {
        para: 'Medir y mostrar anuncios (LinkedIn Insight Tag), si lo aceptas.',
        donde: 'Estados Unidos.',
        garantia: 'Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.',
      },
    },
  },
};
