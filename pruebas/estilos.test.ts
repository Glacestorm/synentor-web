// Las hojas de estilo: lo que no se ve en las pruebas de páginas porque lo pinta el navegador.
/// <reference types="node" />
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const css = readFileSync(fileURLToPath(new URL('../src/estilos/paginas.css', import.meta.url)), 'utf8');

describe('estilos', () => {
  it('las opciones de los desplegables llevan su propio fondo y texto (si no, salen blancas sobre blanco)', () => {
    // El campo tiene texto blanco sobre fondo casi transparente; la lista que abre el navegador (Windows) hereda el
    // texto blanco y pinta el fondo blanco: «Andorra» no se leía en el país del configurador.
    const regla = css.match(/([^{}]*\boption\b[^{}]*)\{([^}]*)\}/);
    expect(regla, 'falta una regla para «option»').not.toBeNull();
    const [, selector, cuerpo] = regla!;
    expect(selector).toMatch(/\.conf-campo select option/);
    expect(selector).toMatch(/\.campo select option/);
    expect(cuerpo).toMatch(/background-color:\s*var\(--syn-noche-2\)/);
    expect(cuerpo).toMatch(/(^|[;\s])color:\s*var\(--syn-blanco\)/);
  });
});
