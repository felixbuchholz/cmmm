import React, { FC } from 'react'
import Map from 'react-map-gl'

import { ControlledSyncedMapProps } from '../../../types/ControlledSyncedMap'
import { VisualizationProps } from '../../../types/Vizsualization'
import { mapboxAccessToken } from '../../../utils/environment'

export const Visualization: FC<VisualizationProps> = ({ mapProps }) => {
  return (
    <section>
      <ControlledSyncedMap {...mapProps} />
    </section>
  )
}

export const ControlledSyncedMap: FC<ControlledSyncedMapProps> = props => {
  const mapProps = { ...defaults, ...props }
  return <Map {...mapProps} />
}

export const defaults = {
  initialViewState: {
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  },
  mapStyle: 'mapbox://styles/mapbox/streets-v9',
  mapboxAccessToken,
  style: { width: '100%', height: '100%' },
}
