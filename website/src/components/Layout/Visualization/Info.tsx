import { useTranslation } from 'next-export-i18n'
import { FC } from 'react'

import { VisualizationConfig } from '../../../types/Vizsualization'

import { Count } from './Count'
import styles from './info.module.css'
import { SquareChart } from './SquareChart'

export const Info: FC<Pick<
  VisualizationConfig,
  'id' | 'featurePropertiesKey'
>> = ({ id, featurePropertiesKey }) => {
  return (
    <>
      <InfoHeadline id={id} />
      <div className={styles.containerInfos}>
        <SquareChart featurePropertiesKey={featurePropertiesKey} />
        <Count featurePropertiesKey={featurePropertiesKey} />
      </div>
    </>
  )
}

export const InfoHeadline: FC<Pick<VisualizationConfig, 'id'>> = ({ id }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.headline}>
      <h2 className="subheadline">{t(`info.${id}Headline`)}</h2>
    </div>
  )
}
