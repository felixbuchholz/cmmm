import { useInterpret } from '@xstate/react'
import { createContext } from 'react'

import { selectionMachine } from '../state/selection/selectionMachine'
import { FCC } from '../types/FCC'
import { SelectionActor } from '../types/selectionMachine'

export type GlobalStateContextType = {
  selectionService: SelectionActor
}

export const GlobalStateContext = createContext({} as GlobalStateContextType)

export const GlobalStateProvider: FCC = ({ children }) => {
  const selectionService = useInterpret(selectionMachine, { devTools: true })

  return (
    <GlobalStateContext.Provider value={{ selectionService }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
