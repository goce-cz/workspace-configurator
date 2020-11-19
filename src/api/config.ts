import dotenvExpand from 'dotenv-expand'
import dotenv from 'dotenv'

dotenvExpand(dotenv.config())

export const API_PATH = process.env.REACT_APP_API_PATH ?? '/api'
export const API_PORT = process.env.API_PORT == null ? 3001 : Number(process.env.API_PORT)
export const DATABASE_URL = process.env.DATABASE_URL

const defaultSsl = process.env.HEROKU_APP != null ? 'true' : 'false'
export const DATABASE_SSL = (process.env.DATABASE_SSL ?? defaultSsl) === 'true'
