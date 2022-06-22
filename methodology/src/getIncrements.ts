import { offerSizeKey, offerPriceKey } from './parseData'
import { Thresholds } from './types/getThresholds'
import { Offer } from './types/offer'
import { SummaryStatCounts } from './types/summary'

export const getIncrements = (
  offer: Offer,
  thresholds: Thresholds
): SummaryStatCounts => {
  const total = 1

  const offerSize = offer[offerSizeKey] as number
  const suitable = fitsSize(offerSize, thresholds.size)

  const offerPrice = offer[offerPriceKey] as number
  const affordable = suitable && fitsIncome(offerPrice, thresholds.price)

  return { total, suitable, affordable }
}
const fitsSize = (offer: number, threshold: number | null): number => {
  if (threshold === null) {
    return noIncrement
  }

  return offer >= threshold ? increment : noIncrement
}
const fitsIncome = (offer: number, threshold: number | null): number => {
  if (threshold === null) {
    return noIncrement
  }

  return offer <= threshold ? increment : noIncrement
}

const increment = 1
const noIncrement = 0
