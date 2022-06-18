import { ViewState } from 'react-map-gl'

import { mapboxAccessToken } from '../../../../utils/environment'

const defaultsToZero = 0

const longitude = -100
const latitude = 40
const zoom = 3.5
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
}
