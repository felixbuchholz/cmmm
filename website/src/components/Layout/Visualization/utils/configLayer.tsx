import { LayerProps } from 'react-map-gl'

import { MapLayerConfig } from '../../../../types/Vizsualization'

export const hoverDataFeatureKey = 'mag'

export const getLayerPropsFromConfig: GetLayerProps = ({
  color,
  colorOpacity,
  featurePropertiesKey,
}) => {
  return {
    ...baseDefault,
    type: 'circle',
    filter: ['has', featurePropertiesKey],
    paint: {
      'circle-opacity': colorOpacity,
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

type GetLayerPropsProps = MapLayerConfig
type GetLayerProps = (props: GetLayerPropsProps) => LayerProps

const domainStart = 0
const rangeStart = 0
const domainEnd = 500
const rangeEnd = 2000

const baseDefault = {
  id: 'data',
  source: 'data',
}
