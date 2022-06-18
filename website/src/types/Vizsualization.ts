import { LayerProps } from 'react-map-gl'

import { HoverInfo } from './HoverInfo'
import { LayerColor, MapPropsSynced } from './Map'

export type VisualizationConfig = {
  id: string
  // TODO: narrow to keyof feature.properties :)
  featureKey: string
  color: LayerColor
}

export type VisualizationProps = {
  id: string
  mapProps: MapPropsSynced
  layerProps: LayerProps
  hoverInfo: HoverInfo
}

export type UseVisualizationSync = (
  props: VisualizationConfig[]
) => VisualizationProps[]
