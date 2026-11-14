// La consultoría en la web sale de una copia del catálogo del ERP (src/datos/consultoria.json), agrupada por categoría.
import { describe, expect, it } from 'vitest';
import { CATEGORIAS, agrupa, porCategoria, type ServicioConsultoria } from '../src/lib/consultoria';
import catalogo from '../src/datos/consultoria.json';

const s = (categoria: string, precioDesde: number, cuotaDesde: number): ServicioConsultoria => ({
  id: `${categoria}-${precioDesde}`,
  nombre: 'x',
  categoria,
  precioDesde,
  cuotaDesde,
});

describe('consultoría por categorías', () => {
  it('el «desde» de una categoría es el precio más bajo; la cuota, la más baja que no es 0', () => {
    const g = agrupa([s('formacion', 950, 0), s('formacion', 700, 0), s('asistentes', 1900, 90), s('asistentes', 700, 40)]);
    expect(g.find((c) => c.clave === 'formacion')).toEqual({ clave: 'formacion', desde: 700, cuotaDesde: null, servicios: 2 });
    expect(g.find((c) => c.clave === 'asistentes')).toEqual({ clave: 'asistentes', desde: 700, cuotaDesde: 40, servicios: 2 });
  });

  it('las categorías salen en el orden fijo de CATEGORIAS', () => {
    const g = agrupa([s('soporte', 250, 150), s('estrategia', 950, 0)]);
    expect(g.map((c) => c.clave)).toEqual(['estrategia', 'soporte']);
  });

  it('una categoría desconocida es un error, nunca se pierde en silencio', () => {
    expect(() => agrupa([s('otra', 1, 0)])).toThrow(/otra/);
  });

  it('la copia del catálogo trae las 9 categorías y 34 servicios, con fecha', () => {
    expect(catalogo.fecha).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(catalogo.servicios).toHaveLength(34);
    expect(porCategoria().map((c) => c.clave)).toEqual([...CATEGORIAS]);
    expect(porCategoria().find((c) => c.clave === 'estrategia')?.desde).toBe(500);
  });
});
