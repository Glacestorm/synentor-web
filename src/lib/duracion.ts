// Una duración (de una cookie o de un plazo) escrita en el idioma de la página. Las cifras y unidades, con Intl; las que
// no tienen cifra («hasta cerrar el navegador», «hasta que la borres»), con el texto de la página.
import type { Idioma } from '../i18n/idiomas';

export type Duracion = { n: number; unidad: 'minute' | 'hour' | 'day' | 'month' | 'year' } | 'sesion' | 'persistente';

export function duracion(d: Duracion, idioma: Idioma, fijos: { sesion: string; persistente: string }): string {
  if (d === 'sesion') return fijos.sesion;
  if (d === 'persistente') return fijos.persistente;
  return new Intl.NumberFormat(idioma, { style: 'unit', unit: d.unidad, unitDisplay: 'long' }).format(d.n);
}
