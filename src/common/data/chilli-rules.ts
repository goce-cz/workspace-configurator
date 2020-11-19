import { ProductRules } from '@salsita/configurator-sdk/common'

export const chilliProductRules: ProductRules = {
  models: {
    CHILLI: {
      basePrice: 100,
      defaultOptions: ['CAYENNE_TYPE', 'TIP_STANDARD'],
      incompatibilities: {
        EXTRA_DRIED: [
          'FRESH'
        ],
        FRESH: [
          'EXTRA_DRIED'
        ]
      },
      replacementGroups: {
        TYPE: [
          'CAYENNE_TYPE',
          'HABANERO_TYPE',
          'POBLANO_TYPE'
        ],
        TIPS: [
          'TIP_STANDARD',
          'TIP_SHORT',
          'TIP_FAT'
        ]
      },
      priceList: {
        CAYENNE_TYPE: 0,
        HABANERO_TYPE: 50,
        POBLANO_TYPE: 75,
        TIP_STANDARD: 0,
        TIP_SHORT: 5,
        TIP_FAT: 15,
        EXTRA_DRIED: 15,
        FRESH: 15
      },
      defaultValues: {
        EXTRA_DRIED: {
          months: 0
        }
      }
    }
  }
}
