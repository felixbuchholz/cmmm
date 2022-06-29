import React, { FC } from 'react'

import { incomes, scenarios, sizes } from '../../../state/selection/scenarios'
import { MenuParamterProps } from '../../../types/MenusParameter'

import { MenuParameters } from './MenuParameters'

export const MenusParameters: FC = () => {
  return (
    <div>
      {menus.map((it, index) => (
        <MenuParameters key={index} {...it} />
      ))}
    </div>
  )
}

const menus: MenuParamterProps[] = [
  {
    parameters: scenarios,
    activeStates: ['menu.mode_scenario.menu_scenario'],
  },
  { parameters: sizes, activeStates: ['menu.mode_options.menu_size'] },
  { parameters: incomes, activeStates: ['menu.mode_options.menu_income'] },
]
