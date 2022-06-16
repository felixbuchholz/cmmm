import { ActorRefFrom, StateFrom, StateValueFrom } from 'xstate'

import { selectionMachine } from '../state/selection/selectionMachine'

export type Category = 'buy' | 'rent'
export type Data = Record<string, string | number | null>
export type ScenarioParameter = number | null

export type SelectionMachineContext = {
  category: Category
  data: Data
  size: ScenarioParameter
  income: ScenarioParameter
}

export type ScenarioParameters = {
  income: number
  size: number
}

export type SelectionMachineEvents =
  | { type: 'SELECT_CATEGORY'; category: Category }
  | { type: 'OPEN_MENU_CATEGORY' }
  | { type: 'TOGGLE_SELECTION_MODE' }
  | { type: 'CONFIRM_SELECTION' }
  | { type: 'OPEN_MENU_SCENARIO' }
  | { type: 'OPEN_MENU_OVERVIEW' }
  | {
      type: 'SELECT_SCENARIO'
      size: ScenarioParameter
      income: ScenarioParameter
    }
  | { type: 'OPEN_MENU_ERROR' }
  | { type: 'RESET' }

export type SelectionState = StateFrom<typeof selectionMachine>

export type SelectionStateString = StateValueFrom<typeof selectionMachine>

export type SelectionActor = ActorRefFrom<typeof selectionMachine>

export type SelectionContext = SelectionState.context
