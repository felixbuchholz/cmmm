import {
  SelectionStates,
  SelectionState,
} from '../../../types/selectionMachine'
import { MenuState } from '../../../types/ui'

const menuStateClosed = 'closed'
const menuStateOpen = ''

// Convert a match to date-state attribute (contract with css)
export const resolveBoolToMenuState = (bool: boolean): MenuState =>
  bool ? menuStateClosed : menuStateOpen

// Extend xstate.matches function with a helper
// to match one of multiple states
export const resolveStateArrayToBool = (
  arr: SelectionStates[],
  state: SelectionState
): boolean => arr.some(state.matches)

export const resolveStateArrayToClosedStr = (
  arr: SelectionStates[],
  state: SelectionState
): MenuState => resolveBoolToMenuState(resolveStateArrayToBool(arr, state))
