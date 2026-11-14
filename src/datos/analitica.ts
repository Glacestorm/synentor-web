// Estadísticas de visitas con Umami (gerencia, 14/11/2026): sin cookies, así que no hace falta aviso de cookies.
// El identificador de la web NO es secreto (va en el código de la página de todas formas).
export const UMAMI = {
  idWeb: '86d50814-019d-493d-821b-b1b983e2a215',
  script: 'https://cloud.umami.is/script.js',
  /** Solo cuenta las visitas de estos dominios: las pruebas y las vistas previas no ensucian las cifras. */
  dominios: 'synentor.com,www.synentor.com',
} as const;
