import { ProductRules } from '@salsita/configurator-sdk/common'

export const chilliProductRules: ProductRules = {
  models: {
    SPICY: {
      basePrice: 0,
      defaultOptions: ['RED', 'LAPTOP', 'DISPLAY_SIZE'],
      replacementGroups: {
        TABLE_COLOR: [
          'BEIGE',
          'RED'
        ],
        COMPUTER: [
          'DESKTOP',
          'LAPTOP'
        ]
      },
      requirements: {
        'DOCK': ['MOUSE', 'LAPTOP', 'EXTERNAL_MONITOR'],
        'DESKTOP': ['MOUSE', 'EXTERNAL_MONITOR'],
        'DUAL_MONITOR': ['EXTERNAL_MONITOR', 'LARGE']
      },
      incompatibilities: {
        'DOCK': ['DESKTOP']
      },
      priceList: {
        RED: 0,
        BEIGE: 100,
        UPHOLSTERED_CHAIR: 1000,
        LARGE: 1500,
        LAPTOP: 32000,
        DESKTOP: 18000,
        DOCK: 2400,
        MOUSE: 500,
        EXTERNAL_MONITOR: 3200,
        DUAL_MONITOR: 3200,
        DISPLAY_SIZE: 0,
        PLANT: 350
      }
    }
  }
}
