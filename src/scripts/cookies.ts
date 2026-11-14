// El aviso de cookies en el navegador (diseño §17; guía de la APDA, versión 4). Nada de Google Analytics, Clarity ni los
// píxeles de Meta y LinkedIn se carga sin aceptar su categoría. «Aceptar», «Rechazar» y «Configurar» tienen el mismo
// estilo; los interruptores salen apagados; un botón flotante deja cambiar la decisión en cualquier momento.
import {
  categoriasConHerramientas,
  cookieDe,
  hayQuePreguntar,
  herramientasValidas,
  leeDecision,
  type Categoria,
  type Decision,
  type Herramientas,
} from '../lib/consentimiento';

export interface TextosCookies {
  titulo: string;
  /** Con {empresas} (Synentor y las de las herramientas que hay) y {finalidades} (las de las categorías que hay). */
  aviso: string;
  /** La conjunción del idioma para el último de una lista (« y »). */
  y: string;
  politica: string;
  aceptar: string;
  rechazar: string;
  configurar: string;
  guardar: string;
  siempre: string;
  flotante: string;
  necesarias: { nombre: string; texto: string };
  estadisticas: { nombre: string; texto: string; finalidad: string };
  publicidad: { nombre: string; texto: string; finalidad: string };
  herramientas: Record<keyof Herramientas, string>;
}

export interface OpcionesCookies {
  herramientas: Herramientas;
  version: string;
  /** Dirección de la política de cookies del idioma de la página. */
  politica: string;
  textos: TextosCookies;
  ahora?: () => Date;
  recarga?: () => void;
  registra?: (d: Decision) => void;
}

const EMPRESA_DE: Record<keyof Herramientas, string> = { ga4: 'Google', clarity: 'Microsoft', metaPixel: 'Meta', linkedin: 'LinkedIn' };
const CATEGORIA_DE: Record<keyof Herramientas, Categoria> = { ga4: 'estadisticas', clarity: 'estadisticas', metaPixel: 'publicidad', linkedin: 'publicidad' };
/** Cookies propias que dejan las herramientas: se borran al retirar el consentimiento de su categoría. */
const COOKIES_DE: Record<Categoria, RegExp> = {
  estadisticas: /^(_ga|_ga_[A-Z0-9]+|_gid|_clck|_clsk)$/,
  publicidad: /^(_fbp|_fbc|_gcl_au|li_fat_id|li_gc)$/,
};

const esc = (t: string) => t.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

