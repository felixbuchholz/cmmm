export const headers = ['title', 'price', 'size', 'lat', 'long'] as const

export type Header = typeof headers[number]

export interface Offer
  extends Record<Header, string | number | [number, number]> {
  title: string
  price: number
  size: number
  lat: number
  long: number
  latlong: string
}

export const headersCastAsDENumbers = ['price', 'size']
export const headersCastAsDefaultNumbers = ['lat', 'long']
