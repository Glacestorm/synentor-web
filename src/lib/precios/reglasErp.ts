// Las reglas de vinculación de los artículos de la tarifa para el ERP (Productos → Importar reglas, en la empresa
// SYNENTOR). Salen de tarifa.ts y del catálogo de consultoría; aquí no se escribe ningún precio. Se importa DESPUÉS de
// articulos-synentor.csv. El ERP sustituye las reglas de cada artículo que aparece en el fichero: las de un artículo
// salen juntas. Orden: npm run articulos-erp (escribe RUTA_CSV_REGLAS); la prueba compara.
import consultoria from '../../datos/consultoria.json';
import { codigoDeModulo, codigoDeTramoMuv } from './articulosErp';
import { TARIFA, type ModuloId } from './tarifa';

export const CABECERAS_REGLAS = ['articulo', 'clase', 'destino', 'cantidad', 'por_unidad', 'orden'] as const;

export const RUTA_CSV_REGLAS = 'docs/articulos-erp/reglas-synentor.csv';

export type ClaseRegla = 'exige' | 'recomienda' | 'incluye';

export interface ReglaErp {
  articulo: string;
  clase: ClaseRegla;
  /** Un código, o varios que son alternativas entre sí (en el CSV, separados por «|»). */
  destinos: string[];
  cantidad: number;
  por_unidad: boolean;
  orden: number;
}

export function reglasErp(): ReglaErp[] {
  const salida: ReglaErp[] = [];
  const contador = new Map<string, number>();
  const regla = (articulo: string, clase: ClaseRegla, destinos: string[], cantidad = 1) => {
    const orden = (contador.get(articulo) ?? 0) + 1;
    contador.set(articulo, orden);
    salida.push({ articulo, clase, destinos, cantidad, por_unidad: false, orden });
  };
  const exige = (a: string, ...ds: string[]) => ds.forEach((d) => regla(a, 'exige', [d]));
  const implantacion = (a: string) => regla(a, 'exige', ['SYN-IMPLANTACION'], TARIFA.implantacion.minimoSuite);
  const incluye = (a: string, modulos: readonly ModuloId[], extra: string[] = []) =>
    ['SYN-BASE', ...modulos.map(codigoDeModulo), ...extra].forEach((d) => regla(a, 'incluye', [d]));

  // La Base y lo que cuelga de ella.
  implantacion('SYN-BASE');
  exige('SYN-USUARIO', 'SYN-BASE');
  exige('SYN-EMPRESA', 'SYN-BASE');
  for (const m of Object.keys(TARIFA.modulos) as ModuloId[]) {
    const requiere = (TARIFA.modulos[m] as { requiere?: ModuloId }).requiere;
    exige(codigoDeModulo(m), 'SYN-BASE', ...(requiere ? [codigoDeModulo(requiere)] : []));
  }
  exige('SYN-MOD-RRHH-PERSONA', codigoDeModulo('rrhh'));

  // Paquetes.
  implantacion('SYN-PAQ-GESTION');
  incluye('SYN-PAQ-GESTION', TARIFA.paquete.incluye);
  exige('SYN-PAQ-GESTION-USUARIO', 'SYN-PAQ-GESTION');
  implantacion('SYN-PAQ-OBRADOR');
  incluye('SYN-PAQ-OBRADOR', TARIFA.paqueteObrador.incluye);
  implantacion('SYN-PAQ-OBRADOR-COSTES');
  incluye('SYN-PAQ-OBRADOR-COSTES', TARIFA.paqueteObrador.incluye, [codigoDeModulo('costes')]);
  implantacion('SYN-GESTORIAS');
  incluye('SYN-GESTORIAS', TARIFA.gestorias.incluye);
  exige('SYN-GESTORIAS-EMPRESA', 'SYN-GESTORIAS');
  exige('SYN-GESTORIAS-NOMINA', 'SYN-GESTORIAS');

  // Portal y modalidad alojada. Que el portal exija su implantación lo confirmó gerencia el 16/11/2026.
  exige('SYN-PORTAL', 'SYN-PORTAL-IMPLANTACION');
  exige('SYN-PORTAL-PERSONA', 'SYN-PORTAL');
  exige('SYN-MODALIDAD-B', 'SYN-BASE');

  // MUV (gerencia, 22/11/2026): la licencia exige la implantación mínima de MUV. Una sola regla, en el primer tramo:
  // toda licencia lo lleva, porque se paga desde el primer usuario.
  regla(codigoDeTramoMuv(1), 'exige', ['SYN-IMPLANTACION'], TARIFA.implantacion.minimoMuv);

  // Servicios. Que una web recomiende el mantenimiento (básico o plus) y que las migraciones exijan la Base lo confirmó
  // gerencia el 16/11/2026.
  for (const web of ['SYN-WEB-ESENCIAL', 'SYN-WEB-PROFESIONAL', 'SYN-WEB-PREMIUM']) {
    regla(web, 'recomienda', ['SYN-WEB-MANT-BASICO', 'SYN-WEB-MANT-PLUS']);
  }
  for (const a of ['SYN-WEB-PAGINA', 'SYN-WEB-IDIOMA']) {
    regla(a, 'exige', ['SYN-WEB-ESENCIAL', 'SYN-WEB-PROFESIONAL', 'SYN-WEB-PREMIUM']);
  }
  for (const x of ['VIVIENDA', 'PYME', 'EDIFICIO']) exige(`SYN-ENE-MON-${x}-CUOTA`, `SYN-ENE-MON-${x}`);
  for (const mig of ['SYN-MIG-ARRANQUE', 'SYN-MIG-CONTA-PRIMERO', 'SYN-MIG-CONTA-ADICIONAL', 'SYN-MIG-PERSONAL']) {
    exige(mig, 'SYN-BASE');
  }
  exige('SYN-MIG-CONTA-ADICIONAL', 'SYN-MIG-CONTA-PRIMERO');
  exige('SYN-CONV-CUOTA', 'SYN-CONV-PUESTA');
  for (const s of consultoria.servicios) {
    const code = `SYN-CON-${s.id.toUpperCase()}`;
    if (s.cuotaDesde > 0) exige(`${code}-CUOTA`, code);
  }

  return ordenaPorArticulo(salida);
}

/** Las reglas de un artículo, juntas y en su orden (el ERP sustituye las de cada artículo que aparece). */
function ordenaPorArticulo(reglas: ReglaErp[]): ReglaErp[] {
  const grupos = new Map<string, ReglaErp[]>();
  for (const r of reglas) grupos.set(r.articulo, [...(grupos.get(r.articulo) ?? []), r]);
  return [...grupos.values()].flat();
}

/** El CSV de reglas: cabecera y una línea por regla; los alternativos del destino, separados por «|». */
export function csvReglas(): string {
  const lineas = reglasErp().map((r) =>
    [r.articulo, r.clase, r.destinos.join('|'), String(r.cantidad), r.por_unidad ? 'true' : 'false', String(r.orden)].join(','),
  );
  return [CABECERAS_REGLAS.join(','), ...lineas].join('\n') + '\n';
}
