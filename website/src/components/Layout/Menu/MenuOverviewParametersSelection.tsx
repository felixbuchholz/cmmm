import React, { FC } from 'react'

import { ParameterSelection } from '../../../types/MenusParameter'
import { OptionsSelectionButtons } from '../Navigation/OptionsSelectionButtons'
import { ScenarioSelectionButton } from '../Navigation/ScenarioSelectionButton'

import { MenuOverviewParametersSelectionItem } from './MenuOverviewParametersSelectionItem'

export const MenuOverviewParametersSelection: FC = () => {
  return (
    <>
      {parameterSelections.map(it => (
        <MenuOverviewParametersSelectionItem key={it.translateKey} {...it} />
      ))}
    </>
  )
}

const parameterSelections: ParameterSelection[] = [
  {
    translateKey: 'menuOverview.scenarioSelectExplainer',
    activeStates: ['menu.mode_scenario'],
    children: <ScenarioSelectionButton />,
  },
  {
    translateKey: 'menuOverview.optionsSelectExplainer',
    activeStates: ['menu.mode_options'],
    children: <OptionsSelectionButtons />,
  },
]
