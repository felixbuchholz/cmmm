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
  const json = JSON.stringify(summaryStats, null, jsonIndent)

  fs.writeFileSync(filePath, json)
}

const jsonIndent = 2
