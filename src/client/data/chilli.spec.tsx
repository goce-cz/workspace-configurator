import {
  compileProduct,
  collectAllReferencedIds,
  collectUnusedIds,
  NO_UNUSED_IDS
} from '@salsita/configurator-sdk/client/model'

import { chilliProduct } from './chilli'
import { chilliProductRules } from '../../common/data/chilli-rules'

describe('chilliProduct', () => {
  it('compiles without errors', () => {
    const { errors } = compileProduct({ product: chilliProduct, productRules: chilliProductRules })
    expect(errors).toEqual([])
  })

  it('does not contain any unused entities', () => {
    const { compiledProduct } = compileProduct({ product: chilliProduct, productRules: chilliProductRules })

    const referencedIds = collectAllReferencedIds(compiledProduct)
    const unusedIds = collectUnusedIds(referencedIds, chilliProduct)

    expect(unusedIds).toEqual(NO_UNUSED_IDS)
  })
})
