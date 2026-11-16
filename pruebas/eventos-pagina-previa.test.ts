// @vitest-environment jsdom
// @vitest-environment-options {"url": "https://synentor-web.glacestorm1969.workers.dev/es/"}
// Fuera de producción (vistas previas, desarrollo) la página no manda ninguna acción.
import { describe, expect, it, vi } from 'vitest';
import { enviaEvento } from '../src/scripts/eventos';

describe('eventos fuera de producción', () => {
  it('P04 en workers.dev no manda nada', () => {
    const beacon = vi.fn().mockReturnValue(true);
    Object.defineProperty(navigator, 'sendBeacon', { value: beacon, configurable: true, writable: true });
    const f = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null));
    enviaEvento('calculadora');
    expect(beacon).not.toHaveBeenCalled();
    expect(f).not.toHaveBeenCalled();
  });
});
