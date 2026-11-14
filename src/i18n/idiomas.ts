// Idiomas y rutas traducidas de la web (diseño §10). El catalán es el principal.

export const IDIOMAS = ['ca', 'es', 'en', 'fr', 'pt', 'it', 'de'] as const;
export type Idioma = (typeof IDIOMAS)[number];
export const IDIOMA_PRINCIPAL: Idioma = 'ca';

/** El nombre de cada idioma en su propia lengua (para el selector). */
export const NOMBRE_IDIOMA: Record<Idioma, string> = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
  fr: 'Français',
  pt: 'Português',
  it: 'Italiano',
  de: 'Deutsch',
};

export type Pagina = 'inicio' | 'servicios' | 'precios' | 'contacto' | 'aviso-legal' | 'privacidad' | 'cookies';
export const PAGINAS: readonly Pagina[] = ['inicio', 'servicios', 'precios', 'contacto', 'aviso-legal', 'privacidad', 'cookies'];

/** El tramo de la dirección de cada página en cada idioma ('' = la portada del idioma). */
export const RUTAS: Record<Pagina, Record<Idioma, string>> = {
  inicio: { ca: '', es: '', en: '', fr: '', pt: '', it: '', de: '' },
  servicios: { ca: 'serveis', es: 'servicios', en: 'services', fr: 'services', pt: 'servicos', it: 'servizi', de: 'leistungen' },
  precios: { ca: 'preus', es: 'precios', en: 'pricing', fr: 'tarifs', pt: 'precos', it: 'prezzi', de: 'preise' },
  contacto: { ca: 'contacte', es: 'contacto', en: 'contact', fr: 'contact', pt: 'contacto', it: 'contatti', de: 'kontakt' },
  'aviso-legal': {
    ca: 'avis-legal',
    es: 'aviso-legal',
    en: 'legal-notice',
    fr: 'mentions-legales',
    pt: 'aviso-legal',
    it: 'note-legali',
    de: 'impressum',
  },
  privacidad: {
    ca: 'privacitat',
    es: 'privacidad',
    en: 'privacy',
    fr: 'confidentialite',
    pt: 'privacidade',
    it: 'privacy',
    de: 'datenschutz',
  },
  cookies: { ca: 'galetes', es: 'cookies', en: 'cookies', fr: 'cookies', pt: 'cookies', it: 'cookie', de: 'cookies' },
};

export function esIdioma(v: string | null | undefined): v is Idioma {
  return !!v && (IDIOMAS as readonly string[]).includes(v);
}

export function ruta(pagina: Pagina, idioma: Idioma): string {
  const tramo = RUTAS[pagina][idioma];
  return tramo ? `/${idioma}/${tramo}/` : `/${idioma}/`;
}
