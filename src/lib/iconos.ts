// Iconos de línea propios (24×24, trazo de 1,75, extremos redondeados), dibujados para Synentor. Solo geometría: el color
// lo pone quien los usa (currentColor). Los usan las páginas (Icono.astro) y el configurador en el navegador.
export const ICONOS = {
  base: '<path d="M12 3 3 7.5 12 12l9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',
  compras:
    '<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4"/><path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3"/>',
  ventas_crm:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2"/><path d="M16 4.6a3.2 3.2 0 0 1 0 6.2M17.5 14.9c1.8.6 2.9 2.3 3.2 5.1"/>',
  rrhh:
    '<rect x="4" y="3.5" width="16" height="17" rx="3"/><circle cx="12" cy="10" r="2.8"/><path d="M7.5 17c.8-2 2.4-3 4.5-3s3.7 1 4.5 3"/>',
  fiscal:
    '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="m9 14 6-6"/><circle cx="9.5" cy="8.5" r="1"/><circle cx="14.5" cy="13.5" r="1"/>',
  juridico:
    '<path d="M12 3.5v17M7 20.5h10"/><path d="M5 7h14"/><path d="m5 7-2.5 6a2.8 2.8 0 0 0 5 0z"/><path d="m19 7-2.5 6a2.8 2.8 0 0 0 5 0z"/>',
  pbc: '<path d="M12 3 5 6v5.5c0 4.3 2.9 7.8 7 9.5 4.1-1.7 7-5.2 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  productos:
    '<path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2z"/><path d="m4 7.2 8 4.3 8-4.3M12 11.5V21"/>',
  tpv: '<rect x="4" y="10" width="16" height="10.5" rx="2"/><path d="M7 10V4.5h10V10"/><path d="M9.5 7h5M8 14h2M12 14h2M16 14h0M8 17h8"/>',
  electrica: '<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>',
  muv: '<circle cx="12" cy="12" r="2.6"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="m6.6 7.3 3.4 3M17.4 7.3l-3.4 3M6.6 16.7l3.4-3M17.4 16.7l-3.4-3"/>',
  consultoria:
    '<path d="M12 3c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z"/><path d="M18.5 15.5c.3 1.6 1 2.3 2.5 2.5-1.5.3-2.2 1-2.5 2.5-.3-1.5-1-2.2-2.5-2.5 1.5-.2 2.2-.9 2.5-2.5Z"/>',
  energia:
    '<path d="M12 2.5v3M4.6 5.6l2.1 2.1M19.4 5.6l-2.1 2.1"/><path d="M8 15.5a5 5 0 1 1 8 0c-.8 1-1.3 1.9-1.4 3H9.4c-.1-1.1-.6-2-1.4-3Z"/><path d="M9.5 21h5"/>',
  migracion: '<path d="M4 8h13M13.5 4.5 17 8l-3.5 3.5"/><path d="M20 16H7M10.5 12.5 7 16l3.5 3.5"/>',
  portal:
    '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><circle cx="12" cy="11" r="3.3"/><path d="M12 9.3V11l1.2 1M10.5 18.5h3"/>',
  webs: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5Z"/>',
  centralita:
    '<path d="M5 4.5h3.2l1.6 4-2.1 1.4a10.5 10.5 0 0 0 6.4 6.4l1.4-2.1 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z"/><path d="M15 3.5a5.5 5.5 0 0 1 5.5 5.5M15 7a2 2 0 0 1 2 2"/>',
  implantacion:
    '<path d="M14.5 6.2a4 4 0 0 0-5.3 5.3L3.8 17a1.7 1.7 0 0 0 2.4 2.4l5.5-5.4a4 4 0 0 0 5.3-5.3l-2.4 2.4-2.1-.3-.3-2.1z"/>',
  bancos:
    '<path d="m3 9 9-5.5L21 9z"/><path d="M5 9v8M9.7 9v8M14.3 9v8M19 9v8"/><path d="M3.5 20.5h17"/>',
  ia: '<rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 3.5V7M9 12h.01M15 12h.01M9.5 15.5h5"/><path d="M2.5 12v3M21.5 12v3"/>',
  multiempresa:
    '<path d="M3.5 20.5h17"/><rect x="4.5" y="9" width="6" height="11.5" rx="1"/><rect x="13.5" y="4" width="6" height="16.5" rx="1"/><path d="M6.8 12.5h1.4M6.8 16h1.4M15.8 7.5h1.4M15.8 11h1.4M15.8 14.5h1.4"/>',
  check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
  correo: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  telefono:
    '<path d="M5 4.5h3.2l1.6 4-2.1 1.4a10.5 10.5 0 0 0 6.4 6.4l1.4-2.1 4 1.6V19a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z"/>',
  ubicacion: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  reloj: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
} as const;

export type NombreIcono = keyof typeof ICONOS;

/** El SVG completo de un icono (decorativo: aria-hidden). */
export function svgIcono(nombre: NombreIcono, tam = 24, clase = 'icono'): string {
  return `<svg class="${clase}" width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONOS[nombre]}</svg>`;
}
