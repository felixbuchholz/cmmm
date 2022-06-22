import { factorDisposableIncome } from './getThresholdPriceRent'
import { nullThresholdPrice } from './getThresholds'
import { Income } from './types/scenario'

export const getThresholdPriceBuy = (income: Income): number => {
  if (income === null) {
    return nullThresholdPrice
  }
  const incomeDisposableMonthly = income * incomeBuyFactor
  const incomeDisposableYearly = monthsInYear * incomeDisposableMonthly

  const affordableLoan =
    (incomeDisposableYearly *
      factorDownPayment20Percent *
      (Math.pow(factorQ, durationInYears) - factorOne)) /
    (Math.pow(factorQ, durationInYears) * interestRate)
  return affordableLoan
}
const factorOne = 1
const interestRate = 0.0255
const factorQ = factorOne + interestRate
const durationInYears = 30
const incomeBuyFactor = factorDisposableIncome
const monthsInYear = 12
const factorDownPayment20Percent = 1.25
