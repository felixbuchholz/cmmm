/* eslint-disable max-lines-per-function */
import 'mapbox-gl/dist/mapbox-gl.css'
import { FC } from 'react'
import Map from 'react-map-gl'

import { useHoverInfo } from './hooks/useHoverInfo'
import { useSyncMove } from './hooks/useSyncMove'
import { TooltipTranslated } from './Tooltip'
import { defaultsMap } from './utils/configMap'
import { getFromConfig } from './utils/configVisualization'
import styles from './visualization.module.css'
import { VisualizationMapLayer } from './VisualizationMapLayer'
import { VisualizationMapSource } from './VisualizationMapSource'

const visualizationConfigs = [
  { id: 'reference', featureKey: 'mag', color: 'red' },
  { id: 'comparison', featureKey: 'tsunami', color: 'green' },
]

const keys = getFromConfig(visualizationConfigs, 'featureKey')
const ids = getFromConfig(visualizationConfigs, 'id')

export const VisualizationContainer: FC = () => {
  const { viewState, onMove, onMoveStart } = useSyncMove(ids)
  const { hoverInfo, onMouseMove } = useHoverInfo(keys)
  return (
    <main className={styles.container}>
      {visualizationConfigs.map(({ id, color, featureKey }, index) => {
        const tooltipProps = Array.isArray(hoverInfo) ? hoverInfo[index] : null
        const mapProps = { ...defaultsMap, ...viewState }
        return (
          <section key={id}>
            <Map
              {...mapProps}
              onMove={onMove[index]}
              onMoveStart={onMoveStart[index]}
              onMouseMove={onMouseMove[index]}
            >
              <VisualizationMapSource>
                <VisualizationMapLayer color={color} featureKey={featureKey} />
              </VisualizationMapSource>
            </Map>
            <TooltipTranslated {...tooltipProps} />
          </section>
        )
      })}
    </main>
  )
}
