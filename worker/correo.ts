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

/**
 * La marca fija del correo, para la máquina que lo lea (el ERP): la cabecera `X-Synentor-Formulario` con esta versión y,
 * al principio del cuerpo, un bloque de claves que no cambian con el idioma. Si el bloque cambia de forma, cambia el número.
 */
export const FORMATO_FORMULARIO = 'contacto/1';
const CABECERA_FORMULARIO = 'X-Synentor-Formulario';

// Todo lo que un lector de líneas puede tomar por un salto (también lo que parte `str.splitlines` de Python: \v, \f,
// \x1c-\x1e, \x85, U+2028 y U+2029) y los demás caracteres de control: en el bloque, cada valor ocupa UNA línea, escriba
// lo que escriba la persona.
const SALTOS_Y_CONTROL = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]+/g;
const valorDeBloque = (s: string | undefined) => (s ?? '').replace(SALTOS_Y_CONTROL, ' ').trim();

/** El bloque de datos: siempre las mismas seis claves y en este orden; la que no tiene valor sale presente y vacía. */
function bloqueDeDatos(m: Mensaje): string[] {
  const campos: [string, string | undefined][] = [
    ['asunto', m.asunto],
    ['idioma', m.idioma],
    ['nombre', m.nombre],
    ['correo', m.correo],
    ['empresa', m.empresa],
    ['telefono', m.telefono],
  ];
  return [
    '--- datos ---',
    ...campos.map(([clave, v]) => {
      const valor = valorDeBloque(v);
      return valor ? `${clave}: ${valor}` : `${clave}:`;
    }),
    '--- fin ---',
  ];
}

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
    headers: { [CABECERA_FORMULARIO]: FORMATO_FORMULARIO },
    // Primero el bloque (lo lee la máquina: vale el PRIMERO, el mensaje libre va detrás) y después la parte legible, igual que siempre.
    text: [...bloqueDeDatos(m), '', ...filas].join('\n'),
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
