import { useState, useCallback } from 'react'

import { ControlledViewState } from '../../../../types/ControlledSyncedMap'
import { UseVisualizationSync } from '../../../../types/Vizsualization'
import { defaults } from '../Visualization'

export const useVisualizationSync: UseVisualizationSync = config => {
  const mapIDs = config.map(it => it.id)
  const [viewState, setViewState] = useState<ControlledViewState>(
    defaultViewState
  )
  const [activeMap, setActiveMap] = useState<typeof mapIDs[number]>(
    mapIDs[defaultActiveMapIndex]
  )

  const onMoveCallback = useCallback(evt => setViewState(evt.viewState), [])
  const onMove = mapIDs.map(it => activeMap === it && onMoveCallback)

  // TODO: Figure out way to memoize onMoveStart functions
  // see: https://github.com/visgl/react-map-gl/blob/7.0-release/examples/side-by-side/src/app.tsx
  const onMoveStart = mapIDs.map(it => (): void => setActiveMap(it))

  return mapIDs.map((it, index) => ({
    id: it,
    mapProps: {
      viewState,
      onMove: onMove[index],
      onMoveStart: onMoveStart[index],
    },
  }))
}

const {
  initialViewState: { longitude, latitude, zoom },
} = defaults

const defaultViewState = { longitude, latitude, zoom }

const defaultActiveMapIndex = 0
