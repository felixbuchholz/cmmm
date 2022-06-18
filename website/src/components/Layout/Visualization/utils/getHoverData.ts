import { HoverData } from '../../../../types/HoverInfo'
import { MapLayerMouseEvent } from '../../../../types/Map'

export const getHoverData = (
  event: MapLayerMouseEvent,
  keys: string[]
): HoverData[] => {
  const { features } = event
  const feature = features[selectedFeatureIndex]
  if (!(feature && 'properties' in feature)) {
    return null
  }

  return keys.map(it => {
    if (!(it in feature.properties)) {
      return null
    }

    return feature.properties[it]
  })
}
const selectedFeatureIndex = 0
