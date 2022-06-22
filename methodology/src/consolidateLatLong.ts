/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { groupingKey } from './parseData'
import { latIndex, longIndex } from './readData'
import { Offer } from './types/offer'
import { SummaryStat } from './types/summary'

export const consolidateLatLong = (
  summaryStats: SummaryStat[],
  offer: Offer
): void => {
  const name = offer[groupingKey]
  const summaryStat = summaryStats.find(it => it.name === name)
  const offerLat = offer.latlong[latIndex]
  const offerLong = offer.latlong[longIndex]
  const hasBothOfferCoordinates =
    typeof offerLat === 'number' && typeof offerLong === 'number'

  if (!(summaryStat && hasBothOfferCoordinates)) {
    return undefined
  }

  const hasBothSummaryCoordinates =
    typeof summaryStat.lat === 'number' && typeof summaryStat.long === 'number'

  if (hasBothSummaryCoordinates) {
    return undefined
  }

  summaryStat.lat = offerLat
  summaryStat.long = offerLong
}
