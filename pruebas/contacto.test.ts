// El formulario de contacto en el Worker (plan, tarea 5; sensible: datos de personas). «Enviado» solo si el proveedor del
// correo lo confirma; el mensaje no se guarda en ninguna parte; ninguna respuesta ni ningún registro llevan los datos.
import { afterEach, describe, expect, it, vi } from 'vitest';
import { atiendeContacto, type Dependencias } from '../worker/contacto';
import { componeCorreo, enviaCorreo, verificaTurnstile, type Mensaje } from '../worker/correo';
import worker, { type Env } from '../worker/index';
import { EMPRESA } from '../src/datos/empresa';

// Datos sintéticos y reconocibles: si aparecen en una respuesta o en un registro, la prueba lo ve.
const BUENO = {
  nombre: 'Persona Sintetica Zq',
  correo: 'persona.sintetica.zq@ejemplo.test',
  empresa: 'Empresa Sintetica Zq',
  telefono: '+376 000 001',
  asunto: 'precios',
  mensaje: 'Mensaje sintetico Zq para la prueba',
  consentimiento: true,
  turnstile: 'token-de-prueba',
  idioma: 'es',
  web: '',
};

const env = (extra: Partial<Env> = {}): Env =>
  ({
    ASSETS: { fetch: vi.fn() } as unknown as Fetcher,
    PUBLIC_TURNSTILE_SITEKEY: 'clave-publica',
    TURNSTILE_SECRET: 'secreto-turnstile',
    RESEND_API_KEY: 'clave-resend',
    ...extra,
  }) as Env;

function post(cuerpo: unknown, crudo?: string): Request {
  return new Request('https://synentor.com/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '203.0.113.7' },
    body: crudo ?? JSON.stringify(cuerpo),
  });
}

function deps(turnstile = true, falla = false) {
  return {
    verificaTurnstile: vi.fn(async () => turnstile),
    enviaCorreo: vi.fn(async () => {
      if (falla) throw new Error('fallo del proveedor');
    }),
  } satisfies Dependencias;
}

const json = async (r: Response) => (await r.json()) as { ok: boolean; error?: string };

afterEach(() => vi.restoreAllMocks());

