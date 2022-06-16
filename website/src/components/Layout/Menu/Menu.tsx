import { useSelector } from '@xstate/react'
import React, { FC, useContext } from 'react'

import { GlobalStateContext } from '../../../context/GlobalStateContext'
import { SelectionStateString } from '../../../types/selectionMachine'

import { MenuCategory } from './MenuCategory'
import { MenuOverview } from './MenuOverview'
import { MenuScenario } from './MenuScenario'
import { resolveStateArrayToClosedStr } from './utils'

const menuClosedStates: SelectionStateString[] = [
  'menu.mode_options.menu_off',
  'menu.mode_scenario.menu_off',
]

export const Menu: FC = () => {
  const { selectionService } = useContext(GlobalStateContext)
  const menuState = useSelector(selectionService, state =>
    resolveStateArrayToClosedStr(menuClosedStates, state)
  )

  return (
    <div className="menu" data-state={menuState}>
      <MenuOverview />
      <MenuScenario />
      <MenuCategory />
      {/* <MenuError /> */}
    </div>
  )
}
