# El correo del formulario de contacto: formato `contacto/1`

Qué manda la web a la empresa cuando alguien envía el formulario, y cómo reconocerlo y leerlo con un programa (el ERP lo
leerá del buzón para abrir un proyecto). Decidido por gerencia el 21/11/2026. El código es `worker/correo.ts`
(`componeCorreo`); las pruebas, `pruebas/contacto.test.ts` (M01 a M07).

No cambia qué datos viajan ni a quién: son los mismos del formulario, con una forma fija para la máquina. La parte que
lee una persona (el asunto y el cuerpo de siempre) queda igual.

## Cómo se reconoce

- Cabecera `X-Synentor-Formulario: contacto/1`. El número es la versión del formato: si el bloque cambia de forma, cambia.
- Remitente `web@synentor.com`. Esa dirección solo la usa el formulario: ningún otro sistema debe enviar con ella. Lo
  fiable es el remitente autenticado (SPF y DKIM del proveedor del envío), no el texto del asunto.
- `Reply-To`: el correo que escribió la persona.

## El bloque de datos

El cuerpo es texto plano y **empieza** por el bloque. Ejemplo con datos de prueba:

```text
--- datos ---
asunto: demostracion
idioma: ca
nombre: Persona de Prueba
correo: persona.prueba@ejemplo.test
empresa: Empresa de Prueba, S.L.
telefono: +376 000 000
--- fin ---

Mensaje desde el formulario de synentor.com

Asunto: Pedir una demostración
Nombre: Persona de Prueba
Correo: persona.prueba@ejemplo.test
Empresa: Empresa de Prueba, S.L.
Teléfono: +376 000 000
Idioma de la página: ca

Hola, querría ver una demostración.
Gracias.
```

Reglas para quien lo lea:

- La primera línea del cuerpo es exactamente `--- datos ---` y el bloque acaba en la línea `--- fin ---`. Detrás va una
  línea en blanco y la parte legible.
- **Vale solo el primer bloque.** Todo lo que va detrás es texto libre de la persona, que puede haber escrito cualquier
  cosa, también algo con la misma forma.
- Dentro hay siempre las mismas seis claves y en este orden: `asunto`, `idioma`, `nombre`, `correo`, `empresa` y
  `telefono`. Las claves no cambian con el idioma del formulario.
- Cada línea es `clave: valor`. El valor puede llevar `: ` dentro: se parte por el primero. Una clave sin valor sale
  presente y vacía (`empresa:`).
- Cada valor ocupa una sola línea: los saltos de línea, los separadores de línea de Unicode y los demás caracteres de
  control que escriba la persona se cambian por un espacio.
- `asunto` es la clave de la lista cerrada del formulario, no su rótulo: `informacion`, `demostracion`, `pedido`,
  `centralita`, `precios`, `consultoria`, `muv`, `web`, `gestorias` u `otro`.
- `idioma` es el de la página desde la que se envió: `ca`, `es`, `en`, `fr`, `pt`, `it` o `de`.
- Largos máximos, los del formulario: `nombre` 120, `correo` 200, `empresa` 160 y `telefono` 40.
- La selección de la calculadora no va en el bloque: llega dentro del mensaje, que la persona puede haber cambiado.

## Lo que no cambia

- El asunto del correo: `Web · <rótulo del asunto en castellano> · <nombre>`.
- La parte legible, con sus rótulos en castellano, y el mensaje al final.
- «Enviado» solo si el proveedor del correo lo confirma, y la web sigue sin guardar el mensaje en ningún sitio.
