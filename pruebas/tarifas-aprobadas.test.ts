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

  // Gerencia, 22/11/2026: la jornada sube a 790 €, pero este precio cerrado no se ha pedido tocarlo y sigue en 720 €.
  it('implantación: 720 €, un precio cerrado que no sigue a la jornada', () => {
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

  // Gerencia, 22/11/2026: estos precios cerrados de 720 y 1.440 € no cambian aunque la jornada pase a 790 €.
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

// Gerencia, 22/11/2026: tarifa nueva de MUV, jornada de implantación y paquete Completo. Escritos a mano a propósito.
describe('MUV, jornada de implantación y paquete Completo (gerencia, 22/11/2026)', () => {
  it('licencia de MUV: 99 € del 1.º al 5.º usuario, 89 € del 6.º al 15.º y 79 € del 16.º al 100.º; más de 100, a medida', () => {
    expect(TARIFA.muv.tramos).toEqual([
      { hasta: 5, precio: 99 },
      { hasta: 15, precio: 89 },
      { hasta: 100, precio: 79 },
    ]);
    expect(TARIFA.muv.maxSinPropuesta).toBe(100);
  });

  it('nada gratis: la tarifa de MUV no lleva usuarios gratis ni ningún precio a cero', () => {
    expect(Object.keys(TARIFA.muv).sort()).toEqual(['equipos', 'maxSinPropuesta', 'tramos']);
    expect(JSON.stringify(TARIFA.muv)).not.toMatch(/gratis/i);
    for (const tramo of TARIFA.muv.tramos) expect(tramo.precio).toBeGreaterThan(0);
    const muv = (muvUsuarios: number) => calcula({ ...base, suite: false, muvUsuarios }).cuotaMensual;
    for (const n of [1, 2, 3, 4, 5]) expect(muv(n)).toBe(n * 99);
  });

  it('equipos de MUV: dos, de pago único: Básico 2.190 € y Completo 6.490 €', () => {
    expect(TARIFA.muv.equipos).toEqual({ basico: 2190, completo: 6490 });
  });

  it('jornada de implantación: 790 €; la Suite, desde 2 jornadas; MUV, de 1 a 4', () => {
    expect(TARIFA.implantacion).toEqual({ jornada: 790, minimoSuite: 2, minimoMuv: 1, maximoMuv: 4 });
  });

  it('paquete Synentor Completo: 1.069 € con 10 usuarios y 85 € el usuario adicional; Compras, Ventas y CRM y Fiscal', () => {
    expect(TARIFA.paquete).toEqual({
      cuota: 1069,
      incluye: ['compras', 'ventas_crm', 'fiscal'],
      usuariosIncluidos: 10,
      usuarioAdicional: 85,
    });
  });

  it('el pago mensual sigue en +20 % y el IGI de Andorra en el 4,5 %', () => {
    expect(TARIFA.recargoMensual).toBe(0.2);
    expect(TARIFA.igiAndorra).toBe(0.045);
  });
});
