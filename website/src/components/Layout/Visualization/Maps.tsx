/* eslint-disable max-lines-per-function */
import { FC } from 'react'

import { useHoverStore } from '../../../state/store/hover'

import { useSyncMove } from './hooks/useSyncMove'
import { MapContainer } from './MapContainer'
import { TooltipHover } from './Tooltip'
import { defaultsMap } from './utils/configMap'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ids, visualizationConfigs } from './utils/configVisualization'
import styles from './visualization.module.css'

export const Maps: FC = () => {
  const { viewState, onMove, onMoveStart } = useSyncMove(ids)
  const onMouseMove = useHoverStore(state => state.updateEvent)

  return (
    <>
      {visualizationConfigs.map(({ id, ...layerProps }, index) => {
        const mapProps = {
          ...defaultsMap,
          ...viewState,
          onMouseMove,
          onMove: onMove[index],
          onMoveStart: onMoveStart[index],
        }
        const mapContainerProps = { id, mapProps, layerProps }
        return (
          <section key={id} className={`${id} ${styles.map}`}>
            <MapContainer {...mapContainerProps} />
            <TooltipHover
              featurePropertiesKey={layerProps.featurePropertiesKey}
            />
          </section>
        )
      })}
    </>
  )
}
