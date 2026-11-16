// POST /api/evento (plan de estadísticas, tarea 1; sensible: cuenta sin guardar nada de la persona).
import { describe, expect, it, vi } from 'vitest';
import worker, { type Env } from '../worker/index';

interface Punto {
  indexes: string[];
  blobs: string[];
  doubles: number[];
}

function entorno(extra: Partial<Env> = {}) {
  const puntos: Punto[] = [];
  const EVENTOS = { writeDataPoint: vi.fn((p: Punto) => void puntos.push(p)) };
  const env = { ASSETS: { fetch: vi.fn() } as unknown as Fetcher, PUBLIC_TURNSTILE_SITEKEY: '', EVENTOS, ...extra } as unknown as Env;
  return { env, puntos, EVENTOS };
}

const IP = '198.51.100.77';
const AGENTE = 'AgenteSintetico/9.9 (Zq)';

function post(cuerpo: unknown, cabeceras: Record<string, string> = { Origin: 'https://synentor.com' }, crudo?: string): Request {
  return new Request('https://synentor.com/api/evento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': IP, 'User-Agent': AGENTE, ...cabeceras },
    body: crudo ?? JSON.stringify(cuerpo),
  });
}

describe('POST /api/evento', () => {
  it('E01 una acción de la página, con origen bueno → 204 y un punto', async () => {
    const { env, puntos } = entorno();
    const r = await worker.fetch(post({ accion: 'demostracion' }), env);
    expect(r.status).toBe(204);
    expect(r.headers.get('Cache-Control')).toBe('no-store');
    expect(puntos).toEqual([{ indexes: ['demostracion'], blobs: ['demostracion', '', '', ''], doubles: [1] }]);
  });

  it('E02 otro método → 405 y ningún punto', async () => {
    const { env, puntos } = entorno();
    const r = await worker.fetch(new Request('https://synentor.com/api/evento', { headers: { Origin: 'https://synentor.com' } }), env);
    expect(r.status).toBe(405);
    expect(puntos).toEqual([]);
  });

  it('E03 más de 512 bytes (en bytes, no en caracteres) o no JSON → 400', async () => {
    const { env, puntos } = entorno();
    const grande = { accion: 'demostracion', x: '€'.repeat(180) };
    expect((await worker.fetch(post(grande), env)).status).toBe(400);
    // Con un Content-Length declarado que no es el real (10), lo leído también se mide.
    const sinDeclarar = post(null, { Origin: 'https://synentor.com', 'Content-Length': '10' }, JSON.stringify(grande));
    expect((await worker.fetch(sinDeclarar, env)).status).toBe(400);
    expect((await worker.fetch(post(null, undefined, '{roto'), env)).status).toBe(400);
    expect(puntos).toEqual([]);
  });

  it('E10 un POST válido con su Content-Length real → 204 y un punto', async () => {
    const { env, puntos } = entorno();
    const cuerpo = JSON.stringify({ accion: 'demostracion' });
    const longitud = String(new TextEncoder().encode(cuerpo).length);
    const r = await worker.fetch(post(null, { Origin: 'https://synentor.com', 'Content-Length': longitud }, cuerpo), env);
    expect(r.status).toBe(204);
    expect(puntos).toHaveLength(1);
  });

  it('E11 un Content-Length declarado de 600 → 400 sin leer el cuerpo y sin punto', async () => {
    const { env, puntos } = entorno();
    const peticion = post(null, { Origin: 'https://synentor.com', 'Content-Length': '600' }, JSON.stringify({ accion: 'demostracion' }));
    const r = await worker.fetch(peticion, env);
    expect(r.status).toBe(400);
    expect(puntos).toEqual([]);
    expect(peticion.bodyUsed).toBe(false);
  });

  it('E04 contacto-enviado o una acción desconocida → 400', async () => {
    const { env, puntos } = entorno();
    for (const accion of ['contacto-enviado', 'otra']) {
      expect((await worker.fetch(post({ accion }), env)).status).toBe(400);
    }
    expect((await worker.fetch(post([]), env)).status).toBe(400);
    expect(puntos).toEqual([]);
  });

  it('E05 origen malo o ausente → 403 sin contar', async () => {
    const { env, puntos } = entorno();
    const malos: Record<string, string>[] = [
      { Origin: 'https://synentor.com.ejemplo.net' },
      { Origin: 'http://synentor.com' },
      { Origin: 'null' },
      { Referer: 'https://otra.example/' },
      {},
      { Origin: 'https://otra.example', Referer: 'https://synentor.com/' },
    ];
    for (const c of malos) expect((await worker.fetch(post({ accion: 'demostracion' }, c), env)).status).toBe(403);
    expect(puntos).toEqual([]);
  });

  it('E05b el Referer vale si no hay Origin', async () => {
    const { env, puntos } = entorno();
    const r = await worker.fetch(post({ accion: 'calculadora' }, { Referer: 'https://www.synentor.com/es/precios/' }), env);
    expect(r.status).toBe(204);
    expect(puntos).toHaveLength(1);
  });

  it('E06 llegada-campana: el Worker vuelve a sanear lo que llega', async () => {
    const { env, puntos } = entorno();
    const r = await worker.fetch(post({ accion: 'llegada-campana', fuente: 'LinkedIn', medio: 'social', campana: 'Nov 2026' }), env);
    expect(r.status).toBe(204);
    expect(puntos).toEqual([{ indexes: ['llegada-campana'], blobs: ['llegada-campana', 'linkedin', 'social', 'otro'], doubles: [1] }]);
  });

  it('E06b llegada-campana con un valor que falta lo pone «ninguno»; otras acciones ignoran la campaña', async () => {
    const { env, puntos } = entorno();
    await worker.fetch(post({ accion: 'llegada-campana', fuente: 'x' }), env);
    await worker.fetch(post({ accion: 'calculadora', fuente: 'x', medio: 'y', campana: 'z' }), env);
    expect(puntos[0].blobs).toEqual(['llegada-campana', 'x', 'ninguno', 'ninguno']);
    expect(puntos[1].blobs).toEqual(['calculadora', '', '', '']);
  });

  it('E07 sin el enlace EVENTOS → 204 y nada más', async () => {
    const { env } = entorno({ EVENTOS: undefined });
    const r = await worker.fetch(post({ accion: 'demostracion' }), env);
    expect(r.status).toBe(204);
  });

  it('E08 un fallo al escribir no cambia la respuesta', async () => {
    const { env, EVENTOS } = entorno();
    EVENTOS.writeDataPoint.mockImplementation(() => {
      throw new Error('fallo');
    });
    const r = await worker.fetch(post({ accion: 'demostracion' }), env);
    expect(r.status).toBe(204);
  });

  it('E09 ningún punto lleva la IP ni el agente de usuario', async () => {
    const { env, puntos } = entorno();
    await worker.fetch(post({ accion: 'demostracion' }), env);
    await worker.fetch(post({ accion: 'llegada-campana', fuente: 'a', medio: 'b', campana: 'c' }), env);
    const todo = JSON.stringify(puntos);
    expect(todo).not.toContain(IP);
    expect(todo).not.toContain('AgenteSintetico');
    expect(todo).not.toContain('Zq');
  });
});
