// Los artículos de la tarifa para el ERP de Synentor (Productos → Importar/Exportar, en la empresa SYNENTOR).
// Todo importe sale de tarifa.ts o del catálogo de consultoría: aquí no se escribe ningún precio. Los nombres de la
// Suite, de los textos en castellano de la web. Fuera, a propósito: MUV (ya está en el ERP) y la centralita
// (próximamente, sin precios en la web). Orden: npm run articulos-erp (escribe RUTA_CSV); la prueba compara.
import consultoria from '../../datos/consultoria.json';
import { textos } from '../../i18n/t';
import { TARIFA, type ModuloId } from './tarifa';

/** Las columnas del importador del ERP (src/components/erp/products/importacionProductos.ts, CABECERAS). */
export const CABECERAS_ERP = [
  'code',
  'name',
  'description',
  'unit',
  'sale_price',
  'purchase_price',
  'is_active',
  'type',
  'tax_code',
  'periodicidad',
] as const;

/** El código del artículo de un módulo de la Suite (también lo usan las reglas). */
export const codigoDeModulo = (m: ModuloId) => `SYN-MOD-${m.toUpperCase().replace('_', '-')}`;

export const RUTA_CSV = 'docs/articulos-erp/articulos-synentor.csv';

/** El IGI general (4,5 %) en el ERP; la empresa lo tiene desde la migración 20261114a. */
const IGI_GENERAL = 'IGI_GEN';

export interface ArticuloErp {
  code: string;
  name: string;
  description: string;
  unit: string;
  sale_price: number | null;
  is_active: boolean;
  type: 'service';
  tax_code: string;
  /** `mensual` si se cobra al mes (la unidad es «mes» o acaba en «/mes»); si no, `unica`. La anual no la usa nadie hoy. */
  periodicidad: 'unica' | 'mensual' | 'anual';
}

const SIN_IMPUESTOS = 'Sin impuestos';
const RECARGO = `+${Math.round(TARIFA.recargoMensual * 100)} %`;
const SUITE = `Al mes, con pago anual (con pago mensual, ${RECARGO}). ${SIN_IMPUESTOS}.`;
const AL_MES = `Al mes. ${SIN_IMPUESTOS}.`;
const UNICO = `Pago único. ${SIN_IMPUESTOS}.`;
const DESDE = 'Desde: el precio final, en la propuesta.';

function articulo(
  code: string,
  name: string,
  sale_price: number | null,
  unit: string,
  description: string,
  is_active = true,
): ArticuloErp {
  const periodicidad = unit === 'mes' || unit.endsWith('/mes') ? 'mensual' : 'unica';
  return { code, name, description, unit, sale_price, is_active, type: 'service', tax_code: IGI_GENERAL, periodicidad };
}

