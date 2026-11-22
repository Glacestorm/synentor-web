// El cálculo del presupuesto: lo usan el configurador, las tablas y las pruebas. Todo en céntimos enteros por dentro.
import { TARIFA, type ModuloId } from './tarifa';
import { estadoModulo, type Pais } from './disponibilidad';

export type { Pais } from './disponibilidad';
export type { ModuloId } from './tarifa';

export interface EmpresaSeleccion {
  modulos: ModuloId[];
  /** Personas en plantilla: solo se cobran con RRHH. */
  personas: number;
}

/** El paquete elegido: ninguno, «Synentor Completo» o «Obrador» (diseño §7.3 y §18). */
export type Paquete = 'ninguno' | 'completo' | 'obrador';

export interface Seleccion {
  pais: Pais;
  modalidad: 'A' | 'B';
  pago: 'anual' | 'mensual';
  /** Synentor Suite ERP-CRM (la Base y sus módulos). Sin ella, solo MUV. */
  suite: boolean;
  paquete: Paquete;
  /** La primera es la empresa principal; las demás, empresas adicionales en la misma instalación. */
  empresas: EmpresaSeleccion[];
  /** Usuarios del ERP-CRM, contados por instalación (las cuentas del portal del empleado no cuentan). */
  usuarios: number;
  /** Usuarios de MUV (0 = sin MUV). Con el paquete Completo, MUV va incluido con los mismos usuarios que el ERP-CRM. */
  muvUsuarios: number;
}

export interface Linea {
  clave: string;
  empresa: number | null;
  cantidad: number;
  importe: number;
}

export type Aviso =
  | 'impuestos-no-incluidos'
  | 'cashdro-una-empresa'
  | 'volumen-empresas'
  | 'modalidad-b-inminente'
  | 'muv-a-medida'
  | 'requiere-adaptacion';

export interface Presupuesto {
  lineas: Linea[];
  subtotal: number;
  recargoMensual: number;
  cuotaMensual: number;
  igi: number | null;
  totalMensual: number;
  implantacionDesde: number;
  anadidos: ModuloId[];
  avisos: Aviso[];
  requierePropuesta: boolean;
}

const eur = (c: number) => Math.round(c) / 100;
const cent = (e: number) => Math.round(e * 100);
/** Una cantidad de personas o usuarios: entera y nunca negativa (lo que no es un número, 0). */
const entero = (n: number) => (Number.isFinite(n) && n > 0 ? Math.floor(n) : 0);

export function resuelveDependencias(modulos: readonly ModuloId[]): { modulos: ModuloId[]; anadidos: ModuloId[] } {
  const resultado: ModuloId[] = [];
  const anadidos: ModuloId[] = [];
  const pedir = (m: ModuloId, porDependencia: boolean) => {
    if (resultado.includes(m)) return;
    resultado.push(m);
    if (porDependencia) anadidos.push(m);
    const requiere = (TARIFA.modulos[m] as { requiere?: ModuloId }).requiere;
    if (requiere) pedir(requiere, !modulos.includes(requiere));
  };
  for (const m of modulos) pedir(m, false);
  return { modulos: resultado, anadidos };
}

/**
 * Cuota de MUV, en céntimos, para un número de usuarios: se paga desde el primero y cada usuario va al precio de su
 * tramo (gerencia, 22/11/2026). Por encima del último tramo no se suma nada: es «a medida» y pide propuesta.
 */
function cuotaMuv(usuarios: number): number {
  let total = 0;
  let desde = 0;
  for (const tramo of TARIFA.muv.tramos) {
    const enTramo = Math.max(0, Math.min(usuarios, tramo.hasta) - desde);
    total += enTramo * cent(tramo.precio);
    desde = tramo.hasta;
  }
  return total;
}

/** Cuota mensual, en euros, de solo el portal del empleado (sin la Base): las primeras personas incluidas, después por persona. */
export function cuotaPortal(personas: number): number {
  const p = TARIFA.portalEmpleado;
  const extra = Math.max(0, entero(personas) - p.personasIncluidas);
  return eur(cent(p.cuota) + extra * cent(p.personaAdicional));
}

/**
 * Cuota mensual, en euros y sin impuestos, del paquete Despachos y gestorías (diseño §18): la cuota con sus empresas
 * incluidas, cada empresa cliente más y cada nómina. Con más empresas de las que admite, `null`: bajo propuesta.
 */
export function cuotaGestoria(empresas: number, personas: number): number | null {
  const g = TARIFA.gestorias;
  const n = Math.max(1, entero(empresas));
  if (n > g.maxEmpresas) return null;
  const extra = Math.max(0, n - g.empresasIncluidas);
  return eur(cent(g.cuota) + extra * cent(g.empresaAdicional) + entero(personas) * cent(g.porNomina));
}

