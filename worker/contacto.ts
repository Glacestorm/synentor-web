// POST /api/contacto (plan, tarea 5). Valida, comprueba que no es un robot y envía el correo a la empresa.
// «Enviado» SOLO si el proveedor del correo lo confirma. El mensaje no se guarda en ninguna parte, y ni las respuestas ni
// los registros llevan los datos de la persona.
import { esIdioma } from '../src/i18n/idiomas';
import { ASUNTOS, enviaCorreo, verificaTurnstile, type Mensaje } from './correo';
import { cuentaEvento } from './evento';
import type { Env } from './index';

export interface Dependencias {
  verificaTurnstile: (secreto: string, token: string, ip: string | null) => Promise<boolean>;
  enviaCorreo: (env: Env, m: Mensaje) => Promise<void>;
}

const MAX_CUERPO = 20 * 1024;
const CORREO = /^[^\s@<>"]{1,64}@[^\s@<>"]+\.[^\s@<>"]{2,}$/;
const TELEFONO = /^[0-9+().\s-]{0,40}$/;

const responde = (status: number, cuerpo: { ok: true } | { ok: false; error: 'datos' | 'robot' | 'envio' | 'metodo' }) =>
  Response.json(cuerpo, { status, headers: { 'Cache-Control': 'no-store' } });
const texto = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

/** Lee y valida el cuerpo. null = datos no válidos (no se dice cuál, para no repetir los datos). */
function leeMensaje(d: Record<string, unknown>): Mensaje | null {
  const m: Mensaje = {
    nombre: texto(d.nombre),
    correo: texto(d.correo),
    empresa: texto(d.empresa) || undefined,
    telefono: texto(d.telefono) || undefined,
    asunto: texto(d.asunto),
    mensaje: texto(d.mensaje),
    idioma: esIdioma(texto(d.idioma)) ? (texto(d.idioma) as Mensaje['idioma']) : 'ca',
  };
  const valido =
    d.consentimiento === true &&
    m.nombre.length > 0 &&
    m.nombre.length <= 120 &&
    m.correo.length <= 200 &&
    CORREO.test(m.correo) &&
    (m.empresa ?? '').length <= 160 &&
    TELEFONO.test(m.telefono ?? '') &&
    ASUNTOS.includes(m.asunto) &&
    m.mensaje.length > 0 &&
    m.mensaje.length <= 5000;
  return valido ? m : null;
}

export async function atiendeContacto(
  request: Request,
  env: Env,
  deps: Dependencias = { verificaTurnstile, enviaCorreo },
): Promise<Response> {
  if (request.method !== 'POST') return responde(405, { ok: false, error: 'metodo' });

  const declarado = Number(request.headers.get('Content-Length') ?? '0');
  if (declarado > MAX_CUERPO) return responde(400, { ok: false, error: 'datos' });
  const bruto = await request.text();
  if (new TextEncoder().encode(bruto).length > MAX_CUERPO) return responde(400, { ok: false, error: 'datos' });

  let d: unknown;
  try {
    d = JSON.parse(bruto);
  } catch {
    return responde(400, { ok: false, error: 'datos' });
  }
  if (!d || typeof d !== 'object' || Array.isArray(d)) return responde(400, { ok: false, error: 'datos' });
  const datos = d as Record<string, unknown>;

  // Campo trampa: una persona no lo ve ni lo rellena. Al robot se le contesta como si nada, y no se envía.
  if (texto(datos.web)) return responde(200, { ok: true });

  const m = leeMensaje(datos);
  if (!m) return responde(400, { ok: false, error: 'datos' });

  // Sin las claves no se puede comprobar ni enviar: se dice, y nunca se da por enviado.
  if (!env.TURNSTILE_SECRET || !env.RESEND_API_KEY) {
    console.error('contacto: faltan las claves de Turnstile o del proveedor del correo');
    return responde(502, { ok: false, error: 'envio' });
  }

  const humano = await deps.verificaTurnstile(env.TURNSTILE_SECRET, texto(datos.turnstile), request.headers.get('CF-Connecting-IP'));
  if (!humano) return responde(403, { ok: false, error: 'robot' });

  try {
    await deps.enviaCorreo(env, m);
  } catch {
    console.error('contacto: el proveedor del correo no ha confirmado el envío');
    return responde(502, { ok: false, error: 'envio' });
  }
  // Solo ahora, con el envío confirmado por el proveedor: cuenta la acción (sin ningún dato de la persona).
  cuentaEvento(env, 'contacto-enviado');
  return responde(200, { ok: true });
}
