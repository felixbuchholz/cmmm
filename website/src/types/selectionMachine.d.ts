import { ActorRefFrom, StateFrom, StateValueFrom } from 'xstate'

import { selectionMachine } from '../state/selection/selectionMachine'

export type SelectionMachineContext = {
  category: string
  data_reference: string
  size: number | null
  income: number | null
}

export type SelectionMachineEvents =
  | { type: 'SELECT_CATEGORY'; category: string }
  | { type: 'OPEN_MENU_CATEGORY' }
  | { type: 'TOGGLE_SELECTION_MODE' }
  | { type: 'CONFIRM_SELECTION' }
  | { type: 'OPEN_MENU_SCENARIO' }
  | { type: 'OPEN_MENU_OVERVIEW' }
  | { type: 'SELECT_SCENARIO'; size: number; income: number }

export type SelectionState = StateFrom<typeof selectionMachine>

export type SelectionStates = StateValueFrom<typeof selectionMachine>

export type SelectionActor = ActorRefFrom<typeof selectionMachine>

export type SelectionContext = SelectionState.context
