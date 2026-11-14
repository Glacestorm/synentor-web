// Tarifas aprobadas por gerencia el 14/11/2026 (energía, migraciones, convivencia, portal del empleado, centralita) y el
// módulo C. Eléctrica en el configurador. Importes del diseño (§7.4 ter), escritos a mano a propósito: la prueba vigila
// que nadie los cambie sin decisión de gerencia.
import { describe, expect, it } from 'vitest';
import { TARIFA, MODULOS } from '../src/lib/precios/tarifa';
import { calcula, cuotaPortal, type Seleccion } from '../src/lib/precios/calcula';
import { estadoModulo } from '../src/lib/precios/disponibilidad';

const base: Seleccion = {
  pais: 'ES',
  modalidad: 'A',
  pago: 'anual',
  suite: true,
  paquete: 'ninguno',
  empresas: [{ modulos: [], personas: 0 }],
  usuarios: 5,
  muvUsuarios: 0,
};

describe('C. Eléctrica, módulo para asesores energéticos', () => {
  it('cuesta 79 € al mes y está en la lista de módulos', () => {
    expect(MODULOS).toContain('electrica');
    expect(TARIFA.modulos.electrica).toEqual({ cuota: 79 });
  });

  it('solo es para España: en Andorra y en los demás países, a medida', () => {
    expect(estadoModulo('ES', 'electrica')).toBe('disponible');
    expect(estadoModulo('AD', 'electrica')).toBe('a_medida');
    expect(estadoModulo('FR', 'electrica')).toBe('a_medida');
    expect(estadoModulo('OTRO', 'electrica')).toBe('a_medida');
  });

  it('en Andorra lo demás sigue disponible', () => {
    for (const m of ['compras', 'ventas_crm', 'rrhh', 'fiscal', 'juridico', 'pbc', 'productos', 'tpv'] as const) {
      expect(estadoModulo('AD', m)).toBe('disponible');
    }
    expect(estadoModulo('AD', 'base')).toBe('disponible');
    expect(estadoModulo('AD', 'muv')).toBe('disponible');
  });

  it('el configurador lo cobra con la Base: 149 + 79 = 228 €', () => {
    expect(calcula({ ...base, empresas: [{ modulos: ['electrica'], personas: 0 }] }).cuotaMensual).toBe(228);
  });

  it('en Andorra, pedirlo obliga a una propuesta', () => {
    const p = calcula({ ...base, pais: 'AD', empresas: [{ modulos: ['electrica'], personas: 0 }] });
    expect(p.requierePropuesta).toBe(true);
  });
});

describe('solo el portal del empleado', () => {
  it('59 € al mes hasta 10 personas; 4 € por persona más', () => {
    expect(cuotaPortal(1)).toBe(59);
    expect(cuotaPortal(10)).toBe(59);
    expect(cuotaPortal(12)).toBe(67);
    expect(cuotaPortal(40)).toBe(59 + 30 * 4);
  });

  it('cifras raras no rompen el cálculo', () => {
    expect(cuotaPortal(-3)).toBe(59);
    expect(cuotaPortal(Number.NaN)).toBe(59);
    expect(cuotaPortal(11.7)).toBe(63);
  });

  it('implantación de una jornada', () => {
    expect(TARIFA.portalEmpleado).toEqual({ cuota: 59, personasIncluidas: 10, personaAdicional: 4, implantacion: 720 });
  });
});

describe('tarifas de servicios aprobadas el 14/11/2026', () => {
  it('energía', () => {
    expect(TARIFA.energia).toEqual({
      estudioParticular: 49,
      estudioEmpresaPorSuministro: 290,
      exito: 0.3,
      monitorizacion: {
        vivienda: { instalacionDesde: 690, cuota: 19 },
        pyme: { instalacionDesde: 2900, cuota: 49 },
        edificio: { instalacionDesde: 6900, cuota: 99 },
        granConsumidor: { cuotaDesde: 290 },
      },
    });
  });

  it('migraciones y convivencia', () => {
    expect(TARIFA.migracion).toEqual({
      arranque: 1440,
      contabilidadPrimerEjercicio: 1440,
      contabilidadEjercicioAdicional: 720,
      personal: 1440,
      personalHasta: 25,
    });
    expect(TARIFA.convivencia).toEqual({ puestaEnMarcha: 720, cuota: 99, cargasAlMes: 4 });
  });

  it('centralita de IA (próximamente): tres planes y el minuto adicional', () => {
    expect(TARIFA.centralita).toEqual({
      planes: {
        esencial: { cuota: 290, implantacion: 1500, minutos: 1000 },
        avanzada: { cuota: 450, implantacion: 2900, minutos: 2000 },
        elite: { cuota: 890, implantacionDesde: 5900, minutos: 3500 },
      },
      minutoAdicional: 0.15,
    });
  });
});

// Aprobados por gerencia el 14/11/2026 (diseño §18). Escritos a mano a propósito.
describe('Control de costes de compra', () => {
  it('59 € al mes y requiere Compras', () => {
    expect(MODULOS).toContain('costes');
    expect(TARIFA.modulos.costes).toEqual({ cuota: 59, requiere: 'compras' });
  });

  it('disponible donde lo está Compras: Andorra sí; España, inminente; los demás, a medida', () => {
    expect(estadoModulo('AD', 'costes')).toBe('disponible');
    expect(estadoModulo('ES', 'costes')).toBe('inminente');
    expect(estadoModulo('PT', 'costes')).toBe('a_medida');
  });
});

describe('Paquete Obrador', () => {
  it('299 €; con el control de costes, 329 €; Compras, Productos, TPV y RRHH con 5 usuarios', () => {
    expect(TARIFA.paqueteObrador).toEqual({
      cuota: 299,
      conCostes: 329,
      incluye: ['compras', 'productos', 'tpv', 'rrhh'],
      usuariosIncluidos: 5,
    });
  });
});

describe('Paquete Despachos y gestorías', () => {
  it('249 € con 10 empresas y 5 usuarios; 9 € por empresa hasta 25; 5 € por nómina', () => {
    expect(TARIFA.gestorias).toEqual({
      cuota: 249,
      incluye: ['compras', 'ventas_crm', 'fiscal', 'rrhh'],
      empresasIncluidas: 10,
      usuariosIncluidos: 5,
      empresaAdicional: 9,
      porNomina: 5,
      maxEmpresas: 25,
    });
  });
});
