import { Router5NavigationProvider } from '@salsita/configurator-sdk/client/integrations/router5'
import { createRouter } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { ActivationFnFactory } from 'router5/dist/types/router'

import { apiClient } from './api-client'
import { chilliProduct } from '../data/chilli'

export const NEW_CONFIGURATION_ROUTE = 'new-configuration'
export const EXISTING_CONFIGURATION_ROUTE = 'existing-configuration'

const routes = [
  {
    name: NEW_CONFIGURATION_ROUTE,
    path: '/configurator/:productId/new?:modelId'
  },
  {
    name: EXISTING_CONFIGURATION_ROUTE,
    path: `/configurator/:productId/:configurationKey${Router5NavigationProvider.PATH_PATTERN}`
  }
]

export const router = createRouter(
  routes,
  {
    defaultRoute: NEW_CONFIGURATION_ROUTE,
    defaultParams: {
      productId: chilliProduct.id
    }
  }
)

router.usePlugin(browserPlugin({
  useHash: false
}))

const redirectToNewConfig: ActivationFnFactory = () => async (toState) => {
  const {
    modelId = chilliProduct.models[0].id
  } = toState.params

  const configurationKey = await apiClient.createProductConfiguration(
    chilliProduct.id,
    modelId
  )

  // eslint-disable-next-line @typescript-eslint/no-throw-literal,no-throw-literal
  throw {
    redirect: {
      name: EXISTING_CONFIGURATION_ROUTE,
      params: {
        configurationKey,
        productId: chilliProduct.id,
        masterSection: chilliProduct.defaultMasterSectionIds[0]
      }
    }
  }
}

router.canActivate(NEW_CONFIGURATION_ROUTE, redirectToNewConfig)

export const navigationProvider = new Router5NavigationProvider(EXISTING_CONFIGURATION_ROUTE, router)
