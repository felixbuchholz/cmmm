import { FC } from 'react'

import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import { useCount } from './hooks/useCount'
import styles from './visualizationSquareChart.module.css'

export const VisualizationSquareChart: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const count = useCount(featurePropertiesKey)
  const arr = Array(count).fill('◼')
  const points = arr.join('')
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.squareContainer}>{points}</div>
        <div className={styles.fade}></div>
      </div>
    </div>
  )
}