describe('POST /api/contacto', () => {
  it('otro método → 405', async () => {
    const r = await atiendeContacto(new Request('https://synentor.com/api/contacto'), env(), deps());
    expect(r.status).toBe(405);
    expect(await json(r)).toEqual({ ok: false, error: 'metodo' });
  });

  it('sin consentimiento → 400 datos, sin enviar', async () => {
    const d = deps();
    const r = await atiendeContacto(post({ ...BUENO, consentimiento: false }), env(), d);
    expect(r.status).toBe(400);
    expect(await json(r)).toEqual({ ok: false, error: 'datos' });
    expect(d.enviaCorreo).not.toHaveBeenCalled();
  });

  it('correo sin «@», nombre vacío o asunto desconocido → 400 datos', async () => {
    for (const malo of [{ correo: 'sin-arroba' }, { nombre: '   ' }, { asunto: 'inventado' }, { mensaje: '' }]) {
      const r = await atiendeContacto(post({ ...BUENO, ...malo }), env(), deps());
      expect(r.status).toBe(400);
    }
  });

  it('mensaje de más de 5.000 caracteres, cuerpo de más de 20 KB o JSON roto → 400 datos', async () => {
    expect((await atiendeContacto(post({ ...BUENO, mensaje: 'x'.repeat(5001) }), env(), deps())).status).toBe(400);
    expect((await atiendeContacto(post(null, `{"relleno":"${'y'.repeat(21000)}"}`), env(), deps())).status).toBe(400);
    expect((await atiendeContacto(post(null, '{roto'), env(), deps())).status).toBe(400);
  });

  it('campo trampa relleno → 200 ok SIN enviar (al robot no se le avisa)', async () => {
    const d = deps();
    const r = await atiendeContacto(post({ ...BUENO, web: 'http://spam.example' }), env(), d);
    expect(r.status).toBe(200);
    expect(await json(r)).toEqual({ ok: true });
    expect(d.enviaCorreo).not.toHaveBeenCalled();
  });

  it('Turnstile no superado → 403 robot, sin enviar', async () => {
    const d = deps(false);
    const r = await atiendeContacto(post(BUENO), env(), d);
    expect(r.status).toBe(403);
    expect(await json(r)).toEqual({ ok: false, error: 'robot' });
    expect(d.verificaTurnstile).toHaveBeenCalledWith('secreto-turnstile', 'token-de-prueba', '203.0.113.7');
    expect(d.enviaCorreo).not.toHaveBeenCalled();
  });

  it('sin los secretos configurados → 502 envio y no se envía nada (falla cerrado)', async () => {
    for (const falta of [{ TURNSTILE_SECRET: undefined }, { RESEND_API_KEY: undefined }]) {
      const d = deps();
      const r = await atiendeContacto(post(BUENO), env(falta as Partial<Env>), d);
      expect(r.status).toBe(502);
      expect(await json(r)).toEqual({ ok: false, error: 'envio' });
      expect(d.enviaCorreo).not.toHaveBeenCalled();
    }
  });

  it('el proveedor del correo falla → 502 envio (nunca un éxito falso)', async () => {
    const r = await atiendeContacto(post(BUENO), env(), deps(true, true));
    expect(r.status).toBe(502);
    expect(await json(r)).toEqual({ ok: false, error: 'envio' });
  });

  it('todo bien → 200 ok, un solo envío con los datos limpios', async () => {
    const d = deps();
    const r = await atiendeContacto(post(BUENO), env(), d);
    expect(r.status).toBe(200);
    expect(await json(r)).toEqual({ ok: true });
    expect(d.enviaCorreo).toHaveBeenCalledTimes(1);
    const [, m] = d.enviaCorreo.mock.calls[0] as unknown as [Env, Mensaje];
    expect(m).toEqual({
      nombre: BUENO.nombre,
      correo: BUENO.correo,
      empresa: BUENO.empresa,
      telefono: BUENO.telefono,
      asunto: 'precios',
      mensaje: BUENO.mensaje,
      idioma: 'es',
    });
  });

  it('ninguna respuesta ni ningún registro de la consola llevan los datos enviados', async () => {
    const espias = (['log', 'info', 'warn', 'error', 'debug'] as const).map((m) => vi.spyOn(console, m).mockImplementation(() => {}));
    const respuestas: string[] = [];
    for (const [cuerpo, d] of [
      [BUENO, deps()],
      [BUENO, deps(false)],
      [BUENO, deps(true, true)],
      [{ ...BUENO, correo: 'mal' }, deps()],
    ] as const) {
      respuestas.push(await (await atiendeContacto(post(cuerpo), env(), d)).text());
    }
    const registrado = espias.flatMap((s) => s.mock.calls.flat().map((x) => String(x))).join('\n');
    for (const valor of [BUENO.nombre, BUENO.correo, BUENO.empresa, BUENO.telefono, BUENO.mensaje]) {
      expect(respuestas.join('\n')).not.toContain(valor);
      expect(registrado).not.toContain(valor);
    }
  });

  it('el Worker atiende la ruta /api/contacto', async () => {
    const r = await worker.fetch(post(BUENO), env({ TURNSTILE_SECRET: undefined }));
    expect(r.status).toBe(502);
  });
});