type Ventana = Window & {
  dataLayer?: unknown[];
  gtag?: (...a: unknown[]) => void;
  clarity?: ((...a: unknown[]) => void) & { q?: unknown[] };
  fbq?: ((...a: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
  _fbq?: unknown;
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
};

function inserta(src: string): void {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  s.dataset.cookies = 'herramienta';
  document.head.appendChild(s);
}

/** Carga cada herramienta una sola vez, con los identificadores ya comprobados por su forma. */
function carga(id: keyof Herramientas, valor: string, d: Decision, cargadas: Set<string>): void {
  if (cargadas.has(id)) return;
  cargadas.add(id);
  const w = window as Ventana;
  const pub = d.publicidad ? 'granted' : 'denied';
  if (id === 'ga4') {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: pub, ad_user_data: pub, ad_personalization: pub });
    w.gtag('js', new Date());
    // 13 meses de cookie; las señales de Google solo con «Publicidad».
    w.gtag('config', valor, { cookie_expires: 34128000, allow_google_signals: d.publicidad, allow_ad_personalization_signals: d.publicidad });
    inserta(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(valor)}`);
  } else if (id === 'clarity') {
    const c = function (...a: unknown[]) {
      (c.q = c.q || []).push(a);
    } as ((...a: unknown[]) => void) & { q?: unknown[] };
    w.clarity = w.clarity || c;
    inserta(`https://www.clarity.ms/tag/${encodeURIComponent(valor)}`);
    w.clarity('consentv2', { ad_Storage: pub, analytics_Storage: 'granted' });
  } else if (id === 'metaPixel') {
    if (!w.fbq) {
      const f = function (...a: unknown[]) {
        if (f.callMethod) f.callMethod(...a);
        else f.queue!.push(a);
      } as NonNullable<Ventana['fbq']>;
      f.push = f;
      f.loaded = true;
      f.version = '2.0';
      f.queue = [];
      w.fbq = f;
      w._fbq = f;
    }
    inserta('https://connect.facebook.net/en_US/fbevents.js');
    // Sin la configuración automática (no lee los formularios ni los botones por su cuenta).
    w.fbq('set', 'autoConfig', false, valor);
    w.fbq('init', valor);
    w.fbq('track', 'PageView');
  } else {
    w._linkedin_partner_id = valor;
    w._linkedin_data_partner_ids = [valor];
    inserta('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }
}

function borraCookies(cat: Categoria): void {
  const dominio = location.hostname.split('.').slice(-2).join('.');
  for (const par of document.cookie.split(';')) {
    const nombre = par.split('=')[0].trim();
    if (!COOKIES_DE[cat].test(nombre)) continue;
    for (const d of ['', `; Domain=${location.hostname}`, `; Domain=.${dominio}`]) {
      document.cookie = `${nombre}=; Max-Age=0; Path=/${d}`;
    }
  }
}

/** Apunta la decisión en el servidor como prueba del consentimiento: un identificador al azar, sin la IP ni nada más. */
function registraEnServidor(d: Decision): void {
  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : '';
  if (!id) return;
  fetch('/api/consentimiento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, v: d.v, estadisticas: d.estadisticas, publicidad: d.publicidad }),
    keepalive: true,
  }).catch(() => undefined);
}

export function montaCookies(raiz: HTMLElement, op: OpcionesCookies): { abre: () => void } | null {
  const ahora = op.ahora ?? (() => new Date());
  const recarga = op.recarga ?? (() => location.reload());
  const registra = op.registra ?? registraEnServidor;
  const t = op.textos;
  const validas = herramientasValidas(op.herramientas);
  const categorias = categoriasConHerramientas(op.herramientas);
  if (categorias.length === 0) return null;
  const presentes = (Object.keys(validas) as (keyof Herramientas)[]).filter((k) => validas[k]);
  const cargadas = new Set<string>();
  let decision = leeDecision(document.cookie, op.version, ahora());

  const lista = (xs: string[]) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')}${t.y}${xs[xs.length - 1]}`);
  const empresas = lista(['Synentor', ...presentes.map((k) => EMPRESA_DE[k]).filter((e, i, a) => a.indexOf(e) === i)]);
  const finalidades = lista(categorias.map((c) => t[c].finalidad));
  const categoriaHtml = (cat: Categoria) => {
    const lineas = presentes.filter((k) => CATEGORIA_DE[k] === cat).map((k) => `<li>${esc(t.herramientas[k])}</li>`).join('');
    return `<div class="cookies-cat">
        <label class="interruptor"><input type="checkbox" data-cat="${cat}"><span><strong>${esc(t[cat].nombre)}</strong>
        <small>${esc(t[cat].texto)}</small></span></label><ul>${lineas}</ul></div>`;
  };
  raiz.innerHTML = `
    <div class="cookies-aviso" role="dialog" aria-modal="false" aria-labelledby="cookies-titulo" hidden>
      <h2 id="cookies-titulo">${esc(t.titulo)}</h2>
      <p>${esc(t.aviso.replace('{empresas}', empresas).replace('{finalidades}', finalidades))} <a href="${esc(op.politica)}">${esc(t.politica)}</a></p>
      <div class="cookies-config" hidden>
        <div class="cookies-cat"><p><strong>${esc(t.necesarias.nombre)}</strong> · ${esc(t.siempre)}<br><small>${esc(t.necesarias.texto)}</small></p></div>
        ${categorias.map(categoriaHtml).join('')}
      </div>
      <div class="cookies-botones">
        <button type="button" class="boton-cookies" data-accion="aceptar">${esc(t.aceptar)}</button>
        <button type="button" class="boton-cookies" data-accion="rechazar">${esc(t.rechazar)}</button>
        <button type="button" class="boton-cookies" data-accion="configurar">${esc(t.configurar)}</button>
        <button type="button" class="boton-cookies" data-accion="guardar" hidden>${esc(t.guardar)}</button>
      </div>
    </div>
    <button type="button" class="cookies-flotante" aria-label="${esc(t.flotante)}" title="${esc(t.flotante)}" hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-5-5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.5" cy="11" r="1.2" fill="currentColor"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/><circle cx="15.5" cy="12.5" r="1.1" fill="currentColor"/></svg>
    </button>`;

  const aviso = raiz.querySelector<HTMLElement>('.cookies-aviso')!;
  const config = raiz.querySelector<HTMLElement>('.cookies-config')!;
  const flotante = raiz.querySelector<HTMLButtonElement>('.cookies-flotante')!;
  const boton = (a: string) => raiz.querySelector<HTMLButtonElement>(`[data-accion="${a}"]`)!;
  const interruptor = (c: Categoria) => raiz.querySelector<HTMLInputElement>(`input[data-cat="${c}"]`);

  const aplica = (d: Decision) => {
    for (const k of presentes) if (d[CATEGORIA_DE[k]]) carga(k, validas[k]!, d, cargadas);
  };
  const cierra = () => {
    aviso.hidden = true;
    config.hidden = true;
    boton('guardar').hidden = true;
    boton('configurar').hidden = false;
    flotante.hidden = false;
  };
  const guarda = (estadisticas: boolean, publicidad: boolean) => {
    const antes = decision;
    const nueva: Decision = { v: op.version, fecha: ahora().toISOString().slice(0, 10), estadisticas, publicidad };
    document.cookie = cookieDe(nueva);
    decision = nueva;
    registra(nueva);
    cierra();
    const retira = (['estadisticas', 'publicidad'] as const).filter((c) => antes?.[c] && !nueva[c]);
    if (retira.length > 0) {
      retira.forEach(borraCookies);
      // Lo ya cargado no se puede descargar: se vuelve a abrir la página sin ello.
      recarga();
      return;
    }
    aplica(nueva);
  };
  const abre = () => {
    for (const c of categorias) interruptor(c)!.checked = decision ? decision[c] : false;
    aviso.hidden = false;
    flotante.hidden = true;
    boton('aceptar').focus();
  };

  boton('aceptar').addEventListener('click', () => guarda(true, true));
  boton('rechazar').addEventListener('click', () => guarda(false, false));
  boton('configurar').addEventListener('click', () => {
    config.hidden = false;
    boton('configurar').hidden = true;
    boton('guardar').hidden = false;
  });
  boton('guardar').addEventListener('click', () =>
    guarda(interruptor('estadisticas')?.checked ?? false, interruptor('publicidad')?.checked ?? false),
  );
  flotante.addEventListener('click', abre);
  document.querySelectorAll<HTMLElement>('[data-cookies-config]').forEach((e) => e.addEventListener('click', abre));

  if (hayQuePreguntar(op.herramientas, decision)) {
    aviso.hidden = false;
  } else if (decision) {
    flotante.hidden = false;
    aplica(decision);
  }
  return { abre };
}
