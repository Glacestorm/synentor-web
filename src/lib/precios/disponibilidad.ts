// Qué está disponible en cada país (diseño aprobado, §7.0). Lo que no está disponible se puede presupuestar igual,
// pero la web lo dice y pide una propuesta.
import type { ModuloId } from './tarifa';

export type Pais = 'AD' | 'ES' | 'PT' | 'FR' | 'IT' | 'DE' | 'OTRO';
export type Estado = 'disponible' | 'inminente' | 'a_medida';
export type Producto = ModuloId | 'base' | 'muv';

export const PAISES: readonly Pais[] = ['AD', 'ES', 'PT', 'FR', 'IT', 'DE', 'OTRO'];

const ESPANA: Record<Producto, Estado> = {
  // La Base lleva la contabilidad con el plan del país: en España, el PGC español está en desarrollo inminente.
  base: 'inminente',
  compras: 'inminente',
  ventas_crm: 'disponible',
  rrhh: 'inminente',
  fiscal: 'inminente',
  juridico: 'a_medida',
  pbc: 'a_medida',
  productos: 'disponible',
  tpv: 'disponible',
  muv: 'disponible',
  electrica: 'disponible',
};

const OTROS: Record<Producto, Estado> = {
  base: 'a_medida',
  compras: 'a_medida',
  ventas_crm: 'disponible',
  rrhh: 'a_medida',
  fiscal: 'a_medida',
  juridico: 'a_medida',
  pbc: 'a_medida',
  productos: 'disponible',
  tpv: 'a_medida',
  muv: 'disponible',
  // C. Eléctrica trabaja con el mercado eléctrico español (CUPS, peajes, OMIE): fuera de España, a medida.
  electrica: 'a_medida',
};

export function estadoModulo(pais: Pais, producto: Producto): Estado {
  // En Andorra todo está disponible salvo C. Eléctrica, que es del mercado español.
  if (pais === 'AD') return producto === 'electrica' ? 'a_medida' : 'disponible';
  if (pais === 'ES') return ESPANA[producto];
  return OTROS[producto];
}
