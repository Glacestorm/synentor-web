# Artículos de la tarifa en el ERP

`articulos-synentor.csv` lleva los productos y servicios que se venden en la web, con sus precios, para darlos de alta en
el ERP de Synentor. Sale de `src/lib/precios/tarifa.ts` y de `src/datos/consultoria.json` (nunca se edita a mano): tras
cambiar la tarifa, `npm run articulos-erp` lo vuelve a escribir y la prueba `pruebas/articulos-erp.test.ts` comprueba que
el fichero guardado es el que sale de la tarifa.

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
