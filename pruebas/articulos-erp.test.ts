// Los artículos de la tarifa para el ERP (Productos → Importar/Exportar): salen de tarifa.ts y del catálogo de
// consultoría, sin ningún precio escrito a mano, y el CSV guardado en docs/ es el que genera la orden.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { articulosErp, CABECERAS_ERP, csvArticulos, RUTA_CSV } from '../src/lib/precios/articulosErp';
import { TARIFA } from '../src/lib/precios/tarifa';
import consultoria from '../src/datos/consultoria.json';

const porCodigo = new Map(articulosErp().map((a) => [a.code, a]));
const precio = (code: string) => porCodigo.get(code)?.sale_price;

describe('artículos de la tarifa para el ERP', () => {
  it('lleva las columnas del importador del ERP, en su orden', () => {
    expect(CABECERAS_ERP).toEqual([
      'code', 'name', 'description', 'unit', 'sale_price', 'purchase_price', 'is_active', 'type', 'tax_code',
    ]);
    expect(csvArticulos().split('\n')[0]).toBe(CABECERAS_ERP.join(','));
  });

  it('no repite ningún código y todos empiezan por SYN-', () => {
    const codigos = articulosErp().map((a) => a.code);
    expect(new Set(codigos).size).toBe(codigos.length);
    expect(codigos.every((c) => /^SYN-[A-Z0-9-]+$/.test(c))).toBe(true);
  });

  it('todo es un servicio con el IGI general y con nombre', () => {
    for (const a of articulosErp()) {
      expect(a.type).toBe('service');
      expect(a.tax_code).toBe('IGI_GEN');
      expect(a.name.length).toBeGreaterThan(2);
    }
  });

  it('los precios de la Suite salen de la tarifa', () => {
    expect(precio('SYN-BASE')).toBe(TARIFA.base.cuota);
    expect(precio('SYN-USUARIO')).toBe(TARIFA.usuarioAdicional);
    expect(precio('SYN-EMPRESA')).toBe(TARIFA.empresaAdicional.cuota);
    for (const [id, def] of Object.entries(TARIFA.modulos)) {
      expect(precio(`SYN-MOD-${id.toUpperCase().replace('_', '-')}`)).toBe(def.cuota);
    }
    expect(precio('SYN-MOD-RRHH-PERSONA')).toBe(TARIFA.modulos.rrhh.porPersona);
    expect(precio('SYN-PAQ-GESTION')).toBe(TARIFA.paquete.cuota);
    expect(precio('SYN-PAQ-GESTION-USUARIO')).toBe(TARIFA.paquete.usuarioAdicional);
    expect(precio('SYN-PAQ-OBRADOR')).toBe(TARIFA.paqueteObrador.cuota);
    expect(precio('SYN-PAQ-OBRADOR-COSTES')).toBe(TARIFA.paqueteObrador.conCostes);
    expect(precio('SYN-GESTORIAS')).toBe(TARIFA.gestorias.cuota);
    expect(precio('SYN-GESTORIAS-EMPRESA')).toBe(TARIFA.gestorias.empresaAdicional);
    expect(precio('SYN-GESTORIAS-NOMINA')).toBe(TARIFA.gestorias.porNomina);
    expect(precio('SYN-IMPLANTACION')).toBe(TARIFA.implantacion.jornada);
  });

  it('los precios de webs, energía, migraciones, convivencia y portal salen de la tarifa', () => {
    expect(precio('SYN-WEB-ESENCIAL')).toBe(TARIFA.webs.esencial);
    expect(precio('SYN-WEB-PROFESIONAL')).toBe(TARIFA.webs.profesional);
    expect(precio('SYN-WEB-PREMIUM')).toBe(TARIFA.webs.premiumDesde);
    expect(precio('SYN-WEB-PAGINA')).toBe(TARIFA.webs.paginaAdicional);
    expect(precio('SYN-WEB-IDIOMA')).toBe(TARIFA.webs.idiomaAdicional);
    expect(precio('SYN-WEB-MANT-BASICO')).toBe(TARIFA.webs.mantenimientoBasico);
    expect(precio('SYN-WEB-MANT-PLUS')).toBe(TARIFA.webs.mantenimientoPlus);
    const m = TARIFA.energia.monitorizacion;
    expect(precio('SYN-ENE-ESTUDIO-PART')).toBe(TARIFA.energia.estudioParticular);
    expect(precio('SYN-ENE-ESTUDIO-EMP')).toBe(TARIFA.energia.estudioEmpresaPorSuministro);
    expect(precio('SYN-ENE-EXITO')).toBeNull();
    expect(precio('SYN-ENE-MON-VIVIENDA')).toBe(m.vivienda.instalacionDesde);
    expect(precio('SYN-ENE-MON-VIVIENDA-CUOTA')).toBe(m.vivienda.cuota);
    expect(precio('SYN-ENE-MON-PYME')).toBe(m.pyme.instalacionDesde);
    expect(precio('SYN-ENE-MON-PYME-CUOTA')).toBe(m.pyme.cuota);
    expect(precio('SYN-ENE-MON-EDIFICIO')).toBe(m.edificio.instalacionDesde);
    expect(precio('SYN-ENE-MON-EDIFICIO-CUOTA')).toBe(m.edificio.cuota);
    expect(precio('SYN-ENE-MON-GRAN-CUOTA')).toBe(m.granConsumidor.cuotaDesde);
    expect(precio('SYN-MIG-ARRANQUE')).toBe(TARIFA.migracion.arranque);
    expect(precio('SYN-MIG-CONTA-PRIMERO')).toBe(TARIFA.migracion.contabilidadPrimerEjercicio);
    expect(precio('SYN-MIG-CONTA-ADICIONAL')).toBe(TARIFA.migracion.contabilidadEjercicioAdicional);
    expect(precio('SYN-MIG-PERSONAL')).toBe(TARIFA.migracion.personal);
    expect(precio('SYN-CONV-PUESTA')).toBe(TARIFA.convivencia.puestaEnMarcha);
    expect(precio('SYN-CONV-CUOTA')).toBe(TARIFA.convivencia.cuota);
    expect(precio('SYN-PORTAL')).toBe(TARIFA.portalEmpleado.cuota);
    expect(precio('SYN-PORTAL-PERSONA')).toBe(TARIFA.portalEmpleado.personaAdicional);
    expect(precio('SYN-PORTAL-IMPLANTACION')).toBe(TARIFA.portalEmpleado.implantacion);
  });

  it('cada servicio de consultoría tiene su artículo y, si lleva cuota, otro para la cuota', () => {
    for (const s of consultoria.servicios) {
      const code = `SYN-CON-${s.id.toUpperCase()}`;
      expect(precio(code)).toBe(s.precioDesde);
      if (s.cuotaDesde > 0) expect(precio(`${code}-CUOTA`)).toBe(s.cuotaDesde);
      else expect(porCodigo.has(`${code}-CUOTA`)).toBe(false);
    }
  });

  it('no lleva MUV (ya está en el ERP) ni la centralita (próximamente, sin precios en la web)', () => {
    const codigos = [...porCodigo.keys()];
    expect(codigos.some((c) => c.includes('MUV') || c.includes('CENTRALITA'))).toBe(false);
  });

  it('la modalidad alojada va desactivada (en desarrollo inminente) y lo demás, activo', () => {
    expect(porCodigo.get('SYN-MODALIDAD-B')?.is_active).toBe(false);
    expect(porCodigo.get('SYN-MODALIDAD-B')?.sale_price).toBe(TARIFA.modalidadB);
    const otros = articulosErp().filter((a) => a.code !== 'SYN-MODALIDAD-B');
    expect(otros.every((a) => a.is_active)).toBe(true);
  });

  it('una cuota mensual dice que es con pago anual y el recargo del pago mensual', () => {
    const base = porCodigo.get('SYN-BASE');
    expect(base?.unit).toBe('mes');
    expect(base?.description).toContain('pago anual');
    expect(base?.description).toContain('+20 %');
  });

  it('el CSV guardado es el que genera la orden (npm run articulos-erp)', () => {
    expect(readFileSync(RUTA_CSV, 'utf8')).toBe(csvArticulos());
  });

  it('al leerlo como CSV, cada línea da sus 9 campos (lo que lleva comas va entre comillas)', () => {
    const campos = (linea: string) => {
      const salida: string[] = [];
      let actual = '';
      let comillas = false;
      for (let i = 0; i < linea.length; i++) {
        const c = linea[i];
        if (comillas && c === '"' && linea[i + 1] === '"') { actual += '"'; i++; }
        else if (c === '"') comillas = !comillas;
        else if (c === ',' && !comillas) { salida.push(actual); actual = ''; }
        else actual += c;
      }
      return [...salida, actual];
    };
    const lineas = csvArticulos().trimEnd().split('\n');
    expect(lineas.length).toBe(articulosErp().length + 1);
    for (const l of lineas) expect(campos(l)).toHaveLength(CABECERAS_ERP.length);
    const empresa = campos(lineas.find((l) => l.startsWith('SYN-EMPRESA,'))!);
    expect(empresa[2]).toContain(',');
    expect(empresa[4]).toBe(String(TARIFA.empresaAdicional.cuota));
  });
});
