import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'

export const MenuOverviewScenarioSelection: FC = () => {
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('OPEN_MENU_SCENARIO')
  }
  return (
    <div>
      I have a household{' '}
      <button onClick={handleClick}>
        select your wished specs here please
      </button>
    </div>
  )
}
