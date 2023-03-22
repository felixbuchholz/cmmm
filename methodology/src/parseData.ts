import GeoJSON from 'geojson'

import { allScenarios } from './allScenarios'
import { getSummaryStats } from './getSummaryStats'
import { getThresholds } from './getThresholds'
import { Offer } from './types/offer'
import { CallbackData } from './types/readData'
import { writeData } from './writeData'

export const offerSizeKey: keyof Offer = 'size'
export const offerPriceKey: keyof Offer = 'price'
export const offerNameKey: keyof Offer = 'title'
// MUST BE UNIQUE
export const offerGroupKey: keyof Offer = 'latlong'

export const parseData: CallbackData = (offers, category) => {
  for (const scenario of allScenarios) {
    const thresholds = getThresholds(scenario, category)
    const { groups, totals } = getSummaryStats(offers, thresholds)
    const geojson = GeoJSON.parse(groups, { Point: ['lat', 'long'] })
    const geojsonCustom = { ...geojson }
    geojsonCustom.metadata = totals
    writeData(category, scenario, geojsonCustom)
  }
}
