// El formulario de contacto en el navegador. Rellena el asunto (fichas) y el mensaje que llegan del configurador, cuenta
// los caracteres y envía a /api/contacto. «Enviado» SOLO si el Worker contesta { ok: true }; cualquier otra cosa se dice
// tal cual y se ofrece el correo de la empresa. Nunca un éxito falso.
import { rellena } from '../i18n/rellena';

interface Mensajes {
  ok: string;
  datos: string;
  robot: string;
  envio: string;
  red: string;
  enviando: string;
  contador: string;
  max: number;
}

export function montaFormulario(form: HTMLFormElement, params: URLSearchParams): void {
  const msg = JSON.parse(form.dataset.mensajes ?? '{}') as Mensajes;
  const estado = form.querySelector<HTMLElement>('.estado-envio')!;
  const alternativa = form.querySelector<HTMLElement>('.alternativa')!;
  const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const mensaje = form.querySelector<HTMLTextAreaElement>('textarea[name="mensaje"]')!;
  const contador = form.querySelector<HTMLElement>('.contador');

  const cuenta = () => {
    if (contador) contador.textContent = rellena(msg.contador, { n: mensaje.value.length, max: msg.max });
  };

  const pedido = params.get('asunto');
  const ficha = pedido
    ? [...form.querySelectorAll<HTMLInputElement>('input[name="asunto"]')].find((i) => i.value === pedido)
    : undefined;
  if (ficha) ficha.checked = true;
  const seleccion = params.get('seleccion');
  if (seleccion && !mensaje.value) mensaje.value = seleccion.slice(0, 4000);
  cuenta();
  mensaje.addEventListener('input', cuenta);

  const dice = (texto: string, error: boolean) => {
    estado.textContent = texto;
    estado.classList.toggle('error', error);
    alternativa.hidden = !error;
  };

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    form.classList.remove('enviado');
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
        // Estadística sin datos de nadie: solo el asunto, de la lista cerrada del formulario (Umami puede no estar).
        (window as { umami?: { track?: (n: string, d?: Record<string, string>) => void } }).umami?.track?.('contacto-enviado', {
          asunto: datos.asunto ?? '',
        });
        form.reset();
        cuenta();
        form.classList.add('enviado');
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
