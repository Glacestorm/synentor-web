// Copia del catálogo de consultoría del ERP a la web, solo con lo que la web enseña (diseño §7.3, plan tarea 4).
// Uso: node scripts/copia-catalogo.mjs <ruta a docs/producte/consultoria/catalogo.json del ERP>
// Escribe src/datos/consultoria.json. Precio y cuota «desde» = los de una microempresa (el tramo más bajo del catálogo).
import { readFileSync, writeFileSync } from 'node:fs';

const CATEGORIAS = {
  'Estrategia y diagnóstico': 'estrategia',
  'Formación': 'formacion',
  'Asistentes y atención al cliente': 'asistentes',
  'Automatización de procesos': 'automatizacion',
  'Documentos y conocimiento': 'documentos',
  'Datos, analítica y previsión': 'datos',
  'Desarrollo a medida': 'medida',
  'Cumplimiento y gobernanza': 'cumplimiento',
  'Soporte y mantenimiento': 'soporte',
};

const ruta = process.argv[2];
if (!ruta) {
  console.error('Falta la ruta del catálogo del ERP (docs/producte/consultoria/catalogo.json).');
  process.exit(2);
}
const c = JSON.parse(readFileSync(ruta, 'utf8'));
if (c.moneda !== 'EUR' || !/^\d{4}-\d{2}-\d{2}$/.test(c.fecha ?? '')) {
  console.error('El catálogo no tiene la moneda EUR o la fecha AAAA-MM-DD: no se copia.');
  process.exit(2);
}
const servicios = c.servicios.map((s) => {
  const categoria = CATEGORIAS[s.categoria];
  if (!categoria) throw new Error(`Categoría desconocida en el catálogo: «${s.categoria}»`);
  const precio = s.precio?.micro?.min;
  const cuota = s.cuota_mes?.micro;
  if (!Number.isFinite(precio) || !Number.isFinite(cuota)) throw new Error(`Precio o cuota ilegible en «${s.id}»`);
  return { id: s.id, nombre: s.nombre, categoria, precioDesde: precio, cuotaDesde: cuota };
});
const salida = { fecha: c.fecha, origen: 'ERP docs/producte/consultoria/catalogo.json', servicios };
writeFileSync('src/datos/consultoria.json', JSON.stringify(salida, null, 2) + '\n');
console.log(`Copiados ${servicios.length} servicios del catálogo del ${c.fecha}.`);
