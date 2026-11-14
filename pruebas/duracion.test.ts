// La duración de cada cookie, escrita en el idioma de la página (Intl), sin listas de palabras a mano.
import { describe, expect, it } from 'vitest';
import { duracion } from '../src/lib/duracion';

const fijos = { sesion: 'Hasta cerrar el navegador', persistente: 'Hasta que la borres' };

describe('duracion', () => {
  it('cifras y unidades en cada idioma', () => {
    expect(duracion({ n: 13, unidad: 'month' }, 'es', fijos)).toBe('13 meses');
    expect(duracion({ n: 1, unidad: 'year' }, 'es', fijos)).toBe('1 año');
    expect(duracion({ n: 13, unidad: 'month' }, 'ca', fijos)).toBe('13 mesos');
    expect(duracion({ n: 90, unidad: 'day' }, 'en', fijos)).toBe('90 days');
    expect(duracion({ n: 30, unidad: 'minute' }, 'de', fijos)).toBe('30 Minuten');
  });

  it('las duraciones sin cifra salen del texto de la página', () => {
    expect(duracion('sesion', 'es', fijos)).toBe('Hasta cerrar el navegador');
    expect(duracion('persistente', 'es', fijos)).toBe('Hasta que la borres');
  });
});
