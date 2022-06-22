export type SummaryStatCounts = {
  total: number
  suitable: number
  affordable: number
}

export type SummaryStat = {
  name: string
  lat?: number
  long?: number
} & SummaryStatCounts
