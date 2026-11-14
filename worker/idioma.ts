// El idioma con el que se entra en la web por «/» (diseño §10): la preferencia guardada, el navegador, el país de la
// conexión y, por defecto, el catalán. No se guarda nada del visitante.
import { IDIOMA_PRINCIPAL, esIdioma, type Idioma } from '../src/i18n/idiomas';
import type { Pais } from '../src/lib/precios/disponibilidad';

const IDIOMA_POR_PAIS: Record<string, Idioma> = {
  AD: 'ca',
  ES: 'es',
  FR: 'fr',
  PT: 'pt',
  BR: 'pt',
  IT: 'it',
  DE: 'de',
  AT: 'de',
  CH: 'de',
};

const PAISES_TARIFA: readonly Pais[] = ['AD', 'ES', 'PT', 'FR', 'IT', 'DE'];

function idiomaDeCookie(cookie: string | null): Idioma | null {
  if (!cookie) return null;
  for (const parte of cookie.split(';')) {
    const [nombre, valor] = parte.trim().split('=');
    if (nombre === 'lang' && esIdioma(valor)) return valor;
  }
  return null;
}

/** El primer idioma de la web que pide el navegador, por su peso (`q`), comparando solo la parte principal. */
function idiomaDeNavegador(cabecera: string | null): Idioma | null {
  if (!cabecera) return null;
  const pedidos = cabecera
    .split(',')
    .map((trozo, orden) => {
      const [etiqueta, ...params] = trozo.trim().split(';');
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
      const peso = q ? Number(q.slice(2)) : 1;
      return { idioma: etiqueta.trim().toLowerCase().split('-')[0], peso: Number.isFinite(peso) ? peso : 0, orden };
    })
    .filter((p) => p.idioma && p.peso > 0)
    .sort((a, b) => b.peso - a.peso || a.orden - b.orden);
  return pedidos.map((p) => p.idioma).find(esIdioma) ?? null;
}

export function elegirIdioma(e: { cookie: string | null; acceptLanguage: string | null; pais: string | null }): Idioma {
  return (
    idiomaDeCookie(e.cookie) ??
    idiomaDeNavegador(e.acceptLanguage) ??
    (e.pais ? IDIOMA_POR_PAIS[e.pais.toUpperCase()] : undefined) ??
    IDIOMA_PRINCIPAL
  );
}

export function paisConfigurador(pais: string | null | undefined): Pais {
  const p = (pais ?? '').toUpperCase();
  return (PAISES_TARIFA as readonly string[]).includes(p) ? (p as Pais) : 'OTRO';
}
