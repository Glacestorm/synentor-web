// Worker de la web: atiende solo «/» (idioma de entrada) y «/api/*»; lo demás lo sirve el almacén de ficheros estáticos
// (wrangler.jsonc, run_worker_first). El formulario (/api/contacto) llega en la tarea 5 del plan.
import { elegirIdioma, paisConfigurador } from './idioma';
import { ruta } from '../src/i18n/idiomas';

export interface Env {
  ASSETS: Fetcher;
  PUBLIC_TURNSTILE_SITEKEY: string;
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
      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(ruta('inicio', idioma), url).toString(),
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

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
