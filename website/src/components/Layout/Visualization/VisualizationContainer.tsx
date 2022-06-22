/* eslint-disable max-lines-per-function */
import 'mapbox-gl/dist/mapbox-gl.css'
import { FC } from 'react'
import Map from 'react-map-gl'

import { useHoverStore } from '../../../state/store/hover'
import { VisualizationConfig } from '../../../types/Vizsualization'

import { useSyncMove } from './hooks/useSyncMove'
import { TooltipHover } from './Tooltip'
import { defaultsMap } from './utils/configMap'
import { getFromConfig } from './utils/configVisualization'
import styles from './visualization.module.css'
import { VisualizationCount } from './VisualizationCount'
import { VisualizationMapLayer } from './VisualizationMapLayer'
import { VisualizationMapSource } from './VisualizationMapSource'
import { VisualizationSquareChart } from './VisualizationSquareChart'

const visualizationConfigs: VisualizationConfig[] = [
  { id: 'reference', featurePropertiesKey: 'suitable', color: 'red' },
  { id: 'comparison', featurePropertiesKey: 'affordable', color: 'green' },
]

const ids = getFromConfig(visualizationConfigs, 'id')

export const VisualizationContainer: FC = () => {
  const { viewState, onMove, onMoveStart } = useSyncMove(ids)
  const onMouseMove = useHoverStore(state => state.updateEvent)

  return (
    <main className={styles.container}>
      {visualizationConfigs.map(
        ({ id, color, featurePropertiesKey }, index) => {
          const mapProps = {
            ...defaultsMap,
            ...viewState,
            onMouseMove,
            onMove: onMove[index],
            onMoveStart: onMoveStart[index],
          }
          return (
            <section key={id}>
              <div className={styles.map}>
                <Map {...mapProps}>
                  <VisualizationMapSource>
                    <VisualizationMapLayer
                      color={color}
                      featurePropertiesKey={featurePropertiesKey}
                    />
                  </VisualizationMapSource>
                </Map>
                <TooltipHover featurePropertiesKey={featurePropertiesKey} />
              </div>
              <div className={styles.info}>
                <VisualizationSquareChart
                  featurePropertiesKey={featurePropertiesKey}
                />
                <VisualizationCount
                  featurePropertiesKey={featurePropertiesKey}
                />
              </div>
            </section>
          )
        }
      )}
    </main>
  )
}
