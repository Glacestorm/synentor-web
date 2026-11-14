// Los textos que necesita el configurador en el navegador: solo los de su idioma (se pasan en un atributo data-*).
import { textos } from '../i18n/t';
import type { Idioma } from '../i18n/idiomas';
import { MODULOS, type ModuloId } from './precios/tarifa';

export function textosConfigurador(idioma: Idioma) {
  const tx = textos(idioma);
  const modulos = Object.fromEntries(MODULOS.map((m) => [m, tx.servicios.modulos[m].nombre])) as Record<ModuloId, string>;
  return { conf: tx.precios.configurador, modulos, base: tx.servicios.modulos.base.nombre, muv: tx.servicios.muv.titulo };
}

export type TextosConfigurador = ReturnType<typeof textosConfigurador>;
