import { FCC } from '../../types/FCC'
import { SelectionStateString } from '../../types/selectionMachine'

import { useResolveStateArrayToBool } from './hooks'

export const WrapperIsActive: FCC<{
  states: SelectionStateString[]
  useDataState?: boolean
}> = ({ children, states, useDataState: useStateClasses }) => {
  const isActive = useResolveStateArrayToBool(states)

  if (useStateClasses) {
    return (
      <WrapperIsActiveDataState isActive={isActive}>
        {children}
      </WrapperIsActiveDataState>
    )
  }

  return <WrapperIsActiveDOM isActive={isActive}>{children}</WrapperIsActiveDOM>
}

export const WrapperIsActiveDataState: FCC<{ isActive: boolean }> = ({
  children,
  isActive,
}) => {
  const stateClass = isActive ? 'active' : 'disabled'
  return <div data-state={stateClass}>{children}</div>
}

export const WrapperIsActiveDOM: FCC<{ isActive: boolean }> = ({
  children,
  isActive,
}) => {
  if (!isActive) {
    return null
  }

  return children
}
