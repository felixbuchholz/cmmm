/* eslint-disable no-magic-numbers */
import { getIncomesFromRangeDefinitions } from './getIncomesFromRangeAndIntervall'
import { getNumbersFromOneUpTo } from './getNumbersUpTo'
import { MergeParameters } from './types/mergeParameters'
import { Income, Size, Scenario, ScenarioParameterOnly } from './types/scenario'

export const incomeRangesAndIntervals = [
  { rangeStart: 200, rangeEnd: 2000, interval: 50 },
  { rangeStart: 2000, rangeEnd: 4000, interval: 100 },
  { rangeStart: 4000, rangeEnd: 8000, interval: 200 },
]

const maxHouseholdSize = 6

export const incomes: Income[] = [
  null,
  ...getIncomesFromRangeDefinitions(incomeRangesAndIntervals),
]

export const sizes: Size[] = [null, ...getNumbersFromOneUpTo(maxHouseholdSize)]

export const scenarios: Scenario[] = [
  { income: 600, size: 1, translateKey: 'scenarios.teacherAlone' },
  { income: 1200, size: 2, translateKey: 'scenarios.workingInEducationCouple' },
  { income: 1600, size: 5, translateKey: 'scenarios.averageFamily3Kids' },
  { income: 450, size: 2, translateKey: 'scenarios.singleMomGroceryStore1Kid' },
  { income: 350, size: 1, translateKey: 'scenarios.retiredFirefighter' },
]

export const getAllScenarios = (): ScenarioParameterOnly[] => {
  const { incomes: _incomes, sizes: _sizes } = mergeParameters({
    incomes,
    sizes,
    scenarios,
  })
  const _scenarios: ScenarioParameterOnly[] = []

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
