import { useState, useCallback, useMemo } from 'react'

import { MapViewState, ViewStateChangeHandler } from '../../../../types/Map'
import { initialForViewState } from '../utils/configMap'

export const useSyncMove: UseSyncMove = ids => {
  const [viewState, setViewState] = useState<MapViewState>(initialForViewState)
  const [activeMap, setActiveMap] = useState<typeof ids[number]>(ids[initIndex])

  const onMoveCallback = useCallback(evt => setViewState(evt.viewState), [])
  const onMove = useMemo(
    () => ids.map(it => activeMap === it && onMoveCallback),
    [activeMap, ids, onMoveCallback]
  )
  const onMoveStart = useMemo(
    () => ids.map(it => (): void => setActiveMap(it)),
    [ids]
  )

  return { viewState, onMove, onMoveStart }
}
const initIndex = 0

export type UseSyncMoveReturn = {
  viewState: MapViewState
  onMove: ViewStateChangeHandler[]
  onMoveStart: ViewStateChangeHandler[]
}
type UseSyncMove = (ids: string[]) => UseSyncMoveReturn
