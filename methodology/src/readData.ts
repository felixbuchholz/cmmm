import * as fs from 'fs'
import * as path from 'path'

import { CastingFunction, parse } from 'csv-parse'

import { Offer, headersCastAsNumbers } from './types/offer'
import { ReadData } from './types/readData'
import { CategoryConfig } from './types/scenario'

const delimiter = ';'
const defaultConfig: CategoryConfig = {
  category: 'rent',
  dataPathRelative: '../data/buy.csv',
}
export const readData: ReadData = (
  callback,
  categoryConfig = defaultConfig
): void => {
  const { category, dataPathRelative } = categoryConfig
  const csvFilePath = path.resolve(__dirname, dataPathRelative)
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

  parse(
    fileContent,
    {
      delimiter,
      columns: true,
      cast,
    },
    (error, result: Offer[]) => {
      if (error) {
        console.error(error)
      }

      const data = addLatLongColumn(result)
      callback(data, category)
    }
  )
}

const cast: CastingFunction = (columnValue, { column }) => {
  const columnName = column as string

  if (headersCastAsNumbers.includes(columnName)) {
    return +columnValue
  }

  if (typeof columnValue === 'string') {
    return columnValue.trim()
  }

  return columnValue
}

function addLatLongColumn (offers: Offer[]): Offer[] {
  return offers.map(it => ({ ...it, latlong: `${it.lat},${it.long}` }))
}
