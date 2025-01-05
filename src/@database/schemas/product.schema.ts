import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const ST_DISPOSITIVO = sqliteTable('ST_DISPOSITIVO', {
  ID_DISPOSITIVO: text('ID_DISPOSITIVO').primaryKey(),
  S_UUID: text('S_UUID').notNull().unique(),
  S_NOME: text('S_NOME'),
  S_DESCRICAO: text('S_DESCRICAO'),
  S_CODIGO: text('S_CODIGO').notNull().unique(),
  S_STATUS: text('S_STATUS'),
})
