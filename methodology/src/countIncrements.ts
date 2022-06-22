import { applyIncrements } from './applyIncrements'
import { groupingKey } from './parseData'
import { Offer } from './types/offer'
import { SummaryStat, SummaryStatCounts } from './types/summary'

export const countIncrements = (
  summaryStats: SummaryStat[],
  offer: Offer,
  increments: SummaryStatCounts
): void => {
  const name = offer[groupingKey] as string
  const foundIndex = summaryStats.findIndex(it => it.name === name)
  if (foundIndex === noIndexFound) {
    summaryStats.push({
      name,
      ...increments,
    })
  } else {
    applyIncrements(summaryStats[foundIndex], increments)
  }
}

const noIndexFound = -1
