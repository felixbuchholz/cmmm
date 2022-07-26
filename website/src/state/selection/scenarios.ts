import { ParameterItemProps } from '../../types/MenusParameter'

import incomes from './incomes.json'
import sizes from './sizes.json'

export const scenarios: ParameterItemProps[] = [
  { size: 1, income: 1000, translateKey: 'scenarios.singleArtist' },
  { size: 2, income: 500, translateKey: 'scenarios.generic' },
]

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
