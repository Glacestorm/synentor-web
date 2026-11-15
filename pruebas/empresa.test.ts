import { describe, expect, it } from 'vitest';
import { EMPRESA } from '../src/datos/empresa';

// Los datos de contacto de la web son SIEMPRE los de la empresa (diseño, §9 y §15.6).
describe('datos de la empresa', () => {
  it('el correo es el de la empresa', () => {
    expect(EMPRESA.correo).toBe('admin@synentor.com');
  });

  it('el teléfono es el de la empresa', () => {
    expect(EMPRESA.telefono.enlace).toBe('+376692069');
  });

  it('la sociedad, constituida, sin «en constitución» y sin NRT de relleno', () => {
    expect(EMPRESA.razonSocial).toBe('SYNENTOR, S.L.U.');
    expect('estado' in EMPRESA).toBe(false);
    expect(EMPRESA.nrt).toBeNull();
  });

  it('la página de LinkedIn es la de la empresa (gerencia, 15/11/2026)', () => {
    expect(EMPRESA.redes.linkedin).toBe('https://www.linkedin.com/company/145468024/');
  });

  it('ningún dato apunta a un correo personal', () => {
    expect(JSON.stringify(EMPRESA)).not.toMatch(/gmail|hotmail|outlook|yahoo/i);
  });
});
