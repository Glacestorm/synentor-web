// Las reglas de vinculación de los artículos de la tarifa para el ERP: salen de tarifa.ts y del catálogo de consultoría.
// Ningún código escrito a mano salvo en las aserciones. El CSV guardado es el que genera la orden.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { articulosErp } from '../src/lib/precios/articulosErp';
import {
  CABECERAS_REGLAS,
  csvReglas,
  reglasErp,
  RUTA_CSV_REGLAS,
  type ReglaErp,
} from '../src/lib/precios/reglasErp';
import { TARIFA } from '../src/lib/precios/tarifa';
import consultoria from '../src/datos/consultoria.json';

const reglas = reglasErp();
const de = (articulo: string, clase: string): ReglaErp[] =>
  reglas.filter((r) => r.articulo === articulo && r.clase === clase);
const destinos = (articulo: string, clase: string) => de(articulo, clase).map((r) => r.destinos);
const exige = (articulo: string, ...codigos: string[]) =>
  codigos.forEach((c) => expect(destinos(articulo, 'exige')).toContainEqual([c]));
const codigoModulo = (m: string) => `SYN-MOD-${m.toUpperCase().replace('_', '-')}`;

describe('reglas de los artículos de la tarifa para el ERP', () => {
  it('lleva las cabeceras del importador de reglas', () => {
    expect(CABECERAS_REGLAS.join(',')).toBe('articulo,clase,destino,cantidad,por_unidad,orden');
    expect(RUTA_CSV_REGLAS).toBe('docs/articulos-erp/reglas-synentor.csv');
    expect(csvReglas().split('\n')[0]).toBe(CABECERAS_REGLAS.join(','));
  });

  it('cada módulo exige la Base y lo que dice su «requiere» en la tarifa', () => {
    for (const [m, def] of Object.entries(TARIFA.modulos)) {
      const req = (def as { requiere?: string }).requiere;
      exige(codigoModulo(m), 'SYN-BASE');
      if (req) exige(codigoModulo(m), codigoModulo(req));
      expect(destinos(codigoModulo(m), 'exige')).toHaveLength(req ? 2 : 1);
    }
    exige('SYN-MOD-JURIDICO', 'SYN-MOD-RRHH');
    exige('SYN-MOD-PBC', 'SYN-MOD-JURIDICO');
    exige('SYN-MOD-PRODUCTOS', 'SYN-MOD-COMPRAS');
    exige('SYN-MOD-COSTES', 'SYN-MOD-COMPRAS');
    expect(destinos('SYN-MOD-RRHH-PERSONA', 'exige')).toEqual([['SYN-MOD-RRHH']]);
  });

  it('usuario, empresa y modalidad alojada exigen la Base', () => {
    for (const a of ['SYN-USUARIO', 'SYN-EMPRESA', 'SYN-MODALIDAD-B']) expect(destinos(a, 'exige')).toEqual([['SYN-BASE']]);
  });

  it('la Base y los paquetes exigen la implantación con el mínimo de jornadas de la tarifa', () => {
    expect(TARIFA.implantacion.minimoSuite).toBe(2);
    for (const a of ['SYN-BASE', 'SYN-PAQ-GESTION', 'SYN-PAQ-OBRADOR', 'SYN-PAQ-OBRADOR-COSTES', 'SYN-GESTORIAS']) {
      const r = de(a, 'exige').find((x) => x.destinos[0] === 'SYN-IMPLANTACION');
      expect(r?.destinos).toEqual(['SYN-IMPLANTACION']);
      expect(r?.cantidad).toBe(TARIFA.implantacion.minimoSuite);
    }
  });

  it('los paquetes incluyen la Base y los módulos de su «incluye»', () => {
    const modulos = (p: readonly string[]) => p.map(codigoModulo);
    const incluye = (a: string) => de(a, 'incluye').map((r) => r.destinos[0]).sort();
    expect(incluye('SYN-PAQ-GESTION')).toEqual(['SYN-BASE', ...modulos(TARIFA.paquete.incluye)].sort());
    expect(incluye('SYN-PAQ-OBRADOR')).toEqual(['SYN-BASE', ...modulos(TARIFA.paqueteObrador.incluye)].sort());
    expect(incluye('SYN-PAQ-OBRADOR-COSTES')).toEqual(
      ['SYN-BASE', ...modulos(TARIFA.paqueteObrador.incluye), 'SYN-MOD-COSTES'].sort(),
    );
    expect(incluye('SYN-GESTORIAS')).toEqual(['SYN-BASE', ...modulos(TARIFA.gestorias.incluye)].sort());
  });

  it('los artículos adicionales exigen su principal', () => {
    exige('SYN-PAQ-GESTION-USUARIO', 'SYN-PAQ-GESTION');
    exige('SYN-GESTORIAS-EMPRESA', 'SYN-GESTORIAS');
    exige('SYN-GESTORIAS-NOMINA', 'SYN-GESTORIAS');
    exige('SYN-PORTAL-PERSONA', 'SYN-PORTAL');
  });

  it('página e idioma adicionales exigen una web (grupo de alternativas)', () => {
    const grupo = ['SYN-WEB-ESENCIAL', 'SYN-WEB-PROFESIONAL', 'SYN-WEB-PREMIUM'];
    for (const a of ['SYN-WEB-PAGINA', 'SYN-WEB-IDIOMA']) expect(destinos(a, 'exige')).toEqual([grupo]);
  });

  it('cuotas de monitorización, migración, convivencia y consultoría exigen su principal', () => {
    for (const x of ['VIVIENDA', 'PYME', 'EDIFICIO']) exige(`SYN-ENE-MON-${x}-CUOTA`, `SYN-ENE-MON-${x}`);
    exige('SYN-MIG-CONTA-ADICIONAL', 'SYN-MIG-CONTA-PRIMERO');
    exige('SYN-CONV-CUOTA', 'SYN-CONV-PUESTA');
    for (const s of consultoria.servicios) {
      const code = `SYN-CON-${s.id.toUpperCase()}`;
      if (s.cuotaDesde > 0) exige(`${code}-CUOTA`, code);
    }
  });

  it('todo código de una regla existe, ninguna se repite y no hay ciclos', () => {
    const codigos = new Set(articulosErp().map((a) => a.code));
    const vistas = new Set<string>();
    for (const r of reglas) {
      expect(codigos.has(r.articulo)).toBe(true);
      expect(r.destinos.length).toBeGreaterThan(0);
      for (const d of r.destinos) expect(codigos.has(d)).toBe(true);
      expect(['exige', 'recomienda', 'incluye']).toContain(r.clase);
      expect(r.cantidad).toBeGreaterThan(0);
      expect(r.por_unidad).toBe(false);
      expect(Number.isInteger(r.orden)).toBe(true);
      const clave = `${r.articulo}|${r.clase}|${r.destinos.join('|')}`;
      expect(vistas.has(clave)).toBe(false);
      vistas.add(clave);
    }
    const aristas = new Map<string, string[]>();
    for (const r of reglas) aristas.set(r.articulo, [...(aristas.get(r.articulo) ?? []), ...r.destinos]);
    const estado = new Map<string, number>();
    const visita = (n: string): void => {
      if (estado.get(n) === 2) return;
      expect(estado.get(n)).not.toBe(1);
      estado.set(n, 1);
      for (const d of aristas.get(n) ?? []) visita(d);
      estado.set(n, 2);
    };
    for (const n of aristas.keys()) visita(n);
  });

  it('las reglas de un artículo van juntas y con su orden creciente', () => {
    const vistos: string[] = [];
    for (const r of reglas) if (vistos[vistos.length - 1] !== r.articulo) vistos.push(r.articulo);
    expect(new Set(vistos).size).toBe(vistos.length);
    for (const a of vistos) {
      const ordenes = reglas.filter((r) => r.articulo === a).map((r) => r.orden);
      expect(ordenes).toEqual([...ordenes].sort((x, y) => x - y));
    }
  });

  it('las tres reglas que confirmó gerencia el 16/11/2026: portal, mantenimiento de la web y migraciones', () => {
    exige('SYN-PORTAL', 'SYN-PORTAL-IMPLANTACION');
    expect(de('SYN-PORTAL', 'exige')).toHaveLength(1);
    expect(de('SYN-PORTAL', 'exige')[0].cantidad).toBe(1);
    for (const web of ['SYN-WEB-ESENCIAL', 'SYN-WEB-PROFESIONAL', 'SYN-WEB-PREMIUM']) {
      expect(destinos(web, 'recomienda')).toEqual([['SYN-WEB-MANT-BASICO', 'SYN-WEB-MANT-PLUS']]);
    }
    expect(reglas.filter((r) => r.clase === 'recomienda').map((r) => r.articulo)).toEqual([
      'SYN-WEB-ESENCIAL',
      'SYN-WEB-PROFESIONAL',
      'SYN-WEB-PREMIUM',
    ]);
    for (const r of reglas.filter((x) => x.clase === 'recomienda')) {
      expect(r.cantidad).toBe(1);
      expect(r.por_unidad).toBe(false);
    }
    for (const mig of ['SYN-MIG-ARRANQUE', 'SYN-MIG-CONTA-PRIMERO', 'SYN-MIG-CONTA-ADICIONAL', 'SYN-MIG-PERSONAL']) {
      exige(mig, 'SYN-BASE');
    }
    expect(destinos('SYN-MIG-CONTA-ADICIONAL', 'exige')).toEqual([['SYN-BASE'], ['SYN-MIG-CONTA-PRIMERO']]);
  });

  it('el CSV guardado es el que genera la orden y se lee con sus 6 campos', () => {
    expect(readFileSync(RUTA_CSV_REGLAS, 'utf8')).toBe(csvReglas());
    const lineas = csvReglas().trimEnd().split('\n');
    expect(lineas).toHaveLength(reglas.length + 1);
    for (const l of lineas) expect(l.split(',')).toHaveLength(CABECERAS_REGLAS.length);
    const grupo = lineas.find((l) => l.startsWith('SYN-WEB-PAGINA,'))!;
    expect(grupo).toBe('SYN-WEB-PAGINA,exige,SYN-WEB-ESENCIAL|SYN-WEB-PROFESIONAL|SYN-WEB-PREMIUM,1,false,1');
  });
});
