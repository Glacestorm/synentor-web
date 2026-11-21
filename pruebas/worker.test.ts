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

  it('R01 «/» con parámetros de campaña los conserva al redirigir al idioma', async () => {
    const q = '?utm_source=linkedin&utm_medium=social&utm_campaign=lanzamiento';
    const r = await worker.fetch(peticion(`https://synentor.com/${q}`, { headers: { 'Accept-Language': 'es-ES,es;q=0.9' } }), entorno());
    expect(r.status).toBe(302);
    expect(r.headers.get('Location')).toBe(`https://synentor.com/es/${q}`);
    expect(r.headers.get('Cache-Control')).toBe('no-store');
  });

  it('R02 «/» conserva cualquier parámetro tal cual llega, sin tocar su codificación', async () => {
    const q = '?utm_campaign=precios-a-la-vista&ref=bolet%C3%ADn%20de%20noviembre&x=1&x=2';
    const r = await worker.fetch(peticion(`https://synentor.com/${q}`, {}, 'AD'), entorno());
    expect(r.headers.get('Location')).toBe(`https://synentor.com/ca/${q}`);
  });

  it('R03 «/» con un salto de línea codificado en un parámetro no parte la cabecera', async () => {
    const r = await worker.fetch(peticion('https://synentor.com/?utm_campaign=a%0D%0AX-Mal:%201', {}, 'AD'), entorno());
    const destino = r.headers.get('Location') ?? '';
    expect(destino).toBe('https://synentor.com/ca/?utm_campaign=a%0D%0AX-Mal:%201');
    expect(destino).not.toMatch(/[\r\n]/);
    expect(r.headers.get('X-Mal')).toBeNull();
  });

  it('R05 «/» con barras o direcciones dentro de un parámetro nunca sale del propio dominio', async () => {
    for (const q of ['?next=//evil.example', '?next=https://evil.example/', '?a=\\\\evil.example', '?/../../evil']) {
      const r = await worker.fetch(peticion(`https://synentor.com/${q}`, {}, 'AD'), entorno());
      const destino = new URL(r.headers.get('Location') ?? '');
      expect(destino.origin, q).toBe('https://synentor.com');
      expect(destino.pathname, q).toBe('/ca/');
    }
  });

  it('R04 «/?» sin nada detrás redirige sin interrogación suelta', async () => {
    const r = await worker.fetch(peticion('https://synentor.com/?', {}, 'AD'), entorno());
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
