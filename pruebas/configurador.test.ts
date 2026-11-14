// @vitest-environment jsdom
// El configurador de Precios: pinta y recalcula, y toda cuenta es la de calcula (aquí no hay ninguna).
import { beforeEach, describe, expect, it } from 'vitest';
import { montaConfigurador } from '../src/scripts/configurador';
import { textosConfigurador } from '../src/lib/textosConfigurador';
import { calcula } from '../src/lib/precios/calcula';
import { euros } from '../src/lib/formato';

function monta(pais: 'AD' | 'ES' = 'AD') {
  document.body.innerHTML = '<div id="conf"></div>';
  const raiz = document.getElementById('conf')!;
  raiz.dataset.textos = JSON.stringify(textosConfigurador('es'));
  raiz.dataset.contacto = '/es/contacto/';
  montaConfigurador(raiz, 'es', pais);
  return raiz;
}

const casilla = (raiz: HTMLElement, empresa: number, modulo: string) =>
  raiz.querySelector<HTMLInputElement>(`input[data-k="modulo-${empresa}-${modulo}"]`)!;

function marca(el: HTMLInputElement) {
  el.checked = !el.checked;
  el.dispatchEvent(new Event('change', { bubbles: true }));
}

describe('configurador', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('marcar Prevención del blanqueo marca y bloquea Jurídico y RRHH, y dice por qué', () => {
    const raiz = monta();
    marca(casilla(raiz, 0, 'pbc'));
    for (const m of ['juridico', 'rrhh']) {
      const c = casilla(raiz, 0, m);
      expect(c.checked).toBe(true);
      expect(c.disabled).toBe(true);
      expect(c.closest('label')!.textContent).toContain('Añadido: lo requiere otro módulo');
    }
  });

  it('en España, RRHH lleva «En desarrollo inminente» y el botón dice «Pide tu propuesta»', () => {
    const raiz = monta('ES');
    marca(casilla(raiz, 0, 'rrhh'));
    expect(casilla(raiz, 0, 'rrhh').closest('label')!.textContent).toContain('En desarrollo inminente');
    expect(raiz.querySelector('[data-k="cta"]')!.textContent).toBe('Pide tu propuesta');
  });

  it('el total que se ve es el de calcula con los mismos datos', () => {
    const raiz = monta();
    for (const m of ['compras', 'rrhh', 'fiscal', 'productos', 'tpv']) marca(casilla(raiz, 0, m));
    const personas = raiz.querySelector<HTMLInputElement>('input[data-k="personas-0"]')!;
    personas.value = '20';
    personas.dispatchEvent(new Event('change', { bubbles: true }));
    const esperado = calcula({
      pais: 'AD',
      modalidad: 'A',
      pago: 'anual',
      suite: true,
      paquete: false,
      empresas: [{ modulos: ['compras', 'rrhh', 'fiscal', 'productos', 'tpv'], personas: 20 }],
      usuarios: 5,
      muvUsuarios: 0,
    });
    expect(esperado.totalMensual).toBe(787.93);
    expect(raiz.querySelector('[data-k="total"]')!.textContent).toBe(euros(esperado.totalMensual, 'es'));
  });

  it('«Envía mi selección» lleva al formulario con el resumen y sin datos de nadie', () => {
    const raiz = monta();
    marca(casilla(raiz, 0, 'compras'));
    const enlace = raiz.querySelector<HTMLAnchorElement>('[data-k="pedido"]')!;
    const url = new URL(enlace.href, 'https://synentor.com');
    expect(url.pathname).toBe('/es/contacto/');
    expect(url.searchParams.get('asunto')).toBe('pedido');
    expect(url.searchParams.get('seleccion')).toContain('Compras inteligentes');
    expect(url.searchParams.get('seleccion')).toContain(euros(calcula({
      pais: 'AD', modalidad: 'A', pago: 'anual', suite: true, paquete: false,
      empresas: [{ modulos: ['compras'], personas: 0 }], usuarios: 5, muvUsuarios: 0,
    }).totalMensual, 'es'));
  });

  it('con el paquete, sus módulos salen incluidos y no se pueden quitar', () => {
    const raiz = monta();
    const paquete = raiz.querySelector<HTMLInputElement>('input[data-k="paquete"]')!;
    marca(paquete);
    const c = casilla(raiz, 0, 'compras');
    expect(c.checked).toBe(true);
    expect(c.disabled).toBe(true);
    expect(c.closest('label')!.textContent).toContain('Incluido en el paquete');
  });
});
