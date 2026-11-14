// Worker de la web: de momento solo sirve los ficheros estáticos (el idioma de entrada y el formulario llegan en las
// tareas 3 y 5 del plan).
export interface Env {
  ASSETS: Fetcher;
  PUBLIC_TURNSTILE_SITEKEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
