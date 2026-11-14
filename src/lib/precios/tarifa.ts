// La tarifa de Synentor: el ÚNICO sitio con precios (diseño aprobado, §7; gerencia, 14/11/2026).
// Euros sin impuestos, por mes y con pago anual. Un cambio aquí es una decisión de gerencia.

export type ModuloId =
  | 'compras'
  | 'ventas_crm'
  | 'rrhh'
  | 'fiscal'
  | 'juridico'
  | 'pbc'
  | 'productos'
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
    tpv: { cuota: 39 },
    /** C. Eléctrica para asesores energéticos: solo España (gerencia, 14/11/2026). */
    electrica: { cuota: 79 },
  } satisfies Record<ModuloId, DefModulo>,
  /** Modalidad B: alojado por Synentor en Andorra (en desarrollo inminente), por instalación. */
  modalidadB: 50,
  recargoMensual: 0.2,
  igiAndorra: 0.045,
  implantacion: { jornada: 720, minimoSuite: 2, minimoMuv: 1, maximoMuv: 4 },
  paquete: {
    cuota: 469,
    incluye: ['compras', 'ventas_crm', 'fiscal'] as const satisfies readonly ModuloId[],
    usuariosIncluidos: 10,
    usuarioAdicional: 45,
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
  muv: {
    gratisHasta: 5,
    tramos: [
      { hasta: 25, precio: 39 },
      { hasta: 100, precio: 32 },
    ],
    maxSinPropuesta: 100,
    equipos: { basico: 890, ia: 3200, iaPlus: 5900 },
  },
} as const;
