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
    <div>
      <h3>How many offers are presented in Belgrade?</h3>
      <div>
        {arr.map(it => (
          <div key={it}>.</div>
        ))}
      </div>
    </div>
  )
}
