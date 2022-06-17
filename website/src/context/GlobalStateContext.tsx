import { useInterpret } from '@xstate/react'
import { createContext } from 'react'

import { selectionMachine } from '../state/selection/selectionMachine'
import { FCC } from '../types/FCC'
import { SelectionActor } from '../types/selectionMachine'
import { isProduction } from '../utils/environment'

export type GlobalStateContextType = {
  selectionService: SelectionActor
}

export const GlobalStateContext = createContext({} as GlobalStateContextType)

const devTools = isProduction ? undefined : { devTools: true }
export const GlobalStateProvider: FCC = ({ children }) => {
  const selectionService = useInterpret(selectionMachine, devTools)

  return (
    <GlobalStateContext.Provider value={{ selectionService }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
