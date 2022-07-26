import { ParameterItemProps } from '../../types/MenusParameter'

import incomes from './incomes.json'
import scenarios from './scenarios.json'
import sizes from './sizes.json'

export const scenarioParameters = scenarios as ParameterItemProps[]

export const sizeParameters: ParameterItemProps[] = sizes.map(it => ({
  size: it,
}))

export const incomeParameters: ParameterItemProps[] = incomes.map(it => ({
  income: it,
}))

export const allSizes = [
  ...new Set([...sizes, ...scenarios.map(it => it.size)]),
]

export const allIncomes = [
  ...new Set([...incomes, ...scenarios.map(it => it.income)]),
]

export const allOptions = {
  category: ['buy', 'rent'],
  size: allSizes,
  income: allIncomes,
}
