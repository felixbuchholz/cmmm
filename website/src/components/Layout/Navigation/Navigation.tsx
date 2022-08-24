import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

import { CategorySelectionButton } from './CategorySelectionButton'
import styles from './navigation.module.css'
import { OptionsSelectionButtons } from './OptionsSelectionButtons'
import { ScenarioSelectionButton } from './ScenarioSelectionButton'

const navigationStates: SelectionStateString[] = [
  'menu.mode_options.menu_off',
  'menu.mode_scenario.menu_off',
]

export const Navigation: FC = () => {
  return (
    <WrapperIsActive states={navigationStates}>
      <nav className={styles.container}>
        <CategorySelectionButton translationKey="navigation" />
        <WrapperIsActive states={['menu.mode_scenario']}>
          <ScenarioSelectionButton />
        </WrapperIsActive>
        <WrapperIsActive states={['menu.mode_options']}>
          <OptionsSelectionButtons />
        </WrapperIsActive>
      </nav>
    </WrapperIsActive>
  )
}
