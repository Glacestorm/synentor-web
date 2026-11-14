// Acceso a los textos de cada idioma: los siete (catalán, el principal; castellano; y los cinco traducidos el 14/11/2026,
// pendientes de una lectura nativa).
import { ca, type Textos } from './textos/ca';
import { es } from './textos/es';
import { en } from './textos/en';
import { fr } from './textos/fr';
import { pt } from './textos/pt';
import { it } from './textos/it';
import { de } from './textos/de';
import type { Idioma } from './idiomas';

export const TEXTOS: Partial<Record<Idioma, Textos>> & { ca: Textos } = { ca, es, en, fr, pt, it, de };

/** Los textos de un idioma; si aún no los tiene, los del catalán. */
export function textos(idioma: Idioma): Textos {
  return TEXTOS[idioma] ?? TEXTOS.ca;
}

export { rellena } from './rellena';
