// Estadísticas de visitas con Umami (gerencia, 14/11/2026): sin cookies; es medición de audiencia para la propia web, que la
// APDA no somete a consentimiento. El identificador de la web NO es secreto (va en el código de la página de todas formas).
export const UMAMI = {
  /** El «ID del lloc web» de la web en Umami (no el de la cuenta, que tiene la misma forma). */
  idWeb: 'ecea7ff7-79ac-44fb-b7e9-2f997d7a0384',
  script: 'https://cloud.umami.is/script.js',
  /** Solo cuenta las visitas de estos dominios: las pruebas y las vistas previas no ensucian las cifras. */
  dominios: 'synentor.com,www.synentor.com',
} as const;

/** Dominios de producción: una sola lista (la usan el contador de acciones y, desde la tarea 2, la página). */
export const DOMINIOS_PRODUCCION = ['synentor.com', 'www.synentor.com'] as const;

// Herramientas con cookies (diseño §17, aprobado por gerencia el 14/11/2026). Solo se cargan si el visitante acepta su
// categoría. Vacío = la herramienta no está y, si no hay ninguna, el aviso de cookies no sale. Cómo conseguir cada
// identificador: docs/PUESTA-EN-MARCHA.md, §9. No son secretos (van en la página).
export const HERRAMIENTAS = {
  /** Google Analytics 4: «ID de medición», G- y 10 caracteres. */
  ga4: 'G-KB0654M7HP',
  /** Microsoft Clarity: «ID del proyecto». */
  clarity: 'zds517srkg',
  /** Píxel de Meta: «identificador del conjunto de datos». */
  metaPixel: '',
  /** LinkedIn Insight Tag: «ID de socio». */
  linkedin: '',
};

/** Versión de la política de cookies: al cambiarla, se vuelve a preguntar a todo el mundo. */
export const VERSION_POLITICA_COOKIES = '2026-11-14';
