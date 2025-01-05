import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../../drizzle/migrations';
import { useState } from 'react';

export const DATABASE_NAME = 'database.db';
const expoDB = openDatabaseSync(DATABASE_NAME);

const db = drizzle(expoDB);

const useDataBase = () => {
  console.log('aqui')
  const { success, error } = useMigrations(db, migrations);
  if (!success) {
    console.log('ainda carregando')
  }
  return { error, success };
};
export default useDataBase;