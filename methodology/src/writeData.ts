import * as fs from 'fs'

import { getPathFromParameters } from './getPathFromParameters'
import { Category, Scenario } from './types/scenario'
import { SummaryStat } from './types/summary'

export const writeData = (
  category: Category,
  { size, income }: Scenario,
  summaryStats: SummaryStat[]
): void => {
  const filePath = getPathFromParameters(category, size, income)
  writeJSON(filePath, summaryStats)
}

export const writeJSON = (filePath: string, variable: unknown): void => {
  const json = JSON.stringify(variable, null, jsonIndent)
  fs.writeFileSync(filePath, json)
}

const jsonIndent = 2
