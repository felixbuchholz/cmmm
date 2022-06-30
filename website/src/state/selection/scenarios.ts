import { ParameterItemProps } from '../../types/MenusParameter'

export const scenarios: ParameterItemProps[] = [
  { size: 1, income: 1000, translateKey: 'scenarios.singleArtist' },
  { size: 2, income: 500, translateKey: 'scenarios.generic' },
]

export const sizes: ParameterItemProps[] = [{ size: 1 }, { size: 2 }]

export const incomes: ParameterItemProps[] = [{ income: 500 }, { income: 1000 }]

export const allSizes = [
  ...new Set([...sizes.map(it => it.size), ...scenarios.map(it => it.size)]),
]

export const allIncomes = [
  ...new Set([
    ...incomes.map(it => it.income),
    ...scenarios.map(it => it.income),
  ]),
]

export const allOptions = {
  category: ['buy', 'rent'],
  size: allSizes,
  income: allIncomes,
}
