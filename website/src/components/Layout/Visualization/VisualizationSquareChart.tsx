import { FC } from 'react'

import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import { useCount } from './hooks/useCount'
import styles from './visualizationSquareChart.module.css'

export const VisualizationSquareChart: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const count = useCount(featurePropertiesKey)
  const arr = Array.from(Array(count).keys())
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        How many offers are presented in Belgrade?
      </div>
      <div className={styles.chart}>
        <div className={styles.squareContainer}>
          {arr.map(it => (
            <div key={it} className={styles.square}></div>
          ))}
        </div>
        <div className={styles.fade}></div>
      </div>
    </div>
  )
}
