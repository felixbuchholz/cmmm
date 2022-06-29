import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { MenuParamterProps } from '../../../types/MenusParameter'

import styles from './menuParameter.module.css'
import { ParameterItem } from './ParameterItem'

export const MenuParameters: FC<MenuParamterProps> = ({
  activeStates,
  parameters,
}) => {
  return (
    <WrapperIsActive states={activeStates}>
      <div className={styles.container}>
        {parameters.map(it => (
          <ParameterItem key={`${it.size}-${it.income}`} {...it} />
        ))}
      </div>
    </WrapperIsActive>
  )
}
