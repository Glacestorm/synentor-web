// Los datos de los textos legales (diseño §19): cada cookie, cada proveedor y los plazos. Comprobados el 14/11/2026 en las
// páginas oficiales de cada proveedor (fuentes en docs/legal/REVISION-TEXTOS-LEGALES.md). Lo que no se pudo comprobar
// lleva `verificado: false`: una prueba impide activar una herramienta mientras alguna de sus cookies esté así.
import type { Herramientas } from '../lib/consentimiento';
import { herramientasValidas } from '../lib/consentimiento';
import type { Duracion } from '../lib/duracion';

export type { Duracion } from '../lib/duracion';
type Herramienta = keyof Herramientas;

export interface CookieLegal {
  /** El nombre tal como aparece en el navegador. */
  nombre: string;
  /** Quién la pone (nombre de la empresa, no se traduce). */
  titular: string;
  /** Clave de `legal.finalidades` en los textos. */
  finalidad: string;
  duracion: Duracion;
  /** De otro dominio (la pone el proveedor en el suyo). */
  terceros: boolean;
  /** La herramienta que la pone; `null` = se usa siempre (necesaria). */
  herramienta: Herramienta | null;
  /** Nombre y finalidad comprobados en la página oficial del proveedor, y la duración comprobada (allí o medida en la
   * web) o declarada como «la fija el proveedor» si no se ha podido medir. */
  verificado: boolean;
}

const año = (n: number): Duracion => ({ n, unidad: 'year' });
const meses = (n: number): Duracion => ({ n, unidad: 'month' });
const dias = (n: number): Duracion => ({ n, unidad: 'day' });
const minutos = (n: number): Duracion => ({ n, unidad: 'minute' });

export const COOKIES: readonly CookieLegal[] = [
  // Propias de Synentor (el código de la web: Base.astro y src/scripts/cookies.ts).
  { nombre: 'lang', titular: 'Synentor', finalidad: 'lang', duracion: año(1), terceros: false, herramienta: null, verificado: true },
  { nombre: 'synentor_consentimiento', titular: 'Synentor', finalidad: 'consentimiento', duracion: meses(12), terceros: false, herramienta: null, verificado: true },
  { nombre: 'synentor-franja-idioma', titular: 'Synentor', finalidad: 'franja', duracion: 'persistente', terceros: false, herramienta: null, verificado: true },
  // Seguridad de Cloudflare: solo si la necesita (protección contra robots o tras una comprobación).
  { nombre: '__cf_bm', titular: 'Cloudflare', finalidad: 'cfBm', duracion: minutos(30), terceros: false, herramienta: null, verificado: true },
  { nombre: 'cf_clearance', titular: 'Cloudflare', finalidad: 'cfClearance', duracion: minutos(30), terceros: false, herramienta: null, verificado: true },
  // Google Analytics 4: la web fija cookie_expires a 395 días (unos 13 meses), que afecta a _ga y _ga_<id>.
  { nombre: '_ga', titular: 'Google', finalidad: 'gaUsuario', duracion: meses(13), terceros: false, herramienta: 'ga4', verificado: true },
  { nombre: '_ga_<ID>', titular: 'Google', finalidad: 'gaSesion', duracion: meses(13), terceros: false, herramienta: 'ga4', verificado: true },
  // Microsoft Clarity: nombres y finalidades de su página oficial. Duraciones medidas por gerencia el 15/11/2026 en Chrome,
  // en la vista previa de la web: _clck caduca a 1 año y _clsk antes de 5 días (1 día según la documentación de terceros;
  // Clarity la renueva con la visita). Las cinco de los dominios de Microsoft no se pusieron al medir: su duración la fija
  // Microsoft y no se inventa («proveedor»).
  { nombre: '_clck', titular: 'Microsoft', finalidad: 'clarityUsuario', duracion: año(1), terceros: false, herramienta: 'clarity', verificado: true },
  { nombre: '_clsk', titular: 'Microsoft', finalidad: 'claritySesion', duracion: dias(1), terceros: false, herramienta: 'clarity', verificado: true },
  { nombre: 'CLID', titular: 'Microsoft', finalidad: 'clarityPrimeraVez', duracion: 'proveedor', terceros: true, herramienta: 'clarity', verificado: true },
  { nombre: 'ANONCHK', titular: 'Microsoft', finalidad: 'msAnonchk', duracion: 'proveedor', terceros: true, herramienta: 'clarity', verificado: true },
  { nombre: 'MR', titular: 'Microsoft', finalidad: 'msMr', duracion: 'proveedor', terceros: true, herramienta: 'clarity', verificado: true },
  { nombre: 'MUID', titular: 'Microsoft', finalidad: 'msMuid', duracion: 'proveedor', terceros: true, herramienta: 'clarity', verificado: true },
  { nombre: 'SM', titular: 'Microsoft', finalidad: 'msSm', duracion: 'proveedor', terceros: true, herramienta: 'clarity', verificado: true },
  // Píxel de Meta.
  { nombre: '_fbp', titular: 'Meta', finalidad: 'metaFbp', duracion: dias(90), terceros: false, herramienta: 'metaPixel', verificado: true },
  { nombre: '_fbc', titular: 'Meta', finalidad: 'metaFbc', duracion: dias(90), terceros: false, herramienta: 'metaPixel', verificado: false },
  { nombre: 'fr', titular: 'Meta', finalidad: 'metaFr', duracion: dias(90), terceros: true, herramienta: 'metaPixel', verificado: false },
  // LinkedIn Insight Tag: las de la tabla oficial de LinkedIn ligadas a publicidad y analítica fuera de LinkedIn.
  { nombre: 'li_fat_id', titular: 'LinkedIn', finalidad: 'liFatId', duracion: dias(30), terceros: false, herramienta: 'linkedin', verificado: true },
  { nombre: 'li_sugr', titular: 'LinkedIn', finalidad: 'liSugr', duracion: dias(90), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'bcookie', titular: 'LinkedIn', finalidad: 'liBcookie', duracion: año(1), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'lidc', titular: 'LinkedIn', finalidad: 'liLidc', duracion: dias(1), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'UserMatchHistory', titular: 'LinkedIn', finalidad: 'liUserMatch', duracion: dias(30), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'AnalyticsSyncHistory', titular: 'LinkedIn', finalidad: 'liAnalyticsSync', duracion: dias(30), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'lms_ads', titular: 'LinkedIn', finalidad: 'liLmsAds', duracion: dias(30), terceros: true, herramienta: 'linkedin', verificado: true },
  { nombre: 'lms_analytics', titular: 'LinkedIn', finalidad: 'liLmsAnalytics', duracion: dias(30), terceros: true, herramienta: 'linkedin', verificado: true },
];

