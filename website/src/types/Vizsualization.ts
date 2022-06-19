import { ReactNode } from 'react'

import { LayerColor, MapPropsSynced } from './Map'

export type VisualizationMapLayerConfig = {
  // TODO: narrow to keyof feature.properties :)
  featureKey: string
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
