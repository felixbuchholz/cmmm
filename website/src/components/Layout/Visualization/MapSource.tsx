import React from 'react'
import { Source } from 'react-map-gl'

import { useSelectionContext } from '../../../state/selection/hooks'
import { FCC } from '../../../types/FCC'

export const MapSource: FCC = ({ children }) => {
  const [data] = useSelectionContext(['data'])

  return (
    <Source id="data" type="geojson" data={data}>
      {children}
    </Source>
  )
}
