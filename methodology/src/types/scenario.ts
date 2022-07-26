export type Size = number | null
export type Income = number | null
export type Scenario = { size: Size; income: Income; translateKey: string }
export type ScenarioParameterOnly = Omit<Scenario, 'translateKey'>

export type Category = 'buy' | 'rent'

export type CategoryConfig = {
  category: Category
  dataPathRelative: string
}

export type IncomeRangeDefinition = {
  rangeStart: number
  rangeEnd: number
  interval: number
}
