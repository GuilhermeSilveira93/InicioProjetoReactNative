import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { ST_DISPOSITIVO } from './ST_DISPOSITIVO.schema';

export const ST_GRUPO = sqliteTable('ST_DISPOSITIVO', {
  ID_GRUPO: text('ID_GRUPO').primaryKey({ autoIncrement: true }),
  S_UUID: text('S_UUID').notNull().unique(),
  S_NOME: text('S_NOME'),
  S_DESCRICAO: text('S_DESCRICAO'),
  S_CODIGO: text('S_CODIGO').notNull().unique(),
  S_STATUS: text('S_STATUS'),
  ID_DISPOSITIVO:  integer("ID_DISPOSITIVO").references(() => ST_DISPOSITIVO.ID_DISPOSITIVO)
})
