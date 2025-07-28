import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const PG_HOST = process.env.PG_HOST!;
const PG_PORT = process.env.PG_PORT!;
const PG_USER = process.env.PG_USER!;
const PG_PASSWORD = process.env.PG_PASSWORD!;
const PG_DATABASE = process.env.PG_DATABASE!;

const client = new Client({
    host: PG_HOST,
    port: parseInt(PG_PORT),
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

await client.connect();

export const db = drizzle(client);
