// @vitest-environment jsdom
// El aviso de cookies en el navegador (diseño §17; guía de la APDA, versión 4; sensible: datos de los visitantes).
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { montaCookies, type OpcionesCookies, type TextosCookies } from '../src/scripts/cookies';
import { NOMBRE_COOKIE, cookieDe } from '../src/lib/consentimiento';

const V = '2026-11-14';
const TODO = { ga4: 'G-ABC123DEF4', clarity: 'abcd1234ef', metaPixel: '123456789012345', linkedin: '1234567' };
const NADA = { ga4: '', clarity: '', metaPixel: '', linkedin: '' };
const T: TextosCookies = {
  titulo: 'Cookies',
  aviso: '{empresas} usan cookies para {finalidades}.',
  y: ' y ',
  politica: 'Política',
  aceptar: 'Aceptar todas',
  rechazar: 'Rechazar todas',
  configurar: 'Configurar',
  guardar: 'Guardar',
  siempre: 'Siempre activas',
  flotante: 'Configuración de cookies',
  necesarias: { nombre: 'Necesarias', texto: 'Idioma.' },
  estadisticas: { nombre: 'Estadísticas', texto: 'Visitas.', finalidad: 'medir las visitas' },
  publicidad: { nombre: 'Publicidad', texto: 'Anuncios.', finalidad: 'mostrar anuncios' },
  herramientas: { ga4: 'Google Analytics', clarity: 'Microsoft Clarity', metaPixel: 'Píxel de Meta', linkedin: 'LinkedIn Insight Tag' },
};

let registradas: unknown[] = [];
let recargas = 0;

function monta(herramientas = TODO, extra: Partial<OpcionesCookies> = {}) {
  document.body.innerHTML = '<div id="c"></div><button data-cookies-config>Cookies</button>';
  return montaCookies(document.getElementById('c')!, {
    herramientas,
    version: V,
    politica: '/es/cookies/',
    textos: T,
    ahora: () => new Date('2026-11-14T10:00:00Z'),
    recarga: () => recargas++,
    registra: (d) => registradas.push(d),
    ...extra,
  });
}
const pulsa = (accion: string) => document.querySelector<HTMLButtonElement>(`[data-accion="${accion}"]`)!.click();
const scripts = () => [...document.querySelectorAll<HTMLScriptElement>('script[data-cookies]')].map((s) => s.src);
const aviso = () => document.querySelector<HTMLElement>('.cookies-aviso')!;
const flotante = () => document.querySelector<HTMLElement>('.cookies-flotante')!;
const decision = () => {
  const par = document.cookie.split(';').map((c) => c.trim()).find((c) => c.startsWith(`${NOMBRE_COOKIE}=`));
  return par ? JSON.parse(decodeURIComponent(par.slice(NOMBRE_COOKIE.length + 1))) : null;
};

function limpia() {
  for (const par of document.cookie.split(';')) {
    const n = par.split('=')[0].trim();
    if (n) document.cookie = `${n}=; Max-Age=0; Path=/`;
  }
  document.head.querySelectorAll('script').forEach((s) => s.remove());
  const w = window as unknown as Record<string, unknown>;
  for (const k of ['gtag', 'dataLayer', 'clarity', 'fbq', '_fbq', '_linkedin_partner_id', '_linkedin_data_partner_ids']) delete w[k];
}

beforeEach(() => {
  registradas = [];
  recargas = 0;
  limpia();
});
afterEach(() => vi.restoreAllMocks());

describe('sin identificadores', () => {
  it('no monta nada: ni aviso, ni botón, ni herramientas', () => {
    expect(monta(NADA)).toBeNull();
    expect(document.querySelector('.cookies-aviso')).toBeNull();
    expect(scripts()).toEqual([]);
  });
});

