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

El cuerpo que manda la web es texto plano y **empieza** por el bloque. Ejemplo con datos de prueba:

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

- **Se lee el cuerpo ya decodificado**: la parte `text/plain` del correo, deshecha su codificación de transporte
  (quoted-printable o base64; en Python, `get_content()` del módulo `email`). Leído en crudo, una línea larga del bloque
  puede llegar partida con un «=» al final. Si el correo llega con `format=flowed`, antes se juntan las líneas que el
  emisor partió.
- El bloque empieza en la **primera** línea que sea exactamente `--- datos ---` y acaba en la primera `--- fin ---` que la
  siga. La web lo pone al principio del cuerpo, pero el buzón puede añadir algo delante (un aviso de remitente externo,
  por ejemplo): no hay que exigir que sea la línea 1.
- **Vale solo ese primer bloque.** Todo lo que va detrás es la parte legible y el texto libre de la persona, que puede
  haber escrito cualquier cosa, también algo con la misma forma.
- Dentro hay siempre las mismas seis claves y en este orden: `asunto`, `idioma`, `nombre`, `correo`, `empresa` y
  `telefono`. Las claves no cambian con el idioma del formulario.
- Cada línea se parte por el **primer `:`**; si detrás hay un espacio, se quita ese espacio. Las claves nunca llevan `:`,
  y el valor puede llevarlos. Una clave sin valor sale presente y vacía, sin espacio detrás (`empresa:`).
- Cada valor ocupa una sola línea: los saltos de línea, los separadores de línea de Unicode y los demás caracteres de
  control que escriba la persona se cambian por un espacio. Los caracteres invisibles que cambian el sentido del texto
  (U+202A a U+202E y U+2066 a U+2069), el espacio de anchura cero, el unidor de palabras y la marca de orden de bytes se
  quitan. Los unidores U+200C y U+200D se conservan, porque hay nombres que los llevan.
- Cualquier valor puede llegar vacío menos `asunto`, `idioma` y `correo`; también `nombre`, si la persona solo escribió
  caracteres de control.
- `asunto` es la clave de la lista cerrada del formulario, no su rótulo: `informacion`, `demostracion`, `pedido`,
  `centralita`, `precios`, `consultoria`, `muv`, `web`, `gestorias` u `otro`.
- `idioma` es el de la página desde la que se envió: `ca`, `es`, `en`, `fr`, `pt`, `it` o `de`.
- Largos máximos, los del formulario, en caracteres (no en bytes; un emoji cuenta por dos): `nombre` 120, `correo` 200,
  `empresa` 160 y `telefono` 40.
- La selección de la calculadora no va en el bloque: llega dentro del mensaje, que la persona puede haber cambiado.
- Sin comprobar todavía (se sabrá con el primer correo real): que el buzón conserve la cabecera `X-Synentor-Formulario`
  y con qué codificación de transporte llega el cuerpo.

## Lo que no cambia

- El asunto del correo: `Web · <rótulo del asunto en castellano> · <nombre>`.
- La parte legible, con sus rótulos en castellano, y el mensaje al final.
- «Enviado» solo si el proveedor del correo lo confirma, y la web sigue sin guardar el mensaje en ningún sitio.
