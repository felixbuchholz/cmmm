/* eslint-disable no-magic-numbers */
import { getIncomesFromRangeDefinitions } from './getIncomesFromRangeAndIntervall'
import { getNumbersFromOneUpTo } from './getNumbersUpTo'
import { MergeParameters } from './types/mergeParameters'
import { Income, Size, Scenario } from './types/scenario'
import { writeJSON } from './writeData'

export const incomeRangesAndIntervals = [
  { rangeStart: 200, rangeEnd: 2000, interval: 50 },
  { rangeStart: 2000, rangeEnd: 4000, interval: 100 },
  { rangeStart: 4000, rangeEnd: 8000, interval: 200 },
]

const incomes: Income[] = [
  null,
  ...getIncomesFromRangeDefinitions(incomeRangesAndIntervals),
]

writeJSON('../website/src/state/selection/incomes.json', incomes)

const sizes: Size[] = [null, ...getNumbersFromOneUpTo(6)]
writeJSON('../website/src/state/selection/sizes.json', sizes)

const scenarios: Scenario[] = [
  { income: 600, size: 1 }, // Teacher living alone
  { income: 1200, size: 2 }, // Couple working in education with no kids
  { income: 1600, size: 5 }, // Couple with average salary and 3 kids
  { income: 450, size: 2 }, // Single mother with a kid working in a local grocery store
  { income: 350, size: 1 }, // Retired firefighter
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
