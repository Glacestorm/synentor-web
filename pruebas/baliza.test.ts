// @vitest-environment jsdom
// El cargador de la baliza de Cloudflare Web Analytics: solo en los dominios de producción y solo con testimonio.
import { beforeEach, describe, expect, it } from 'vitest';
import { cargaBaliza } from '../src/scripts/baliza';

const SRC = 'https://static.cloudflareinsights.com/beacon.min.js';
const balizas = () => Array.from(document.querySelectorAll<HTMLScriptElement>(`script[src="${SRC}"]`));

describe('cargaBaliza', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('B01 con testimonio en synentor.com añade un solo script con su token', () => {
    expect(cargaBaliza(document, 'synentor.com', 'tok123')).toBe(true);
    const s = balizas();
    expect(s).toHaveLength(1);
    expect(s[0]!.getAttribute('data-cf-beacon')).toBe('{"token":"tok123"}');
  });

  it('B02 igual en www.synentor.com', () => {
    expect(cargaBaliza(document, 'www.synentor.com', 'tok123')).toBe(true);
    expect(balizas()).toHaveLength(1);
  });

  it('B03 en una vista previa o en local no añade nada', () => {
    expect(cargaBaliza(document, 'claude-x.synentor.workers.dev', 'tok123')).toBe(false);
    expect(cargaBaliza(document, 'localhost', 'tok123')).toBe(false);
    expect(balizas()).toHaveLength(0);
  });

  it('B04 con el testimonio vacío no añade nada, ni en producción', () => {
    expect(cargaBaliza(document, 'synentor.com', '')).toBe(false);
    expect(balizas()).toHaveLength(0);
  });

  it('B05 dos llamadas dejan un solo script', () => {
    expect(cargaBaliza(document, 'synentor.com', 'tok123')).toBe(true);
    expect(cargaBaliza(document, 'synentor.com', 'tok123')).toBe(false);
    expect(balizas()).toHaveLength(1);
  });
});
