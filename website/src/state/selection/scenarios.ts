import { ParameterItemProps } from '../../types/MenusParameter'

export const scenarios: ParameterItemProps[] = [
  { size: 1, income: 1000, translateKey: 'scenarios.singleArtist' },
  { size: 2, income: 500, translateKey: 'scenarios.generic' },
]

export const sizes: ParameterItemProps[] = [{ size: 1 }, { size: 2 }]

export const incomes: ParameterItemProps[] = [{ income: 500 }, { income: 1000 }]
