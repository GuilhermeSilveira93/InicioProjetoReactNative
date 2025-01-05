import type { Config } from 'drizzle-kit';

export default {
	schema: './src/@database/schemas/**.schema.ts',
	out: './drizzle',
  dialect: 'sqlite',
	driver: 'expo',
} satisfies Config;
