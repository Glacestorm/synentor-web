// La tarifa de Synentor: el ÚNICO sitio con precios (diseño aprobado, §7; gerencia, 14/11/2026).
// Euros sin impuestos, por mes y con pago anual. Un cambio aquí es una decisión de gerencia.
// Gerencia, 22/11/2026: tarifa nueva de MUV (licencia y equipos), la jornada de implantación y el paquete Completo.

export type ModuloId =
  | 'compras'
  | 'ventas_crm'
  | 'rrhh'
  | 'fiscal'
  | 'juridico'
  | 'pbc'
  | 'productos'
  | 'costes'
  | 'tpv'
  | 'electrica';

export const MODULOS: readonly ModuloId[] = [
  'compras',
  'ventas_crm',
  'rrhh',
  'fiscal',
  'juridico',
  'pbc',
  'productos',
  'costes',
  'tpv',
  'electrica',
];

export interface DefModulo {
  cuota: number;
  porPersona?: number;
  requiere?: ModuloId;
}

export const TARIFA = {
  base: { cuota: 149, usuariosIncluidos: 5 },
  usuarioAdicional: 15,
  empresaAdicional: { cuota: 39, factorModulos: 0.5 },
  /** Con más empresas que estas, la tarifa es por volumen (bajo propuesta). */
  maxEmpresasSinPropuesta: 10,
  modulos: {
    compras: { cuota: 69 },
    ventas_crm: { cuota: 59 },
    rrhh: { cuota: 59, porPersona: 18 },
    fiscal: { cuota: 39 },
    juridico: { cuota: 79, requiere: 'rrhh' },
    pbc: { cuota: 49, requiere: 'juridico' },
    productos: { cuota: 39, requiere: 'compras' },
    /** Control de costes de compra (gerencia, 14/11/2026; diseño §18): complemento de Compras. */
    costes: { cuota: 59, requiere: 'compras' },
    tpv: { cuota: 39 },
    /** C. Eléctrica para asesores energéticos: solo España (gerencia, 14/11/2026). */
    electrica: { cuota: 79 },
  } satisfies Record<ModuloId, DefModulo>,
  /** Modalidad B: alojado por Synentor en Andorra (en desarrollo inminente), por instalación. */
  modalidadB: 50,
  recargoMensual: 0.2,
  igiAndorra: 0.045,
  /**
   * La jornada la comparten la Suite y MUV (gerencia, 22/11/2026: de 720 a 790 €; los mínimos no cambian). Los precios
   * cerrados de otros servicios (migraciones, convivencia, implantación del portal del empleado) no siguen a la jornada.
   */
  implantacion: { jornada: 790, minimoSuite: 2, minimoMuv: 1, maximoMuv: 4 },
  /**
   * Paquete «Synentor Completo»: la Base, estos módulos y MUV, con los mismos usuarios en los dos programas. Gerencia,
   * 22/11/2026: con la tarifa nueva de MUV, la cuota pasa de 469 a 1.069 € y el usuario adicional de 45 a 85 €, para
   * que el paquete siga valiendo alrededor de un 20 % menos que sus piezas por separado (la prueba lo vigila).
   */
  paquete: {
    cuota: 1069,
    incluye: ['compras', 'ventas_crm', 'fiscal'] as const satisfies readonly ModuloId[],
    usuariosIncluidos: 10,
    usuarioAdicional: 85,
  },
  /**
   * Paquete Obrador (gerencia, 14/11/2026; diseño §18): la Base con sus 5 usuarios y estos módulos. Con el control de
   * costes, `conCostes`. Usuarios y personas en plantilla, a la tarifa normal; MUV no va incluido.
   */
  paqueteObrador: {
    cuota: 299,
    conCostes: 329,
    incluye: ['compras', 'productos', 'tpv', 'rrhh'] as const satisfies readonly ModuloId[],
    usuariosIncluidos: 5,
  },
  /**
   * Despachos y gestorías (gerencia, 14/11/2026; diseño §18): solo para despachos que llevan empresas de sus clientes.
   * Contabilidad (la Base) y estos módulos; por empresa cliente más allá de las incluidas y por nómina. Fuera del
   * configurador; con más de `maxEmpresas`, bajo propuesta.
   */
  gestorias: {
    cuota: 249,
    incluye: ['compras', 'ventas_crm', 'fiscal', 'rrhh'] as const satisfies readonly ModuloId[],
    empresasIncluidas: 10,
    usuariosIncluidos: 5,
    empresaAdicional: 9,
    porNomina: 5,
    maxEmpresas: 25,
  },
  /** Diseño y creación de páginas web (aprobado por gerencia el 14/11/2026). Pago único salvo el mantenimiento (al mes). */
  webs: {
    esencial: 1200,
    profesional: 2900,
    premiumDesde: 6500,
    paginaAdicional: 250,
    idiomaAdicional: 350,
    mantenimientoBasico: 49,
    mantenimientoPlus: 99,
  },
  /**
   * Servicios aprobados por gerencia el 14/11/2026 (diseño, §7.4 ter). Sin impuestos.
   * Energía: el estudio de un particular se devuelve si el ahorro anual que encontramos no llega a su precio; a éxito,
   * un porcentaje del ahorro comprobado de los 12 primeros meses. Monitorización con Home Assistant y Grafana:
   * instalación «desde» (incluye los medidores de esos puntos) y cuota al mes.
   */
  energia: {
    estudioParticular: 49,
    estudioEmpresaPorSuministro: 290,
    exito: 0.3,
    monitorizacion: {
      vivienda: { instalacionDesde: 690, cuota: 19 },
      pyme: { instalacionDesde: 2900, cuota: 49 },
      edificio: { instalacionDesde: 6900, cuota: 99 },
      granConsumidor: { cuotaDesde: 290 },
    },
  },
  /** Migraciones (pago único): solo lo que hoy importa de verdad el ERP. Lo demás, a medida. */
  migracion: {
    arranque: 1440,
    contabilidadPrimerEjercicio: 1440,
    contabilidadEjercicioAdicional: 720,
    personal: 1440,
    personalHasta: 25,
  },
  /** Convivencia con el programa actual del cliente, por ficheros: puesta en marcha y cuota con hasta 4 cargas al mes. */
  convivencia: { puestaEnMarcha: 720, cuota: 99, cargasAlMes: 4 },
  /** Solo el portal del empleado, sin la Base. */
  portalEmpleado: { cuota: 59, personasIncluidas: 10, personaAdicional: 4, implantacion: 720 },
  /**
   * Centralita de IA para consultorios (proyecto nuevo; en la web, «próximamente», sin precios). El teléfono no está
   * incluido: lo contrata la clínica con su operador. Minutos = minutos de conversación con la IA al mes.
   */
  centralita: {
    planes: {
      esencial: { cuota: 290, implantacion: 1500, minutos: 1000 },
      avanzada: { cuota: 450, implantacion: 2900, minutos: 2000 },
      elite: { cuota: 890, implantacionDesde: 5900, minutos: 3500 },
    },
    minutoAdicional: 0.15,
  },
  /**
   * MUV (gerencia, 22/11/2026). La licencia se paga desde el primer usuario: por usuario y mes, con pago anual, cada
   * usuario al precio de su tramo (`hasta` es el último usuario del tramo); con más de `maxSinPropuesta`, a medida. No
   * hay usuarios gratis, piloto ni evaluación gratuita. Equipos, de pago único: el Básico no mueve la IA que redacta;
   * el Completo lleva tarjeta gráfica y mueve toda la IA.
   */
  muv: {
    tramos: [
      { hasta: 5, precio: 99 },
      { hasta: 15, precio: 89 },
      { hasta: 100, precio: 79 },
    ],
    maxSinPropuesta: 100,
    equipos: { basico: 2190, completo: 6490 },
  },
} as const;