describe('el correo', () => {
  const m: Mensaje = {
    nombre: 'Nombre\r\nBcc: intruso@ejemplo.test',
    correo: 'persona.sintetica.zq@ejemplo.test',
    asunto: 'pedido',
    mensaje: 'Hola',
    idioma: 'ca',
  };

  it('va a la empresa, con respuesta al visitante y sin saltos de línea en el asunto', () => {
    const c = componeCorreo(m);
    expect(c.to).toEqual([EMPRESA.correo]);
    expect(c.reply_to).toBe(m.correo);
    expect(c.from).toMatch(/<web@synentor\.com>$/);
    expect(c.subject).not.toMatch(/[\r\n]/);
    expect(c.text).toContain('Hola');
  });

  // La marca fija del correo (formato contacto/1): la lee una máquina (el ERP), así que su forma no puede depender de lo
  // que escriba la persona.
  const completo: Mensaje = {
    nombre: 'Persona de Prueba',
    correo: 'persona.prueba@ejemplo.test',
    empresa: 'Empresa de Prueba, S.L.',
    telefono: '+376 000 000',
    asunto: 'demostracion',
    mensaje: 'Hola, querría ver una demostración.\nGracias.',
    idioma: 'ca',
  };
  const LEGIBLE = [
    'Mensaje desde el formulario de synentor.com',
    '',
    'Asunto: Pedir una demostración',
    'Nombre: Persona de Prueba',
    'Correo: persona.prueba@ejemplo.test',
    'Empresa: Empresa de Prueba, S.L.',
    'Teléfono: +376 000 000',
    'Idioma de la página: ca',
    '',
    'Hola, querría ver una demostración.',
    'Gracias.',
  ].join('\n');
  /** Las líneas del primer bloque, partidas como las partiría Python (`str.splitlines`), que es más estricto que «\n». */
  const bloque = (texto: string) => {
    const lineas = texto.split(/\r\n|[\n\r\v\f\x1c\x1d\x1e\x85\u2028\u2029]/);
    return lineas.slice(0, lineas.indexOf('--- fin ---') + 1);
  };

  it('M01 lleva la cabecera X-Synentor-Formulario: contacto/1', () => {
    expect(componeCorreo(completo).headers).toEqual({ 'X-Synentor-Formulario': 'contacto/1' });
  });

  it('M02 el cuerpo empieza por el bloque de claves fijas, con la clave del asunto y un valor por línea', () => {
    expect(componeCorreo(completo).text.startsWith([
      '--- datos ---',
      'asunto: demostracion',
      'idioma: ca',
      'nombre: Persona de Prueba',
      'correo: persona.prueba@ejemplo.test',
      'empresa: Empresa de Prueba, S.L.',
      'telefono: +376 000 000',
      '--- fin ---',
      '',
      '',
    ].join('\n'))).toBe(true);
  });

  it('M03 la parte legible queda como estaba, detrás del bloque y de una línea en blanco', () => {
    const texto = componeCorreo(completo).text;
    expect(texto.slice(texto.indexOf('--- fin ---\n\n') + '--- fin ---\n\n'.length)).toBe(LEGIBLE);
    expect(componeCorreo(completo).subject).toBe('Web · Pedir una demostración · Persona de Prueba');
  });

  it('M04 la empresa y el teléfono vacíos salen presentes y vacíos', () => {
    const { empresa: _e, telefono: _t, ...sin } = completo;
    expect(bloque(componeCorreo(sin).text)).toEqual([
      '--- datos ---',
      'asunto: demostracion',
      'idioma: ca',
      'nombre: Persona de Prueba',
      'correo: persona.prueba@ejemplo.test',
      'empresa:',
      'telefono:',
      '--- fin ---',
    ]);
  });

  it('M05 ningún valor puede abrir una línea nueva en el bloque, ni con separadores raros', () => {
    for (const sep of ['\n', '\r\n', '\r', '\t', '\v', '\f', '\x1c', '\x1d', '\x1e', '\x85', '\u2028', '\u2029', '\x00']) {
      const c = componeCorreo({
        ...completo,
        nombre: `Ana${sep}correo: intruso@ejemplo.test`,
        empresa: `Empresa${sep}--- fin ---`,
        telefono: `+376${sep}000`,
      });
      const lineas = bloque(c.text);
      expect(lineas, JSON.stringify(sep)).toHaveLength(8);
      expect(lineas[3], JSON.stringify(sep)).toBe('nombre: Ana correo: intruso@ejemplo.test');
      expect(lineas[4]).toBe('correo: persona.prueba@ejemplo.test');
      expect(lineas[5]).toBe('empresa: Empresa --- fin ---');
      expect(lineas[6]).toBe('telefono: +376 000');
    }
    // El correo llega validado sin espacios, pero «\\s» no cubre \x85 ni \x1c: el bloque no depende de esa validación.
    const raro = componeCorreo({ ...completo, correo: 'a\x85nombre: Otra@ejemplo.test' });
    expect(bloque(raro.text)).toHaveLength(8);
    expect(bloque(raro.text)[4]).toBe('correo: a nombre: Otra@ejemplo.test');
  });

  it('M06 un bloque falso escrito en el mensaje no cambia el primero, que es el que vale', () => {
    const falso = '--- datos ---\nasunto: pedido\ncorreo: intruso@ejemplo.test\n--- fin ---';
    const c = componeCorreo({ ...completo, mensaje: falso });
    expect(bloque(c.text)).toEqual(bloque(componeCorreo(completo).text));
    expect(c.text.indexOf('intruso@ejemplo.test')).toBeGreaterThan(c.text.indexOf('--- fin ---'));
    expect(c.text.endsWith(falso)).toBe(true);
  });

  it('M07 el envío al proveedor lleva la cabecera', async () => {
    const f = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(new Response('{}', { status: 200 }));
    await enviaCorreo(env(), completo);
    const [, init] = f.mock.calls[0] as [string, RequestInit];
    expect(JSON.parse(init.body as string).headers).toEqual({ 'X-Synentor-Formulario': 'contacto/1' });
  });

  it('enviaCorreo usa la clave del proveedor y lanza un error si no contesta 2xx', async () => {
    const f = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(new Response('{}', { status: 200 }));
    await enviaCorreo(env(), m);
    const [url, init] = f.mock.calls[0] as [string, RequestInit];
    expect(url).toBe('https://api.resend.com/emails');
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer clave-resend');
    f.mockResolvedValueOnce(new Response('no', { status: 422 }));
    await expect(enviaCorreo(env(), m)).rejects.toThrow();
  });

  it('verificaTurnstile: solo success === true vale; un fallo de red o una respuesta rara no', async () => {
    const f = vi.spyOn(globalThis, 'fetch');
    f.mockResolvedValueOnce(Response.json({ success: true }));
    expect(await verificaTurnstile('s', 't', '203.0.113.7')).toBe(true);
    f.mockResolvedValueOnce(Response.json({ success: 'yes' }));
    expect(await verificaTurnstile('s', 't', null)).toBe(false);
    f.mockResolvedValueOnce(new Response('html', { status: 200 }));
    expect(await verificaTurnstile('s', 't', null)).toBe(false);
    f.mockRejectedValueOnce(new Error('red'));
    expect(await verificaTurnstile('s', 't', null)).toBe(false);
    expect(await verificaTurnstile('s', '', null)).toBe(false);
  });
});

