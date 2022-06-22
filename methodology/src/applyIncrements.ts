import { SummaryStat, SummaryStatCounts } from './types/summary'

export const applyIncrements = (
  summaryStat: SummaryStat,
  increments: SummaryStatCounts
): void => {
  let key: keyof SummaryStatCounts
  for (key in increments) {
    summaryStat[key] += increments[key]
  }
}
