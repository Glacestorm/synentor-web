// La tarifa de Synentor: el ÚNICO sitio con precios (diseño aprobado, §7; gerencia, 14/11/2026).
// Euros sin impuestos, por mes y con pago anual. Un cambio aquí es una decisión de gerencia.

export type ModuloId = 'compras' | 'ventas_crm' | 'rrhh' | 'fiscal' | 'juridico' | 'pbc' | 'productos' | 'tpv';

export const MODULOS: readonly ModuloId[] = [
  'compras',
  'ventas_crm',
  'rrhh',
  'fiscal',
  'juridico',
  'pbc',
  'productos',
  'tpv',
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
