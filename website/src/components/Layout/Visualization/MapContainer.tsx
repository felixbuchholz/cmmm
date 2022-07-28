import { FC } from 'react'
import Map from 'react-map-gl'

import { MapLayersConfig } from '../../../types/Vizsualization'

import { MapAlertBarContainer } from './MapAlertBar'
import { MapLayers } from './MapLayers'
import { MapSource } from './MapSource'
import styles from './visualization.module.css'

export const MapContainer: FC<MapContainerProps> = ({
  id,
  mapProps,
  layerProps,
}) => {
  return (
    <div className={styles.mapContainer}>
      <Map {...mapProps}>
        <MapSource>
          <MapLayers {...layerProps} />
        </MapSource>
      </Map>
      <MapAlertBarContainer id={id} />
    </div>
  )
}

type MapProps = React.ComponentProps<typeof Map>
type MapContainerProps = {
  id: string
  mapProps: MapProps
  layerProps: MapLayersConfig
}
