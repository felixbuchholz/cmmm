import { ViewState } from 'react-map-gl'

import { mapboxAccessToken } from '../../../../utils/environment'

const defaultsToZero = 0

const longitude = 20.457273
const latitude = 44.787197
const swLong = 20.3
const swLat = 44.65
const neLong = 20.68
const neLat = 44.92
const maxBounds: [number, number, number, number] = [
  swLong,
  swLat,
  neLong,
  neLat,
]
const zoom = 11
const minZoom = 8
const maxZoom = 14
const height = 500
const width = 500
const interactiveLayerId = 'data'
const mapStyle = 'mapbox://styles/mapbox/streets-v9'

export const initialViewState: ViewState = {
  longitude,
  latitude,
  zoom,
  pitch: defaultsToZero,
  bearing: defaultsToZero,
  padding: {
    bottom: defaultsToZero,
    left: defaultsToZero,
    top: defaultsToZero,
    right: defaultsToZero,
  },
}

const initialDimensions = {
  height,
  width,
}

export const initialForViewState = {
  ...initialViewState,
  ...initialDimensions,
}

export const defaultsMap = {
  initialViewState,
  interactiveLayerIds: [interactiveLayerId],
  mapStyle,
  mapboxAccessToken,
  minZoom,
  maxZoom,
  maxBounds,
}
