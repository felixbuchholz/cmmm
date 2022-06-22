import { Category, Income, Scenario } from './scenario'

export type GetIncomeThreshold = (income: Income) => number

export type Thresholds = { price: number | null; size: number | null }

export type GetThresholds = (
  { income, size }: Scenario,
  category: Category
) => Thresholds
