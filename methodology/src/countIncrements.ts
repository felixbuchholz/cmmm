import { applyIncrements } from './applyIncrements'
import { offerGroupKey, offerNameKey } from './parseData'
import { Offer } from './types/offer'
import { SummaryStat, SummaryStatCounts } from './types/summary'

export const countIncrements = (
  groups: SummaryStat[],
  offer: Offer,
  increments: SummaryStatCounts
): void => {
  const group = offer[offerGroupKey] as string
  const foundIndex = groups.findIndex(it => it.group === group)

  if (foundIndex === noIndexFound) {
    const name = offer[offerNameKey] as string
    groups.push({
      group,
      name,
      ...increments,
    })
  } else {
    applyIncrements(groups[foundIndex], increments)
  }
}

const noIndexFound = -1
