import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

import { CategorySelectionButton } from './CategorySelectionButton'
import { ModeToggleButton } from './ModeToggleButton'
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
      <nav className={styles.navigation}>
        <CategorySelectionButton translationKey="navigation" />
        <ModeToggleButton />
        <ScenarioSelectionButton />
        <OptionsSelectionButtons />
      </nav>
    </WrapperIsActive>
  )
}
