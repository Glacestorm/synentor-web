// POST /api/evento: el contador de acciones de la web (Cloudflare Analytics Engine). Solo cuenta; no guarda nada de la
// persona: el punto lleva la acción y, en «llegada-campana», fuente, medio y campaña saneados. Nunca la IP, el agente de
// usuario, un identificador ni la dirección de la página. La fecha la pone Cloudflare. Un fallo al escribir nunca cambia
// la respuesta.
import { ACCIONES_DE_LA_PAGINA, origenPermitido, saneaCampana, type Accion, type Campana } from '../src/lib/eventos';
import type { Env } from './index';

const MAX_CUERPO = 512; // bytes

const responde = (status: number) => new Response(null, { status, headers: { 'Cache-Control': 'no-store' } });

/**
 * Escribe un punto: `blobs` = acción, fuente, medio, campaña (vacíos sin campaña). El robot del ERP cuenta con
 * SUM(_sample_interval) agrupando por blob1 a blob4. Nunca lanza; sin el enlace (vistas previas), no hace nada.
 */
export function cuentaEvento(env: Env, accion: Accion, campana?: Campana): void {
  if (!env.EVENTOS) return;
  try {
    env.EVENTOS.writeDataPoint({
      indexes: [accion],
      blobs: [accion, campana?.fuente ?? '', campana?.medio ?? '', campana?.campana ?? ''],
      doubles: [1],
    });
  } catch {
    console.error('evento: no se ha podido escribir el punto');
  }
}

export async function atiendeEvento(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return responde(405);

  const declarado = Number(request.headers.get('Content-Length') ?? '0');
  if (declarado > MAX_CUERPO) return responde(400);
  const bruto = await request.text();
  if (new TextEncoder().encode(bruto).length > MAX_CUERPO) return responde(400);

  if (!origenPermitido(request.headers.get('Origin'), request.headers.get('Referer'))) return responde(403);

  let d: unknown;
  try {
    d = JSON.parse(bruto);
  } catch {
    return responde(400);
  }
  if (!d || typeof d !== 'object' || Array.isArray(d)) return responde(400);
  const datos = d as Record<string, unknown>;

  const accion = ACCIONES_DE_LA_PAGINA.find((a) => a === datos.accion);
  if (!accion) return responde(400);

  const texto = (v: unknown) => (typeof v === 'string' ? v : null);
  const campana =
    accion === 'llegada-campana'
      ? { fuente: saneaCampana(texto(datos.fuente)), medio: saneaCampana(texto(datos.medio)), campana: saneaCampana(texto(datos.campana)) }
      : undefined;

  cuentaEvento(env, accion, campana);
  return responde(204);
}
