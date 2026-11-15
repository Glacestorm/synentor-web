// Los datos estructurados (schema.org) de cada página: solo lo que la página enseña y es verdad (guía SEO, 15/11/2026).
import { describe, expect, it } from 'vitest';
import { grafoPagina } from '../src/lib/datosEstructurados';
import { filasTarifa } from '../src/lib/precios/filasTarifa';
import { EMPRESA } from '../src/datos/empresa';
import { TARIFA } from '../src/lib/precios/tarifa';
import { TEXTOS } from '../src/i18n/t';
import { PAGINAS, type Idioma } from '../src/i18n/idiomas';

const idiomas = Object.keys(TEXTOS) as Idioma[];
type Nodo = Record<string, any>;
const nodos = (g: { '@graph': Nodo[] }) => g['@graph'];
const tipo = (n: Nodo, t: string) => (Array.isArray(n['@type']) ? n['@type'].includes(t) : n['@type'] === t);
const grafo = (idioma: Idioma, pagina: (typeof PAGINAS)[number]) =>
  grafoPagina({ idioma, pagina, titulo: 'Título', descripcion: 'Descripción de la página' });

describe('datos estructurados', () => {
  it('la empresa sale con los datos publicados de src/datos/empresa.ts', () => {
    const e = nodos(grafo('es', 'inicio')).find((n) => tipo(n, 'Organization'))!;
    expect(e).toBeDefined();
    expect(tipo(e, 'ProfessionalService')).toBe(true);
    expect(e.name).toBe(EMPRESA.marca);
    expect(e.legalName).toBe(EMPRESA.razonSocial);
    expect(e.url).toBe(`${EMPRESA.dominio}/`);
    expect(e.email).toBe(EMPRESA.correo);
    expect(e.telephone).toBe(EMPRESA.telefono.enlace);
    expect(e.address).toEqual({
      '@type': 'PostalAddress',
      streetAddress: EMPRESA.direccion.linea,
      postalCode: EMPRESA.direccion.codigoPostal,
      addressLocality: EMPRESA.direccion.localidad,
      addressCountry: 'AD',
    });
    expect(e.sameAs).toEqual([EMPRESA.redes.linkedin]);
  });

  it('nada inventado: sin NRT mientras no lo haya, sin valoraciones, reseñas ni horario de apertura', () => {
    for (const idioma of idiomas)
      for (const pagina of PAGINAS) {
        const json = JSON.stringify(grafo(idioma, pagina));
        expect(json, `${idioma} ${pagina}`).not.toMatch(/taxID|vatID|Rating|"reviews?"|"openingHours"/i);
      }
  });

  it('el horario de atención solo en Contacto, que es donde se lee (lunes a viernes, 9:00 a 18:00)', () => {
    const conHorario = (g: ReturnType<typeof grafo>) => JSON.stringify(g).includes('hoursAvailable');
    for (const idioma of idiomas) {
      expect(conHorario(grafo(idioma, 'contacto')), idioma).toBe(true);
      for (const pagina of PAGINAS.filter((p) => p !== 'contacto')) expect(conHorario(grafo(idioma, pagina)), `${idioma} ${pagina}`).toBe(false);
    }
    const e = nodos(grafo('es', 'contacto')).find((n) => tipo(n, 'Organization'))!;
    expect(e.contactPoint.hoursAvailable).toEqual({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: EMPRESA.atencion.abre,
      closes: EMPRESA.atencion.cierra,
    });
    // El mismo horario que dice la página de contacto en castellano.
    expect(TEXTOS.es!.contacto.entrada).toContain(`${Number(EMPRESA.atencion.abre.slice(0, 2))}:00`);
    expect(TEXTOS.es!.contacto.entrada).toContain(EMPRESA.atencion.cierra);
  });

  it('la página: su nombre, su descripción, su idioma y su dirección', () => {
    const g = grafoPagina({ idioma: 'fr', pagina: 'precios', titulo: 'Tarifs', descripcion: 'Les tarifs' });
    const p = nodos(g).find((n) => tipo(n, 'WebPage'))!;
    expect(p.name).toBe('Tarifs');
    expect(p.description).toBe('Les tarifs');
    expect(p.inLanguage).toBe('fr');
    expect(p.url).toBe(`${EMPRESA.dominio}/fr/tarifs/`);
  });

  it('Servicios nombra los tres servicios principales, con los textos de la página', () => {
    for (const idioma of idiomas) {
      const s = TEXTOS[idioma]!.servicios;
      const nombres = nodos(grafo(idioma, 'servicios'))
        .filter((n) => tipo(n, 'Service'))
        .map((n) => n.name);
      expect(nombres, idioma).toEqual([s.suite.titulo, s.muv.titulo, s.consultoria.titulo]);
    }
  });

  it('Precios: las preguntas frecuentes de la página, tal cual, y los precios de la tarifa', () => {
    for (const idioma of idiomas) {
      const g = nodos(grafo(idioma, 'precios'));
      const faq = g.find((n) => tipo(n, 'FAQPage'))!;
      expect(faq, idioma).toBeDefined();
      expect(faq.mainEntity.map((q: Nodo) => [q.name, q.acceptedAnswer.text])).toEqual(
        TEXTOS[idioma]!.precios.faq.preguntas.map((q) => [q.p, q.r]),
      );
      const ofertas = g.find((n) => tipo(n, 'Service'))!.offers as Nodo[];
      expect(ofertas.map((o) => o.priceSpecification.price), idioma).toEqual([
        TARIFA.base.cuota,
        TARIFA.paquete.cuota,
        TARIFA.paqueteObrador.cuota,
        TARIFA.gestorias.cuota,
      ]);
      for (const o of ofertas) {
        expect(o.priceSpecification).toMatchObject({ priceCurrency: 'EUR', unitCode: 'MON', valueAddedTaxIncluded: false });
      }
    }
    // Las preguntas frecuentes, solo en Precios.
    for (const pagina of PAGINAS.filter((p) => p !== 'precios')) expect(JSON.stringify(grafo('es', pagina))).not.toContain('FAQPage');
  });
});

describe('filas de la tabla de tarifas', () => {
  it('una fila por concepto, con el precio de la tarifa y en el idioma pedido', () => {
    const filas = filasTarifa('es');
    expect(filas).toHaveLength(3 + Object.keys(TARIFA.modulos).length + 6);
    expect(filas[0]).toEqual({ concepto: 'Synentor Base', precio: '149\u00a0€ al mes' });
    expect(filas.find((f) => f.ancla === 'gestorias')?.concepto).toBe(TEXTOS.es!.precios.tablas.gestorias);
    expect(filasTarifa('en')[0]!.precio).toBe('€149 a month');
  });
});
