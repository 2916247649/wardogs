import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'mysql',
	schema: './src/lib/server/db/schema.ts',
	out: './drizzle',
	casing: 'snake_case',
	dbCredentials: {
		url: process.env.DATABASE_URL ?? 'mysql://warcon:warcon@127.0.0.1:3306/warcon'
	}
});
