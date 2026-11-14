// /api/consentimiento (diseño §17): apunta cada decisión sobre las cookies como prueba del consentimiento, en Cloudflare D1.
// Solo un identificador al azar (lo genera el navegador para cada decisión), la versión de la política, las dos marcas y la
// fecha. Nunca la IP, el navegador ni nada que identifique a la persona. Se conserva 12 meses.
import type { Env } from './index';

const ID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const VERSION = /^\d{4}-\d{2}-\d{2}$/;
const MAXIMO = 1024;
export const CONSERVACION_DIAS = 365;

const json = (cuerpo: unknown, status: number) =>
  Response.json(cuerpo, { status, headers: { 'Cache-Control': 'no-store' } });

export async function atiendeConsentimiento(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ ok: false, error: 'metodo' }, 405);
  const texto = await request.text();
  if (texto.length > MAXIMO) return json({ ok: false, error: 'datos' }, 400);
  let d: Record<string, unknown>;
  try {
    d = JSON.parse(texto) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'datos' }, 400);
  }
  if (!d || typeof d !== 'object') return json({ ok: false, error: 'datos' }, 400);
  const { id, v, estadisticas, publicidad } = d;
  if (typeof id !== 'string' || !ID.test(id) || typeof v !== 'string' || !VERSION.test(v)) return json({ ok: false, error: 'datos' }, 400);
  if (typeof estadisticas !== 'boolean' || typeof publicidad !== 'boolean') return json({ ok: false, error: 'datos' }, 400);
  if (!env.CONSENTIMIENTOS) return json({ ok: false, error: 'sin_registro' }, 503);
  try {
    await env.CONSENTIMIENTOS.prepare(
      'INSERT INTO consentimientos (id, version, estadisticas, publicidad, fecha) VALUES (?1, ?2, ?3, ?4, ?5) ON CONFLICT (id) DO NOTHING',
    )
      .bind(id, v, estadisticas ? 1 : 0, publicidad ? 1 : 0, new Date().toISOString())
      .run();
  } catch {
    console.error('consentimiento: no se ha podido guardar');
    return json({ ok: false, error: 'registro' }, 502);
  }
  return json({ ok: true }, 200);
}

/** Borra las pruebas de más de 12 meses (tarea diaria del Worker). */
export async function borraAntiguos(env: Env, ahora: Date): Promise<void> {
  if (!env.CONSENTIMIENTOS) return;
  const limite = new Date(ahora.getTime() - CONSERVACION_DIAS * 86400000).toISOString();
  await env.CONSENTIMIENTOS.prepare('DELETE FROM consentimientos WHERE fecha < ?1').bind(limite).run();
}
