export type VisualizationProps = {
  mapProps: ControlledSyncedMapProps
}

export type VisualizationConfig = {
  id: string
}

export type UseVisualizationSyncProps = VisualizationConfig[]

export type VisualizationConfigSynced = {
  id: string
  mapProps: ControlledSyncedMapProps
}

export type UseVisualizationSync = (
  props: UseVisualizationSyncProps
) => VisualizationConfigSynced[]
