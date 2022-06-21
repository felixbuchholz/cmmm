import { ReactNode } from 'react'

import { LayerColor, MapPropsSynced } from './Map'

// TODO: narrow to keyof feature.properties :)
export type FeaturePropertiesKey = string

export type VisualizationMapLayerConfig = {
  featurePropertiesKey: FeaturePropertiesKey
  color: LayerColor
}

export type VisualizationConfig = {
  id: string
} & VisualizationMapLayerConfig

export type VisualizationProps = {
  config: VisualizationConfig
  mapProps: MapPropsSynced
  tooltip: ReactNode
}

export type UseVisualizationSync = (
  props: VisualizationConfig[]
) => Omit<VisualizationProps, 'tooltip'>[]
