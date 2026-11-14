// El formulario de contacto en el navegador. Rellena el asunto y el mensaje que llegan del configurador y envía a
// /api/contacto. «Enviado» SOLO si el Worker contesta { ok: true } (tarea 5); cualquier otra cosa se dice tal cual y se
// ofrece el correo de la empresa. Nunca un éxito falso.
interface Mensajes {
  ok: string;
  datos: string;
  robot: string;
  envio: string;
  red: string;
  enviando: string;
}

export function montaFormulario(form: HTMLFormElement, params: URLSearchParams): void {
  const msg = JSON.parse(form.dataset.mensajes ?? '{}') as Mensajes;
  const estado = form.querySelector<HTMLElement>('.estado-envio')!;
  const alternativa = form.querySelector<HTMLElement>('.alternativa')!;
  const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  // Los tipos de Cloudflare (Worker) y los del navegador definen «Element» distinto: el <select> se lee con su tipo aquí.
  const asunto = form.querySelector('select[name="asunto"]') as unknown as HTMLSelectElement;
  const mensaje = form.querySelector<HTMLTextAreaElement>('textarea[name="mensaje"]')!;

  const pedido = params.get('asunto');
  if (pedido && [...asunto.options].some((o) => o.value === pedido)) asunto.value = pedido;
  const seleccion = params.get('seleccion');
  if (seleccion && !mensaje.value) mensaje.value = seleccion.slice(0, 4000);

  const dice = (texto: string, error: boolean) => {
    estado.textContent = texto;
    estado.classList.toggle('error', error);
    alternativa.hidden = !error;
  };

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      dice(msg.datos, true);
      return;
    }
    const datos = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const token = form.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]')?.value ?? '';
    boton.disabled = true;
    dice(msg.enviando, false);
    try {
      const r = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...datos, consentimiento: datos.consentimiento === 'on', turnstile: token, idioma: form.dataset.idioma }),
      });
      const cuerpo = (await r.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (r.ok && cuerpo?.ok === true) {
        form.reset();
        dice(msg.ok, false);
      } else if (cuerpo?.error === 'datos') dice(msg.datos, true);
      else if (cuerpo?.error === 'robot') dice(msg.robot, true);
      else dice(msg.envio, true);
    } catch {
      dice(msg.red, true);
    } finally {
      boton.disabled = false;
    }
  });
}
