import GeoJSON from 'geojson'

import { allScenarios } from './allScenarios'
import { getSummaryStats } from './getSummaryStats'
import { getThresholds } from './getThresholds'
import { Offer } from './types/offer'
import { CallbackData } from './types/readData'
import { writeData } from './writeData'

export const offerSizeKey: keyof Offer = 'Qm2'
export const offerPriceKey: keyof Offer = 'Price'
// MUST BE UNIQUE
export const groupingKey: keyof Offer = 'Municipali'

export const parseData: CallbackData = (offers, category) => {
  for (const scenario of allScenarios) {
    const thresholds = getThresholds(scenario, category)
    const summaryStats = getSummaryStats(offers, thresholds)
    const geojson = GeoJSON.parse(summaryStats, { Point: ['lat', 'long'] })
    writeData(category, scenario, geojson)
  }
}
