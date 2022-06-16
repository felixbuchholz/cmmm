import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

import styles from './error.module.css'

export const Error: FC = () => {
  return (
    <WrapperIsActive states={menuErrorStates}>
      <div className={styles.backdrop}>
        <ErrorMessage />
      </div>
    </WrapperIsActive>
  )
}

const menuErrorStates: SelectionStateString[] = ['error.active']

export const ErrorMessage: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Error!</h2>
      <p>Sorry we ran into a problem...</p>
      <ErrorResetButton />
      <small> ...to start over</small>
    </div>
  )
}

export const ErrorResetButton: FC = () => {
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('RESET')
  }

  return <button onClick={handleClick}>Reset</button>
}
