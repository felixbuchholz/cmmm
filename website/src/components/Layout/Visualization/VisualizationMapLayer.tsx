import React, { FC } from 'react'
import { Layer } from 'react-map-gl'

import { VisualizationMapLayerConfig } from '../../../types/Vizsualization'

import { getLayersPropsFromConfig } from './utils/configLayer'

export const VisualizationMapLayer: FC<VisualizationMapLayerConfig> = ({
  color,
  featureKey,
}) => {
  const layerProps = getLayersPropsFromConfig({ color, featureKey })
  return <Layer {...layerProps} />
}
