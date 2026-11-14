/// <reference types="node" />
// Comprobación de contenido de las páginas construidas (plan, tarea 6; CLAUDE.md, «Honestidad», «Datos de contacto» y
// «Precios»): ninguna expresión prohibida en los siete idiomas, ningún correo ni teléfono que no sea de la empresa y
// ningún importe con «€» que no salga de la tarifa, del catálogo de consultoría o del ejemplo calculado.
// Necesita la web construida (npm run build). Con su control positivo: las comprobaciones tienen que ver las trampas.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { TARIFA } from '../src/lib/precios/tarifa';
import { MERCADO } from '../src/datos/mercado';
import { EMPRESA } from '../src/datos/empresa';
import catalogo from '../src/datos/consultoria.json';
import { calcula, cuotaGestoria } from '../src/lib/precios/calcula';
import { EJEMPLO_GESTORIA } from '../src/lib/precios/ejemplos';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));

/** Expresiones que la web no puede decir (diseño §6 y CLAUDE.md), en los siete idiomas. */
const PROHIBIDAS: RegExp[] = [
  /100\s?%\s?local/i,
  /\bel millor\b/i,
  /\bel mejor\b/i,
  /\bthe best\b/i,
  /\ble meilleur\b/i,
  /\bo melhor\b/i,
  /\bil migliore\b/i,
  /\b(der|die|das) beste\b/i,
  /\búnic(o|a)? (al|en el|no) merca/i,
  /\bonly one on the market\b/i,
  /\bseul sur le marché\b/i,
  /\bSII\b/,
  /\bNIIF\b/,
  /\bIFRS\b/,
  /\bIntrastat\b/i,
  /\bblockchain\b/i,
  /\bmarketplace\b/i,
];

function numerosDe(v: unknown, fuera: Set<number>) {
  if (typeof v === 'number') fuera.add(v);
  else if (Array.isArray(v)) v.forEach((x) => numerosDe(x, fuera));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => numerosDe(x, fuera));
}

/** Los importes que la web puede enseñar, como cifras sin separadores (1200, 78793…). */
function importesPermitidos(): Set<string> {
  const n = new Set<number>();
  numerosDe(TARIFA, n);
  numerosDe(MERCADO, n);
  for (const s of catalogo.servicios) {
    n.add(s.precioDesde);
    n.add(s.cuotaDesde);
  }
  const e = MERCADO.ejemplo;
  n.add(
    calcula({
      pais: 'AD', modalidad: 'A', pago: 'anual', suite: true, paquete: 'ninguno',
      empresas: [{ modulos: ['compras', 'rrhh', 'fiscal', 'productos', 'tpv'], personas: e.personas }],
      usuarios: e.usuarios, muvUsuarios: 0,
    }).cuotaMensual,
  );
  // El ejemplo de la tarjeta de gestorías (diseño §18), calculado con el motor.
  n.add(cuotaGestoria(EJEMPLO_GESTORIA.empresas, EJEMPLO_GESTORIA.personas)!);
  return new Set([...n].map((x) => (Number.isInteger(x) ? String(x) : x.toFixed(2).replace('.', ''))));
}

/** El texto visible de una página: sin scripts, estilos, atributos data-* ni etiquetas. */
const visible = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/ | /g, ' ');

/** Lo que falla en una página (vacío = bien). */
export function revisa(html: string, permitidos = importesPermitidos()): string[] {
  const fallos: string[] = [];
  const texto = visible(html);
  for (const r of PROHIBIDAS) if (r.test(texto)) fallos.push(`expresión prohibida ${r}`);
  for (const correo of html.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? []) {
    if (!correo.toLowerCase().endsWith('@synentor.com')) fallos.push(`correo ajeno ${correo}`);
  }
  for (const [, tel] of html.matchAll(/href="tel:([^"]+)"/g)) {
    if (tel !== EMPRESA.telefono.enlace) fallos.push(`teléfono ajeno ${tel}`);
  }
  // Los miles pueden ir con punto, coma o espacio (fr y pt: «2 900 €»).
  for (const m of texto.matchAll(/€\s?(\d+(?:[.,]\d+)*)|(\d+(?:[ .,]\d+)*)\s?€/g)) {
    const cifras = (m[1] ?? m[2]).replace(/[ .,]/g, '');
    if (!permitidos.has(cifras)) fallos.push(`importe que no sale de la tarifa: ${m[0].trim()}`);
  }
  return fallos;
}

function paginas(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const r = join(dir, f);
    return statSync(r).isDirectory() ? paginas(r) : r.endsWith('.html') ? [r] : [];
  });
}

describe('comprobación de contenido', () => {
  it('control positivo: ve cada trampa', () => {
    expect(revisa('<p>IA 100 % local, el mejor ERP</p>').length).toBeGreaterThanOrEqual(2);
    expect(revisa('<a href="mailto:persona@gmail.com">x</a>')).toEqual(['correo ajeno persona@gmail.com']);
    expect(revisa('<a href="tel:+34600000000">x</a>')).toEqual(['teléfono ajeno +34600000000']);
    expect(revisa('<p>Solo 37 € al mes</p>')).toEqual(['importe que no sale de la tarifa: 37 €']);
    expect(revisa('<p>Des de 149&nbsp;€ · €1,200 · 6.500 € · 2\u202f900 € · 787,93 €</p>').filter((f) => !f.includes('787,93'))).toEqual([]);
    expect(revisa(`<p>${EMPRESA.correo} <a href="tel:${EMPRESA.telefono.enlace}">x</a> entrada única</p>`)).toEqual([]);
  });

  it('las páginas construidas pasan (si falla aquí: npm run build)', () => {
    expect(existsSync(DIST)).toBe(true);
    const permitidos = importesPermitidos();
    const fallos = paginas(DIST).flatMap((f) => revisa(readFileSync(f, 'utf8'), permitidos).map((x) => `${f.slice(DIST.length)}: ${x}`));
    expect(fallos).toEqual([]);
  });
});
