import { useState, useCallback } from 'react'

import { MapViewState, ViewStateChangeHandler } from '../../../../types/Map'
import { initialForViewState } from '../utils/configMap'

export const useSyncMove: UseSyncMove = ids => {
  const [viewState, setViewState] = useState<MapViewState>(initialForViewState)
  const [activeMap, setActiveMap] = useState<typeof ids[number]>(ids[initIndex])

  const onMoveCallback = useCallback(evt => setViewState(evt.viewState), [])
  const onMove = ids.map(it => activeMap === it && onMoveCallback)
  const onMoveStart = ids.map(it => (): void => setActiveMap(it))

  return { viewState, onMove, onMoveStart }
}
const initIndex = 0

export type UseSyncMoveReturn = {
  viewState: MapViewState
  onMove: ViewStateChangeHandler[]
  onMoveStart: ViewStateChangeHandler[]
}
type UseSyncMove = (ids: string[]) => UseSyncMoveReturn
