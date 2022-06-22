import { applyIncrements } from './applyIncrements'
import { consolidateLatLong } from './consolidateLatLong'
import { countIncrements as applyIncrementsGrouped } from './countIncrements'
import { getIncrements } from './getIncrements'
import {
  GetSummaryStats,
  SummaryStat,
  SummaryStatCounts,
} from './types/summary'

export const getSummaryStats: GetSummaryStats = (offers, thresholds) => {
  const totals: SummaryStatCounts = { ...totalsInitial }
  const groups: SummaryStat[] = []
  for (const offer of offers) {
    const increments = getIncrements(offer, thresholds)
    applyIncrements(totals, increments)
    applyIncrementsGrouped(groups, offer, increments)
    consolidateLatLong(groups, offer)
  }
  return { groups, totals }
}

const totalsInitial = { total: 0, suitable: 0, affordable: 0 }
