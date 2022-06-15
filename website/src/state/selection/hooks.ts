import { useSelector } from '@xstate/react'
import { useContext } from 'react'
import { Sender } from 'xstate'

import { resolveStateArrayToBool } from '../../components/Layout/Menu/utils'
import { GlobalStateContext } from '../../context/GlobalStateContext'
import {
  SelectionContext,
  SelectionMachineContext,
  SelectionMachineEvents,
  SelectionStates,
} from '../../types/selectionMachine'

export const useResolveStateArrayToBool = (arr: SelectionStates[]): boolean => {
  const { selectionService } = useContext(GlobalStateContext)
  return useSelector(selectionService, state =>
    resolveStateArrayToBool(arr, state)
  )
}

export const useSelectionContext = <T extends keyof SelectionMachineContext>(
  key: T
): SelectionContext[T] => {
  const { selectionService } = useContext(GlobalStateContext)
  return useSelector(selectionService, state => state.context[key])
}

export const useSelectionSend = (): Sender<SelectionMachineEvents> => {
  const {
    selectionService: { send },
  } = useContext(GlobalStateContext)
  return send
}
