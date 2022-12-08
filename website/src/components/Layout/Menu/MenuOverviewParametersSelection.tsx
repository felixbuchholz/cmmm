import React, { FC, Fragment, useId } from 'react'

import { ParameterSelection } from '../../../types/MenusParameter'
import { OptionsSelectionButtons } from '../Navigation/OptionsSelectionButtons'
import { ScenarioSelectionButton } from '../Navigation/ScenarioSelectionButton'

import styles from './menuOverview.module.css'
import { MenuOverviewParametersSelectionItem } from './MenuOverviewParametersSelectionItem'

export const MenuOverviewParametersSelection: FC = () => {
  return (
    <>
      {parameterSelections.map((it, index) => {
        return (
          <Fragment key={it.translateKey}>
            <MenuOverviewParametersSelectionItem {...it} />
            {index === dividerIndex && (
              <div key={index} className={styles.snug}>
                <h3>or</h3>
              </div>
            )}
          </Fragment>
        )
      })}
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
