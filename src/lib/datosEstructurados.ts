// Datos estructurados (schema.org, JSON-LD) de cada página: quién es la empresa, qué página es y, donde la página lo
// enseña, sus servicios, sus precios y sus preguntas frecuentes. Regla (guía SEO, 15/11/2026): solo lo que la página
// muestra y es verdad. Nada de NRT mientras no lo haya, valoraciones, reseñas ni horario de oficina.
import { EMPRESA } from '../datos/empresa';
import { TEXTOS, textos } from '../i18n/t';
import { IDIOMAS, ruta, type Idioma, type Pagina } from '../i18n/idiomas';
import { PAISES } from './precios/disponibilidad';
import { TARIFA } from './precios/tarifa';

interface Entrada {
  idioma: Idioma;
  pagina: Pagina;
  titulo: string;
  descripcion: string;
}

type Nodo = Record<string, unknown>;

const absoluta = (camino: string) => new URL(camino, EMPRESA.dominio).toString();
const ID_EMPRESA = absoluta('/#empresa');
const ID_WEB = absoluta('/#web');

/** Un precio al mes sin impuestos (UN/CEFACT «MON» = mes), tal como sale en la tabla de Precios. */
const alMes = (nombre: string, precio: number): Nodo => ({
  '@type': 'Offer',
  name: nombre,
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price: precio,
    priceCurrency: 'EUR',
    unitCode: 'MON',
    valueAddedTaxIncluded: false,
  },
});

export function grafoPagina({ idioma, pagina, titulo, descripcion }: Entrada): { '@context': string; '@graph': Nodo[] } {
  const todo = textos(idioma);
  const url = absoluta(ruta(pagina, idioma));
  const paises = PAISES.filter((p) => p !== 'OTRO').map((p) => ({ '@type': 'Country', name: todo.precios.configurador.paises[p] }));

  const empresa: Nodo = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ID_EMPRESA,
    name: EMPRESA.marca,
    legalName: EMPRESA.razonSocial,
    url: absoluta('/'),
    logo: absoluta('/marca/icona-512.png'),
    image: absoluta('/marca/portada.png'),
    email: EMPRESA.correo,
    telephone: EMPRESA.telefono.enlace,
    address: {
      '@type': 'PostalAddress',
      streetAddress: EMPRESA.direccion.linea,
      postalCode: EMPRESA.direccion.codigoPostal,
      addressLocality: EMPRESA.direccion.localidad,
      addressCountry: 'AD',
    },
    areaServed: paises,
    sameAs: [EMPRESA.redes.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: EMPRESA.correo,
      telephone: EMPRESA.telefono.enlace,
      // El horario de respuesta solo donde se lee: la página de Contacto.
      ...(pagina === 'contacto'
        ? {
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: EMPRESA.atencion.abre,
              closes: EMPRESA.atencion.cierra,
            },
          }
        : {}),
    },
  };

  const web: Nodo = {
    '@type': 'WebSite',
    '@id': ID_WEB,
    url: absoluta('/'),
    name: EMPRESA.marca,
    // Los idiomas que tienen sus textos, como los enlaces hreflang (Base.astro).
    inLanguage: IDIOMAS.filter((i) => TEXTOS[i]),
    publisher: { '@id': ID_EMPRESA },
  };

  const estaPagina: Nodo = {
    '@type': 'WebPage',
    '@id': `${url}#pagina`,
    url,
    name: titulo,
    description: descripcion,
    inLanguage: idioma,
    isPartOf: { '@id': ID_WEB },
    about: { '@id': ID_EMPRESA },
  };

  const grafo: Nodo[] = [empresa, web, estaPagina];
  const s = todo.servicios;
  const servicio = (nombre: string, texto: string, extra: Nodo = {}): Nodo => ({
    '@type': 'Service',
    name: nombre,
    description: texto,
    provider: { '@id': ID_EMPRESA },
    areaServed: paises,
    ...extra,
  });

  if (pagina === 'servicios') {
    grafo.push(
      servicio(s.suite.titulo, s.suite.texto),
      servicio(s.muv.titulo, s.muv.texto),
      servicio(s.consultoria.titulo, s.consultoria.texto),
    );
  }

  if (pagina === 'precios') {
    const tt = todo.precios.tablas;
    grafo.push(
      servicio(s.suite.titulo, s.suite.texto, {
        offers: [
          alMes(s.modulos.base.nombre, TARIFA.base.cuota),
          alMes(tt.paquete, TARIFA.paquete.cuota),
          alMes(tt.paqueteObrador, TARIFA.paqueteObrador.cuota),
          alMes(tt.gestorias, TARIFA.gestorias.cuota),
        ],
      }),
      {
        '@type': 'FAQPage',
        mainEntity: todo.precios.faq.preguntas.map((q) => ({
          '@type': 'Question',
          name: q.p,
          acceptedAnswer: { '@type': 'Answer', text: q.r },
        })),
      },
    );
  }

  return { '@context': 'https://schema.org', '@graph': grafo };
}

/** El JSON para un <script type="application/ld+json">, sin nada que pueda cerrar la etiqueta antes de tiempo. */
export function jsonParaScript(datos: unknown): string {
  return JSON.stringify(datos).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}
