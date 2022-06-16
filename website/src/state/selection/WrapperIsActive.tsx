import { FCC } from '../../types/FCC'
import { SelectionStateString } from '../../types/selectionMachine'

import { useResolveStateArrayToBool } from './hooks'

export const WrapperIsActive: FCC<{ states: SelectionStateString[] }> = ({
  children,
  states,
}) => {
  const isActive = useResolveStateArrayToBool(states)

  if (!isActive) {
    return null
  }

  return children
}
