// La configuración del Worker (wrangler.jsonc): la base D1 de los consentimientos (diseño §17) y nada secreto.
/// <reference types="node" />
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
/** wrangler.jsonc sin sus comentarios (todos van en líneas propias). */
const config = JSON.parse(readFileSync(`${RAIZ}wrangler.jsonc`, 'utf8').replace(/^\s*\/\/.*$/gm, ''));

describe('wrangler.jsonc', () => {
  it('lleva la base D1 de los consentimientos con el nombre que usa el Worker', () => {
    expect(config.d1_databases).toEqual([
      {
        binding: 'CONSENTIMIENTOS',
        database_name: 'synentor-consentimientos',
        database_id: '3eb6819a-4735-48f4-a7c3-2594a373dd31',
        migrations_dir: 'migraciones',
      },
    ]);
    expect(existsSync(`${RAIZ}migraciones/0001_consentimientos.sql`)).toBe(true);
  });

  it('mantiene la limpieza diaria de los consentimientos de más de 12 meses', () => {
    expect(config.triggers).toEqual({ crons: ['17 3 * * *'] });
  });

  it('no guarda ningún secreto en las variables (el repositorio es público)', () => {
    const nombres = Object.keys(config.vars ?? {});
    expect(nombres.filter((n) => /SECRET|KEY|TOKEN|PASSWORD/i.test(n) && !n.startsWith('PUBLIC_'))).toEqual([]);
  });
});
