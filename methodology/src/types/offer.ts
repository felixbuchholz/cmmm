export const headers = [
  'title',
  'price',
  'location A',
  'location B',
  'location C',
  'location D',
  'location E',
  'size',
  'lat',
  'long',
] as const

export type Header = typeof headers[number]

export interface Offer
  extends Record<Header, string | number | [number, number]> {
  'title': string
  'price': number
  'location A': string
  'location B': string
  'location C': string
  'location D': string
  'size': number
  'lat': number
  'long': number
  'latlong': string
}

export const headersCastAsNumbers = ['price', 'size', 'lat', 'long']
