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
  correo: 'administracion@synentor.com',
  telefono: { enlace: '+376692069', texto: '+376 692 069' },
  dominio: 'https://synentor.com',
} as const;

export type Empresa = typeof EMPRESA;
