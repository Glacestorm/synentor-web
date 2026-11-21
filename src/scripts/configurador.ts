// El configurador de Precios (diseño §8, plan tarea 4). Pinta los controles y el presupuesto, y recalcula con cada cambio.
// Toda cuenta es la de `calcula`: aquí no se suma nada. Los textos llegan en `data-textos` (solo los de su idioma) y la
// dirección del formulario en `data-contacto`. «Envía mi selección» lleva al formulario con el resumen: sin pago.
import { calcula, resuelveDependencias, type ModuloId, type Paquete, type Pais, type Seleccion } from '../lib/precios/calcula';
import { estadoModulo, PAISES } from '../lib/precios/disponibilidad';
import { MODULOS, TARIFA } from '../lib/precios/tarifa';
import { euros, porcentaje } from '../lib/formato';
import { rellena } from '../i18n/rellena';
import type { Idioma } from '../i18n/idiomas';
import type { TextosConfigurador } from '../lib/textosConfigurador';
import { svgIcono, type NombreIcono } from '../lib/iconos';
import { enviaEvento } from './eventos';

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
    paquete: 'ninguno',
    empresas: [{ modulos: [], personas: 0 }],
    usuarios: TARIFA.base.usuariosIncluidos,
    muvUsuarios: 0,
  };

  const numero = (v: string) => {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
  };

  const conCompleto = () => estado.suite && estado.paquete === 'completo';
  const conObrador = () => estado.suite && estado.paquete === 'obrador';

  /** Los módulos de cada empresa: los que la persona marcó, los del paquete y los que se añaden por dependencia. */
  function resuelto(i: number) {
    const incluidos: readonly ModuloId[] =
      i !== 0 ? [] : conCompleto() ? TARIFA.paquete.incluye : conObrador() ? TARIFA.paqueteObrador.incluye : [];
    const pedidos = estado.empresas[i].modulos;
    const r = resuelveDependencias([...new Set([...pedidos, ...incluidos])]);
    return { modulos: r.modulos, incluidos, anadidos: r.modulos.filter((m) => !pedidos.includes(m) && !incluidos.includes(m)) };
  }

  const nombreEmpresa = (i: number) => (i === 0 ? c.principal : rellena(c.empresa, { n: i + 1 }));

  /** Un número con botones − y + (data-k del campo; los botones, «menos-…» y «mas-…»). */
  const numeroConPasos = (k: string, etiqueta: string, valor: number, min: number) =>
    `<label class="conf-campo">${esc(etiqueta)}
      <span class="conf-numero">
        <button type="button" class="conf-paso" data-k="menos-${k}" aria-label="${esc(c.menos)}">−</button>
        <input type="number" min="${min}" inputmode="numeric" data-k="${k}" value="${valor}">
        <button type="button" class="conf-paso" data-k="mas-${k}" aria-label="${esc(c.mas)}">+</button>
      </span></label>`;

  function controles(): string {
    const paises = PAISES.map(
      (p) => `<option value="${p}"${p === estado.pais ? ' selected' : ''}>${esc(c.paises[p])}</option>`,
    ).join('');
    const radio = (grupo: string, valor: string, texto: string, actual: string) =>
      `<label class="conf-op"><input type="radio" name="conf-${grupo}" data-k="${grupo}-${valor}" value="${valor}"${valor === actual ? ' checked' : ''}> ${esc(texto)}</label>`;
    const interruptor = (k: string, marcado: boolean, titulo: string, detalle = '') =>
      `<label class="interruptor"><input type="checkbox" role="switch" data-k="${k}"${marcado ? ' checked' : ''}>
        <span><strong>${esc(titulo)}</strong>${detalle ? `<small>${esc(detalle)}</small>` : ''}</span></label>`;

    let html = `<div class="conf-panel"><div class="conf-fila">
      <label class="conf-campo">${esc(c.pais)}<select data-k="pais">${paises}</select></label>
      <fieldset class="conf-grupo"><legend>${esc(c.modalidad)}</legend>
        ${radio('modalidad', 'A', c.modalidadA, estado.modalidad)}
        ${radio('modalidad', 'B', rellena(c.modalidadB, { precio: eur(TARIFA.modalidadB) }), estado.modalidad)}
      </fieldset>
      <fieldset class="conf-grupo"><legend>${esc(c.pago)}</legend>
        ${radio('pago', 'anual', c.anual, estado.pago)}
        ${radio('pago', 'mensual', rellena(c.mensual, { porcentaje: porcentaje(TARIFA.recargoMensual, idioma) }), estado.pago)}
      </fieldset>
    </div></div>
    <div class="conf-panel">${interruptor('suite', estado.suite, c.suite)}`;

    if (estado.suite) {
      const o = TARIFA.paqueteObrador;
      const opcion = (valor: Paquete, titulo: string, detalle: string) =>
        `<label class="conf-op conf-paquete"><input type="radio" name="conf-paquete" data-k="paquete-${valor}" value="${valor}"${valor === estado.paquete ? ' checked' : ''}>
          <span><strong>${esc(titulo)}</strong>${detalle ? `<small>${esc(detalle)}</small>` : ''}</span></label>`;
      html +=
        `<fieldset class="conf-grupo conf-paquetes"><legend>${esc(c.paqueteTitulo)}</legend>
          ${opcion('ninguno', c.sinPaquete, '')}
          ${opcion('completo', c.paquete, rellena(c.paqueteTexto, { usuarios: TARIFA.paquete.usuariosIncluidos, precio: eur(TARIFA.paquete.cuota) }))}
          ${opcion('obrador', c.paqueteObrador, rellena(c.paqueteObradorTexto, { usuarios: o.usuariosIncluidos, precio: eur(o.cuota), conCostes: eur(o.conCostes) }))}
        </fieldset>` + numeroConPasos('usuarios', c.usuarios, estado.usuarios, 1);
    }
    html += '</div>';

    if (estado.suite) {
      estado.empresas.forEach((empresa, i) => {
        const r = resuelto(i);
        const factor = i === 0 ? 1 : TARIFA.empresaAdicional.factorModulos;
        const casillas = MODULOS.map((m) => {
          const marcado = r.modulos.includes(m);
          const incluido = r.incluidos.includes(m);
          const anadido = r.anadidos.includes(m);
          const est = estadoModulo(estado.pais, m);
          // Con el Obrador, el control de costes de la empresa principal cuesta la diferencia hasta `conCostes`.
          const costesObrador = i === 0 && m === 'costes' && conObrador();
          const nota = incluido ? c.incluidoPaquete : anadido ? c.anadidoPor : costesObrador ? c.conObrador : '';
          const precio = incluido
            ? ''
            : costesObrador
              ? `+${eur(TARIFA.paqueteObrador.conCostes - TARIFA.paqueteObrador.cuota)} ${c.alMes}`
              : `${eur(TARIFA.modulos[m].cuota * factor)} ${c.alMes}`;
          return `<label class="conf-modulo${marcado ? ' marcado' : ''}">
              <input type="checkbox" data-k="modulo-${i}-${m}"${marcado ? ' checked' : ''}${incluido || anadido ? ' disabled' : ''}>
              <span class="conf-check">${svgIcono('check', 14)}</span>
              ${svgIcono(m as NombreIcono, 26)}
              <span class="conf-nombre">${esc(tx.modulos[m])}</span>
              <span class="conf-precio">${esc(precio)}</span>
              <span class="conf-estado estado-${est}">${esc(c.estados[est])}</span>
              ${nota ? `<span class="conf-nota">${esc(nota)}</span>` : ''}
            </label>`;
        }).join('');
        const personas = r.modulos.includes('rrhh') ? numeroConPasos(`personas-${i}`, c.personas, empresa.personas, 0) : '';
        const quitar = i > 0 ? `<button type="button" class="conf-quitar" data-k="quitar-${i}">${esc(c.quitarEmpresa)}</button>` : '';
        const estBase = estadoModulo(estado.pais, 'base');
        html += `<fieldset class="conf-empresa"><legend>${esc(nombreEmpresa(i))}</legend>
            <div class="conf-base">${svgIcono('base', 22)}<span class="conf-nombre">${esc(tx.base)}</span>
              <span class="conf-estado estado-${estBase}">${esc(c.estados[estBase])}</span></div>
            <div class="conf-modulos">${casillas}</div>${personas}${quitar}</fieldset>`;
      });
      if (estado.empresas.length < MAX_EMPRESAS) {
        html += `<button type="button" class="boton boton-contorno" data-k="anadir">+ ${esc(c.anadirEmpresa)}</button>`;
      }
    }

    if (!conCompleto()) {
      html += `<div class="conf-panel">${numeroConPasos('muv', c.muvUsuarios, estado.muvUsuarios, 0)}</div>`;
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
      if (estado.paquete !== 'ninguno') {
        filas.push(`${c.paqueteTitulo}: ${estado.paquete === 'completo' ? c.paquete : c.paqueteObrador}`);
      }
      filas.push(`${c.usuarios}: ${estado.usuarios}`);
      estado.empresas.forEach((e, i) => {
        const r = resuelto(i);
        const mods = [tx.base, ...r.modulos.map((m) => tx.modulos[m])].join(', ');
        filas.push(`${nombreEmpresa(i)}: ${mods}${r.modulos.includes('rrhh') ? ` · ${c.personas}: ${e.personas}` : ''}`);
      });
    }
    if (!conCompleto() && estado.muvUsuarios > 0) filas.push(`${c.muvUsuarios}: ${estado.muvUsuarios}`);
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
      <a class="boton boton-oro" data-k="cta"${asunto === 'demostracion' ? ' data-evento="demostracion"' : ''} href="${esc(`${contacto}?asunto=${asunto}`)}">${esc(cta)}</a>
      <a class="boton boton-contorno" data-k="pedido" data-evento="pedido-calculadora" href="${esc(pedido)}">${esc(c.botonPedido)}</a>
      <p class="conf-nota-pedido">${esc(c.pedidoNota)}</p>`;
  }

  raiz.innerHTML =
    '<div class="conf-controles"></div><aside class="conf-resumen" id="resumen-configurador" aria-live="polite"></aside>' +
    '<div class="conf-barra" aria-hidden="true"></div>';
  const zonaControles = raiz.querySelector<HTMLElement>('.conf-controles')!;
  const zonaResumen = raiz.querySelector<HTMLElement>('.conf-resumen')!;
  const barra = raiz.querySelector<HTMLElement>('.conf-barra')!;
  let totalAnterior: number | null = null;

  function pinta(todo: boolean) {
    if (todo) {
      const foco = (document.activeElement as HTMLElement | null)?.dataset?.k;
      zonaControles.innerHTML = controles();
      if (foco) zonaControles.querySelector<HTMLElement>(`[data-k="${foco}"]`)?.focus();
    }
    zonaResumen.innerHTML = resumen();
    const total = calcula(seleccion()).totalMensual;
    // En móvil, el total siempre a la vista (repite lo del resumen: por eso no se anuncia a los lectores de pantalla).
    barra.innerHTML = `<div><small>${esc(c.total)}</small><strong>${esc(eur(total))}</strong></div>
      <a class="boton boton-oro" href="#resumen-configurador" tabindex="-1">${esc(c.verResumen)}</a>`;
    // El total «late» cuando cambia (solo visual; prefers-reduced-motion lo apaga en marca.css).
    if (totalAnterior !== null && totalAnterior !== total) {
      const fila = zonaResumen.querySelector('.conf-total');
      fila?.classList.add('cambia');
      setTimeout(() => fila?.classList.remove('cambia'), 600);
    }
    totalAnterior = total;
  }

  // «calculadora»: una sola vez por visita, en el primer cambio (enviaEvento no lanza nunca).
  let contado = false;
  const cuentaUso = () => {
    if (contado) return;
    contado = true;
    enviaEvento('calculadora');
  };

  function aplica(el: HTMLElement): boolean {
    const k = el.dataset.k ?? '';
    const input = el as HTMLInputElement;
    if (k === 'pais') estado.pais = input.value as Pais;
    else if (k.startsWith('modalidad-')) estado.modalidad = input.value as 'A' | 'B';
    else if (k.startsWith('pago-')) estado.pago = input.value as 'anual' | 'mensual';
    else if (k === 'suite') estado.suite = input.checked;
    else if (k.startsWith('paquete-')) estado.paquete = input.value as Paquete;
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
    if (aplica(ev.target as HTMLElement)) {
      cuentaUso();
      pinta(true);
    }
  });
  raiz.addEventListener('input', (ev) => {
    const el = ev.target as HTMLInputElement;
    if (el.type === 'number' && aplica(el)) {
      cuentaUso();
      pinta(false);
    }
  });
  raiz.addEventListener('click', (ev) => {
    const boton = (ev.target as HTMLElement).closest<HTMLElement>('[data-k]');
    const k = boton?.dataset.k ?? '';
    const paso = k.match(/^(menos|mas)-(.+)$/);
    if (paso) {
      const campo = zonaControles.querySelector<HTMLInputElement>(`input[data-k="${paso[2]}"]`);
      if (!campo) return;
      const min = Number(campo.min || '0');
      campo.value = String(Math.max(min, numero(campo.value) + (paso[1] === 'mas' ? 1 : -1)));
      if (aplica(campo)) {
        cuentaUso();
        pinta(true);
      }
    } else if (k === 'anadir' && estado.empresas.length < MAX_EMPRESAS) {
      estado.empresas.push({ modulos: [], personas: 0 });
      cuentaUso();
      pinta(true);
    } else if (k.startsWith('quitar-')) {
      estado.empresas.splice(Number(k.split('-')[1]), 1);
      cuentaUso();
      pinta(true);
    }
  });

  pinta(true);
}
