import { CirclePaint } from 'mapbox-gl'
import { ReactNode } from 'react'

import { LayerColor, MapPropsSynced } from './Map'

// TODO: narrow to keyof feature.properties :)
export type FeaturePropertiesKey = 'total' | 'suitable' | 'affordable'

export type MapLayerConfig = {
  featurePropertiesKey: FeaturePropertiesKey
  color: LayerColor
  colorOpacity: CirclePaint['circle-opacity']
}

export type VisualizationConfig = {
  id: string
} & MapLayerConfig

export type VisualizationProps = {
  config: VisualizationConfig
  mapProps: MapPropsSynced
  tooltip: ReactNode
}

export type UseVisualizationSync = (
  props: VisualizationConfig[]
) => Omit<VisualizationProps, 'tooltip'>[]