import { useSelector } from '@xstate/react'
import { useTranslation } from 'next-export-i18n'
import React, { FC, useContext } from 'react'

import { GlobalStateContext } from '../../../context/GlobalStateContext'
import { useSelectionSend } from '../../../state/selection/hooks'
import { getCompletedSelection } from '../../../state/selection/selectionMachine'

export const MenuOverviewConfirmButton: FC = () => {
  const { t } = useTranslation()
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
    <button className="padded" onClick={handleClick} disabled={isDisabled}>
      {t('menuOverview.confirm')}
    </button>
  )
}
