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

export type UseSelectionContext = {
  <T extends keyof SelectionMachineContext>(param: T): SelectionContext[T]
  <T extends keyof SelectionMachineContext>(param: T[]): SelectionContext[T][]
}
export type PickParamsFromContext = {
  <T extends keyof SelectionMachineContext>(
    context: SelectionContext,
    param: T
  ): SelectionContext[T]
  <T extends keyof SelectionMachineContext>(
    context: SelectionContext,
    param: T[]
  ): SelectionContext[T][]
}

const pickParamsFromContext: PickParamsFromContext = (context, param) => {
  if (typeof param === 'string') {
    return context[param]
  }
  // TODO: Probably update xstate, this currently throws a warning:
  // https://github.com/statelyai/xstate/discussions/3379
  return param.map(it => context[it])
}

export const useSelectionContext: UseSelectionContext = <
  T extends keyof SelectionMachineContext
>(
  param: T
) => {
  const { selectionService } = useContext(GlobalStateContext)
  return useSelector(selectionService, state =>
    pickParamsFromContext(state.context, param)
  )
}

export const useSelectionContextArray = <
  T extends keyof SelectionMachineContext
>(
  keys: T[]
): SelectionContext[T][] => {
  const { selectionService } = useContext(GlobalStateContext)
  return useSelector(selectionService, state => {
    return keys.map(it => state.context[it])
  })
}

export const useSelectionSend = (): Sender<SelectionMachineEvents> => {
  const {
    selectionService: { send },
  } = useContext(GlobalStateContext)
  return send
}
