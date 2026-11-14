# Control de costes, paquete Obrador y Despachos y gestorías — plan

> **Para quien lo ejecute:** se hace en esta sesión, tarea a tarea, con pruebas primero.

**Objetivo:** poner en la web los tres productos aprobados por gerencia el 14/11/2026.

**Diseño:** `docs/superpowers/specs/2026-11-14-web-synentor-design.md`, §18.

**Arquitectura:** las cifras viven solo en `src/lib/precios/tarifa.ts`; el motor (`calcula.ts`) cuenta el control de costes
como un módulo más y el paquete pasa de sí o no a una elección (`'ninguno' | 'completo' | 'obrador'`). Las gestorías no
entran en el configurador: una tarjeta (componente propio) en Precios y en Servicios.

## Restricciones globales

- Cifras: costes 59 €/mes, requiere Compras; Obrador 299 €/mes y 329 €/mes con el control de costes, 5 usuarios, incluye
  Compras, Productos, TPV y RRHH (18 €/persona); gestorías 249 €/mes, 10 empresas, 5 usuarios, 9 €/empresa hasta 25,
  5 €/nómina, solo despachos, Andorra en desarrollo inminente.
- Ningún importe escrito a mano en una página o un texto: todo sale de `TARIFA` o de una función del motor.
- Siete idiomas con las mismas claves y marcadores; nada que el ERP no haga hoy (§6 y §18).

## Lo que puede fallar (y su prueba)

1. Obrador con el control de costes marcado cobra 299 + 59 → la prueba exige 329 y que no salga la línea del módulo.
2. Una empresa adicional con el control de costes y sin Compras → se añade Compras (dependencia) y los dos al 50 %.
3. El paquete Completo deja de incluir MUV o los 10 usuarios al cambiar el tipo → sus pruebas de 469 € y 559 € siguen.
4. Una gestoría con más de 25 empresas → `cuotaGestoria` devuelve `null` (bajo propuesta), nunca un importe.
5. El asunto `gestorias` del formulario no lo admite el Worker → la prueba del contacto lo envía y espera 200.

## Tareas

### 1. Tarifa y motor
- `tarifa.ts`: `modulos.costes = { cuota: 59, requiere: 'compras' }` (en `MODULOS`, después de `productos`);
  `paqueteObrador = { cuota: 299, conCostes: 329, incluye: ['compras','productos','tpv','rrhh'], usuariosIncluidos: 5 }`;
  `gestorias = { cuota: 249, incluye: ['compras','ventas_crm','fiscal','rrhh'], empresasIncluidas: 10, usuariosIncluidos: 5,
  empresaAdicional: 9, porNomina: 5, maxEmpresas: 25 }`.
- `disponibilidad.ts`: `costes` como `compras` en España y en los demás.
- `calcula.ts`: `Seleccion.paquete: 'ninguno' | 'completo' | 'obrador'`; líneas `paquete-obrador` (299) o
  `paquete-obrador-costes` (329); usuarios del Obrador a la tarifa normal; MUV incluido solo con Completo;
  `cuotaGestoria(empresas: number, personas: number): number | null`.
- Pruebas: `pruebas/tarifas-aprobadas.test.ts` (cifras escritas a mano) y `pruebas/precios.test.ts` (cuentas).

### 2. Textos
- `ca.ts` y `es.ts`: `servicios.modulos.costes`, `servicios.costes` (sección detallada), `servicios.gestorias` (tarjeta),
  `precios.configurador` (elección del paquete y líneas), `precios.tablas` (filas), `contacto.formulario.asuntos.gestorias`.
- `en`, `fr`, `pt`, `it`, `de`: la traducción de lo mismo. Prueba: `pruebas/textos.test.ts` (claves y marcadores).

### 3. Configurador
- Elección del paquete con tres opciones (`paquete-ninguno`, `paquete-completo`, `paquete-obrador`); con el Obrador, el
  control de costes de la empresa principal se ofrece por la diferencia; el resumen enviado dice el paquete.
- Pruebas: `pruebas/configurador.test.ts`.

### 4. Páginas
- Icono `costes`; componente `TarjetaGestorias.astro` en Precios y Servicios; sección `#costes` en Servicios; filas del
  Obrador y de las gestorías en «Todas las tarifas»; enlace «Pide una propuesta» con `?asunto=gestorias`.
- Pruebas: `pruebas/paginas.test.ts` y `pruebas/contenido.test.ts` (importes permitidos: el ejemplo de la gestoría).
