import { useTranslation } from 'next-export-i18n'
import { FC } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'
import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import { useCount } from './hooks/useCount'
import styles from './visualizationCount.module.css'

export const VisualizationCount: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const count = useCount(featurePropertiesKey)

  if (typeof count === 'undefined') {
    return null
  }

  return (
    <div className={styles.container}>
      <h3 className="number">{count}</h3>
      <small>
        <VisualCountDescription featurePropertiesKey={featurePropertiesKey} />
      </small>
    </div>
  )
}

export const VisualCountDescription: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const { t } = useTranslation()

  const size = useSelectionContext('size')
  const key = featurePropertiesKey + '.'
  const base = 'countLegend'
  const option = size ? 'Selected' : 'Null'

  return t(key + base + option)
}
