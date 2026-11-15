// Datos de la empresa que se publican en la web. Diseño §9: SOLO datos de la empresa, ningún nombre de persona.
// Dirección y teléfono confirmados por gerencia el 14/11/2026 para su publicación.
export const EMPRESA = {
  marca: 'Synentor',
  razonSocial: 'SYNENTOR, S.L.U.',
  // Constituida (gerencia, 14/11/2026). El NRT se publica cuando gerencia lo dé; hasta entonces, «en trámite» (nunca uno de
  // relleno).
  nrt: null as string | null,
  direccion: {
    linea: 'Avgda. Carlemany, 117, 3-1',
    codigoPostal: 'AD700',
    localidad: 'Les Escaldes-Engordany',
    pais: 'Andorra',
  },
  // admin@ (gerencia, 15/11/2026) es un alias del buzón de administracion@, que sigue funcionando y es el usuario de las
  // cuentas ya abiertas (Google Analytics, Cloudflare…).
  correo: 'admin@synentor.com',
  telefono: { enlace: '+376692069', texto: '+376 692 069' },
  dominio: 'https://synentor.com',
  // La página de empresa (gerencia, 15/11/2026). Por su número, que no cambia aunque se cambie la dirección corta.
  redes: { linkedin: 'https://www.linkedin.com/company/145468024/' },
  // Cuándo respondemos (lo que dice Contacto en cada idioma: de lunes a viernes, hora de Andorra). No es un horario de
  // apertura de oficina: ese no se publica mientras gerencia no lo dé.
  atencion: { abre: '09:00', cierra: '18:00' },
} as const;

export type Empresa = typeof EMPRESA;
