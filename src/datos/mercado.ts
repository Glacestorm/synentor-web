// Cifras de mercado para «Com ens comparem» (diseño §7.1 y §15.3): sin nombres de competidores, solo de páginas oficiales
// de precios de los fabricantes, con la fecha de consulta. No son precios de Synentor (esos, solo en la tarifa).
export const MERCADO = {
  consultado: '2026-11-14',
  nominaPorPersona: { min: 16, max: 22 },
  erpPorUsuario: 80,
  /**
   * El ejemplo del diseño (§7.1): 20 personas y 5 usuarios. Por separado, nómina en la nube (16–22 € × 20 personas + 69 €
   * de cuota fija de su tramo = 389–509 €) más un ERP internacional con 5 usuarios (5 × 80 € = 400 €): 789–909 €.
   * El precio de Synentor del mismo ejemplo no se escribe aquí: lo calcula `calcula`.
   */
  ejemplo: { personas: 20, usuarios: 5, separadoMin: 789, separadoMax: 909 },
} as const;
