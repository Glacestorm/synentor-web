// El correo del formulario (Resend) y la comprobación antirrobot (Turnstile). Ninguna función registra los datos.
import { EMPRESA } from '../src/datos/empresa';
import { textos } from '../src/i18n/t';
import type { Idioma } from '../src/i18n/idiomas';
import type { Env } from './index';

export interface Mensaje {
  nombre: string;
  correo: string;
  empresa?: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
  idioma: Idioma;
}

/** Los asuntos que admite el formulario (los mismos en todos los idiomas: las claves de los textos). */
export const ASUNTOS = Object.keys(textos('es').contacto.formulario.asuntos);

const unaLinea = (s: string) => s.replace(/[\r\n\t]+/g, ' ').trim();

export function componeCorreo(m: Mensaje) {
  const asuntos = textos('es').contacto.formulario.asuntos as Record<string, string>;
  const asunto = asuntos[m.asunto] ?? m.asunto;
  const filas = [
    'Mensaje desde el formulario de synentor.com',
    '',
    `Asunto: ${asunto}`,
    `Nombre: ${unaLinea(m.nombre)}`,
    `Correo: ${m.correo}`,
    m.empresa ? `Empresa: ${unaLinea(m.empresa)}` : null,
    m.telefono ? `Teléfono: ${unaLinea(m.telefono)}` : null,
    `Idioma de la página: ${m.idioma}`,
    '',
    m.mensaje,
  ].filter((f): f is string => f !== null);
  return {
    from: 'Web Synentor <web@synentor.com>',
    to: [EMPRESA.correo],
    reply_to: m.correo,
    subject: unaLinea(`Web · ${asunto} · ${m.nombre}`).slice(0, 150),
    text: filas.join('\n'),
  };
}

/** Envía el correo a la empresa. Lanza un error si el proveedor no lo confirma (2xx). */
export async function enviaCorreo(env: Env, m: Mensaje): Promise<void> {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(componeCorreo(m)),
  });
  if (!r.ok) throw new Error(`El proveedor del correo ha contestado ${r.status}`);
}

/** Comprueba el token de Turnstile con Cloudflare. Ante cualquier duda (red, respuesta rara), no superado. */
export async function verificaTurnstile(secreto: string, token: string, ip: string | null): Promise<boolean> {
  if (!secreto || !token) return false;
  try {
    const cuerpo = new FormData();
    cuerpo.append('secret', secreto);
    cuerpo.append('response', token);
    if (ip) cuerpo.append('remoteip', ip);
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: cuerpo });
    const d = (await r.json()) as { success?: unknown };
    return d.success === true;
  } catch {
    return false;
  }
}
