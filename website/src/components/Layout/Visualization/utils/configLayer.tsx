import { LayerProps } from 'react-map-gl'

import { LayerColor } from '../../../../types/Map'
import { VisualizationMapLayerConfig } from '../../../../types/Vizsualization'

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
const domainStart = 0
const rangeStart = 3
const domainEnd = 3
const rangeEnd = 15

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

export const getLayersPropsFromConfig = ({
  color,
  featureKey,
}: VisualizationMapLayerConfig): LayerProps => {
  return getLayerProps({ color, featureKey })
}
