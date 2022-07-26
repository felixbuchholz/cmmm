import * as fs from 'fs'

import { incomes, scenarios, sizes } from './allScenarios'
import { getPathFromParameters } from './getPathFromParameters'
import { Category, ScenarioParameterOnly } from './types/scenario'
import { SummaryStat } from './types/summary'

const jsonIndent = 2

export const writeData = (
  category: Category,
  { size, income }: ScenarioParameterOnly,
  summaryStats: SummaryStat[]
): void => {
  const filePath = getPathFromParameters(category, size, income)
  writeJSON(filePath, summaryStats)
}

export const writeJSON = (filePath: string, variable: unknown): void => {
  const json = JSON.stringify(variable, null, jsonIndent)
  fs.writeFileSync(filePath, json)
}

const excludeInitialNull = 1

writeJSON(
  '../website/src/state/selection/incomes.json',
  incomes.slice(excludeInitialNull)
)

writeJSON(
  '../website/src/state/selection/sizes.json',
  sizes.slice(excludeInitialNull)
)

writeJSON('../website/src/state/selection/scenarios.json', scenarios)
