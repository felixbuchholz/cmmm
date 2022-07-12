import { CirclePaint } from 'mapbox-gl'
import { CircleLayer } from 'react-map-gl'

import {
  FeaturePropertiesKey,
  MapLayerConfig,
} from '../../../../types/Vizsualization'

export const hoverDataFeatureKey = 'mag'

export const getLayerPropsFromConfig: GetLayerProps = ({
  id,
  color,
  colorOpacity,
  strokeOpacity,
  featurePropertiesKey,
}) => {
  return {
    ...baseDefault,
    id,
    type: 'circle',
    filter: ['has', featurePropertiesKey],
    paint: {
      'circle-opacity': colorOpacity,
      'circle-color': color,
      ...paintStrokeDefaults,
      'circle-stroke-opacity': strokeOpacity,
      'circle-radius': getCircleRadius(featurePropertiesKey),
    },
  }
}

type GetLayerPropsProps = MapLayerConfig
type GetLayerProps = (props: GetLayerPropsProps) => CircleLayer

const domainStart = 0
const rangeStart = 0
const domainEnd = 500
const rangeEnd = 2000

const scale = [domainStart, rangeStart, domainEnd, rangeEnd]

const getCircleRadius = (
  featurePropertiesKey: FeaturePropertiesKey
): CirclePaint['circle-radius'] => [
  'interpolate',
  ['linear'],
  ['sqrt', ['get', featurePropertiesKey]],
  ...scale,
]

const baseDefault = {
  id: 'data',
  source: 'data',
}

const paintStrokeDefaults = {
  'circle-stroke-width': 3,
  'circle-stroke-color': '#fff',
  'circle-stroke-opacity': 0,
}
