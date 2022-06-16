import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

import { MenuOverviewCategorySelection } from './MenuOverviewCategorySelection'
import { MenuOverviewConfirmButton } from './MenuOverviewConfirmButton'
import { MenuOverviewScenarioSelection } from './MenuOverviewScenarioSelection'
import { MenuOverviewTitle } from './MenuOverviewTitle'

export const MenuOverview: FC = () => {
  return (
    <WrapperIsActive states={menuOveriewStates}>
      <div>
        <MenuOverviewTitle />
        <MenuOverviewCategorySelection />
        <MenuOverviewScenarioSelection />
        <MenuOverviewConfirmButton />
      </div>
    </WrapperIsActive>
  )
}

const menuOveriewStates: SelectionStateString[] = [
  'menu.mode_options.menu_overview',
  'menu.mode_scenario.menu_overview',
]
