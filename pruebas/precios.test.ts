import { describe, expect, it } from 'vitest';
import { calcula, type Seleccion, cuotaGestoria } from '../src/lib/precios/calcula';
import { estadoModulo } from '../src/lib/precios/disponibilidad';
import { resuelveDependencias } from '../src/lib/precios/calcula';

// Los importes de estas pruebas son los del diseño aprobado (§7), calculados a mano.
const base: Seleccion = {
  pais: 'AD',
  modalidad: 'A',
  pago: 'anual',
  suite: true,
  paquete: 'ninguno',
  empresas: [{ modulos: [], personas: 0 }],
  usuarios: 5,
  muvUsuarios: 0,
};

const ejemplo71: Seleccion = {
  ...base,
  empresas: [{ modulos: ['compras', 'rrhh', 'fiscal', 'productos', 'tpv'], personas: 20 }],
};

describe('motor de precios', () => {
  it('el ejemplo del §7.1: 754 € al mes, 33,93 € de IGI', () => {
    const p = calcula(ejemplo71);
    expect(p.cuotaMensual).toBe(754);
    expect(p.igi).toBe(33.93);
    expect(p.totalMensual).toBe(787.93);
    expect(p.requierePropuesta).toBe(false);
  });

  it('solo la Base: 149 € con 5 usuarios', () => {
    expect(calcula(base).cuotaMensual).toBe(149);
  });

  it('usuarios por encima de 5: 15 € cada uno', () => {
    expect(calcula({ ...base, usuarios: 8 }).cuotaMensual).toBe(149 + 3 * 15);
  });

  it('el paquete «Synentor Completo» con 10 usuarios: 469 €; con 12, 559 €', () => {
    const paquete = { ...base, paquete: 'completo' as const, usuarios: 10 };
    expect(calcula(paquete).cuotaMensual).toBe(469);
    expect(calcula({ ...paquete, usuarios: 12 }).cuotaMensual).toBe(559);
  });

  it('lo mismo que el paquete, por separado: 586 €', () => {
    const p = calcula({
      ...base,
      empresas: [{ modulos: ['compras', 'ventas_crm', 'fiscal'], personas: 0 }],
      usuarios: 10,
      muvUsuarios: 10,
    });
    expect(p.cuotaMensual).toBe(586);
  });

  it('con el paquete, un módulo que requiere compras no la añade otra vez', () => {
    const p = calcula({ ...base, paquete: 'completo', usuarios: 10, empresas: [{ modulos: ['productos'], personas: 0 }] });
    expect(p.cuotaMensual).toBe(469 + 39);
    expect(p.anadidos).toEqual([]);
  });

  it('empresa adicional: 39 € más sus módulos al 50 %; las personas, sin rebaja', () => {
    const p = calcula({
      ...base,
      empresas: [
        { modulos: [], personas: 0 },
        { modulos: ['rrhh'], personas: 3 },
      ],
    });
    // 149 + (39 + 59 × 0,5 + 3 × 18) = 149 + 122,50
    expect(p.cuotaMensual).toBe(271.5);
  });

  it('las personas solo se cobran con RRHH', () => {
    const p = calcula({ ...base, empresas: [{ modulos: ['compras'], personas: 12 }] });
    expect(p.cuotaMensual).toBe(149 + 69);
  });

  it('pago mensual: +20 % en todas las cuotas', () => {
    expect(calcula({ ...ejemplo71, pago: 'mensual' }).cuotaMensual).toBe(904.8);
  });

  it('MUV sin paquete: gratis hasta 5; 39 € del 6.º al 25.º; 32 € del 26.º al 100.º', () => {
    const soloMuv = { ...base, suite: false };
    expect(calcula({ ...soloMuv, muvUsuarios: 5 }).cuotaMensual).toBe(0);
    expect(calcula({ ...soloMuv, muvUsuarios: 30 }).cuotaMensual).toBe(940);
    expect(calcula({ ...soloMuv, muvUsuarios: 100 }).cuotaMensual).toBe(20 * 39 + 75 * 32);
  });

  it('MUV con más de 100 usuarios: a medida', () => {
    expect(calcula({ ...base, suite: false, muvUsuarios: 101 }).requierePropuesta).toBe(true);
  });

  it('la modalidad B suma 50 € y pide propuesta (en desarrollo inminente)', () => {
    const p = calcula({ ...base, modalidad: 'B' });
    expect(p.cuotaMensual).toBe(199);
    expect(p.requierePropuesta).toBe(true);
  });

  it('España: sin IGI, con el aviso de impuestos y pidiendo propuesta', () => {
    const p = calcula({ ...ejemplo71, pais: 'ES' });
    expect(p.cuotaMensual).toBe(754);
    expect(p.igi).toBeNull();
    expect(p.totalMensual).toBe(754);
    expect(p.avisos).toContain('impuestos-no-incluidos');
    expect(p.requierePropuesta).toBe(true);
  });

  it('TPV en dos empresas: aviso de que CashDro solo va en una', () => {
    const p = calcula({
      ...base,
      empresas: [
        { modulos: ['tpv'], personas: 0 },
        { modulos: ['tpv'], personas: 0 },
      ],
    });
    expect(p.avisos).toContain('cashdro-una-empresa');
  });

  it('más de 10 empresas: tarifa por volumen, pide propuesta', () => {
    const empresas = Array.from({ length: 11 }, () => ({ modulos: [], personas: 0 }));
    expect(calcula({ ...base, empresas }).requierePropuesta).toBe(true);
  });

  it('cifras negativas o con decimales no rompen el cálculo', () => {
    const p = calcula({ ...base, usuarios: 6.9, muvUsuarios: -4, empresas: [{ modulos: ['rrhh'], personas: -3 }] });
    expect(p.cuotaMensual).toBe(149 + 15 + 59);
    expect(Number.isNaN(p.totalMensual)).toBe(false);
  });

  it('la implantación empieza en 2 jornadas de 720 €; solo MUV, en 1', () => {
    expect(calcula(base).implantacionDesde).toBe(1440);
    expect(calcula({ ...base, suite: false, muvUsuarios: 8 }).implantacionDesde).toBe(720);
  });
});

