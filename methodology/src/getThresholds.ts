import { getThesholdSize } from './getThesholdSize'
import { getThresholdPrice } from './getThresholdPrice'
import { Category, ScenarioParameterOnly } from './types/scenario'

export const getThresholds = (
  { income, size: houseHoldSize }: ScenarioParameterOnly,
  category: Category
): { price: number; size: number } => {
  const price = getThresholdPrice[category](income)
  const size = getThesholdSize(houseHoldSize)

  return { price, size }
}

// Because the comparison is offer <= threshold
// this will lead to all offers being NOT affordable
export const nullThresholdPrice = 0
