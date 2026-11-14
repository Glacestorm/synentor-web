import { describe, expect, it } from 'vitest';
import { elegirIdioma, paisConfigurador } from '../worker/idioma';
import { IDIOMAS, RUTAS, ruta } from '../src/i18n/idiomas';

describe('idioma de entrada (diseño §10)', () => {
  it('manda la cookie de preferencia si es un idioma de la web', () => {
    expect(elegirIdioma({ cookie: 'otra=1; lang=de', acceptLanguage: 'es-ES', pais: 'ES' })).toBe('de');
  });

  it('una cookie con un idioma que no existe no cuenta', () => {
    expect(elegirIdioma({ cookie: 'lang=xx', acceptLanguage: 'fr-FR', pais: null })).toBe('fr');
  });

  it('después, el idioma del navegador por su peso, con solo la parte principal', () => {
    expect(elegirIdioma({ cookie: null, acceptLanguage: 'es-419,es;q=0.9,en;q=0.8', pais: 'US' })).toBe('es');
    expect(elegirIdioma({ cookie: null, acceptLanguage: 'zh-CN;q=0.9,en;q=0.5', pais: null })).toBe('en');
    expect(elegirIdioma({ cookie: null, acceptLanguage: 'de;q=0.2,pt-BR;q=0.8', pais: null })).toBe('pt');
  });

  it('si el navegador no pide ningún idioma de la web, el país de la conexión', () => {
    expect(elegirIdioma({ cookie: null, acceptLanguage: 'zh-CN', pais: 'AD' })).toBe('ca');
    expect(elegirIdioma({ cookie: null, acceptLanguage: '', pais: 'PT' })).toBe('pt');
    expect(elegirIdioma({ cookie: null, acceptLanguage: null, pais: 'AT' })).toBe('de');
    expect(elegirIdioma({ cookie: null, acceptLanguage: null, pais: 'BR' })).toBe('pt');
  });

  it('sin nada que sirva, català', () => {
    expect(elegirIdioma({ cookie: null, acceptLanguage: ';;q=x,,', pais: 'JP' })).toBe('ca');
    expect(elegirIdioma({ cookie: null, acceptLanguage: null, pais: null })).toBe('ca');
  });

  it('el país del configurador: los seis de la tarifa o «OTRO»', () => {
    expect(paisConfigurador('ES')).toBe('ES');
    expect(paisConfigurador('ad')).toBe('AD');
    expect(paisConfigurador('BR')).toBe('OTRO');
    expect(paisConfigurador(null)).toBe('OTRO');
  });
});

describe('rutas traducidas', () => {
  it('siete idiomas y una ruta por página e idioma, sin repetir dentro de un idioma', () => {
    expect(IDIOMAS).toEqual(['ca', 'es', 'en', 'fr', 'pt', 'it', 'de']);
    for (const idioma of IDIOMAS) {
      const slugs = Object.values(RUTAS).map((porIdioma) => porIdioma[idioma]);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it('ruta() da la dirección completa con barra final', () => {
    expect(ruta('inicio', 'ca')).toBe('/ca/');
    expect(ruta('servicios', 'ca')).toBe('/ca/serveis/');
    expect(ruta('servicios', 'de')).toBe('/de/leistungen/');
    expect(ruta('precios', 'es')).toBe('/es/precios/');
  });
});
