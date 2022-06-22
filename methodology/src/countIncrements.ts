import { applyIncrements } from './applyIncrements'
import { offerGroupKey, offerNameKey } from './parseData'
import { Offer } from './types/offer'
import { SummaryStat, SummaryStatCounts } from './types/summary'

export const countIncrements = (
  summaryStats: SummaryStat[],
  offer: Offer,
  increments: SummaryStatCounts
): void => {
  const group = offer[offerGroupKey] as string
  const name = offer[offerNameKey] as string
  const foundIndex = summaryStats.findIndex(it => it.group === group)
  if (foundIndex === noIndexFound) {
    summaryStats.push({
      group,
      name,
      ...increments,
    })
  } else {
    applyIncrements(summaryStats[foundIndex], increments)
  }
}

const noIndexFound = -1
