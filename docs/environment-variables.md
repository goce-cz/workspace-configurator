# Environment variables

The bootstrapped project is quite simple, and the SDK itself favors code composition over configuration.
The list of adjustable environment variables is therefore very short.

#### Required variables

* `DATABASE_URL` - connection string to Postgres DB

#### Optional variables

* `PORT` - port on which the static React client is served (default `3000`)
* `API_PORT` - port on which the API listens (default `3001`)
* `REACT_APP_API_PATH` - URL prefix where the API routes are mounted (default `/api`)
