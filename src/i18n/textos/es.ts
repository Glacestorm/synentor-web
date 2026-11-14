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
    enConstitucion: 'en constitución',
    nrt: 'NRT en trámite',
    estadisticas: 'Estadísticas de visitas sin cookies (Umami).',
  },
  estados: {
    disponible: 'Disponible',
    inminente: 'En desarrollo inminente',
    a_medida: 'A medida',
    inminenteLargo: 'En desarrollo inminente y adaptación a medida del cliente',
  },
  inicio: {
    titulo: 'Synentor · Consultoría de IA y ventas con software propio',
    descripcion:
      'ERP-CRM multiempresa hecho en Andorra, MUV y consultoría de IA y ventas. Contabilidad, nóminas, compras, ventas y trámites en un solo lugar.',
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
    titulo: 'Contacto · Synentor',
    descripcion: 'Escríbenos y te respondemos en un día laborable.',
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
    titulo: 'Servicios · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM módulo a módulo, MUV, consultoría de IA y ventas, energía, migraciones, portal del empleado y páginas web.',
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
    muv: {
      titulo: 'MUV',
      texto:
        'El cerebro operativo de la empresa: mapas de conocimiento, tareas con responsables, fechas y dependencias, y una IA privada que funciona en tu oficina.',
      precio: 'Gratis hasta {gratis} usuarios. Del {desde1}.º al {hasta1}.º, {precio1} por usuario al mes; hasta {hasta2}, {precio2}.',
      equipos: 'Equipos recomendados (pago único): Básico {basico} · IA {ia} · IA+ {iaPlus}.',
      enDesarrollo: 'Aún no tiene edición simultánea en tiempo real ni aplicación móvil: en desarrollo.',
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
    titulo: 'Precios · Synentor',
    descripcion: 'Calcula el precio de Synentor Suite ERP-CRM y de MUV al momento, sin sorpresas.',
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
    aviso: {
      titulo: 'Aviso legal · Synentor',
      encabezado: 'Aviso legal',
      secciones: [
        {
          t: 'Titular',
          p: 'Esta web es de {razon} ({estado}), con domicilio en {direccion}. Correo: {correo}. Teléfono: {telefono}. NRT e inscripción en el Registro de Sociedades Mercantiles: en trámite.',
        },
        {
          t: 'Uso de la web',
          p: 'La información de esta web es orientativa. Los precios y las condiciones que valen son los de la propuesta que te hacemos por escrito.',
        },
        {
          t: 'Propiedad intelectual',
          p: 'Los textos, el logotipo y el diseño de esta web son de {razon}. No los uses sin nuestro permiso.',
        },
        { t: 'Ley aplicable', p: 'Se aplica la ley andorrana. Para cualquier conflicto, los juzgados del Principado de Andorra.' },
      ],
    },
    privacidad: {
      titulo: 'Política de privacidad · Synentor',
      encabezado: 'Política de privacidad',
      secciones: [
        { t: 'Quién es el responsable', p: '{razon} ({estado}), {direccion}. Correo: {correo}.' },
        {
          t: 'Qué datos tratamos',
          p: 'Los del formulario de contacto: nombre, correo, empresa y teléfono (estos dos, si los escribes), asunto y mensaje. El mensaje nos llega por correo: la web no lo guarda.',
        },
        { t: 'Para qué', p: 'Para responderte y, si lo pides, prepararte una propuesta. La base es tu consentimiento.' },
        { t: 'Cuánto tiempo', p: 'El tiempo necesario para atenderte y el que exija la ley.' },
        {
          t: 'Quién más los ve',
          p: 'Los proveedores que hacen funcionar la web: el alojamiento y la comprobación antirrobot (Cloudflare) y el envío del correo. Las estadísticas de visitas (Umami) no usan cookies ni guardan datos que te identifiquen.',
        },
        {
          t: 'Tus derechos',
          p: 'Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {correo}. Si no estás de acuerdo, puedes reclamar ante la Agencia Andorrana de Protección de Datos (apda.ad).',
        },
        {
          t: 'Leyes',
          p: 'Llei 29/2021, de 28 de octubre, cualificada de protección de datos personales, y el Reglamento general de protección de datos de la Unión Europea para las personas de la UE.',
        },
      ],
    },
    cookies: {
      titulo: 'Política de cookies · Synentor',
      encabezado: 'Política de cookies',
      secciones: [
        {
          t: 'Qué usamos',
          p: 'Una sola cookie, «lang», que guarda el idioma que eliges (un año). Y en tu navegador, una marca para no volver a enseñarte el aviso de idioma si lo cierras.',
        },
        { t: 'Estadísticas', p: 'Contamos las visitas con Umami, sin cookies y sin guardar datos que te identifiquen.' },
        { t: 'Cómo quitarlas', p: 'Puedes borrarlas cuando quieras desde la configuración de tu navegador.' },
      ],
    },
  },
};
