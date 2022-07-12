import { FC } from 'react'
import Map from 'react-map-gl'

import { MapLayersConfig } from '../../../types/Vizsualization'

import { MapLayers } from './MapLayers'
import { MapSource } from './MapSource'

export const MapContainer: FC<MapContainerProps> = ({
  mapProps,
  layerProps,
}) => {
  return (
    <Map {...mapProps}>
      <MapSource>
        <MapLayers {...layerProps} />
      </MapSource>
    </Map>
  )
}

type MapProps = React.ComponentProps<typeof Map>
type MapContainerProps = {
  mapProps: MapProps
  layerProps: MapLayersConfig
}
