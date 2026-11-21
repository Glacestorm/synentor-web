// Worker de la web: atiende solo «/» (idioma de entrada) y «/api/*»; lo demás lo sirve el almacén de ficheros estáticos
// (wrangler.jsonc, run_worker_first). /api/contacto: el formulario (worker/contacto.ts); /api/consentimiento: la prueba
// del consentimiento de cookies (worker/consentimiento.ts); /api/evento: el contador de acciones (worker/evento.ts).
import { elegirIdioma, paisConfigurador } from './idioma';
import { atiendeContacto } from './contacto';
import { atiendeEvento } from './evento';
import { atiendeConsentimiento, borraAntiguos } from './consentimiento';
import { ruta } from '../src/i18n/idiomas';

export interface Env {
  ASSETS: Fetcher;
  PUBLIC_TURNSTILE_SITEKEY: string;
  /** Secretos de Cloudflare (wrangler secret put): nunca en el repositorio. */
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  /** Prueba de los consentimientos de cookies (Cloudflare D1; guía de puesta en marcha, §9.5). */
  CONSENTIMIENTOS?: D1Database;
  /** Contador de acciones (Cloudflare Analytics Engine, conjunto synentor_eventos). Sin él (vistas previas), no se cuenta. */
  EVENTOS?: AnalyticsEngineDataset;
}

/** El país de la conexión que da Cloudflare (no se guarda). */
function paisDe(request: Request): string | null {
  const cf = (request as Request & { cf?: { country?: unknown } }).cf;
  return typeof cf?.country === 'string' ? cf.country : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      const idioma = elegirIdioma({
        cookie: request.headers.get('Cookie'),
        acceptLanguage: request.headers.get('Accept-Language'),
        pais: paisDe(request),
      });
      // Los parámetros de la dirección se conservan tal cual (un enlace con campaña a la portada no pierde sus utm_*).
      const destino = new URL(ruta('inicio', idioma), url);
      destino.search = url.search;
      return new Response(null, {
        status: 302,
        headers: {
          Location: destino.toString(),
          Vary: 'Accept-Language, Cookie',
          'Cache-Control': 'no-store',
        },
      });
    }

    if (url.pathname === '/api/pais') {
      return Response.json(
        { pais: paisConfigurador(paisDe(request)) },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    if (url.pathname === '/api/contacto') return atiendeContacto(request, env);

    if (url.pathname === '/api/consentimiento') return atiendeConsentimiento(request, env);

    if (url.pathname === '/api/evento') return atiendeEvento(request, env);

    return env.ASSETS.fetch(request);
  },

  /** Cada día: borra las pruebas de consentimiento de más de 12 meses. */
  async scheduled(_evento: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(borraAntiguos(env, new Date()));
  },
} satisfies ExportedHandler<Env>;
