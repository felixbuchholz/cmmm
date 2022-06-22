import { Offer } from './offer'

export type SummaryStatCounts = {
  total: number
  suitable: number
  affordable: number
}

export type SummaryStat = {
  name: string
  group: string
  lat?: number
  long?: number
} & SummaryStatCounts

export type GetSummaryStats = (
  offers: Offer[],
  thresholds: { price: number; size: number }
) => { groups: SummaryStat[]; totals: SummaryStatCounts }
