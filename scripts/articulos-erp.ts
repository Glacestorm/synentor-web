// Escribe los dos CSV para el ERP (Productos → Importar/Exportar, en la empresa SYNENTOR): los artículos de la tarifa
// (docs/articulos-erp/articulos-synentor.csv) y sus reglas de vinculación (docs/articulos-erp/reglas-synentor.csv).
// Uso: npm run articulos-erp (lo empaqueta esbuild y lo ejecuta node). Todo sale de tarifa.ts y de la consultoría.
import { writeFileSync } from 'node:fs';
import { articulosErp, csvArticulos, RUTA_CSV } from '../src/lib/precios/articulosErp';
import { csvReglas, reglasErp, RUTA_CSV_REGLAS } from '../src/lib/precios/reglasErp';

writeFileSync(RUTA_CSV, csvArticulos());
writeFileSync(RUTA_CSV_REGLAS, csvReglas());
console.log(`Escritos ${articulosErp().length} artículos en ${RUTA_CSV} y ${reglasErp().length} reglas en ${RUTA_CSV_REGLAS}.`);
