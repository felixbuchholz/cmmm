import { useMemo, useState } from 'react'

import { HoverInfo } from '../../../../types/HoverInfo'
import { MapLayerMouseEventHandler } from '../../../../types/Map'
import { getHoverInfo } from '../utils/getHoverInfo'

export const useHoverInfo: UseHoverInfo = (keys: string[]) => {
  const [hoverInfo, setHoverInfo] = useState<HoverInfo[]>(null)
  const onMouseMove = useMemo(() => {
    return keys.map(() => {
      return (event: mapboxgl.MapLayerMouseEvent): void => {
        setHoverInfo(getHoverInfo(event, keys))
      }
    })
  }, [keys])

  return { hoverInfo, onMouseMove }
}

export type UseHoverInfoReturn = {
  hoverInfo: HoverInfo[]
  onMouseMove: MapLayerMouseEventHandler[]
}
type UseHoverInfo = (keys: string[]) => UseHoverInfoReturn
