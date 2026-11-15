// Escribe docs/articulos-erp/articulos-synentor.csv: los artículos de la tarifa para el ERP (Productos → Importar/Exportar,
// en la empresa SYNENTOR). Uso: npm run articulos-erp (lo empaqueta esbuild y lo ejecuta node). Sale de tarifa.ts.
import { writeFileSync } from 'node:fs';
import { articulosErp, csvArticulos, RUTA_CSV } from '../src/lib/precios/articulosErp';

writeFileSync(RUTA_CSV, csvArticulos());
console.log(`Escritos ${articulosErp().length} artículos en ${RUTA_CSV}.`);
