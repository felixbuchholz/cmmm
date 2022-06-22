/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { offerGroupKey } from './parseData'
import { Offer } from './types/offer'
import { SummaryStat } from './types/summary'

export const consolidateLatLong = (
  groups: SummaryStat[],
  offer: Offer
): void => {
  const group = offer[offerGroupKey]
  const summaryStat = groups.find(it => it.group === group)
  const offerLat = offer.lat
  const offerLong = offer.long
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
