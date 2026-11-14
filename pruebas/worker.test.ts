import { describe, expect, it, vi } from 'vitest';
import worker, { type Env } from '../worker/index';

function peticion(url: string, init: RequestInit = {}, pais?: string): Request {
  const r = new Request(url, init);
  if (pais) Object.defineProperty(r, 'cf', { value: { country: pais } });
  return r;
}

function entorno(): Env {
  return {
    ASSETS: { fetch: vi.fn(async () => new Response('estático', { status: 200 })) } as unknown as Fetcher,
    PUBLIC_TURNSTILE_SITEKEY: '',
  };
}

describe('Worker de la web', () => {
  it('«/» redirige al idioma del navegador con 302 y sin guardar nada', async () => {
    const r = await worker.fetch(peticion('https://synentor.com/', { headers: { 'Accept-Language': 'fr-FR,fr;q=0.9' } }), entorno());
    expect(r.status).toBe(302);
    expect(r.headers.get('Location')).toBe('https://synentor.com/fr/');
    expect(r.headers.get('Vary')).toMatch(/Accept-Language/);
    expect(r.headers.get('Set-Cookie')).toBeNull();
  });

  it('«/» desde Andorra sin idioma en el navegador va al catalán', async () => {
    const r = await worker.fetch(peticion('https://synentor.com/', {}, 'AD'), entorno());
    expect(r.headers.get('Location')).toBe('https://synentor.com/ca/');
  });

  it('/api/pais da el país del configurador y no se guarda en caché', async () => {
    const r = await worker.fetch(peticion('https://synentor.com/api/pais', {}, 'ES'), entorno());
    expect(await r.json()).toEqual({ pais: 'ES' });
    expect(r.headers.get('Cache-Control')).toBe('no-store');
  });

  it('lo demás lo sirve el almacén de ficheros estáticos', async () => {
    const env = entorno();
    const r = await worker.fetch(peticion('https://synentor.com/ca/preus/'), env);
    expect(await r.text()).toBe('estático');
    expect(env.ASSETS.fetch).toHaveBeenCalledTimes(1);
  });
});