export function calcula(sel: Seleccion): Presupuesto {
  const lineas: Linea[] = [];
  const avisos = new Set<Aviso>();
  const anadidos = new Set<ModuloId>();
  let requierePropuesta = false;
  const linea = (clave: string, empresa: number | null, cantidad: number, importeCent: number) =>
    lineas.push({ clave, empresa, cantidad, importe: importeCent });
  const marcaEstado = (producto: Parameters<typeof estadoModulo>[1]) => {
    if (estadoModulo(sel.pais, producto) !== 'disponible') {
      requierePropuesta = true;
      avisos.add('requiere-adaptacion');
    }
  };

  const paquete: Paquete = sel.suite ? sel.paquete : 'ninguno';
  const completo = paquete === 'completo';
  const obrador = paquete === 'obrador';

  if (sel.suite) {
    const empresas = sel.empresas.length > 0 ? sel.empresas : [{ modulos: [], personas: 0 }];
    marcaEstado('base');
    let empresasConTpv = 0;

    empresas.forEach((empresa, i) => {
      const principal = i === 0;
      // Con el Obrador, el control de costes de la empresa principal va dentro del paquete (por `conCostes`).
      const obradorConCostes = principal && obrador && empresa.modulos.includes('costes');
      const incluidos: readonly ModuloId[] = !principal
        ? []
        : completo
          ? TARIFA.paquete.incluye
          : obrador
            ? [...TARIFA.paqueteObrador.incluye, ...(obradorConCostes ? (['costes'] as const) : [])]
            : [];
      const pedidos = [...new Set([...empresa.modulos, ...incluidos])];
      const resuelto = resuelveDependencias(pedidos);
      resuelto.anadidos.forEach((m) => anadidos.add(m));

      if (principal) {
        if (completo) linea('paquete', 0, 1, cent(TARIFA.paquete.cuota));
        else if (obradorConCostes) linea('paquete-obrador-costes', 0, 1, cent(TARIFA.paqueteObrador.conCostes));
        else if (obrador) linea('paquete-obrador', 0, 1, cent(TARIFA.paqueteObrador.cuota));
        else linea('base', 0, 1, cent(TARIFA.base.cuota));
      } else {
        linea('empresa-adicional', i, 1, cent(TARIFA.empresaAdicional.cuota));
      }

      const factor = principal ? 1 : TARIFA.empresaAdicional.factorModulos;
      for (const m of resuelto.modulos) {
        marcaEstado(m);
        if (incluidos.includes(m)) continue;
        linea(`modulo:${m}`, i, 1, Math.round(cent(TARIFA.modulos[m].cuota) * factor));
      }

      if (resuelto.modulos.includes('rrhh')) {
        const personas = entero(empresa.personas);
        if (personas > 0) linea('personas', i, personas, personas * cent(TARIFA.modulos.rrhh.porPersona));
      }
      if (resuelto.modulos.includes('tpv')) empresasConTpv++;
    });

    if (empresasConTpv > 1) avisos.add('cashdro-una-empresa');
    if (empresas.length > TARIFA.maxEmpresasSinPropuesta) {
      requierePropuesta = true;
      avisos.add('volumen-empresas');
    }

    const usuarios = entero(sel.usuarios);
    if (completo) {
      const extra = Math.max(0, usuarios - TARIFA.paquete.usuariosIncluidos);
      if (extra > 0) linea('paquete-usuarios', null, extra, extra * cent(TARIFA.paquete.usuarioAdicional));
    } else {
      const incluidos = obrador ? TARIFA.paqueteObrador.usuariosIncluidos : TARIFA.base.usuariosIncluidos;
      const extra = Math.max(0, usuarios - incluidos);
      if (extra > 0) linea('usuarios-adicionales', null, extra, extra * cent(TARIFA.usuarioAdicional));
    }

    if (sel.modalidad === 'B') {
      linea('modalidad-b', null, 1, cent(TARIFA.modalidadB));
      requierePropuesta = true;
      avisos.add('modalidad-b-inminente');
    }
  }

  const muvUsuarios = completo ? entero(sel.usuarios) : entero(sel.muvUsuarios);
  if (muvUsuarios > 0) {
    marcaEstado('muv');
    if (!completo) linea('muv-usuarios', null, muvUsuarios, cuotaMuv(muvUsuarios));
    if (muvUsuarios > TARIFA.muv.maxSinPropuesta) {
      requierePropuesta = true;
      avisos.add('muv-a-medida');
    }
  }

  const subtotal = lineas.reduce((t, l) => t + l.importe, 0);
  const recargo = sel.pago === 'mensual' ? Math.round(subtotal * TARIFA.recargoMensual) : 0;
  if (recargo > 0) linea('recargo-mensual', null, 1, recargo);
  const cuota = subtotal + recargo;
  const igi = sel.pais === 'AD' ? Math.round(cuota * TARIFA.igiAndorra) : null;
  if (igi === null) avisos.add('impuestos-no-incluidos');

  const jornada = cent(TARIFA.implantacion.jornada);
  const implantacion = sel.suite
    ? TARIFA.implantacion.minimoSuite * jornada
    : muvUsuarios > 0
      ? TARIFA.implantacion.minimoMuv * jornada
      : 0;

  return {
    lineas: lineas.map((l) => ({ ...l, importe: eur(l.importe) })),
    subtotal: eur(subtotal),
    recargoMensual: eur(recargo),
    cuotaMensual: eur(cuota),
    igi: igi === null ? null : eur(igi),
    totalMensual: eur(cuota + (igi ?? 0)),
    implantacionDesde: eur(implantacion),
    anadidos: [...anadidos],
    avisos: [...avisos],
    requierePropuesta,
  };
}
