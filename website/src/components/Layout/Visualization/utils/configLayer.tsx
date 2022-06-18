import { LayerProps } from 'react-map-gl'

import { LayerColor } from '../../../../types/Map'
import { VisualizationConfig } from '../../../../types/Vizsualization'

export const hoverDataFeatureKey = 'mag'

export const getLayerProps: GetLayerProps = ({ color, featureKey }) => {
  return {
    ...baseDefault,
    type: 'circle',
    filter: ['has', featureKey],
    paint: {
      ...paintDefault,
      'circle-color': color,
      'circle-radius': [
        'interpolate',
        ['exponential', squareRootToExponentialFactor],
        ['get', featureKey],
        domainStart,
        rangeStart,
        domainEnd,
        rangeEnd,
      ],
    },
  }
}

type GetLayerPropsProps = {
  color: LayerColor
  featureKey: string
}

type GetLayerProps = (props: GetLayerPropsProps) => LayerProps

const squareRootToExponentialFactor = 0.5
const domainStart = 1
const rangeStart = 1
const domainEnd = 8
const rangeEnd = 40

const baseDefault = {
  id: 'data',
  source: 'data',
}

const paintDefault: mapboxgl.CirclePaint = {
  'circle-opacity': 0.3,
}

export const layerPropsDefault = getLayerProps({
  color: 'red',
  featureKey: hoverDataFeatureKey,
})

export const getLayersPropsFromConfig = (
  config: VisualizationConfig[]
): LayerProps[] => {
  return config.map(({ color, featureKey }) =>
    getLayerProps({ color, featureKey })
  )
}
