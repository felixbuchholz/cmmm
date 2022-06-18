/* eslint-disable max-lines-per-function */
import 'mapbox-gl/dist/mapbox-gl.css'
import { FC } from 'react'

import { useVisualizationSync } from './hooks/useVisualizationSync'
import { Visualization } from './Visualization'
import styles from './visualization.module.css'

export const VisualizationContainer: FC = () => {
  const visualizationProps = useVisualizationSync(visualizationSyncedConfig)
  return (
    <main className={styles.container}>
      {visualizationProps.map(it => (
        <Visualization key={it.id} {...it} />
      ))}
    </main>
  )
}

const visualizationSyncedConfig = [
  { id: 'reference', featureKey: 'mag', color: 'red' },
  { id: 'comparison', featureKey: 'tsunami', color: 'green' },
]
