import React, { memo, ReactElement } from 'react'
import {
  AnimationToggleMenu,
  Layout,
  SalsitaConfigurator,
  DefaultSceneEnvironment,
  View3d,
  MasterSectionNavbar,
  SubSectionSidebar,
  CameraPresetMenu,
  ConfigurationSummary,
  Scope3d,
  Gltf3dModel
} from '@salsita/configurator-sdk/client'

import { navigationProvider } from '../setup/routes'
import { apiClient } from '../setup/api-client'
import { chilli3dConfig, chilliProduct } from '../data/chilli'
import { chilliProductRules } from '../../common/data/chilli-rules'

import logo from '../../assets/salsita.svg'

export interface CarConfiguratorProps {
  configurationKey: string
}

export const Configurator = memo(function CarConfigurator (
  {
    configurationKey
  }: CarConfiguratorProps
): ReactElement {
  return (
    <SalsitaConfigurator
      navigationProvider={navigationProvider}
      product={chilliProduct}
      productRules={chilliProductRules}
      apiClient={apiClient}
      configurationKey={configurationKey}
    >
      <Layout
        logo={logo}
        header={<h1>Configure your workplace in Salsita</h1>}
        navigation={<MasterSectionNavbar/>}
        sidebar={<SubSectionSidebar/>}
        summary={<ConfigurationSummary/>}
        headerClassName="app-header"
      >
        <Scope3d>
          <View3d/>
          <Gltf3dModel {...chilli3dConfig}/>
          <DefaultSceneEnvironment />
        </Scope3d>
        <CameraPresetMenu/>
        <AnimationToggleMenu/>
      </Layout>
    </SalsitaConfigurator>
  )
})