describe('dependencias entre módulos', () => {
  it('PBC añade Jurídico y RRHH', () => {
    const r = resuelveDependencias(['pbc']);
    expect([...r.modulos].sort()).toEqual(['juridico', 'pbc', 'rrhh']);
    expect([...r.anadidos].sort()).toEqual(['juridico', 'rrhh']);
  });

  it('Productos añade Compras', () => {
    expect(resuelveDependencias(['productos']).anadidos).toEqual(['compras']);
  });

  it('el motor cobra los módulos añadidos por dependencia', () => {
    const p = calcula({ ...base, empresas: [{ modulos: ['pbc'], personas: 0 }] });
    expect(p.cuotaMensual).toBe(149 + 49 + 79 + 59);
    expect([...p.anadidos].sort()).toEqual(['juridico', 'rrhh']);
  });
});

describe('disponibilidad por país (diseño §7.0)', () => {
  it('en Andorra todo está disponible', () => {
    for (const m of ['base', 'compras', 'ventas_crm', 'rrhh', 'fiscal', 'juridico', 'pbc', 'productos', 'tpv', 'muv'] as const) {
      expect(estadoModulo('AD', m)).toBe('disponible');
    }
  });

  it('España: RRHH, compras, fiscal y la contabilidad de la Base, en desarrollo inminente', () => {
    expect(estadoModulo('ES', 'rrhh')).toBe('inminente');
    expect(estadoModulo('ES', 'compras')).toBe('inminente');
    expect(estadoModulo('ES', 'fiscal')).toBe('inminente');
    expect(estadoModulo('ES', 'base')).toBe('inminente');
    expect(estadoModulo('ES', 'ventas_crm')).toBe('disponible');
    expect(estadoModulo('ES', 'juridico')).toBe('a_medida');
  });

  it('Francia y los demás: MUV, CRM y productos disponibles; nómina y fiscal a medida', () => {
    expect(estadoModulo('FR', 'muv')).toBe('disponible');
    expect(estadoModulo('DE', 'ventas_crm')).toBe('disponible');
    expect(estadoModulo('IT', 'productos')).toBe('disponible');
    expect(estadoModulo('PT', 'rrhh')).toBe('a_medida');
    expect(estadoModulo('OTRO', 'fiscal')).toBe('a_medida');
  });
});

