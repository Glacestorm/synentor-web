// El configurador de Precios (diseño §8, plan tarea 4). Pinta los controles y el presupuesto, y recalcula con cada cambio.
// Toda cuenta es la de `calcula`: aquí no se suma nada. Los textos llegan en `data-textos` (solo los de su idioma) y la
// dirección del formulario en `data-contacto`. «Envía mi selección» lleva al formulario con el resumen: sin pago.
import { calcula, resuelveDependencias, type ModuloId, type Pais, type Seleccion } from '../lib/precios/calcula';
import { estadoModulo, PAISES } from '../lib/precios/disponibilidad';
import { MODULOS, TARIFA } from '../lib/precios/tarifa';
import { euros, porcentaje } from '../lib/formato';
import { rellena } from '../i18n/rellena';
import type { Idioma } from '../i18n/idiomas';
import type { TextosConfigurador } from '../lib/textosConfigurador';

const MAX_EMPRESAS = 20;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

interface EmpresaEstado {
  modulos: ModuloId[];
  personas: number;
}

export function montaConfigurador(raiz: HTMLElement, idioma: Idioma, paisInicial: Pais): void {
  const tx = JSON.parse(raiz.dataset.textos ?? '{}') as TextosConfigurador;
  const c = tx.conf;
  const contacto = raiz.dataset.contacto ?? '#';
  const eur = (n: number) => euros(n, idioma);

  const estado: Omit<Seleccion, 'empresas'> & { empresas: EmpresaEstado[] } = {
    pais: (PAISES as readonly string[]).includes(paisInicial) ? paisInicial : 'OTRO',
    modalidad: 'A',
    pago: 'anual',
    suite: true,
    paquete: false,
    empresas: [{ modulos: [], personas: 0 }],
    usuarios: TARIFA.base.usuariosIncluidos,
    muvUsuarios: 0,
  };

  const numero = (v: string) => {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
  };

  /** Los módulos de cada empresa: los que la persona marcó, los del paquete y los que se añaden por dependencia. */
  function resuelto(i: number) {
    const incluidos: readonly ModuloId[] = i === 0 && estado.suite && estado.paquete ? TARIFA.paquete.incluye : [];
    const pedidos = estado.empresas[i].modulos;
    const r = resuelveDependencias([...new Set([...pedidos, ...incluidos])]);
    return { modulos: r.modulos, incluidos, anadidos: r.modulos.filter((m) => !pedidos.includes(m) && !incluidos.includes(m)) };
  }

  const nombreEmpresa = (i: number) => (i === 0 ? c.principal : rellena(c.empresa, { n: i + 1 }));

  function controles(): string {
    const paises = PAISES.map(
      (p) => `<option value="${p}"${p === estado.pais ? ' selected' : ''}>${esc(c.paises[p])}</option>`,
    ).join('');
    const radio = (grupo: string, valor: string, texto: string, actual: string) =>
      `<label class="conf-op"><input type="radio" name="conf-${grupo}" data-k="${grupo}-${valor}" value="${valor}"${valor === actual ? ' checked' : ''}> ${esc(texto)}</label>`;

    let html = `<div class="conf-fila">
      <label class="conf-campo">${esc(c.pais)}<select data-k="pais">${paises}</select></label>
      <fieldset class="conf-grupo"><legend>${esc(c.modalidad)}</legend>
        ${radio('modalidad', 'A', c.modalidadA, estado.modalidad)}
        ${radio('modalidad', 'B', rellena(c.modalidadB, { precio: eur(TARIFA.modalidadB) }), estado.modalidad)}
      </fieldset>
      <fieldset class="conf-grupo"><legend>${esc(c.pago)}</legend>
        ${radio('pago', 'anual', c.anual, estado.pago)}
        ${radio('pago', 'mensual', rellena(c.mensual, { porcentaje: porcentaje(TARIFA.recargoMensual, idioma) }), estado.pago)}
      </fieldset>
    </div>
    <label class="conf-op conf-destacado"><input type="checkbox" data-k="suite"${estado.suite ? ' checked' : ''}> ${esc(c.suite)}</label>`;

    if (estado.suite) {
      html += `<label class="conf-op"><input type="checkbox" data-k="paquete"${estado.paquete ? ' checked' : ''}> ${esc(c.paquete)}
          <small>${esc(rellena(c.paqueteTexto, { usuarios: TARIFA.paquete.usuariosIncluidos, precio: eur(TARIFA.paquete.cuota) }))}</small></label>
        <label class="conf-campo">${esc(c.usuarios)}<input type="number" min="1" inputmode="numeric" data-k="usuarios" value="${estado.usuarios}"></label>`;

      estado.empresas.forEach((empresa, i) => {
        const r = resuelto(i);
        const casillas = MODULOS.map((m) => {
          const marcado = r.modulos.includes(m);
          const incluido = r.incluidos.includes(m);
          const anadido = r.anadidos.includes(m);
          const est = estadoModulo(estado.pais, m);
          const nota = incluido ? c.incluidoPaquete : anadido ? c.anadidoPor : '';
          return `<label class="conf-modulo${marcado ? ' marcado' : ''}">
              <input type="checkbox" data-k="modulo-${i}-${m}"${marcado ? ' checked' : ''}${incluido || anadido ? ' disabled' : ''}>
              <span class="conf-nombre">${esc(tx.modulos[m])}</span>
              <span class="conf-estado estado-${est}">${esc(c.estados[est])}</span>
              ${nota ? `<span class="conf-nota">${esc(nota)}</span>` : ''}
            </label>`;
        }).join('');
        const personas = r.modulos.includes('rrhh')
          ? `<label class="conf-campo">${esc(c.personas)}<input type="number" min="0" inputmode="numeric" data-k="personas-${i}" value="${empresa.personas}"></label>`
          : '';
        const quitar = i > 0 ? `<button type="button" class="conf-quitar" data-k="quitar-${i}">${esc(c.quitarEmpresa)}</button>` : '';
        html += `<fieldset class="conf-empresa"><legend>${esc(nombreEmpresa(i))}</legend>
            <div class="conf-base"><span class="conf-nombre">${esc(tx.base)}</span>
              <span class="conf-estado estado-${estadoModulo(estado.pais, 'base')}">${esc(c.estados[estadoModulo(estado.pais, 'base')])}</span></div>
            <div class="conf-modulos">${casillas}</div>${personas}${quitar}</fieldset>`;
      });
      if (estado.empresas.length < MAX_EMPRESAS) {
        html += `<button type="button" class="boton boton-contorno" data-k="anadir">${esc(c.anadirEmpresa)}</button>`;
      }
    }

    if (!(estado.suite && estado.paquete)) {
      html += `<label class="conf-campo">${esc(c.muvUsuarios)}<input type="number" min="0" inputmode="numeric" data-k="muv" value="${estado.muvUsuarios}"></label>`;
    }
    return html;
  }

  function seleccion(): Seleccion {
    return { ...estado, empresas: estado.empresas.map((e) => ({ modulos: [...e.modulos], personas: e.personas })) };
  }

  function etiquetaLinea(clave: string, empresa: number | null): string {
    const base = clave.startsWith('modulo:')
      ? tx.modulos[clave.slice('modulo:'.length) as ModuloId]
      : clave === 'muv-usuarios'
        ? tx.muv
        : (c.lineas as Record<string, string>)[clave] ?? clave;
    return empresa !== null && empresa > 0 ? `${base} · ${nombreEmpresa(empresa)}` : base;
  }

  /** El resumen en texto que viaja al formulario: la selección y los importes de calcula, sin datos de ninguna persona. */
  function textoPedido(): string {
    const p = calcula(seleccion());
    const filas = [`${c.pais}: ${c.paises[estado.pais]}`];
    if (estado.suite) {
      filas.push(`${c.modalidad}: ${estado.modalidad === 'A' ? c.modalidadA : rellena(c.modalidadB, { precio: eur(TARIFA.modalidadB) })}`);
      filas.push(`${c.usuarios}: ${estado.usuarios}`);
      estado.empresas.forEach((e, i) => {
        const r = resuelto(i);
        const mods = [tx.base, ...r.modulos.map((m) => tx.modulos[m])].join(', ');
        filas.push(`${nombreEmpresa(i)}: ${mods}${r.modulos.includes('rrhh') ? ` · ${c.personas}: ${e.personas}` : ''}`);
      });
    }
    if (!(estado.suite && estado.paquete) && estado.muvUsuarios > 0) filas.push(`${c.muvUsuarios}: ${estado.muvUsuarios}`);
    filas.push(`${c.pago}: ${estado.pago === 'anual' ? c.anual : rellena(c.mensual, { porcentaje: porcentaje(TARIFA.recargoMensual, idioma) })}`);
    filas.push(...p.lineas.map((l) => `- ${etiquetaLinea(l.clave, l.empresa)}${l.cantidad > 1 ? ` × ${l.cantidad}` : ''}: ${eur(l.importe)}`));
    filas.push(`${c.cuota}: ${eur(p.cuotaMensual)} (${c.sinImpuestos})`);
    if (p.igi !== null) filas.push(`${rellena(c.igi, { porcentaje: porcentaje(TARIFA.igiAndorra, idioma) })}: ${eur(p.igi)}`);
    filas.push(`${c.total}: ${eur(p.totalMensual)}`);
    if (p.implantacionDesde > 0) filas.push(rellena(c.implantacion, { precio: eur(p.implantacionDesde) }));
    return filas.join('\n');
  }

  function resumen(): string {
    const p = calcula(seleccion());
    const lineas = p.lineas
      .map(
        (l) =>
          `<li><span>${esc(etiquetaLinea(l.clave, l.empresa))}${l.cantidad > 1 ? ` × ${l.cantidad}` : ''}</span><span>${esc(eur(l.importe))}</span></li>`,
      )
      .join('');
    const avisos = p.avisos
      .map((a) => {
        const valores = { max: a === 'muv-a-medida' ? TARIFA.muv.maxSinPropuesta : TARIFA.maxEmpresasSinPropuesta };
        return `<li>${esc(rellena(c.avisos[a], valores))}</li>`;
      })
      .join('');
    const cta = p.requierePropuesta ? c.botonPropuesta : c.botonDemo;
    const asunto = p.requierePropuesta ? 'precios' : 'demostracion';
    const pedido = `${contacto}?asunto=pedido&seleccion=${encodeURIComponent(textoPedido())}`;
    return `<h3>${esc(c.resumen)}</h3>
      <ul class="conf-lineas">${lineas}</ul>
      <dl class="conf-totales">
        <div><dt>${esc(c.cuota)} <small>(${esc(c.sinImpuestos)})</small></dt><dd>${esc(eur(p.cuotaMensual))}</dd></div>
        ${p.igi !== null ? `<div><dt>${esc(rellena(c.igi, { porcentaje: porcentaje(TARIFA.igiAndorra, idioma) }))}</dt><dd>${esc(eur(p.igi))}</dd></div>` : ''}
        <div class="conf-total"><dt>${esc(c.total)}</dt><dd data-k="total">${esc(eur(p.totalMensual))}</dd></div>
      </dl>
      ${p.implantacionDesde > 0 ? `<p class="conf-implantacion">${esc(rellena(c.implantacion, { precio: eur(p.implantacionDesde) }))}</p>` : ''}
      ${avisos ? `<ul class="conf-avisos">${avisos}</ul>` : ''}
      <a class="boton boton-oro" data-k="cta" href="${esc(`${contacto}?asunto=${asunto}`)}">${esc(cta)}</a>
      <a class="boton boton-contorno" data-k="pedido" href="${esc(pedido)}">${esc(c.botonPedido)}</a>
      <p class="conf-nota-pedido">${esc(c.pedidoNota)}</p>`;
  }

  raiz.innerHTML = '<div class="conf-controles"></div><aside class="conf-resumen" aria-live="polite"></aside>';
  const zonaControles = raiz.querySelector<HTMLElement>('.conf-controles')!;
  const zonaResumen = raiz.querySelector<HTMLElement>('.conf-resumen')!;

  function pinta(todo: boolean) {
    if (todo) {
      const foco = (document.activeElement as HTMLElement | null)?.dataset?.k;
      zonaControles.innerHTML = controles();
      if (foco) zonaControles.querySelector<HTMLElement>(`[data-k="${foco}"]`)?.focus();
    }
    zonaResumen.innerHTML = resumen();
  }

  function aplica(el: HTMLElement): boolean {
    const k = el.dataset.k ?? '';
    const input = el as HTMLInputElement;
    if (k === 'pais') estado.pais = input.value as Pais;
    else if (k.startsWith('modalidad-')) estado.modalidad = input.value as 'A' | 'B';
    else if (k.startsWith('pago-')) estado.pago = input.value as 'anual' | 'mensual';
    else if (k === 'suite') estado.suite = input.checked;
    else if (k === 'paquete') estado.paquete = input.checked;
    else if (k === 'usuarios') estado.usuarios = Math.max(1, numero(input.value));
    else if (k === 'muv') estado.muvUsuarios = numero(input.value);
    else if (k.startsWith('personas-')) estado.empresas[Number(k.split('-')[1])].personas = numero(input.value);
    else if (k.startsWith('modulo-')) {
      const [, i, m] = k.split('-') as [string, string, ModuloId];
      const e = estado.empresas[Number(i)];
      e.modulos = input.checked ? [...new Set([...e.modulos, m])] : e.modulos.filter((x) => x !== m);
    } else return false;
    return true;
  }

  raiz.addEventListener('change', (ev) => {
    if (aplica(ev.target as HTMLElement)) pinta(true);
  });
  raiz.addEventListener('input', (ev) => {
    const el = ev.target as HTMLInputElement;
    if (el.type === 'number' && aplica(el)) pinta(false);
  });
  raiz.addEventListener('click', (ev) => {
    const k = (ev.target as HTMLElement).dataset?.k ?? '';
    if (k === 'anadir' && estado.empresas.length < MAX_EMPRESAS) {
      estado.empresas.push({ modulos: [], personas: 0 });
      pinta(true);
    } else if (k.startsWith('quitar-')) {
      estado.empresas.splice(Number(k.split('-')[1]), 1);
      pinta(true);
    }
  });

  pinta(true);
}
