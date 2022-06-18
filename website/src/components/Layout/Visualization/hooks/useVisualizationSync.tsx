import { LayerProps } from 'react-map-gl'

import {
  UseVisualizationSync,
  VisualizationConfig,
  VisualizationProps,
} from '../../../../types/Vizsualization'
import { getLayersPropsFromConfig } from '../utils/configLayer'
import { defaultsMap } from '../utils/configMap'

import { useHoverInfo, UseHoverInfoReturn } from './useHoverInfo'
import { useSyncMove, UseSyncMoveReturn } from './useSyncMove'

export const useVisualizationSync: UseVisualizationSync = config => {
  const ids = getFromConfig(config, 'id')
  const keys = getFromConfig(config, 'featureKey')
  const syncMoveReturn = useSyncMove(ids)
  const hoverInfoReturn = useHoverInfo(keys)
  const layerProps = getLayersPropsFromConfig(config)

  return mapIdsToVisualization({
    ids,
    ...syncMoveReturn,
    ...hoverInfoReturn,
    layerProps,
  })
}

const getFromConfig = <T extends keyof VisualizationConfig>(
  config: VisualizationConfig[],
  key: T
): VisualizationConfig[T][] => {
  return config.map(it => it[key])
}

const mapIdsToVisualization: MapIdsToVisualization = ({
  ids,
  viewState,
  onMove,
  onMoveStart,
  onMouseMove,
  hoverInfo,
  layerProps,
}) => {
  return ids.map((it, index) => ({
    id: it,
    mapProps: {
      ...defaultsMap,
      viewState,
      onMove: onMove[index],
      onMoveStart: onMoveStart[index],
      onMouseMove: onMouseMove[index],
    },
    hoverInfo: Array.isArray(hoverInfo) ? hoverInfo[index] : null,
    layerProps: layerProps[index],
  }))
}

type MapIdsToVisualizationProps = {
  ids: string[]
} & UseSyncMoveReturn &
  UseHoverInfoReturn & { layerProps: LayerProps[] }

type MapIdsToVisualization = (
  props: MapIdsToVisualizationProps
) => VisualizationProps[]

// TODO: Figure out way to memoize onMoveStart functions
// see: https://github.com/visgl/react-map-gl/blob/7.0-release/examples/side-by-side/src/app.tsx
