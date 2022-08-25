import { ActorRefFrom, StateFrom, StateValueFrom } from 'xstate'

import { selectionMachine } from '../state/selection/selectionMachine'

export type Category = 'buy' | 'rent'
export type Data =
  | GeoJSON.Feature<GeoJSON.Geometry>
  | GeoJSON.FeatureCollection<GeoJSON.Geometry>
export type ScenarioParameter = number | null

export type OptionsKey = 'category' | 'size' | 'income'

export type SelectionMachineContext = {
  category: Category
  data: Data
  size: ScenarioParameter
  income: ScenarioParameter
}

export type ScenarioParameters = {
  income: ScenarioParameter
  size: ScenarioParameter
}

export type SelectionMachineEvents =
  | { type: 'SELECT_CATEGORY'; category: Category }
  | { type: 'OPEN_MENU_CATEGORY' }
  | { type: 'CONFIRM_SELECTION' }
  | { type: 'OPEN_MENU_SCENARIO' }
  | {
      type: 'ENTER_QUERY_PARAMS'
      category: Category
      size: ScenarioParameter
      income: ScenarioParameter
    }
  | { type: 'OPEN_MENU_OVERVIEW' }
  | {
      type: 'SELECT_SCENARIO'
      size: ScenarioParameter
      income: ScenarioParameter
    }
  | { type: 'OPEN_MENU_SIZE' }
  | { type: 'SELECT_SIZE'; size: ScenarioParameter }
  | { type: 'OPEN_MENU_INCOME' }
  | { type: 'SELECT_INCOME'; income: ScenarioParameter }
  | { type: 'OPEN_MENU_ERROR' }
  | { type: 'RESET' }

export type SelectionState = StateFrom<typeof selectionMachine>

export type SelectionStateString = StateValueFrom<typeof selectionMachine>

export type SelectionActor = ActorRefFrom<typeof selectionMachine>

export type SelectionContext = SelectionState.context
