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
        ['linear'],
        ['sqrt', ['get', featurePropertiesKey]],
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

const domainStart = 0
const rangeStart = 5
const domainEnd = 500
const rangeEnd = 1000

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
