import React, { FC } from 'react'
import { Layer } from 'react-map-gl'

import { VisualizationMapLayerConfig } from '../../../types/Vizsualization'

import { getLayerPropsFromConfig } from './utils/configLayer'

export const VisualizationMapLayer: FC<VisualizationMapLayerConfig> = ({
  color,
  colorOpacity,
  featurePropertiesKey,
}) => {
  const layerProps = getLayerPropsFromConfig({
    color,
    colorOpacity,
    featurePropertiesKey,
  })
  return <Layer {...layerProps} />
}
