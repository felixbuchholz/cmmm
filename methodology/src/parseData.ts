import GeoJSON from 'geojson'

import { allScenarios } from './allScenarios'
import { getSummaryStats } from './getSummaryStats'
import { getThresholds } from './getThresholds'
import { Offer } from './types/offer'
import { CallbackData } from './types/readData'
import { writeData } from './writeData'

export const offerSizeKey: keyof Offer = 'size'
export const offerPriceKey: keyof Offer = 'price'
export const offerNameKey: keyof Offer = 'location D'
// MUST BE UNIQUE
export const offerGroupKey: keyof Offer = 'latlong'

export const parseData: CallbackData = (offers, category) => {
  for (const scenario of allScenarios) {
    const thresholds = getThresholds(scenario, category)
    const summaryStats = getSummaryStats(offers, thresholds)
    const geojson = GeoJSON.parse(summaryStats, { Point: ['lat', 'long'] })
    writeData(category, scenario, geojson)
  }
}
