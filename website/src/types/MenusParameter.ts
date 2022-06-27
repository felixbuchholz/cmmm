import { ReactElement } from 'react'

import { ScenarioParameters, SelectionStateString } from './selectionMachine'

export type ParameterItemProps = Partial<ScenarioItemProps>

export type ScenarioItemProps = ScenarioParameters & {
  translateKey?: string
}

export type IncomeItemProps = Pick<ScenarioParameters, 'income'>

export type SizeItemProps = Pick<ScenarioParameters, 'size'>

export type MenuParamterProps = {
  activeStates: SelectionStateString[]
  parameters: ParameterItemProps[]
}

export type MenuOverviewParametersSelectionProps = {
  activeStates: SelectionStateString[]
  translateKey: string
}

export type ParameterSelection = MenuOverviewParametersSelectionProps & {
  children: ReactElement
}
