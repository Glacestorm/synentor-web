// @vitest-environment jsdom
// El formulario de contacto en el navegador: rellena desde el configurador, cuenta caracteres y solo dice «enviado» con
// { ok: true }. Cualquier otra respuesta se dice tal cual y enseña el correo de la empresa.
import { afterEach, describe, expect, it, vi } from 'vitest';
import { montaFormulario } from '../src/scripts/formulario';

const MENSAJES = {
  ok: 'Enviado.',
  datos: 'Revisa los campos.',
  robot: 'No hemos podido comprobar.',
  envio: 'No se ha podido enviar.',
  red: 'No hay conexión.',
  enviando: 'Enviando…',
  contador: '{n} de {max}',
  max: 5000,
};

function monta(params = '') {
  document.body.innerHTML = `
    <form id="f" data-idioma="es" data-mensajes='${JSON.stringify(MENSAJES)}'>
      <input name="nombre" required value="Persona Sintetica">
      <input name="correo" type="email" required value="persona@ejemplo.test">
      <label><input type="radio" name="asunto" value="informacion" checked>Info</label>
      <label><input type="radio" name="asunto" value="pedido">Pedido</label>
      <textarea name="mensaje" required></textarea><span class="contador"></span>
      <input name="consentimiento" type="checkbox" required checked>
      <button type="submit">Enviar</button>
      <p class="estado-envio"></p><p class="alternativa" hidden></p>
    </form>`;
  const form = document.getElementById('f') as HTMLFormElement;
  montaFormulario(form, new URLSearchParams(params));
  return form;
}

const envia = async (form: HTMLFormElement) => {
  form.dispatchEvent(new Event('submit', { cancelable: true }));
  await new Promise((r) => setTimeout(r, 0));
  await new Promise((r) => setTimeout(r, 0));
};

afterEach(() => {
  vi.restoreAllMocks();
  delete (window as unknown as { umami?: unknown }).umami;
});

const conUmami = () => {
  const track = vi.fn();
  (window as unknown as { umami?: unknown }).umami = { track };
  return track;
};

describe('formulario de contacto', () => {
  it('llega del configurador con el asunto «pedido» marcado y la selección en el mensaje', () => {
    const form = monta('asunto=pedido&seleccion=' + encodeURIComponent('Compras · 69 €'));
    expect(form.querySelector<HTMLInputElement>('input[value="pedido"]')!.checked).toBe(true);
    expect(form.querySelector('textarea')!.value).toBe('Compras · 69 €');
    expect(form.querySelector('.contador')!.textContent).toBe('14 de 5000');
  });

  it('un asunto que no existe no cambia nada', () => {
    const form = monta('asunto=inventado');
    expect(form.querySelector<HTMLInputElement>('input[value="informacion"]')!.checked).toBe(true);
  });

  it('el contador sigue lo que se escribe', () => {
    const form = monta();
    const t = form.querySelector('textarea')!;
    t.value = 'Hola';
    t.dispatchEvent(new Event('input'));
    expect(form.querySelector('.contador')!.textContent).toBe('4 de 5000');
  });

  it('«enviado» solo con { ok: true }: marca el formulario y envía el asunto elegido', async () => {
    const f = vi.spyOn(globalThis, 'fetch').mockResolvedValue(Response.json({ ok: true }));
    const form = monta('asunto=pedido&seleccion=x');
    await envia(form);
    expect(form.querySelector('.estado-envio')!.textContent).toBe('Enviado.');
    expect(form.classList.contains('enviado')).toBe(true);
    const cuerpo = JSON.parse((f.mock.calls[0][1] as RequestInit).body as string);
    expect(cuerpo.asunto).toBe('pedido');
    expect(cuerpo.consentimiento).toBe(true);
  });

  it('un 200 sin ok:true, un 502 o un fallo de red no son «enviado» y enseñan el correo', async () => {
    for (const r of [Response.json({}), Response.json({ ok: false, error: 'envio' }, { status: 502 })]) {
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(r);
      const form = monta();
      form.querySelector('textarea')!.value = 'Hola';
      await envia(form);
      expect(form.querySelector('.estado-envio')!.textContent).toBe('No se ha podido enviar.');
      expect(form.classList.contains('enviado')).toBe(false);
      expect(form.querySelector<HTMLElement>('.alternativa')!.hidden).toBe(false);
    }
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('red'));
    const form = monta();
    form.querySelector('textarea')!.value = 'Hola';
    await envia(form);
    expect(form.querySelector('.estado-envio')!.textContent).toBe('No hay conexión.');
  });

  it('«contacto-enviado» sale solo con { ok: true }, con el asunto y sin ningún otro dato', async () => {
    const track = conUmami();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(Response.json({ ok: true }));
    const form = monta('asunto=pedido');
    form.querySelector('textarea')!.value = 'Mensaje privado';
    await envia(form);
    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith('contacto-enviado', { asunto: 'pedido' });
    expect(JSON.stringify(track.mock.calls)).not.toMatch(/Persona|ejemplo\.test|privado/);
  });

  it('sin ok:true (respuesta vacía, 502, fallo de red) no se cuenta ningún evento', async () => {
    const track = conUmami();
    for (const r of [Response.json({}), Response.json({ ok: false, error: 'envio' }, { status: 502 })]) {
      vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(r);
      const form = monta();
      form.querySelector('textarea')!.value = 'Hola';
      await envia(form);
    }
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('red'));
    const form = monta();
    form.querySelector('textarea')!.value = 'Hola';
    await envia(form);
    expect(track).not.toHaveBeenCalled();
  });

  it('sin Umami (bloqueador, no-rastrear) el envío funciona igual', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(Response.json({ ok: true }));
    const form = monta();
    form.querySelector('textarea')!.value = 'Hola';
    await envia(form);
    expect(form.classList.contains('enviado')).toBe(true);
  });

  it('un asunto fuera de la lista cerrada del formulario no llega a Umami (el evento sale sin asunto)', async () => {
    const track = conUmami();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(Response.json({ ok: true }));
    const form = monta();
    form.querySelector('textarea')!.value = 'Hola';
    const intruso = document.createElement('input');
    intruso.type = 'hidden';
    intruso.name = 'asunto';
    intruso.value = 'persona@ejemplo.test';
    form.append(intruso);
    await envia(form);
    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith('contacto-enviado', {});
    expect(JSON.stringify(track.mock.calls)).not.toContain('ejemplo.test');
  });
});
