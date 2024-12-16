import type { DB } from './db';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const config =  useRuntimeConfig();

const dialect = new PostgresDialect({
    pool: new Pool({
        database: config.db_name,
        host: config.db_host,
        user: config.db_user,
        password: config.db_user_password,
        port: 5434,
        max: 100,
    })
})

export const database = new Kysely<DB>({
    dialect,
})
