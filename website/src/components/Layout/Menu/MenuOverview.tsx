import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'
import { ModeToggleButton } from '../Navigation/ModeToggleButton'

import { MenuOverviewCategorySelection } from './MenuOverviewCategorySelection'
import { MenuOverviewConfirmButton } from './MenuOverviewConfirmButton'
import { MenuOverviewParametersSelection } from './MenuOverviewParametersSelection'
import { MenuOverviewTitle } from './MenuOverviewTitle'

export const MenuOverview: FC = () => {
  return (
    <WrapperIsActive states={menuOveriewStates}>
      <div>
        <MenuOverviewTitle />
        <MenuOverviewCategorySelection />
        <ModeToggleButton />
        <MenuOverviewParametersSelection />
        <MenuOverviewConfirmButton />
      </div>
    </WrapperIsActive>
  )
}

const menuOveriewStates: SelectionStateString[] = [
  'menu.mode_options.menu_overview',
  'menu.mode_scenario.menu_overview',
]
