import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import { env } from "./env";
// biome-ignore lint/performance/noNamespaceImport: Drizzle requires wildcard import for schema
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  client: SQL | undefined;
};

const client =
  globalForDb.client ??
  new SQL(env.DATABASE_URL, {
    prepare: false,
  });
if (process.env.NODE_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle(client, { schema });
// biome-ignore lint/performance/noBarrelFile: This is the package entry point
export * from "./schema";
