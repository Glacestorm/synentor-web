// Estadísticas de visitas con Cloudflare Web Analytics (sin cookies). El «token» de la baliza lo da el panel de Cloudflare;
// NO es secreto (va en el código de la página de todas formas). Puesto el 21/11/2026 (sitio synentor.com, instalación
// manual del fragmento: la inserción automática del panel queda apagada). Con él vacío, la página no lleva ninguna baliza.
// Es medición de audiencia sin cookies de la propia web, como la medición que había antes, que no se sometía
// a consentimiento según el criterio que se aplicaba: pendiente de confirmar con el asesor jurídico
// (docs/legal/REVISION-TEXTOS-LEGALES.md, punto 7).
export const CLOUDFLARE_WEB_ANALYTICS: { readonly testimonio: string } = { testimonio: 'e467061e77cd4e5e86f69b9faf768279' };

/** Dominios de producción: una sola lista (la usan el contador de acciones y la página). */
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
