import { useTranslation } from 'next-export-i18n'
import { FC } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'
import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import { useCount } from './hooks/useCount'

export const VisualizationCount: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const count = useCount(featurePropertiesKey)

  if (typeof count === 'undefined') {
    return null
  }

  return (
    <div>
      <h3>{count}</h3>
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
