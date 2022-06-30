import { FC } from 'react'

import { Info } from './Info'
import { visualizationConfigs } from './utils/configVisualization'
import styles from './visualization.module.css'

export const Infos: FC = () => {
  return (
    <>
      {visualizationConfigs.map(({ id, featurePropertiesKey }) => {
        return (
          <section key={id} className={`${id} ${styles.info}`}>
            <Info id={id} featurePropertiesKey={featurePropertiesKey} />
          </section>
        )
      })}
    </>
  )
}
