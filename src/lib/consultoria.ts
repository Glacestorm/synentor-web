// La consultoría de IA y ventas, agrupada por categoría para la web. Los datos, de la copia del catálogo del ERP.
import catalogo from '../datos/consultoria.json';

export const CATEGORIAS = [
  'estrategia',
  'formacion',
  'asistentes',
  'automatizacion',
  'documentos',
  'datos',
  'medida',
  'cumplimiento',
  'soporte',
] as const;
export type Categoria = (typeof CATEGORIAS)[number];

export interface ServicioConsultoria {
  id: string;
  /** Nombre en castellano (el del catálogo del ERP): para el fichero de productos, no para la web. */
  nombre: string;
  categoria: string;
  precioDesde: number;
  /** Cuota mensual de una microempresa; 0 = sin cuota. */
  cuotaDesde: number;
}

export interface GrupoConsultoria {
  clave: Categoria;
  desde: number;
  /** La cuota mensual más baja de la categoría que no es 0; null si ninguno tiene cuota. */
  cuotaDesde: number | null;
  servicios: number;
}

const esCategoria = (v: string): v is Categoria => (CATEGORIAS as readonly string[]).includes(v);

export function agrupa(servicios: readonly ServicioConsultoria[]): GrupoConsultoria[] {
  const grupos = new Map<Categoria, GrupoConsultoria>();
  for (const s of servicios) {
    if (!esCategoria(s.categoria)) throw new Error(`Categoría de consultoría desconocida: «${s.categoria}»`);
    const g = grupos.get(s.categoria) ?? { clave: s.categoria, desde: s.precioDesde, cuotaDesde: null, servicios: 0 };
    g.desde = Math.min(g.desde, s.precioDesde);
    if (s.cuotaDesde > 0) g.cuotaDesde = g.cuotaDesde === null ? s.cuotaDesde : Math.min(g.cuotaDesde, s.cuotaDesde);
    g.servicios += 1;
    grupos.set(s.categoria, g);
  }
  return CATEGORIAS.filter((c) => grupos.has(c)).map((c) => grupos.get(c)!);
}

export function porCategoria(): GrupoConsultoria[] {
  return agrupa(catalogo.servicios);
}

export const FECHA_CATALOGO: string = catalogo.fecha;
