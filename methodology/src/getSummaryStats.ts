import { consolidateLatLong } from './consolidateLatLong'
import { countIncrements } from './countIncrements'
import { getIncrements } from './getIncrements'
import { Offer } from './types/offer'
import { SummaryStat } from './types/summary'

export const getSummaryStats = (
  offers: Offer[],
  thresholds: { price: number; size: number }
): SummaryStat[] => {
  const summaryStats: SummaryStat[] = []
  for (const offer of offers) {
    const increments = getIncrements(offer, thresholds)
    countIncrements(summaryStats, offer, increments)
    consolidateLatLong(summaryStats, offer)
  }
  return summaryStats
}
