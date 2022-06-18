import { HoverInfo } from '../../../../types/HoverInfo'

import { getHoverData } from './getHoverData'
import { getXY } from './getXY'

export const getHoverInfo = (
  event: mapboxgl.MapLayerMouseEvent,
  keys: string[]
): HoverInfo[] => {
  const { x, y } = getXY(event)
  const data = getHoverData(event, keys)

  if (!data) {
    return null
  }

  return data.map(it => ({ x, y, data: it }))
}
