import React, { FC } from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'

export const MenuError: FC = () => {
  return (
    <WrapperIsActive states={menuErrorStates}>
      <div>Error!</div>
    </WrapperIsActive>
  )
}

const menuErrorStates: SelectionStateString[] = [
  'menu.mode_options.menu_error',
  'menu.mode_scenario.menu_error',
]