describe('primera visita', () => {
  it('pregunta y no carga nada hasta decidir', () => {
    monta();
    expect(aviso().hidden).toBe(false);
    expect(aviso().textContent).toContain('Synentor, Google, Microsoft, Meta y LinkedIn usan cookies para medir las visitas y mostrar anuncios.');
    expect(aviso().querySelector('a')!.getAttribute('href')).toBe('/es/cookies/');
    expect(scripts()).toEqual([]);
    expect((window as unknown as { gtag?: unknown }).gtag).toBeUndefined();
  });

  it('«Aceptar», «Rechazar» y «Configurar» tienen el mismo estilo (APDA: nada de colores que empujen)', () => {
    monta();
    const clases = ['aceptar', 'rechazar', 'configurar'].map((a) => document.querySelector(`[data-accion="${a}"]`)!.className);
    expect(new Set(clases).size).toBe(1);
  });

  it('rechazar: no carga nada, guarda la decisión y deja el botón para cambiarla', () => {
    monta();
    pulsa('rechazar');
    expect(scripts()).toEqual([]);
    expect(decision()).toEqual({ v: V, fecha: '2026-11-14', estadisticas: false, publicidad: false });
    expect(aviso().hidden).toBe(true);
    expect(flotante().hidden).toBe(false);
    expect(registradas).toHaveLength(1);
  });

  it('aceptar: carga las cuatro herramientas con sus identificadores', () => {
    monta();
    pulsa('aceptar');
    expect(scripts()).toEqual([
      'https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4',
      'https://www.clarity.ms/tag/abcd1234ef',
      'https://connect.facebook.net/en_US/fbevents.js',
      'https://snap.licdn.com/li.lms-analytics/insight.min.js',
    ]);
    expect(decision()).toMatchObject({ estadisticas: true, publicidad: true });
  });

  it('configurar: los interruptores salen apagados; solo se carga lo que se activa', () => {
    monta();
    pulsa('configurar');
    const est = document.querySelector<HTMLInputElement>('input[data-cat="estadisticas"]')!;
    const pub = document.querySelector<HTMLInputElement>('input[data-cat="publicidad"]')!;
    expect(est.checked).toBe(false);
    expect(pub.checked).toBe(false);
    est.checked = true;
    pulsa('guardar');
    expect(scripts()).toEqual(['https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4', 'https://www.clarity.ms/tag/abcd1234ef']);
    expect(decision()).toMatchObject({ estadisticas: true, publicidad: false });
  });

  it('Google Analytics: cookie de 13 meses y sin señales de Google si no se acepta la publicidad', () => {
    monta();
    pulsa('configurar');
    document.querySelector<HTMLInputElement>('input[data-cat="estadisticas"]')!.checked = true;
    pulsa('guardar');
    const capa = (window as unknown as { dataLayer: IArguments[] }).dataLayer.map((a) => [...a]);
    expect(capa).toContainEqual(['config', 'G-ABC123DEF4', { cookie_expires: 34128000, allow_google_signals: false, allow_ad_personalization_signals: false }]);
    expect(capa).toContainEqual(['consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]);
  });
});

describe('visitas siguientes', () => {
  it('con la decisión guardada no pregunta y carga solo lo aceptado', () => {
    document.cookie = cookieDe({ v: V, fecha: '2026-11-01', estadisticas: false, publicidad: true });
    monta();
    expect(aviso().hidden).toBe(true);
    expect(flotante().hidden).toBe(false);
    expect(scripts()).toEqual(['https://connect.facebook.net/en_US/fbevents.js', 'https://snap.licdn.com/li.lms-analytics/insight.min.js']);
  });

  it('el botón flotante y el enlace del pie vuelven a abrir el aviso con lo decidido marcado', () => {
    document.cookie = cookieDe({ v: V, fecha: '2026-11-01', estadisticas: true, publicidad: false });
    monta();
    flotante().click();
    expect(aviso().hidden).toBe(false);
    pulsa('configurar');
    expect(document.querySelector<HTMLInputElement>('input[data-cat="estadisticas"]')!.checked).toBe(true);
    // Lo no aceptado sigue apagado: nunca marcado de antemano (APDA).
    expect(document.querySelector<HTMLInputElement>('input[data-cat="publicidad"]')!.checked).toBe(false);
    pulsa('rechazar');
    document.querySelector<HTMLElement>('[data-cookies-config]')!.click();
    expect(aviso().hidden).toBe(false);
  });

  it('retirar el consentimiento borra las cookies de la categoría y recarga la página sin las herramientas', () => {
    document.cookie = cookieDe({ v: V, fecha: '2026-11-01', estadisticas: true, publicidad: false });
    document.cookie = '_ga=GA1.1.123; Path=/';
    document.cookie = '_clck=abc; Path=/';
    document.cookie = 'lang=es; Path=/';
    monta();
    flotante().click();
    pulsa('rechazar');
    expect(document.cookie).not.toMatch(/(^|; )_ga=/);
    expect(document.cookie).not.toMatch(/(^|; )_clck=/);
    expect(document.cookie).toMatch(/(^|; )lang=es/);
    expect(recargas).toBe(1);
  });

  it('una decisión de otra versión de la política vuelve a preguntar', () => {
    document.cookie = cookieDe({ v: '2026-01-01', fecha: '2026-01-02', estadisticas: true, publicidad: true });
    monta();
    expect(aviso().hidden).toBe(false);
    expect(scripts()).toEqual([]);
  });
});

describe('solo las herramientas que hay', () => {
  it('sin publicidad, no hay interruptor de publicidad y el aviso solo nombra a quien está', () => {
    monta({ ...NADA, ga4: TODO.ga4 });
    expect(document.querySelector('input[data-cat="publicidad"]')).toBeNull();
    expect(aviso().textContent).toContain('Synentor y Google usan cookies para medir las visitas.');
    pulsa('aceptar');
    expect(scripts()).toEqual(['https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4']);
  });

  it('un identificador mal escrito no se carga nunca', () => {
    monta({ ...TODO, clarity: 'x"><script>' });
    pulsa('aceptar');
    expect(scripts()).not.toContain(expect.stringContaining('clarity'));
    expect(scripts().some((s) => s.includes('clarity'))).toBe(false);
  });
});

describe('prueba del consentimiento en el servidor', () => {
  it('manda un identificador al azar y la decisión, nada más', async () => {
    const fetchSim = vi.fn(async () => new Response(null, { status: 204 }));
    vi.stubGlobal('fetch', fetchSim);
    monta(TODO, { registra: undefined });
    pulsa('rechazar');
    expect(fetchSim).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSim.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('/api/consentimiento');
    const cuerpo = JSON.parse(String(init.body));
    expect(Object.keys(cuerpo).sort()).toEqual(['estadisticas', 'id', 'publicidad', 'v']);
    expect(cuerpo.id).toMatch(/^[0-9a-f-]{36}$/);
    vi.unstubAllGlobals();
  });
});