describe('tarifa de webs (aprobada el 14/11/2026)', () => {
  it('los precios aprobados', async () => {
    const { TARIFA } = await import('../src/lib/precios/tarifa');
    expect(TARIFA.webs).toEqual({
      esencial: 1200,
      profesional: 2900,
      premiumDesde: 6500,
      paginaAdicional: 250,
      idiomaAdicional: 350,
      mantenimientoBasico: 49,
      mantenimientoPlus: 99,
    });
  });
});

describe('control de costes, paquete Obrador y gestorías (diseño §18)', () => {
  const ad = { ...base, pais: 'AD' as const };

  it('el control de costes añade Compras si no está: 69 + 59', () => {
    const p = calcula({ ...ad, empresas: [{ modulos: ['costes'], personas: 0 }] });
    expect(p.anadidos).toEqual(['compras']);
    expect(p.lineas.find((l) => l.clave === 'modulo:costes')?.importe).toBe(59);
    expect(p.cuotaMensual).toBe(149 + 69 + 59);
  });

  it('en una empresa adicional, el control de costes va al 50 %, como todos los módulos', () => {
    const p = calcula({ ...ad, empresas: [{ modulos: [], personas: 0 }, { modulos: ['costes'], personas: 0 }] });
    expect(p.lineas.find((l) => l.clave === 'modulo:costes' && l.empresa === 1)?.importe).toBe(29.5);
    expect(p.lineas.find((l) => l.clave === 'modulo:compras' && l.empresa === 1)?.importe).toBe(34.5);
  });

  it('Obrador: 299 € con sus cuatro módulos incluidos; las personas, a 18 €', () => {
    const p = calcula({ ...ad, paquete: 'obrador', empresas: [{ modulos: [], personas: 6 }] });
    expect(p.lineas.map((l) => l.clave)).toEqual(['paquete-obrador', 'personas']);
    expect(p.cuotaMensual).toBe(299 + 6 * 18);
  });

  it('Obrador con el control de costes: 329 €, sin la línea del módulo', () => {
    const p = calcula({ ...ad, paquete: 'obrador', empresas: [{ modulos: ['costes'], personas: 0 }] });
    expect(p.lineas.map((l) => [l.clave, l.importe])).toEqual([['paquete-obrador-costes', 329]]);
    expect(p.cuotaMensual).toBe(329);
  });

  it('Obrador: 5 usuarios incluidos y el 6.º a la tarifa normal; MUV no va incluido', () => {
    const p = calcula({ ...ad, paquete: 'obrador', usuarios: 6, muvUsuarios: 6 });
    expect(p.lineas.find((l) => l.clave === 'usuarios-adicionales')?.importe).toBe(15);
    expect(p.lineas.find((l) => l.clave === 'muv-usuarios')?.importe).toBe(39);
  });

  it('gestorías: 249 € hasta 10 empresas; 9 € por empresa más y 5 € por nómina', () => {
    expect(cuotaGestoria(10, 0)).toBe(249);
    expect(cuotaGestoria(1, 0)).toBe(249);
    expect(cuotaGestoria(25, 100)).toBe(249 + 15 * 9 + 100 * 5);
  });

  it('gestorías: con más de 25 empresas no hay importe, bajo propuesta', () => {
    expect(cuotaGestoria(26, 0)).toBeNull();
  });
});
