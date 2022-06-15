import { useSelector } from '@xstate/react'
import React, { FC, useContext } from 'react'

import { languageCode } from '../../../../content/language'
import { menuOverviewConfirm } from '../../../../content/menu'
import { GlobalStateContext } from '../../../context/GlobalStateContext'
import { useSelectionSend } from '../../../state/selection/hooks'
import { getCompletedSelection } from '../../../state/selection/selectionMachine'

export const MenuOverviewConfirmButton: FC = () => {
  const { selectionService } = useContext(GlobalStateContext)
  const isDisabled = useSelector(
    selectionService,
    state => !getCompletedSelection(state.context)
  )
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('CONFIRM_SELECTION')
  }

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {menuOverviewConfirm[languageCode]}
    </button>
  )
}
