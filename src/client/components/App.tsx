import React, { ReactElement } from 'react'
import { useRoute } from 'react-router5'
import { ErrorMessage } from '@salsita/configurator-sdk/client/components'

import { EXISTING_CONFIGURATION_ROUTE } from '../setup/routes'
import { Configurator } from './Configurator'

export function App (): ReactElement {
  const { route } = useRoute()
  if (!route) {
    return <div>Loading...</div>
  }

  switch (route.name) {
    case EXISTING_CONFIGURATION_ROUTE:
      return <Configurator configurationKey={route.params.configurationKey}/>
    default:
      return <ErrorMessage message='Not found'/>
  }
}
