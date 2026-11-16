// Reglas del contador de acciones (estadísticas con Cloudflare Analytics Engine). Las usan la página y el Worker: un solo
// sitio para la lista de acciones, el saneado de la campaña y el origen permitido. Un punto del contador lleva solo la
// acción y, en «llegada-campana», fuente, medio y campaña: nunca la IP, el agente de usuario, un identificador, cookies
// ni la dirección de la página.
import { DOMINIOS_PRODUCCION } from '../datos/analitica';

export const ACCIONES = ['demostracion', 'calculadora', 'pedido-calculadora', 'contacto-enviado', 'llegada-campana'] as const;
export type Accion = (typeof ACCIONES)[number];

/** Las que manda la página; «contacto-enviado» la cuenta solo el Worker, cuando el proveedor del correo lo confirma. */
export const ACCIONES_DE_LA_PAGINA: readonly Accion[] = ACCIONES.filter((a) => a !== 'contacto-enviado');

export interface Campana {
  fuente: string;
  medio: string;
  campana: string;
}

const VALOR_CAMPANA = /^[a-z0-9_-]{1,60}$/;

/** Minúsculas, solo a-z, 0-9, «-» y «_», 60 caracteres como mucho. Lo que no cumple, «otro»; lo que falta, «ninguno». */
export function saneaCampana(v: string | null | undefined): string {
  if (v === null || v === undefined || v === '') return 'ninguno';
  const bajo = v.toLowerCase();
  return VALOR_CAMPANA.test(bajo) ? bajo : 'otro';
}

/** La campaña de una dirección (utm_*), o null si no trae ninguno de los tres. Con varios iguales, el primero. */
export function campanaDe(url: URL): Campana | null {
  const p = url.searchParams;
  if (!p.has('utm_source') && !p.has('utm_medium') && !p.has('utm_campaign')) return null;
  return {
    fuente: saneaCampana(p.get('utm_source')),
    medio: saneaCampana(p.get('utm_medium')),
    campana: saneaCampana(p.get('utm_campaign')),
  };
}

const ORIGENES = new Set(DOMINIOS_PRODUCCION.map((d) => `https://${d}`));

/** Origen exacto de producción: por «Origin» o, si no viene, por el origen de «Referer». Si viene Origin, manda él. */
export function origenPermitido(origen: string | null, referente: string | null): boolean {
  if (origen !== null) return ORIGENES.has(origen);
  if (referente === null) return false;
  try {
    return ORIGENES.has(new URL(referente).origin);
  } catch {
    return false;
  }
}

/** La baliza del contador solo se carga en los dominios de producción y con testimonio de consentimiento. */
export function debeCargarBaliza(hostname: string, testimonio: string): boolean {
  return testimonio !== '' && (DOMINIOS_PRODUCCION as readonly string[]).includes(hostname);
}
