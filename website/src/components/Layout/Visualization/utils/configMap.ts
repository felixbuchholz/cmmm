import { ViewState } from 'react-map-gl'

import { mapboxAccessToken } from '../../../../utils/environment'

const defaultsToZero = 0

const longitude = 20.457273
const latitude = 44.787197
const swLong = 20.23
const swLat = 44.6
const neLong = 20.68
const neLat = 45
const maxBounds: [number, number, number, number] = [
  swLong,
  swLat,
  neLong,
  neLat,
]
const zoom = 11
const minZoom = 7
const maxZoom = 14
const height = 500
const width = 500
const interactiveLayerId = 'data'
const mapStyle = 'mapbox://styles/cmmm/cl0tpnok2000215o0jm9e2w8g'

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

export const red = { color: '#d24f40', colorOpacity: 0.35 }
export const green = { color: '#008b4a', colorOpacity: 0.4 }
