import React from 'react'
import {
  Product,
  Gltf3dModelProps,
  ImageOptionIcon,
  objectVisibilityEffect,
  objectTransformationEffect,
  materialParametersEffect
} from '@salsita/configurator-sdk/client'
import { ColorOptionIcon } from '@salsita/configurator-sdk/client/components'
import {
  ChairIcon,
  LaptopIcon,
  MonitorIcon,
  PlantPotIcon,
  ResizeIcon,
  TableIcon,
  UserIcon,
  VideoCameraIcon
} from '../icons'
import { DisplaySizeSlider } from '../components/DisplaySizeSlider'

const numberFormat = Intl.NumberFormat()

export const chilliProduct: Product = {
  id: 'WORKPLACE',
  longName: 'Workplace',
  defaultMasterSectionIds: ['OVERALL_SECTION'],
  formatPrice: price => `${numberFormat.format(price)} CZK`,
  cameras: [
    {
      id: 'OVERVIEW_CAMERA',
      target: [0, 1, 0],
      position: [-1.157, 1.715, 1.528],
      minDistance: 0.5,
      maxDistance: 4
    },
    {
      id: 'POV_CAMERA',
      target: [0, 1.130, 0.620],
      position: [0, 1.130, 0.630],
      fieldOfView: 90,
      minDistance: 0.01,
      maxDistance: 0.01
    },
    {
      id: 'DESKTOP_CAMERA',
      target: [-0.8, 0.2, 0.2],
      position: [-1.3, 0.9, 1.2],
      minDistance: 0.2,
      maxDistance: 2
    }
  ],
  cameraPresets: [
    {
      id: 'OVERVIEW_CAMERA_PRESET',
      cameraId: 'OVERVIEW_CAMERA',
      tooltip: 'Front view',
      icon: <VideoCameraIcon/>
    },
    {
      id: 'POV_CAMERA_PRESET',
      cameraId: 'POV_CAMERA',
      tooltip: 'Point of view',
      icon: <UserIcon/>
    }
  ],
  options: [
    {
      id: 'BEIGE',
      shortName: 'Beige',
      longName: 'Beige tabletop',
      icon: <ColorOptionIcon color="#b39359"/>,
      viewEffects: [
        materialParametersEffect({
          affectedMaterials: ['table_top'],
          adjustedProperties: {
            color: '#b39359'
          }
        })
      ]
    },
    {
      id: 'RED',
      shortName: 'Red',
      longName: 'Red tabletop',
      icon: <ColorOptionIcon color="#ff0a0a"/>
    },
    {
      id: 'LARGE',
      shortName: 'Large',
      longName: 'Larger table',
      icon: <ResizeIcon/>,
      viewEffects: [
        objectTransformationEffect({
          affectedObjects: ['tabletop'],
          translateRelative: [-0.25, undefined, undefined],
          scale: [undefined, 1.5, undefined]
        }),
        objectTransformationEffect({
          affectedObjects: ['plant'],
          translate: [0.3, undefined, undefined]
        })
      ]
    },
    {
      id: 'UPHOLSTERED_CHAIR',
      shortName: 'Upholstered',
      longName: 'Upholstered chair',
      icon: <ImageOptionIcon src="/images/chair.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['office-chair'],
          objectsToHide: ['chair']
        })
      ]
    },
    {
      id: 'LAPTOP',
      shortName: 'Laptop',
      longName: 'Laptop PC',
      icon: <ImageOptionIcon src="/images/laptop.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['laptop']
        })
      ]
    },
    {
      id: 'DESKTOP',
      shortName: 'Desktop',
      longName: 'Desktop PC',
      icon: <ImageOptionIcon src="/images/desktop.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['desktop', 'keyboard']
        })
      ],
      cameraId: 'DESKTOP_CAMERA'
    },
    {
      id: 'EXTERNAL_MONITOR',
      shortName: 'External',
      longName: 'External monitor',
      icon: <ImageOptionIcon src="/images/monitor.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['monitor1']
        })
      ]
    },
    {
      id: 'DUAL_MONITOR',
      shortName: 'Dual',
      longName: 'Dual monitor',
      icon: <ImageOptionIcon src="/images/dual-monitor.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['monitor2']
        }),
        objectTransformationEffect({
          affectedObjects: ['monitor1'],
          translate: (_, selectedOptions) => {
            const values = selectedOptions.get('DISPLAY_SIZE')?.values as { diagonal: number } | undefined
            const { diagonal = 24 } = values ?? {}
            return [-0.3 * diagonal / 24, undefined, undefined]
          }
        }),
        objectTransformationEffect({
          affectedObjects: ['monitor2'],
          translate: (_, selectedOptions) => {
            const values = selectedOptions.get('DISPLAY_SIZE')?.values as { diagonal: number } | undefined
            const { diagonal = 24 } = values ?? {}
            return [0.3 * diagonal / 24, undefined, undefined]
          }
        })
      ]
    },
    {
      id: 'DISPLAY_SIZE',
      shortName: 'Size',
      longName: 'Display size',
      component: DisplaySizeSlider,
      viewEffects: [
        objectTransformationEffect<{ diagonal: number }>({
          affectedObjects: ['monitor1', 'monitor2'],
          scale: (selectionInfo) => {
            const diagonal = selectionInfo.values.diagonal
            return [diagonal / 24, diagonal / 24, undefined]
          },
          translateRelative: (selectionInfo) => {
            const diagonal = selectionInfo.values.diagonal
            return [undefined, (diagonal / 24 - 1) / 2, undefined]
          }
        })
      ]
    },
    {
      id: 'DOCK',
      shortName: 'Dock',
      longName: 'Docked laptop',
      icon: <ImageOptionIcon src="/images/dock.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['keyboard']
        }),
        objectTransformationEffect({
          affectedObjects: ['laptop'],
          translate: (_, selectedOptions) => [selectedOptions.has('DUAL_MONITOR') ? -0.8 : -0.5, undefined, -0.3]
        })
      ]
    },
    {
      id: 'MOUSE',
      shortName: 'Mouse',
      longName: 'Wireless mouse',
      icon: <ImageOptionIcon src="/images/mouse.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['mouse']
        })
      ]
    },
    {
      id: 'PLANT',
      shortName: 'Plant pot',
      longName: 'Decorative plan pot',
      icon: <ImageOptionIcon src="/images/plant.png"/>,
      viewEffects: [
        objectVisibilityEffect({
          objectsToShow: ['plant']
        })
      ]
    }
  ],
  models: [
    {
      id: 'SPICY',
      longName: 'Spicy Salsita workspace',
      badgeName: 'spicy',
      description: <p>Hot as hell.</p>
    }
  ],
  optionGroups: [
    {
      id: 'COMPUTER_GROUP',
      longName: 'Computer',
      optionIds: [
        'DESKTOP',
        'LAPTOP'
      ]
    },
    {
      id: 'MONITOR_SETUP_GROUP',
      longName: 'Monitor setup',
      optionIds: [
        'EXTERNAL_MONITOR',
        'DUAL_MONITOR'
      ]
    },
    {
      id: 'DISPLAY_SIZE_GROUP',
      longName: 'Display size',
      optionIds: [
        'DISPLAY_SIZE'
      ]
    },
    {
      id: 'ACCESSORY_GROUP',
      longName: 'Accessories',
      optionIds: [
        'DOCK',
        'MOUSE'
      ]
    },
    {
      id: 'PLANT_GROUP',
      longName: 'Plant',
      optionIds: [
        'PLANT'
      ]
    },
    {
      id: 'TABLE_COLOR_GROUP',
      longName: 'Color',
      optionIds: [
        'RED',
        'BEIGE'
      ]
    },
    {
      id: 'TABLE_SIZE_GROUP',
      longName: 'Size',
      optionIds: [
        'LARGE'
      ]
    },
    {
      id: 'CHAIR_GROUP',
      longName: 'Chair',
      optionIds: [
        'UPHOLSTERED_CHAIR'
      ]
    }
  ],
  subSections: [
    {
      id: 'TABLE_SUB_SECTION',
      longName: 'Table',
      icon: <TableIcon/>,
      optionGroupIds: [
        'TABLE_COLOR_GROUP',
        'TABLE_SIZE_GROUP'
      ]
    },
    {
      id: 'CHAIR_SUB_SECTION',
      longName: 'Chair',
      icon: <ChairIcon/>,
      optionGroupIds: [
        'CHAIR_GROUP'
      ]
    },
    {
      id: 'COMPUTER_SUB_SECTION',
      longName: 'Computer',
      icon: <LaptopIcon/>,
      optionGroupIds: [
        'COMPUTER_GROUP',
        'ACCESSORY_GROUP'
      ]
    },
    {
      id: 'MONITOR_SUB_SECTION',
      longName: 'Monitor',
      icon: <MonitorIcon/>,
      optionGroupIds: [
        'MONITOR_SETUP_GROUP',
        'DISPLAY_SIZE_GROUP'
      ]
    },
    {
      id: 'DECORATION_SUB_SECTION',
      longName: 'Decoration',
      icon: <PlantPotIcon/>,
      optionGroupIds: [
        'PLANT_GROUP'
      ]
    }
  ],
  masterSections: [
    {
      id: 'OVERALL_SECTION',
      longName: 'Overall setup',
      subTitle: 'Table & chair',
      subSectionIds: [
        'TABLE_SUB_SECTION',
        'CHAIR_SUB_SECTION'
      ],
      cameraId: 'OVERVIEW_CAMERA',
      cameraPresetIds: [
        'OVERVIEW_CAMERA_PRESET',
        'POV_CAMERA_PRESET'
      ]
    },
    {
      id: 'APPLIANCE_SECTION',
      longName: 'Appliance',
      subTitle: 'Computer and accessories',
      subSectionIds: [
        'COMPUTER_SUB_SECTION',
        'MONITOR_SUB_SECTION',
        'DECORATION_SUB_SECTION'
      ],
      cameraId: 'POV_CAMERA',
      cameraPresetIds: [
        'OVERVIEW_CAMERA_PRESET',
        'POV_CAMERA_PRESET'
      ]
    }
  ]
}

export const chilli3dConfig: Gltf3dModelProps = {
  path: '/models/workspace.gltf',
  scale: 1,
  hiddenObjects: [
    'plant',
    'laptop',
    'desktop',
    'monitor1',
    'monitor2',
    'keyboard',
    'mouse',
    'office-chair'
  ]
}
