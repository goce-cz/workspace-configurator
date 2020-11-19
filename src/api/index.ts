import Koa from 'koa'
import Router from '@koa/router'
import { createRouter } from '@salsita/configurator-sdk/api'

import { API_PATH, API_PORT } from './config'
import { pgPool } from './pg'
import { products } from '../common/data'

const app = new Koa()

const sdkRouter = createRouter({ pool: pgPool, products })
const router = new Router()
router.use(API_PATH, sdkRouter.routes(), sdkRouter.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(API_PORT, () => console.log(`API listening on port ${API_PORT}`))
