import React, { FC } from 'react'
import { Layer } from 'react-map-gl'

import { MapLayerConfig } from '../../../types/Vizsualization'

import { getLayerPropsFromConfig } from './utils/configLayer'

export const MapLayer: FC<MapLayerConfig> = ({
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