export function articulosErp(): ArticuloErp[] {
  const t = textos('es');
  const tt = t.precios.tablas;
  const mod = t.servicios.modulos;
  const nombreModulo = (m: ModuloId) => mod[m].nombre;
  const codigoModulo = codigoDeModulo;
  const pct = (n: number) => `${Math.round(n * 100)} %`;
  const e = TARIFA.energia;
  const mon = e.monitorizacion;

  const suite: ArticuloErp[] = [
    articulo('SYN-BASE', mod.base.nombre, TARIFA.base.cuota, 'mes',
      `Contabilidad y ${TARIFA.base.usuariosIncluidos} usuarios incluidos. ${SUITE}`),
    articulo('SYN-USUARIO', tt.usuarioAdicional, TARIFA.usuarioAdicional, 'usuario/mes', SUITE),
    articulo('SYN-EMPRESA', tt.empresaAdicional, TARIFA.empresaAdicional.cuota, 'empresa/mes',
      `Más sus módulos, al ${pct(TARIFA.empresaAdicional.factorModulos)} de su cuota. Con más de ${TARIFA.maxEmpresasSinPropuesta} empresas, bajo propuesta. ${SUITE}`),
    ...(Object.keys(TARIFA.modulos) as ModuloId[]).map((m) => {
      const def = TARIFA.modulos[m] as { cuota: number; requiere?: ModuloId };
      const requiere = def.requiere ? `Requiere ${nombreModulo(def.requiere)}. ` : '';
      return articulo(codigoModulo(m), `Módulo ${nombreModulo(m)}`, def.cuota, 'mes', `${requiere}${SUITE}`);
    }),
    articulo('SYN-MOD-RRHH-PERSONA', `Módulo ${nombreModulo('rrhh')}: por persona en plantilla`,
      TARIFA.modulos.rrhh.porPersona, 'persona/mes', SUITE),
    articulo('SYN-PAQ-GESTION', tt.paquete, TARIFA.paquete.cuota, 'mes',
      `${mod.base.nombre} · ${TARIFA.paquete.incluye.map(nombreModulo).join(' · ')}; ${TARIFA.paquete.usuariosIncluidos} usuarios incluidos. ${SUITE}`),
    articulo('SYN-PAQ-GESTION-USUARIO', `${tt.paquete}: usuario adicional`, TARIFA.paquete.usuarioAdicional,
      'usuario/mes', SUITE),
    articulo('SYN-PAQ-OBRADOR', tt.paqueteObrador, TARIFA.paqueteObrador.cuota, 'mes',
      `${mod.base.nombre} · ${TARIFA.paqueteObrador.incluye.map(nombreModulo).join(' · ')}; ${TARIFA.paqueteObrador.usuariosIncluidos} usuarios incluidos. Usuarios y personas en plantilla, a la tarifa normal. ${SUITE}`),
    articulo('SYN-PAQ-OBRADOR-COSTES', `${tt.paqueteObrador} con ${nombreModulo('costes')}`,
      TARIFA.paqueteObrador.conCostes, 'mes', `Como el ${tt.paqueteObrador}, con ${nombreModulo('costes')}. ${SUITE}`),
    articulo('SYN-GESTORIAS', tt.gestorias, TARIFA.gestorias.cuota, 'mes',
      `Solo para despachos que llevan empresas de sus clientes. Contabilidad · ${TARIFA.gestorias.incluye.map(nombreModulo).join(' · ')}; ${TARIFA.gestorias.empresasIncluidas} empresas y ${TARIFA.gestorias.usuariosIncluidos} usuarios incluidos. Con más de ${TARIFA.gestorias.maxEmpresas} empresas, bajo propuesta. ${SUITE}`),
    articulo('SYN-GESTORIAS-EMPRESA', `${tt.gestorias}: empresa cliente adicional`, TARIFA.gestorias.empresaAdicional,
      'empresa/mes', SUITE),
    articulo('SYN-GESTORIAS-NOMINA', `${tt.gestorias}: por nómina`, TARIFA.gestorias.porNomina, 'nómina/mes', SUITE),
    articulo('SYN-PORTAL', 'Portal del empleado (sin la Base)', TARIFA.portalEmpleado.cuota, 'mes',
      `${TARIFA.portalEmpleado.personasIncluidas} personas incluidas. ${SUITE}`),
    articulo('SYN-PORTAL-PERSONA', 'Portal del empleado: persona adicional', TARIFA.portalEmpleado.personaAdicional,
      'persona/mes', SUITE),
    articulo('SYN-PORTAL-IMPLANTACION', 'Portal del empleado: implantación', TARIFA.portalEmpleado.implantacion, 'ud',
      UNICO),
    articulo('SYN-MODALIDAD-B', 'Modalidad alojada por Synentor en Andorra', TARIFA.modalidadB, 'instalación/mes',
      `En desarrollo inminente: desactivado hasta que se pueda vender. ${SUITE}`, false),
    articulo('SYN-IMPLANTACION', `${t.servicios.implantacion.titulo}: jornada`, TARIFA.implantacion.jornada, 'jornada',
      `La Suite, desde ${TARIFA.implantacion.minimoSuite} jornadas; MUV, de ${TARIFA.implantacion.minimoMuv} a ${TARIFA.implantacion.maximoMuv}. ${SIN_IMPUESTOS}.`),
  ];

  const servicios: ArticuloErp[] = [
    articulo('SYN-WEB-ESENCIAL', 'Página web Esencial', TARIFA.webs.esencial, 'ud', UNICO),
    articulo('SYN-WEB-PROFESIONAL', 'Página web Profesional', TARIFA.webs.profesional, 'ud', UNICO),
    articulo('SYN-WEB-PREMIUM', 'Página web Premium', TARIFA.webs.premiumDesde, 'ud', `${DESDE} ${UNICO}`),
    articulo('SYN-WEB-PAGINA', 'Página web: página adicional', TARIFA.webs.paginaAdicional, 'ud', UNICO),
    articulo('SYN-WEB-IDIOMA', 'Página web: idioma adicional', TARIFA.webs.idiomaAdicional, 'ud', UNICO),
    articulo('SYN-WEB-MANT-BASICO', 'Mantenimiento web Básico', TARIFA.webs.mantenimientoBasico, 'mes', AL_MES),
    articulo('SYN-WEB-MANT-PLUS', 'Mantenimiento web Plus', TARIFA.webs.mantenimientoPlus, 'mes', AL_MES),
    articulo('SYN-ENE-ESTUDIO-PART', 'Estudio energético de un particular', e.estudioParticular, 'ud',
      `Se devuelve si el ahorro anual que encontramos no llega a su precio. ${UNICO}`),
    articulo('SYN-ENE-ESTUDIO-EMP', 'Estudio energético de una empresa (por suministro)',
      e.estudioEmpresaPorSuministro, 'suministro', UNICO),
    articulo('SYN-ENE-EXITO', 'Ahorro energético a éxito', null, 'ud',
      `El ${pct(e.exito)} del ahorro comprobado de los 12 primeros meses: el importe se calcula en cada caso. ${SIN_IMPUESTOS}.`),
    articulo('SYN-ENE-MON-VIVIENDA', 'Monitorización energética de una vivienda: instalación',
      mon.vivienda.instalacionDesde, 'ud', `Incluye los medidores de esos puntos. ${DESDE} ${UNICO}`),
    articulo('SYN-ENE-MON-VIVIENDA-CUOTA', 'Monitorización energética de una vivienda: cuota', mon.vivienda.cuota,
      'mes', AL_MES),
    articulo('SYN-ENE-MON-PYME', 'Monitorización energética de una pyme: instalación', mon.pyme.instalacionDesde,
      'ud', `Incluye los medidores de esos puntos. ${DESDE} ${UNICO}`),
    articulo('SYN-ENE-MON-PYME-CUOTA', 'Monitorización energética de una pyme: cuota', mon.pyme.cuota, 'mes', AL_MES),
    articulo('SYN-ENE-MON-EDIFICIO', 'Monitorización energética de un edificio: instalación',
      mon.edificio.instalacionDesde, 'ud', `Incluye los medidores de esos puntos. ${DESDE} ${UNICO}`),
    articulo('SYN-ENE-MON-EDIFICIO-CUOTA', 'Monitorización energética de un edificio: cuota', mon.edificio.cuota,
      'mes', AL_MES),
    articulo('SYN-ENE-MON-GRAN-CUOTA', 'Monitorización energética de un gran consumidor: cuota',
      mon.granConsumidor.cuotaDesde, 'mes', `${DESDE} ${AL_MES}`),
    articulo('SYN-MIG-ARRANQUE', 'Migración: arranque', TARIFA.migracion.arranque, 'ud', UNICO),
    articulo('SYN-MIG-CONTA-PRIMERO', 'Migración de la contabilidad: primer ejercicio',
      TARIFA.migracion.contabilidadPrimerEjercicio, 'ud', UNICO),
    articulo('SYN-MIG-CONTA-ADICIONAL', 'Migración de la contabilidad: ejercicio adicional',
      TARIFA.migracion.contabilidadEjercicioAdicional, 'ejercicio', UNICO),
    articulo('SYN-MIG-PERSONAL', 'Migración del personal', TARIFA.migracion.personal, 'ud',
      `Hasta ${TARIFA.migracion.personalHasta} personas; con más, a medida. ${UNICO}`),
    articulo('SYN-CONV-PUESTA', 'Convivencia con el programa actual: puesta en marcha',
      TARIFA.convivencia.puestaEnMarcha, 'ud', UNICO),
    articulo('SYN-CONV-CUOTA', 'Convivencia con el programa actual: cuota', TARIFA.convivencia.cuota, 'mes',
      `Hasta ${TARIFA.convivencia.cargasAlMes} cargas de ficheros al mes. ${AL_MES}`),
  ];

  const consultoriaIa: ArticuloErp[] = consultoria.servicios.flatMap((s) => {
    const code = `SYN-CON-${s.id.toUpperCase()}`;
    const desde = 'Desde, para una microempresa: el precio final, en la propuesta de IA a medida.';
    const filas = [articulo(code, s.nombre, s.precioDesde, 'ud', `${desde} ${UNICO}`)];
    if (s.cuotaDesde > 0) {
      filas.push(articulo(`${code}-CUOTA`, `${s.nombre}: cuota`, s.cuotaDesde, 'mes', `${desde} ${AL_MES}`));
    }
    return filas;
  });

  return [...suite, ...servicios, ...consultoriaIa];
}

function celda(v: string): string {
  return /[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

/** El CSV para el importador del ERP: cabecera y una línea por artículo, separado por comas y acabado en salto de línea. */
export function csvArticulos(): string {
  const lineas = articulosErp().map((a) =>
    [
      a.code,
      a.name,
      a.description,
      a.unit,
      a.sale_price === null ? '' : String(a.sale_price),
      '',
      a.is_active ? 'true' : 'false',
      a.type,
      a.tax_code,
      a.periodicidad,
    ]
      .map(celda)
      .join(','),
  );
  return [CABECERAS_ERP.join(','), ...lineas].join('\n') + '\n';
}
