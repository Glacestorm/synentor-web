import { describe, expect, it } from 'vitest';
import { euros, porcentaje } from '../src/lib/formato';

describe('formato de importes', () => {
  it('sin decimales cuando el importe es entero; con dos cuando no', () => {
    expect(euros(149, 'ca')).toBe('149 €');
    expect(euros(787.93, 'ca')).toBe('787,93 €');
    expect(euros(0.15, 'es')).toBe('0,15 €');
  });

  it('separador de miles según el idioma', () => {
    expect(euros(6500, 'ca')).toBe('6.500 €');
    expect(euros(15600, 'es')).toBe('15.600 €');
  });

  it('porcentajes', () => {
    expect(porcentaje(0.2, 'ca')).toBe('20 %');
    expect(porcentaje(0.045, 'es')).toBe('4,5 %');
  });
});
