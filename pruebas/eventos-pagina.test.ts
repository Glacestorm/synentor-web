// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://synentor.com/es/"}
// Las acciones de la página hacia /api/evento: solo en producción, solo las de la lista, sin lanzar nunca.
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { enviaEvento, iniciaEventos } from '../src/scripts/eventos';

const beacon = vi.fn();
const buscaCuerpo = async (c: unknown[]): Promise<string> => (c[1] as Blob).text();

beforeEach(() => {
  beacon.mockReset().mockReturnValue(true);
  Object.defineProperty(navigator, 'sendBeacon', { value: beacon, configurable: true, writable: true });
  document.body.innerHTML = '';
});
afterEach(() => {
  vi.restoreAllMocks();
});

const loc = (busqueda = '') => ({ href: `https://synentor.com/es/${busqueda}` }) as Location;

describe('eventos de la página', () => {
  it('P01 un clic en data-evento (o en un hijo) manda {"accion":"demostracion"} a /api/evento', async () => {
    document.body.innerHTML = '<a id="a" data-evento="demostracion" href="#"><span id="s">Pide</span></a>';
    iniciaEventos(document, loc());
    document.getElementById('a')!.click();
    document.getElementById('s')!.click();
    expect(beacon).toHaveBeenCalledTimes(2);
    for (const c of beacon.mock.calls) {
      expect(c[0]).toBe('/api/evento');
      expect(await buscaCuerpo(c)).toBe('{"accion":"demostracion"}');
    }
  });

  it('P02 «contacto-enviado» y una acción desconocida no mandan nada', () => {
    enviaEvento('contacto-enviado');
    document.body.innerHTML = '<a id="a" data-evento="otra" href="#">x</a>';
    iniciaEventos(document, loc());
    document.getElementById('a')!.click();
    expect(beacon).not.toHaveBeenCalled();
  });

  it('P03 una llegada con utm_* manda una sola «llegada-campana» saneada; sin utm_*, nada', async () => {
    iniciaEventos(document, loc('?utm_source=LinkedIn&utm_medium=social'));
    expect(beacon).toHaveBeenCalledTimes(1);
    expect(JSON.parse(await buscaCuerpo(beacon.mock.calls[0]))).toEqual({
      accion: 'llegada-campana',
      fuente: 'linkedin',
      medio: 'social',
      campana: 'ninguno',
    });
    beacon.mockClear();
    iniciaEventos(document, loc());
    expect(beacon).not.toHaveBeenCalled();
  });

  it('P05 si sendBeacon devuelve false se usa fetch con keepalive; si fetch rechaza, no lanza', async () => {
    beacon.mockReturnValue(false);
    const f = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('red'));
    expect(() => enviaEvento('calculadora')).not.toThrow();
    expect(f).toHaveBeenCalledTimes(1);
    const [url, init] = f.mock.calls[0];
    expect(url).toBe('/api/evento');
    expect(init).toMatchObject({ method: 'POST', keepalive: true });
    await Promise.resolve();
  });

  it('sin sendBeacon se usa fetch', () => {
    Object.defineProperty(navigator, 'sendBeacon', { value: undefined, configurable: true, writable: true });
    const f = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null));
    enviaEvento('calculadora');
    expect(f).toHaveBeenCalledTimes(1);
  });

  it('iniciaEventos no lanza aunque el entorno falle', () => {
    expect(() => iniciaEventos(null as unknown as Document, loc())).not.toThrow();
    expect(() => iniciaEventos(document, { href: 'no es una dirección' } as Location)).not.toThrow();
  });
});
