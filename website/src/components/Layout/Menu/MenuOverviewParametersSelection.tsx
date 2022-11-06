import React, { FC } from 'react'

import { ParameterSelection } from '../../../types/MenusParameter'
import { OptionsSelectionButtons } from '../Navigation/OptionsSelectionButtons'
import { ScenarioSelectionButton } from '../Navigation/ScenarioSelectionButton'

import styles from './menuOverview.module.css'
import { MenuOverviewParametersSelectionItem } from './MenuOverviewParametersSelectionItem'

export const MenuOverviewParametersSelection: FC = () => {
  return (
    <>
      {parameterSelections.map((it, index) => (
        <>
          <MenuOverviewParametersSelectionItem key={it.translateKey} {...it} />
          {index === dividerIndex && (
            <div className={styles.snug}>
              <h3>or</h3>
            </div>
          )}
        </>
      ))}
    </>
  )
}
const dividerIndex = 0

const parameterSelections: ParameterSelection[] = [
  {
    translateKey: 'menuOverview.optionsSelectExplainer',
    activeStates: ['menu.mode_options'],
    children: <OptionsSelectionButtons />,
  },
  {
    translateKey: 'menuOverview.scenarioSelectExplainer',
    activeStates: ['menu.mode_scenario'],
    children: <ScenarioSelectionButton />,
  },
]
