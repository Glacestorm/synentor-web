// Estadísticas de visitas con Umami (gerencia, 14/11/2026): sin cookies; es medición de audiencia para la propia web, que la
// APDA no somete a consentimiento. El identificador de la web NO es secreto (va en el código de la página de todas formas).
export const UMAMI = {
  idWeb: '86d50814-019d-493d-821b-b1b983e2a215',
  script: 'https://cloud.umami.is/script.js',
  /** Solo cuenta las visitas de estos dominios: las pruebas y las vistas previas no ensucian las cifras. */
  dominios: 'synentor.com,www.synentor.com',
} as const;

// Herramientas con cookies (diseño §17, aprobado por gerencia el 14/11/2026). Solo se cargan si el visitante acepta su
// categoría. Vacío = la herramienta no está y, si no hay ninguna, el aviso de cookies no sale. Cómo conseguir cada
// identificador: docs/PUESTA-EN-MARCHA.md, §9. No son secretos (van en la página).
export const HERRAMIENTAS = {
  /** Google Analytics 4: «ID de medición», G- y 10 caracteres. */
  ga4: '',
  /** Microsoft Clarity: «ID del proyecto». */
  clarity: '',
  /** Píxel de Meta: «identificador del conjunto de datos». */
  metaPixel: '',
  /** LinkedIn Insight Tag: «ID de socio». */
  linkedin: '',
};

/** Versión de la política de cookies: al cambiarla, se vuelve a preguntar a todo el mundo. */
export const VERSION_POLITICA_COOKIES = '2026-11-14';
