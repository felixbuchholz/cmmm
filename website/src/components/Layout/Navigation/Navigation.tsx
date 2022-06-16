import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

import { CategorySelectionButton } from './CategorySelectionButton'
import styles from './navigation.module.css'
import { ScenarioSelectionButton } from './ScenarioSelectionButton'

const navigationStates: SelectionStateString[] = [
  'menu.mode_options.menu_off',
  'menu.mode_scenario.menu_off',
]

export const Navigation: FC = () => {
  return (
    <WrapperIsActive states={navigationStates}>
      <nav className={styles.navigation}>
        <CategorySelectionButton translationKey="navigation" />
        <ScenarioSelectionButton />
      </nav>
    </WrapperIsActive>
  )
}
