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
    },
    bancos: {
      titulo: 'Cualquier banco, conciliado.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV o Excel: Synentor lee el extracto y te propone la conciliación.',
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
  legal: {
    actualizado: 'Última actualización: {fecha}',
  },
};
