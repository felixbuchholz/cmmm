import { Coordinates } from '../../../../types/HoverInfo'
import { MapLayerMouseEvent } from '../../../../types/Map'

export const getXY = (event: MapLayerMouseEvent): Coordinates => {
  const {
    point: { x, y },
  } = event
  return { x, y }
}
