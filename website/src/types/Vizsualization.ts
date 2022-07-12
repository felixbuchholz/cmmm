import { CirclePaint } from 'mapbox-gl'
import { ReactNode } from 'react'

import { LayerColor, MapPropsSynced } from './Map'

// TODO: narrow to keyof feature.properties :)
export type FeaturePropertiesKey = 'total' | 'suitable' | 'affordable'

export type MapLayersConfig = Omit<MapLayerConfig, 'strokeOpacity'>

export type MapLayerConfig = {
  id?: string
  featurePropertiesKey: FeaturePropertiesKey
  color: LayerColor
  colorOpacity: CirclePaint['circle-opacity']
  strokeOpacity: CirclePaint['circle-stroke-opacity']
}

export type VisualizationConfig = {
  id: string
} & MapLayersConfig

export type VisualizationProps = {
  config: VisualizationConfig
  mapProps: MapPropsSynced
  tooltip: ReactNode
}

export type UseVisualizationSync = (
  props: VisualizationConfig[]
) => Omit<VisualizationProps, 'tooltip'>[]
