// Las filas de la tabla «Todas las tarifas» (página de Precios), en el idioma pedido. Un solo sitio para la tabla y para
// llms.txt: así no puede haber dos versiones de un precio. Todos los importes salen de la tarifa (tarifa.ts).
import { textos, rellena } from '../../i18n/t';
import type { Idioma } from '../../i18n/idiomas';
import { euros, porcentaje } from '../formato';
import { porCategoria } from '../consultoria';
import { TARIFA } from './tarifa';

export interface FilaTarifa {
  concepto: string;
  precio: string;
  /** La sección de la misma página que explica la fila (la tabla enlaza el concepto a ella). */
  ancla?: string;
}

/**
 * La licencia de MUV en una frase (Servicios, la tabla de Precios y llms.txt): se paga desde el primer usuario y cada
 * usuario va al precio de su tramo (gerencia, 22/11/2026). Los tramos y los importes, de la tarifa.
 */
export function licenciaMuv(idioma: Idioma): string {
  const [t1, t2, t3] = TARIFA.muv.tramos;
  const eur = (n: number) => euros(n, idioma);
  return rellena(textos(idioma).servicios.muv.precio, {
    hasta1: t1.hasta,
    precio1: eur(t1.precio),
    desde2: t1.hasta + 1,
    hasta2: t2.hasta,
    precio2: eur(t2.precio),
    desde3: t2.hasta + 1,
    hasta3: t3.hasta,
    precio3: eur(t3.precio),
    max: TARIFA.muv.maxSinPropuesta,
  });
}

/** Los dos equipos de MUV, de pago único (gerencia, 22/11/2026). */
export function equiposMuv(idioma: Idioma): string {
  const e = TARIFA.muv.equipos;
  return rellena(textos(idioma).servicios.muv.equipos, {
    basico: euros(e.basico, idioma),
    completo: euros(e.completo, idioma),
  });
}

export function filasTarifa(idioma: Idioma): FilaTarifa[] {
  const todo = textos(idioma);
  const tt = todo.precios.tablas;
  const eur = (n: number) => euros(n, idioma);
  const pct = (n: number) => porcentaje(n, idioma);
  const alMes = (n: number) => rellena(tt.alMes, { precio: eur(n) });
  const consultoriaDesde = Math.min(...porCategoria().map((g) => g.desde));

  return [
    { concepto: todo.servicios.modulos.base.nombre, precio: alMes(TARIFA.base.cuota) },
    { concepto: tt.usuarioAdicional, precio: alMes(TARIFA.usuarioAdicional) },
    {
      concepto: tt.empresaAdicional,
      precio: rellena(tt.empresaAdicionalPrecio, {
        precio: eur(TARIFA.empresaAdicional.cuota),
        porcentaje: pct(TARIFA.empresaAdicional.factorModulos),
      }),
    },
    ...(Object.keys(TARIFA.modulos) as (keyof typeof TARIFA.modulos)[]).map((m) => {
      const def = TARIFA.modulos[m] as { cuota: number; porPersona?: number };
      return {
        concepto: todo.servicios.modulos[m].nombre,
        precio: alMes(def.cuota) + (def.porPersona ? ` ${rellena(tt.porPersona, { precio: eur(def.porPersona) })}` : ''),
      };
    }),
    {
      concepto: tt.paquete,
      precio: `${rellena(todo.precios.configurador.paqueteTexto, {
        usuarios: TARIFA.paquete.usuariosIncluidos,
        precio: eur(TARIFA.paquete.cuota),
      })} ${rellena(tt.paqueteUsuario, { precio: eur(TARIFA.paquete.usuarioAdicional) })}`,
    },
    {
      concepto: tt.paqueteObrador,
      precio: rellena(todo.precios.configurador.paqueteObradorTexto, {
        usuarios: TARIFA.paqueteObrador.usuariosIncluidos,
        precio: eur(TARIFA.paqueteObrador.cuota),
        conCostes: eur(TARIFA.paqueteObrador.conCostes),
      }),
    },
    {
      concepto: tt.gestorias,
      ancla: 'gestorias',
      precio: rellena(tt.gestoriasPrecio, {
        precio: eur(TARIFA.gestorias.cuota),
        empresas: TARIFA.gestorias.empresasIncluidas,
        usuarios: TARIFA.gestorias.usuariosIncluidos,
        empresa: eur(TARIFA.gestorias.empresaAdicional),
        max: TARIFA.gestorias.maxEmpresas,
        nomina: eur(TARIFA.gestorias.porNomina),
      }),
    },
    { concepto: tt.muv, precio: licenciaMuv(idioma) },
    { concepto: tt.consultoria, precio: rellena(todo.servicios.consultoria.desde, { precio: eur(consultoriaDesde) }) },
    { concepto: todo.servicios.implantacion.titulo, precio: rellena(tt.implantacion, { precio: eur(TARIFA.implantacion.jornada) }) },
  ];
}