describe('el contador de contactos enviados', () => {
  function conContador(falla = false) {
    const puntos: unknown[] = [];
    const EVENTOS = {
      writeDataPoint: vi.fn((p: unknown) => {
        if (falla) throw new Error('fallo');
        puntos.push(p);
      }),
    };
    return { e: env({ EVENTOS } as unknown as Partial<Env>), puntos };
  }

  it('K01 solo un envío confirmado cuenta, y el punto no lleva datos de la persona', async () => {
    const { e, puntos } = conContador();
    expect((await atiendeContacto(post(BUENO), e, deps())).status).toBe(200);
    expect(puntos).toEqual([{ indexes: ['contacto-enviado'], blobs: ['contacto-enviado', '', '', ''], doubles: [1] }]);
    for (const valor of [BUENO.nombre, BUENO.correo, BUENO.mensaje]) expect(JSON.stringify(puntos)).not.toContain(valor);

    const otros = conContador();
    expect((await atiendeContacto(post(BUENO), otros.e, deps(true, true))).status).toBe(502);
    expect((await atiendeContacto(post(BUENO), otros.e, deps(false))).status).toBe(403);
    expect((await atiendeContacto(post({ ...BUENO, correo: 'mal' }), otros.e, deps())).status).toBe(400);
    expect((await atiendeContacto(post({ ...BUENO, web: 'http://spam.example' }), otros.e, deps())).status).toBe(200);
    expect(otros.puntos).toEqual([]);
  });

  it('K02 si escribir el punto falla, la respuesta sigue siendo 200 ok', async () => {
    const { e } = conContador(true);
    const r = await atiendeContacto(post(BUENO), e, deps());
    expect(r.status).toBe(200);
    expect(await json(r)).toEqual({ ok: true });
  });
});