export interface ProveedorLegal {
  /** Clave de `legal.proveedores` en los textos. */
  id: string;
  nombre: string;
  /** La herramienta por la que está; `null` = siempre. */
  herramienta: Herramienta | null;
  /** Su política de privacidad o de protección de datos (página oficial). */
  politica: string;
}

export const PROVEEDORES: readonly ProveedorLegal[] = [
  { id: 'cloudflare', nombre: 'Cloudflare', herramienta: null, politica: 'https://www.cloudflare.com/privacypolicy/' },
  { id: 'resend', nombre: 'Resend', herramienta: null, politica: 'https://resend.com/security/gdpr' },
  { id: 'microsoft365', nombre: 'Microsoft', herramienta: null, politica: 'https://www.microsoft.com/en-us/privacy/privacystatement' },
  { id: 'google', nombre: 'Google', herramienta: 'ga4', politica: 'https://policies.google.com/privacy' },
  { id: 'clarity', nombre: 'Microsoft', herramienta: 'clarity', politica: 'https://www.microsoft.com/en-us/privacy/privacystatement' },
  { id: 'meta', nombre: 'Meta', herramienta: 'metaPixel', politica: 'https://www.facebook.com/privacy/policies/cookies/' },
  { id: 'linkedin', nombre: 'LinkedIn', herramienta: 'linkedin', politica: 'https://www.linkedin.com/legal/cookie-policy' },
];

/** Las páginas de ayuda de cada navegador para bloquear o borrar cookies. */
export const NAVEGADORES = {
  chrome: { nombre: 'Google Chrome', ayuda: 'https://support.google.com/chrome/answer/95647' },
  firefox: { nombre: 'Mozilla Firefox', ayuda: 'https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox' },
  safari: { nombre: 'Safari', ayuda: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  edge: { nombre: 'Microsoft Edge', ayuda: 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
} as const;

export const PLAZOS = {
  /** Mensajes de quien no llega a ser cliente, desde el último contacto (gerencia, 14/11/2026). */
  contacto: año(1) as Duracion,
  /** Registros de Workers Logs: 3 días en el plan gratuito según una página de Cloudflare y 7 según otra: el mayor. */
  registros: dias(7) as Duracion,
};

const activa = (h: Herramienta | null, validas: ReturnType<typeof herramientasValidas>) => h === null || validas[h] !== null;

/** Las cookies de una tabla: las necesarias, o las de las herramientas que la web tiene activas. */
export function cookiesDe(lista: readonly CookieLegal[], h: Herramientas, tipo: 'necesarias' | 'opcionales'): CookieLegal[] {
  const validas = herramientasValidas(h);
  return lista.filter((c) => (tipo === 'necesarias' ? c.herramienta === null : c.herramienta !== null && activa(c.herramienta, validas)));
}

/** Los proveedores de siempre y los de las herramientas activas. */
export function proveedoresDe(lista: readonly ProveedorLegal[], h: Herramientas): ProveedorLegal[] {
  const validas = herramientasValidas(h);
  return lista.filter((p) => activa(p.herramienta, validas));
}
