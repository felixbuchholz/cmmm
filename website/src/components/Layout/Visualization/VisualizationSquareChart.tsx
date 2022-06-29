import { useTranslation } from 'next-export-i18n'
import { FC } from 'react'

import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import { useCount } from './hooks/useCount'
import styles from './visualizationSquareChart.module.css'

export const VisualizationSquareChart: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const { t } = useTranslation()
  const count = useCount(featurePropertiesKey)
  const arr = Array(count).fill('◼')
  const points = arr.join('')
  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <h2 className="subheadline">{t('info.squareChartHeadline')}</h2>
      </div>
      <div className={styles.chart}>
        <div className={styles.squareContainer}>{points}</div>
        <div className={styles.fade}></div>
      </div>
    </div>
  )
}
