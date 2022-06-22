import * as fs from 'fs'
import * as path from 'path'

import { CastingFunction, parse } from 'csv-parse'

import {
  Offer,
  headersCastAsNumbers,
  headersCastAsArrayNumbers,
} from './types/offer'
import { ReadData } from './types/readData'
import { CategoryConfig } from './types/scenario'

const delimiter = ','
const defaultConfig: CategoryConfig = {
  category: 'rent',
  dataPathRelative: '../data/geocoded_sampledata_a.csv',
}
export const latIndex = 0
export const longIndex = 1

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

      callback(result, category)
    }
  )
}

const cast: CastingFunction = (columnValue, { column }) => {
  const columnName = column as string

  if (headersCastAsNumbers.includes(columnName)) {
    return +columnValue
  }

  if (headersCastAsArrayNumbers.includes(columnName)) {
    return getLatLongArray(columnValue)
  }

  return columnValue
}

export const getLatLongArray = (columnValue: string): Offer['latlong'] => {
  const split = columnValue.split(',').map(it => +it.trim())
  return [split[latIndex], split[longIndex]]
}
