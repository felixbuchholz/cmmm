import { LayerProps } from 'react-map-gl'

import { VisualizationMapLayerConfig } from '../../../../types/Vizsualization'

export const hoverDataFeatureKey = 'mag'

export const getLayerProps: GetLayerProps = ({
  color,
  featurePropertiesKey,
}) => {
  return {
    ...baseDefault,
    type: 'circle',
    filter: ['has', featurePropertiesKey],
    paint: {
      ...paintDefault,
      'circle-color': color,
      'circle-radius': [
        'interpolate',
        ['exponential', squareRootToExponentialFactor],
        ['get', featurePropertiesKey],
        domainStart,
        rangeStart,
        domainEnd,
        rangeEnd,
      ],
    },
  }
}

type GetLayerPropsProps = VisualizationMapLayerConfig
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

export const getLayersPropsFromConfig = ({
  color,
  featurePropertiesKey,
}: VisualizationMapLayerConfig): LayerProps => {
  return getLayerProps({ color, featurePropertiesKey })
}
