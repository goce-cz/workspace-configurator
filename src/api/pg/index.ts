import { Pool } from 'pg'

import { DATABASE_SSL, DATABASE_URL } from '../config'

export const pgPool = new Pool({
  connectionString: DATABASE_URL,
  ssl: DATABASE_SSL && {
    rejectUnauthorized: false
  }
})
