import React, { FC } from 'react'

import styles from './visualization.module.css'
import { VisualizationComparison } from './VisualizationComparison'
import { VisualizationReference } from './VisualizationReference'

export const Visualization: FC = () => {
  return (
    <main className={styles.visualization}>
      <VisualizationReference />
      <VisualizationComparison />
    </main>
  )
}
