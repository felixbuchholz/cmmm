import { getThresholdPriceBuy } from './getThresholdPriceBuy'
import { getThresholdPriceRent } from './getThresholdPriceRent'
import { GetIncomeThreshold } from './types/getThresholds'
import { Category } from './types/scenario'

export const getThresholdPrice: Record<Category, GetIncomeThreshold> = {
  rent: getThresholdPriceRent,
  buy: getThresholdPriceBuy,
}
