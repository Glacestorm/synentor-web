// Los textos legales llevan enlaces: el texto se escapa siempre y solo los enlaces declarados van como HTML.
import { describe, expect, it } from 'vitest';
import { rellenaHtml } from '../src/lib/textoHtml';

describe('rellenaHtml', () => {
  it('escapa el texto y los valores, y pone los enlaces declarados', () => {
    const html = rellenaHtml('Escribe a {correo} <ya> & lee la {politica}.', { correo: 'a<b>@c' }, {
      politica: { href: '/es/privacidad/', texto: 'política de privacidad' },
    });
    expect(html).toBe('Escribe a a&lt;b&gt;@c &lt;ya&gt; &amp; lee la <a class="enlace" href="/es/privacidad/">política de privacidad</a>.');
  });

  it('un enlace externo se abre aparte y sin enviar quién lo enlaza', () => {
    const html = rellenaHtml('{apda}', {}, { apda: { href: 'https://www.apda.ad/', texto: 'apda.ad', externo: true } });
    expect(html).toBe('<a class="enlace" href="https://www.apda.ad/" target="_blank" rel="noopener noreferrer">apda.ad</a>');
  });

  it('un marcador sin valor es un error, nunca sale «{x}»', () => {
    expect(() => rellenaHtml('Hola {x}', {})).toThrow('{x}');
  });
});
