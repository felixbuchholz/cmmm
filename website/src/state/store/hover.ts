import { MapboxGeoJSONFeature } from 'mapbox-gl'
import create from 'zustand'

import { Coordinates } from '../../types/HoverInfo'

type HoverEvent = mapboxgl.MapLayerMouseEvent

export type HoverState = {
  point: Coordinates
  feature: MapboxGeoJSONFeature
  updateEvent: (next: HoverEvent) => void
}

export const useHoverStore = create<HoverState>(set => ({
  point: { x: 0, y: 0 },
  feature: null,
  updateEvent: (next: HoverEvent) => {
    const { point } = next
    const feature = getFeature(next)

    return set(state => ({ ...state, point, feature }))
  },
}))

const getFeature = (event: HoverEvent): MapboxGeoJSONFeature | undefined => {
  if (!(event.features && event.features.length > selectFirstIndex)) {
    return undefined
  }

  return event.features[selectFirstIndex]
}
const selectFirstIndex = 0
