-- Prueba de los consentimientos de cookies (diseño §17): una fila por decisión, con un identificador al azar que no es de
-- la persona. Sin la IP ni ningún otro dato. El Worker borra cada día las de más de 12 meses.
CREATE TABLE IF NOT EXISTS consentimientos (
  id TEXT PRIMARY KEY,
  version TEXT NOT NULL,
  estadisticas INTEGER NOT NULL CHECK (estadisticas IN (0, 1)),
  publicidad INTEGER NOT NULL CHECK (publicidad IN (0, 1)),
  fecha TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS consentimientos_fecha ON consentimientos (fecha);
