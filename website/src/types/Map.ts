import {
  MapboxGeoJSONFeature,
  ViewState,
  ViewStateChangeEvent,
} from 'react-map-gl'

export type MapViewState = ViewState & { width: number; height: number }

export type MapInitialViewState = Partial<ViewState> & {
  bounds?: mapboxgl.LngLatBoundsLike
  fitBoundsOptions?: mapboxgl.FitBoundsOptions
}
export type ViewStateChangeHandler = (e: ViewStateChangeEvent) => void

export type MapLayerMouseEvent = mapboxgl.MapMouseEvent & {
  features?: MapboxGeoJSONFeature[]
}
export type MapLayerMouseEventHandler = (e: mapboxgl.MapLayerMouseEvent) => void

export type MapPropsSynced = {
  viewState: MapViewState
  onMoveStart: ViewStateChangeHandler
  onMove: ViewStateChangeHandler
}

export type LayerColor = string | mapboxgl.StyleFunction | mapboxgl.Expression
