import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.test.prisma',
  migrations: {
    path: 'prisma/migrations-test',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL_TEST'),
  },
});
