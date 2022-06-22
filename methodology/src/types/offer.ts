export const headers = [
  'Country',
  'City',
  'Municipali',
  'District',
  'Street',
  'Price',
  'Qm2',
  'struktura',
  'result_num',
  'osm_id',
  'display_na',
  'category',
  'type',
  'latlong',
  'label',
  'label_1',
  'label_2',
] as const

export type Header = typeof headers[number]

export interface Offer
  extends Record<Header, string | number | [number, number]> {
  Country: string
  City: string
  Municipali: string
  District: string
  Street: string
  Price: number
  Qm2: number
  struktura: string
  result_num: string
  osm_id: string
  display_na: string
  category: string
  type: string
  latlong: [number, number]
  label: string
  label_1: string
  label_2: string
}

export const headersCastAsNumbers = ['Price', 'Qm2']
export const headersCastAsArrayNumbers = ['latlong']
