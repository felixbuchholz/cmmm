export type ControlledViewState = ViewState & { width: number; height: number }
export type ControlledInitialViewState = Partial<ViewState> & {
  bounds?: mapboxgl.LngLatBoundsLike
  fitBoundsOptions?: mapboxgl.FitBoundsOptions
}
export type ControlledViewStateChangeHandler = (e: ViewStateChangeEvent) => void

export type ControlledSyncedMapProps = {
  viewState: ControlledViewState
  onMoveStart: ControlledViewStateChangeHandler
  onMove: ControlledViewStateChangeHandler
}
