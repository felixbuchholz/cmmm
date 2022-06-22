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
