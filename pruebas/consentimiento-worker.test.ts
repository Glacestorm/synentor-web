// /api/consentimiento en el Worker (diseño §17; sensible: datos de los visitantes). Guarda solo lo que dice el diseño y
// nunca la IP; sin la base D1 dice que no puede, nunca un éxito falso.
import { describe, expect, it, vi } from 'vitest';
import worker, { type Env } from '../worker/index';
import { borraAntiguos } from '../worker/consentimiento';

const ID = '3f2b1c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d';
const BUENO = { id: ID, v: '2026-11-14', estadisticas: true, publicidad: false };

function d1() {
  const llamadas: { sql: string; args: unknown[] }[] = [];
  const base = {
    prepare: (sql: string) => ({
      bind: (...args: unknown[]) => ({
        run: async () => {
          llamadas.push({ sql, args });
          return { success: true };
        },
      }),
    }),
  };
  return { base: base as unknown as D1Database, llamadas };
}

const env = (extra: Partial<Env> = {}): Env =>
  ({ ASSETS: { fetch: vi.fn() } as unknown as Fetcher, PUBLIC_TURNSTILE_SITEKEY: '', ...extra }) as Env;

const post = (cuerpo: unknown, crudo?: string) =>
  new Request('https://synentor.com/api/consentimiento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '203.0.113.9', 'User-Agent': 'Navegador-Sintetico-Zq' },
    body: crudo ?? JSON.stringify(cuerpo),
  });

const llama = (r: Request, e: Env) => worker.fetch(r as Parameters<typeof worker.fetch>[0], e);

describe('/api/consentimiento', () => {
  it('guarda el identificador, la versión, las dos marcas y la fecha; ni la IP ni el navegador', async () => {
    const { base, llamadas } = d1();
    const r = await llama(post(BUENO), env({ CONSENTIMIENTOS: base }));
    expect(r.status).toBe(200);
    expect(await r.json()).toEqual({ ok: true });
    expect(llamadas).toHaveLength(1);
    const [id, v, est, pub, fecha] = llamadas[0].args;
    expect([id, v, est, pub]).toEqual([ID, '2026-11-14', 1, 0]);
    expect(String(fecha)).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    const todo = JSON.stringify(llamadas);
    expect(todo).not.toContain('203.0.113.9');
    expect(todo).not.toContain('Sintetico-Zq');
  });

  it('sin la base D1 configurada dice que no puede (503), nunca un éxito falso', async () => {
    const r = await llama(post(BUENO), env());
    expect(r.status).toBe(503);
    expect(await r.json()).toEqual({ ok: false, error: 'sin_registro' });
  });

  it('rechaza lo que no tiene la forma esperada sin guardar nada', async () => {
    const { base, llamadas } = d1();
    const e = env({ CONSENTIMIENTOS: base });
    for (const malo of [
      { ...BUENO, id: 'no-es-uuid' },
      { ...BUENO, v: 'ayer' },
      { ...BUENO, estadisticas: 'si' },
      { ...BUENO, publicidad: undefined },
    ]) {
      expect((await llama(post(malo), e)).status).toBe(400);
    }
    expect((await llama(post(null, '{roto'), e)).status).toBe(400);
    expect((await llama(post(null, 'x'.repeat(2000)), e)).status).toBe(400);
    expect((await llama(new Request('https://synentor.com/api/consentimiento'), e)).status).toBe(405);
    expect(llamadas).toHaveLength(0);
  });
});

describe('limpieza diaria', () => {
  it('borra lo de más de 12 meses', async () => {
    const { base, llamadas } = d1();
    await borraAntiguos(env({ CONSENTIMIENTOS: base }), new Date('2026-11-14T03:17:00Z'));
    expect(llamadas).toHaveLength(1);
    expect(llamadas[0].sql).toContain('DELETE FROM consentimientos WHERE fecha < ?1');
    expect(llamadas[0].args).toEqual(['2025-11-14T03:17:00.000Z']);
  });

  it('sin la base no hace nada', async () => {
    await expect(borraAntiguos(env(), new Date())).resolves.toBeUndefined();
  });
});
