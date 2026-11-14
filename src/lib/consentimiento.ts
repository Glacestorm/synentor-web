// Consentimiento de cookies (diseño §17, aprobado por gerencia el 14/11/2026; guía de la APDA, versión 4). Lógica pura:
// qué herramientas hay, qué se guarda y cuándo se pregunta. El navegador lo usa en src/scripts/cookies.ts.

export type Categoria = 'estadisticas' | 'publicidad';

/** Los identificadores de las cuatro herramientas (src/datos/analitica.ts). Vacío = la herramienta no está. */
export interface Herramientas {
  ga4: string;
  clarity: string;
  metaPixel: string;
  linkedin: string;
}
export type HerramientasValidas = { [K in keyof Herramientas]: string | null };

/** Lo que decide el visitante, con la versión de la política y la fecha (AAAA-MM-DD). */
export interface Decision {
  v: string;
  fecha: string;
  estadisticas: boolean;
  publicidad: boolean;
}

export const NOMBRE_COOKIE = 'synentor_consentimiento';
/** 12 meses (modelo de la APDA); pasado ese plazo se vuelve a preguntar. */
export const DURACION_SEGUNDOS = 365 * 24 * 3600;

/** La forma de cada identificador: si no casa, la herramienta no se carga (un error de copia no mete código en la página). */
const FORMA: Record<keyof Herramientas, RegExp> = {
  ga4: /^G-[A-Z0-9]{6,12}$/,
  clarity: /^[a-z0-9]{6,16}$/,
  metaPixel: /^\d{10,20}$/,
  linkedin: /^\d{4,10}$/,
};

const CATEGORIA: Record<keyof Herramientas, Categoria> = {
  ga4: 'estadisticas',
  clarity: 'estadisticas',
  metaPixel: 'publicidad',
  linkedin: 'publicidad',
};

export function herramientasValidas(h: Herramientas): HerramientasValidas {
  const fuera = {} as HerramientasValidas;
  for (const k of Object.keys(FORMA) as (keyof Herramientas)[]) fuera[k] = FORMA[k].test(h[k]) ? h[k] : null;
  return fuera;
}

/** Las categorías que tienen al menos una herramienta válida, en orden fijo. */
export function categoriasConHerramientas(h: Herramientas): Categoria[] {
  const v = herramientasValidas(h);
  const hay = new Set((Object.keys(v) as (keyof Herramientas)[]).filter((k) => v[k]).map((k) => CATEGORIA[k]));
  return (['estadisticas', 'publicidad'] as const).filter((c) => hay.has(c));
}

export function cookieDe(d: Decision): string {
  const valor = encodeURIComponent(JSON.stringify({ v: d.v, fecha: d.fecha, estadisticas: d.estadisticas, publicidad: d.publicidad }));
  return `${NOMBRE_COOKIE}=${valor}; Max-Age=${DURACION_SEGUNDOS}; Path=/; SameSite=Lax; Secure`;
}

/** La decisión guardada, o null si no hay, está rota, es de otra versión de la política o tiene más de 12 meses. */
export function leeDecision(cookies: string, version: string, ahora: Date): Decision | null {
  const par = cookies
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${NOMBRE_COOKIE}=`));
  if (!par) return null;
  let d: unknown;
  try {
    d = JSON.parse(decodeURIComponent(par.slice(NOMBRE_COOKIE.length + 1)));
  } catch {
    return null;
  }
  if (!d || typeof d !== 'object') return null;
  const o = d as Record<string, unknown>;
  if (o.v !== version || typeof o.fecha !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(o.fecha)) return null;
  if (typeof o.estadisticas !== 'boolean' || typeof o.publicidad !== 'boolean') return null;
  const tomada = new Date(`${o.fecha}T00:00:00Z`).getTime();
  if (Number.isNaN(tomada) || ahora.getTime() - tomada > DURACION_SEGUNDOS * 1000) return null;
  return { v: o.v, fecha: o.fecha, estadisticas: o.estadisticas, publicidad: o.publicidad };
}

/** Se pregunta si hay alguna herramienta y no hay una decisión válida. Sin herramientas, nunca. */
export function hayQuePreguntar(h: Herramientas, decision: Decision | null): boolean {
  return categoriasConHerramientas(h).length > 0 && decision === null;
}
