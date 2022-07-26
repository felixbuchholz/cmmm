import React, { FC } from 'react'

import {
  incomeParameters,
  scenarioParameters,
  sizeParameters,
} from '../../../state/selection/scenarios'
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
    parameters: scenarioParameters,
    activeStates: ['menu.mode_scenario.menu_scenario'],
  },
  {
    parameters: sizeParameters,
    activeStates: ['menu.mode_options.menu_size'],
  },
  {
    parameters: incomeParameters,
    activeStates: ['menu.mode_options.menu_income'],
  },
]
