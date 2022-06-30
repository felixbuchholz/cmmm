import { FC } from 'react'
import Map from 'react-map-gl'

import { MapLayerConfig } from '../../../types/Vizsualization'

import { MapLayer } from './MapLayer'
import { MapSource } from './MapSource'

export const MapContainer: FC<MapContainerProps> = ({
  mapProps,
  layerProps,
}) => {
  return (
    <Map {...mapProps}>
      <MapSource>
        <MapLayer {...layerProps} />
      </MapSource>
    </Map>
  )
}

type MapProps = React.ComponentProps<typeof Map>
type MapContainerProps = {
  mapProps: MapProps
  layerProps: MapLayerConfig
}
