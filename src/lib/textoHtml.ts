// Rellena un texto con {marcadores} para pintarlo como HTML (los textos legales llevan enlaces). Todo el texto y los
// valores se escapan; solo los enlaces declarados entran como HTML, y sus partes también escapadas.

export interface Enlace {
  href: string;
  texto: string;
  /** Una web de fuera: se abre en otra pestaña y sin decirle de dónde vienes. */
  externo?: boolean;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function rellenaHtml(texto: string, valores: Record<string, string | number>, enlaces: Record<string, Enlace> = {}): string {
  return texto
    .split(/(\{[a-zA-Z0-9]+\})/)
    .map((trozo) => {
      const m = trozo.match(/^\{([a-zA-Z0-9]+)\}$/);
      if (!m) return esc(trozo);
      const clave = m[1];
      const enlace = enlaces[clave];
      if (enlace) {
        const fuera = enlace.externo ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a class="enlace" href="${esc(enlace.href)}"${fuera}>${esc(enlace.texto)}</a>`;
      }
      if (clave in valores) return esc(String(valores[clave]));
      throw new Error(`Falta el valor de {${clave}} en «${texto}»`);
    })
    .join('');
}
