import React, { FC } from 'react'

import { useResolveStateArrayToBool } from '../../../state/selection/hooks'
import { SelectionStates } from '../../../types/selectionMachine'

import { MenuOverviewCategorySelection } from './MenuOverviewCategorySelection'
import { MenuOverviewConfirmButton } from './MenuOverviewConfirmButton'
import { MenuOverviewScenarioSelection } from './MenuOverviewScenarioSelection'
import { MenuOverviewTitle } from './MenuOverviewTitle'

export const MenuOverview: FC = () => {
  const isActive = useResolveStateArrayToBool(menuOveriewStates)

  if (!isActive) {
    return null
  }

  return (
    <div>
      <MenuOverviewTitle />
      <MenuOverviewCategorySelection />
      <MenuOverviewScenarioSelection />
      <MenuOverviewConfirmButton />
    </div>
  )
}

const menuOveriewStates: SelectionStates[] = [
  'menu.mode_options.menu_overview',
  'menu.mode_scenario.menu_overview',
]
