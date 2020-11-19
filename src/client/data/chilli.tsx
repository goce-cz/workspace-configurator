import React from 'react'
import {
  Product,
  materialParametersEffect,
  objectVisibilityEffect,
  objectTransformationEffect,
  Gltf3dModelProps
} from '@salsita/configurator-sdk/client'
import { ColorOptionIcon } from '@salsita/configurator-sdk/client/components'
import { Vector2 } from 'three'

import { ExtraDriedSlider } from '../components/ExtraDriedSlider'

const numberFormat = Intl.NumberFormat()

const bellMaterial = 'bell_Mat'
const tipMaterial = 'tip_Mat'

const tipShort = 'tip_short'
const tipFat = 'tip_fat'
const tipStandard = 'tip_standard'

export const chilliProduct: Product = {
  id: 'PEPPER',
  longName: 'Pepper',
  defaultMasterSectionIds: ['GROWTH_SECTION'],
  formatPrice: price => `${numberFormat.format(price)} €`,
  cameras: [
    {
      id: 'FRONT_CAMERA',
      target: [
        0,
        1,
        0
      ],
      position: [
        -0.342,
        1.96,
        -1.774
      ],
      minDistance: 1.221013291361645,
      maxDistance: 3.7745520262783803
    },
    {
      id: 'REAR_CAMERA',
      target: [
        0,
        1,
        0
      ],
      position: [
        -1.157,
        1.715,
        1.528
      ],
      minDistance: 1.221013291361645,
      maxDistance: 3.7745520262783803
    },
    {
      id: 'TIP_CAMERA',
      target: [
        -0.013273812273939792,
        1.54236004017079,
        0.014117445920453374
      ],
      position: [
        -0.385,
        1.884,
        -0.674
      ],
      minDistance: 0.438084243937975,
      maxDistance: 1.0470876224212817
    },
    {
      id: 'CLOSEUP_CAMERA',
      target: [
        0.04611159373160548,
        1.213190870479026,
        0.15393241783168096
      ],
      position: [
        -0.174,
        1.716,
        -0.82
      ],
      minDistance: 0.7045252660732438,
      maxDistance: 1.9653426139068548
    }
  ],
  cameraPresets: [
    {
      id: 'FRONT_CAMERA_PRESET',
      cameraId: 'FRONT_CAMERA',
      tooltip: 'Front view'
    },
    {
      id: 'REAR_CAMERA_PRESET',
      cameraId: 'REAR_CAMERA',
      tooltip: 'Rear view'
    }
  ],
  options: [
    {
      id: 'CAYENNE_TYPE',
      shortName: 'Cayenne',
      longName: 'Cayenne Red',
      description: <p>Cayenne peppers are a group of tapering, 10 to 25 cm long, generally skinny, mostly red-colored peppers, often with a curved tip and somewhat rippled skin, which hang from the bush as opposed to growing upright. Most varieties are generally rated at 30,000 to 50,000 Scoville units.</p>,
      icon: <ColorOptionIcon color="#b40000"/>,
      viewEffects: [
        materialParametersEffect({
          affectedMaterials: [bellMaterial],
          adjustedProperties: {
            color: '#b40000'
          }
        })
      ]
    },
    {
      id: 'HABANERO_TYPE',
      shortName: 'Habanero',
      longName: 'Orange Habanero',
      description: <p>Habanero chilis are very hot, rated 100,000–350,000 on the Scoville scale. The habanero's heat, flavor and floral aroma make it a popular ingredient in hot sauces and other spicy foods.</p>,
      icon: <ColorOptionIcon color="#ff7700"/>,
      viewEffects: [
        materialParametersEffect({
          affectedMaterials: [bellMaterial],
          adjustedProperties: {
            color: '#ff7700'
          }
        })
      ]
    },
    {
      id: 'POBLANO_TYPE',
      shortName: 'Poblano',
      longName: 'Green Poblano',
      description: <p>While poblanos tend to have a mild flavor, occasionally and unpredictably they can have significant heat. Different peppers from the same plant have been reported to vary substantially in heat intensity. The ripened red poblano is significantly hotter and more flavorful than the less ripe, green poblano.</p>,
      icon: <ColorOptionIcon color="#458c00"/>,
      viewEffects: [
        materialParametersEffect({
          affectedMaterials: [bellMaterial],
          adjustedProperties: {
            color: '#458c00'
          }
        }),
        objectTransformationEffect({
          affectedObjects: ['bell'],
          scale: [1.5, 1.3, 0.6],
          translateRelative: [undefined, 0.4, undefined]
        })
      ]
    },
    {
      id: 'TIP_STANDARD',
      shortName: 'Standard',
      longName: 'Standard tip',
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: [tipStandard]
        })
      ]
    },
    {
      id: 'TIP_SHORT',
      shortName: 'Short',
      longName: 'Short tip',
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: [tipShort]
        })
      ]
    },
    {
      id: 'TIP_FAT',
      shortName: 'Thick',
      longName: 'Thick tip',
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: [tipFat]
        })
      ]
    },
    {
      id: 'EXTRA_DRIED',
      shortName: 'Extra dried',
      longName: 'Heavily dried by the sun',
      viewEffects: [
        materialParametersEffect<{ months: number }>({
          affectedMaterials: [bellMaterial],
          adjustedProperties: {
            normalScale: ({ values: { months } }) => new Vector2(months / 2 + 1, -months / 2 - 1)
          }
        }),
        materialParametersEffect<{ months: number }>({
          affectedMaterials: [tipMaterial],
          adjustedProperties: {
            normalScale: ({ values: { months } }) => new Vector2(months * 5 + 1, -months * 5 - 1)
          }
        }),
        objectTransformationEffect<{ months: number }>({
          affectedObjects: [tipStandard, tipFat, tipShort],
          scale: ({ values: { months } }) => [1 - (months / 45), 1 - (months / 45), undefined]
        })
      ],
      component: ExtraDriedSlider
    },
    {
      id: 'FRESH',
      longName: 'Super fresh',
      viewEffects: [
        materialParametersEffect({
          affectedMaterials: [bellMaterial],
          adjustedProperties: {
            normalScale: new Vector2(0.5, -0.5)
          }
        }),
        materialParametersEffect({
          affectedMaterials: [tipMaterial],
          adjustedProperties: {
            normalScale: new Vector2(0.5, -0.5)
          }
        })
      ]
    }
  ],
  models: [
    {
      id: 'CHILLI',
      longName: 'Chilli ',
      description: <p>Hot as hell.</p>
    }
  ],
  optionGroups: [
    {
      id: 'TYPE',
      longName: 'Chilli pepper type and color',
      optionIds: [
        'CAYENNE_TYPE',
        'HABANERO_TYPE',
        'POBLANO_TYPE'
      ]
    },
    {
      id: 'TIPS',
      longName: 'Length and shape of the tip',
      optionIds: [
        'TIP_STANDARD',
        'TIP_SHORT',
        'TIP_FAT'
      ]
    },
    {
      id: 'DRYING',
      longName: 'Drying',
      optionIds: [
        'EXTRA_DRIED',
        'FRESH'
      ]
    }
  ],
  subSections: [
    {
      id: 'TYPE_SECTION',
      longName: 'Type',
      optionGroupIds: [
        'TYPE'
      ]
    },
    {
      id: 'TIP_SECTION',
      longName: 'Tips',
      optionGroupIds: [
        'TIPS'
      ],
      cameraId: 'TIP_CAMERA',
      touchPoint: [-0.2, 1.75, 0]
    },
    {
      id: 'DRYING_SECTION',
      longName: 'Drying',
      optionGroupIds: [
        'DRYING'
      ],
      cameraId: 'CLOSEUP_CAMERA'
    }
  ],
  masterSections: [
    {
      id: 'GROWTH_SECTION',
      longName: 'Growth',
      subTitle: 'Type and tip',
      subSectionIds: [
        'TYPE_SECTION',
        'TIP_SECTION'
      ],
      cameraId: 'FRONT_CAMERA',
      cameraPresetIds: [
        'FRONT_CAMERA_PRESET',
        'REAR_CAMERA_PRESET'
      ]
    },
    {
      id: 'PREPARATION_SECTION',
      longName: 'Preparation',
      subTitle: 'After reaping, before shipping',
      subSectionIds: [
        'DRYING_SECTION'
      ],
      cameraId: 'FRONT_CAMERA',
      cameraPresetIds: []
    }
  ]
}

export const chilli3dConfig: Gltf3dModelProps = {
  path: '/models/chilli.gltf',
  scale: 0.09,
  hiddenObjects: [
    tipFat,
    tipShort,
    tipStandard
  ]
}
