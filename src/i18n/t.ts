// Acceso a los textos de cada idioma. Los idiomas que aún no tienen sus textos no están en TEXTOS (tarea 6 del plan).
import { ca, type Textos } from './textos/ca';
import { es } from './textos/es';
import type { Idioma } from './idiomas';

export const TEXTOS: Partial<Record<Idioma, Textos>> & { ca: Textos } = { ca, es };

/** Los textos de un idioma; si aún no los tiene, los del catalán. */
export function textos(idioma: Idioma): Textos {
  return TEXTOS[idioma] ?? TEXTOS.ca;
}

/** Sustituye los {marcadores} de un texto. Un marcador sin valor es un error al construir: nunca sale «{base}». */
export function rellena(texto: string, valores: Record<string, string | number>): string {
  return texto.replace(/\{([a-zA-Z]+)\}/g, (_, clave: string) => {
    if (!(clave in valores)) throw new Error(`Falta el valor de {${clave}} en «${texto}»`);
    return String(valores[clave]);
  });
}
