import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'
import { ModeToggleButton } from '../Navigation/ModeToggleButton'

import styles from './menuOverview.module.css'
import { MenuOverviewCategorySelection } from './MenuOverviewCategorySelection'
import { MenuOverviewConfirmButton } from './MenuOverviewConfirmButton'
import { MenuOverviewDisclaimer } from './MenuOverviewDisclaimer'
import { MenuOverviewParametersSelection } from './MenuOverviewParametersSelection'
import { MenuOverviewTitle } from './MenuOverviewTitle'

export const MenuOverview: FC = () => {
  return (
    <WrapperIsActive states={menuOveriewStates}>
      <div className={styles.container}>
        <MenuOverviewTitle />
        <MenuOverviewCategorySelection />
        <ModeToggleButton />
        <MenuOverviewParametersSelection />
        <MenuOverviewConfirmButton />
        <MenuOverviewDisclaimer />
      </div>
    </WrapperIsActive>
  )
}

const menuOveriewStates: SelectionStateString[] = [
  'menu.mode_options.menu_overview',
  'menu.mode_scenario.menu_overview',
]
