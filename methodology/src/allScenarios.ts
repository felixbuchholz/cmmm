/* eslint-disable no-magic-numbers */
import { MergeParameters } from './types/mergeParameters'
import { Income, Size, Scenario } from './types/scenario'

const incomes: Income[] = [null]

const sizes: Size[] = [null]

const scenarios: Scenario[] = [
  { income: 1000, size: 1 },
  { income: 500, size: 2 },
]

export const getAllScenarios = (): Scenario[] => {
  const { incomes: _incomes, sizes: _sizes } = mergeParameters({
    incomes,
    sizes,
    scenarios,
  })
  const _scenarios: Scenario[] = []

  for (const income of _incomes) {
    for (const size of _sizes) {
      _scenarios.push({ income, size })
    }
  }

  return _scenarios
}

export const mergeParameters: MergeParameters = ({ scenarios, ...props }) => {
  const scenarioIncomes = scenarios.map(it => it.income)
  const scenarioSizes = scenarios.map(it => it.size)
  const incomes = [...new Set([...scenarioIncomes, ...props.incomes])]
  const sizes = [...new Set([...scenarioSizes, ...props.sizes])]
  return { incomes, sizes }
}

export const allScenarios = getAllScenarios()
