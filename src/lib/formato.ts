// Formato de importes y porcentajes en el idioma de la página. Sin decimales si el importe es entero.
import type { Idioma } from '../i18n/idiomas';

const LOCALE: Record<Idioma, string> = {
  ca: 'ca-AD',
  es: 'es-ES',
  en: 'en-GB',
  fr: 'fr-FR',
  pt: 'pt-PT',
  it: 'it-IT',
  de: 'de-DE',
};

export function euros(importe: number, idioma: Idioma): string {
  const decimales = Number.isInteger(importe) ? 0 : 2;
  return new Intl.NumberFormat(LOCALE[idioma], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
    useGrouping: true,
  }).format(importe);
}

export function porcentaje(fraccion: number, idioma: Idioma): string {
  return new Intl.NumberFormat(LOCALE[idioma], { style: 'percent', maximumFractionDigits: 1 }).format(fraccion);
}
