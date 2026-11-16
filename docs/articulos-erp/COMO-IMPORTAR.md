# Artículos de la tarifa en el ERP

`articulos-synentor.csv` lleva los productos y servicios que se venden en la web, con sus precios, para darlos de alta en
el ERP de Synentor. Sale de `src/lib/precios/tarifa.ts` y de `src/datos/consultoria.json` (nunca se edita a mano): tras
cambiar la tarifa, `npm run articulos-erp` lo vuelve a escribir y la prueba `pruebas/articulos-erp.test.ts` comprueba que
el fichero guardado es el que sale de la tarifa. La misma orden escribe `reglas-synentor.csv` (ver más abajo).

## Qué lleva y qué no

- La Suite (Base, usuarios, empresas, módulos, paquetes, Despachos y gestorías, portal del empleado e implantación),
  las páginas web y su mantenimiento, la energía, las migraciones, la convivencia y los servicios de consultoría de IA
  (el precio «desde» de una microempresa y, si la lleva, su cuota en otro artículo).
- Todos son servicios con el IGI general (`IGI_GEN`, 4,5 %) y precios sin impuestos. Las cuotas de la Suite son al mes
  con pago anual; la descripción dice el recargo del pago mensual.
- La modalidad alojada en Andorra va **desactivada** (en desarrollo inminente).
- **No lleva MUV** (ya está dado de alta en el ERP) **ni la centralita** (próximamente, sin precios en la web).
- Los códigos empiezan por `SYN-`. Si un código ya existe en la empresa, el importador lo actualiza; si no, lo crea.

## Cómo se importa

1. En el ERP, con la pestaña en la empresa **SYNENTOR, S.L.U.** (el importador da de alta en la empresa de la pestaña).
2. Productos → Importar/Exportar → elegir `articulos-synentor.csv`.
3. Revisar la vista previa: si alguna fila dice «la empresa no tiene el impuesto IGI_GEN», no se importa nada de esa fila
   (la empresa tiene que tener los impuestos de Andorra; los crea la migración `20261114a`).
4. Importar y comprobar en la lista que salen 106 artículos con código `SYN-`.

El fichero lleva al final la columna `periodicidad`: `mensual` para lo que se cobra al mes (la unidad es `mes` o acaba en
`/mes`) y `unica` para lo demás (`anual` existe en el ERP, pero hoy ningún artículo lo usa).

## Las reglas de vinculación (`reglas-synentor.csv`)

Dice qué artículo exige, recomienda o incluye a otro (por ejemplo, cada módulo exige la Base, y la Base exige 2 jornadas de
implantación). Cabeceras: `articulo,clase,destino,cantidad,por_unidad,orden`. `clase` es `exige`, `recomienda` o `incluye`;
`destino` es un código o varios separados por `|`, que son alternativas entre sí (una web: Esencial, Profesional o
Premium); `por_unidad` va escrito `true` o `false` (hoy, siempre `false`).

**Se importa DESPUÉS de los artículos** (las reglas citan códigos que ya tienen que existir): misma pantalla, misma empresa,
la importación de reglas. El ERP **sustituye las reglas de cada artículo que aparece en el fichero**: por eso las de un
artículo salen siempre juntas y conviene importar el fichero entero, no un trozo.

**El fichero no puede dejar un artículo sin reglas**: el ERP solo toca los artículos que aparecen en él, así que un
artículo que deja de tener reglas en la tarifa (y por tanto no sale en el fichero) conserva en el ERP las que tenía. Hay
que quitárselas a mano en su ficha del ERP (sección «Va amb…»).

Gerencia confirmó el 16/11/2026 tres reglas más: el portal del empleado exige su implantación, cada web (Esencial,
Profesional o Premium) recomienda el mantenimiento (básico o plus; se sugiere, no entra solo) y las cuatro migraciones
exigen la Base. El fichero no se edita a mano: sale de `tarifa.ts` y de la consultoría, y su prueba
(`pruebas/reglas-erp.test.ts`) comprueba que el fichero guardado es el que genera la orden.
