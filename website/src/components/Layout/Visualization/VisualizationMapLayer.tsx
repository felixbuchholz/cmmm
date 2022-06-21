import React, { FC } from 'react'
import { Layer } from 'react-map-gl'

import { VisualizationMapLayerConfig } from '../../../types/Vizsualization'

import { getLayersPropsFromConfig } from './utils/configLayer'

export const VisualizationMapLayer: FC<VisualizationMapLayerConfig> = ({
  color,
  featurePropertiesKey: featureKey,
}) => {
  const layerProps = getLayersPropsFromConfig({
    color,
    featurePropertiesKey: featureKey,
  })
  return <Layer {...layerProps} />
}
