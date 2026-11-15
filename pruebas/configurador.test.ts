// @vitest-environment jsdom
// El configurador de Precios: pinta y recalcula, y toda cuenta es la de calcula (aquí no hay ninguna).
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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

/** Elige un paquete en el grupo de opciones. */
function elige(raiz: HTMLElement, valor: 'ninguno' | 'completo' | 'obrador') {
  const op = raiz.querySelector<HTMLInputElement>(`input[name="conf-paquete"][value="${valor}"]`)!;
  op.checked = true;
  op.dispatchEvent(new Event('change', { bubbles: true }));
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
      paquete: 'ninguno',
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
      pais: 'AD', modalidad: 'A', pago: 'anual', suite: true, paquete: 'ninguno',
      empresas: [{ modulos: ['compras'], personas: 0 }], usuarios: 5, muvUsuarios: 0,
    }).totalMensual, 'es'));
  });

  it('con el paquete, sus módulos salen incluidos y no se pueden quitar', () => {
    const raiz = monta();
    elige(raiz, 'completo');
    const c = casilla(raiz, 0, 'compras');
    expect(c.checked).toBe(true);
    expect(c.disabled).toBe(true);
    expect(c.closest('label')!.textContent).toContain('Incluido en el paquete');
  });

  it('el paquete es una elección de tres: sin paquete (al principio), Completo u Obrador', () => {
    const raiz = monta();
    const opciones = [...raiz.querySelectorAll<HTMLInputElement>('input[name="conf-paquete"]')];
    expect(opciones.map((o) => o.value)).toEqual(['ninguno', 'completo', 'obrador']);
    expect(opciones.find((o) => o.checked)!.value).toBe('ninguno');
  });

  it('Obrador: incluye Compras, Productos, TPV y RRHH, y el total es 299 €', () => {
    const raiz = monta();
    elige(raiz, 'obrador');
    for (const m of ['compras', 'productos', 'tpv', 'rrhh']) {
      expect(casilla(raiz, 0, m).checked, m).toBe(true);
      expect(casilla(raiz, 0, m).disabled, m).toBe(true);
    }
    expect(casilla(raiz, 0, 'ventas_crm').checked).toBe(false);
    expect(raiz.querySelector('[data-k="total"]')!.textContent).toBe(euros(calcula({
      pais: 'AD', modalidad: 'A', pago: 'anual', suite: true, paquete: 'obrador',
      empresas: [{ modulos: [], personas: 0 }], usuarios: 5, muvUsuarios: 0,
    }).totalMensual, 'es'));
  });

  it('Obrador: el control de costes se ofrece por la diferencia y, marcado, la línea es la del paquete con costes', () => {
    const raiz = monta();
    elige(raiz, 'obrador');
    const c = casilla(raiz, 0, 'costes');
    expect(c.closest('label')!.textContent).toContain('Con el paquete Obrador');
    expect(c.closest('label')!.textContent).toContain(euros(30, 'es'));
    marca(c);
    expect(raiz.querySelector('.conf-lineas')!.textContent).toContain('Paquete Obrador con control de costes');
    expect(raiz.querySelector('.conf-lineas')!.textContent).not.toContain('Control de costes de compra');
  });

  it('marcar el control de costes sin paquete añade Compras', () => {
    const raiz = monta();
    marca(casilla(raiz, 0, 'costes'));
    expect(casilla(raiz, 0, 'compras').checked).toBe(true);
    expect(casilla(raiz, 0, 'compras').disabled).toBe(true);
  });

  it('el resumen que va al formulario dice el paquete elegido', () => {
    const raiz = monta();
    elige(raiz, 'obrador');
    const enlace = raiz.querySelector<HTMLAnchorElement>('[data-k="pedido"]')!;
    const seleccion = decodeURIComponent(enlace.getAttribute('href')!.split('seleccion=')[1]);
    expect(seleccion).toContain('Paquete: Paquete Obrador');
  });

  it('MUV va incluido solo con el Completo: con el Obrador sigue su campo', () => {
    const raiz = monta();
    elige(raiz, 'completo');
    expect(raiz.querySelector('input[data-k="muv"]')).toBeNull();
    elige(raiz, 'obrador');
    expect(raiz.querySelector('input[data-k="muv"]')).not.toBeNull();
  });

  describe('eventos de Umami', () => {
    const conUmami = () => {
      const track = vi.fn();
      (window as unknown as { umami?: unknown }).umami = { track };
      return track;
    };
    afterEach(() => {
      delete (window as unknown as { umami?: unknown }).umami;
    });

    it('«calculadora» sale una sola vez por visita, en el primer cambio', () => {
      const track = conUmami();
      const raiz = monta();
      expect(track).not.toHaveBeenCalled();
      marca(casilla(raiz, 0, 'compras'));
      marca(casilla(raiz, 0, 'fiscal'));
      elige(raiz, 'completo');
      expect(track.mock.calls.filter((c) => c[0] === 'calculadora')).toHaveLength(1);
    });

    it('«Envía mi selección» lleva el evento «pedido-calculadora»', () => {
      const raiz = monta();
      expect(raiz.querySelector('[data-k="pedido"]')!.getAttribute('data-umami-event')).toBe('pedido-calculadora');
    });

    it('sin Umami, el configurador sigue funcionando', () => {
      const raiz = monta();
      expect(() => marca(casilla(raiz, 0, 'compras'))).not.toThrow();
    });
  });
});
