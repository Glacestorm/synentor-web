/** Sustituye los {marcadores} de un texto. Un marcador sin valor es un error: nunca sale «{base}». Sin dependencias, para
 *  que el código del navegador lo use sin cargar los textos de todos los idiomas. */
export function rellena(texto: string, valores: Record<string, string | number>): string {
  return texto.replace(/\{([a-zA-Z0-9]+)\}/g, (_, clave: string) => {
    if (!(clave in valores)) throw new Error(`Falta el valor de {${clave}} en «${texto}»`);
    return String(valores[clave]);
  });
}
