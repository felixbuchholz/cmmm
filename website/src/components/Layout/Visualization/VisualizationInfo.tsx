import { useTranslation } from 'next-export-i18n'
import { FC } from 'react'

import { VisualizationConfig } from '../../../types/Vizsualization'

import { VisualizationCount } from './VisualizationCount'
import styles from './visualizationInfo.module.css'
import { VisualizationSquareChart } from './VisualizationSquareChart'

export const VisualizationInfo: FC<Pick<
  VisualizationConfig,
  'id' | 'featurePropertiesKey'
>> = ({ id, featurePropertiesKey }) => {
  return (
    <div className={`${id} ${styles.container}`}>
      <VisualizationInfoHeadline id={id} />
      <div className={styles.info}>
        <VisualizationSquareChart featurePropertiesKey={featurePropertiesKey} />
        <VisualizationCount featurePropertiesKey={featurePropertiesKey} />
      </div>
    </div>
  )
}

export const VisualizationInfoHeadline: FC<Pick<VisualizationConfig, 'id'>> = ({
  id,
}) => {
  const { t } = useTranslation()
  return (
    <div className={styles.headline}>
      <h2 className="subheadline">{t(`info.${id}Headline`)}</h2>
    </div>
  )
}
