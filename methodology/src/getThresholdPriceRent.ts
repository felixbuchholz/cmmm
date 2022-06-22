import { nullThresholdPrice } from './getThresholds'
import { Income } from './types/scenario'

export const getThresholdPriceRent = (income: Income): number => {
  if (income === null) {
    return nullThresholdPrice
  }

  return income * incomeRentFactor
}
export const factorDisposableIncome = 0.3
const incomeRentFactor = factorDisposableIncome
