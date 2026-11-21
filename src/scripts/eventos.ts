// Las acciones de la página hacia el contador del Worker (/api/evento). Solo en los dominios de producción y solo las
// acciones de la lista de la página; nunca lanza: una estadística que falla no puede romper la web.
import { DOMINIOS_PRODUCCION } from '../datos/analitica';
import { ACCIONES_DE_LA_PAGINA, campanaDe, type Accion, type Campana } from '../lib/eventos';

const RUTA = '/api/evento';

function enProduccion(): boolean {
  try {
    return (DOMINIOS_PRODUCCION as readonly string[]).includes(globalThis.location.hostname);
  } catch {
    return false;
  }
}

export function enviaEvento(accion: Accion, campana?: Campana): void {
  try {
    if (!enProduccion() || !ACCIONES_DE_LA_PAGINA.includes(accion)) return;
    const cuerpo = JSON.stringify(campana ? { accion, ...campana } : { accion });
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      if (navigator.sendBeacon(RUTA, new Blob([cuerpo], { type: 'text/plain' }))) return;
    }
    void fetch(RUTA, { method: 'POST', body: cuerpo, keepalive: true }).catch(() => {});
  } catch {
    // Sin contador, la página sigue igual.
  }
}

export function iniciaEventos(doc: Document, loc: Location): void {
  try {
    const campana = campanaDe(new URL(loc.href));
    if (campana) enviaEvento('llegada-campana', campana);
    doc.addEventListener('click', (e) => {
      try {
        const destino = e.target as Element | null;
        const el = destino?.closest?.('[data-evento]');
        const accion = el?.getAttribute('data-evento');
        if (accion) enviaEvento(accion as Accion);
      } catch {
        // idem
      }
    });
  } catch {
    // idem
  }
}
