import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'

export const MenuOverviewCategorySelection: FC = () => {
  const category = useSelectionContext('category')
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('OPEN_MENU_CATEGORY')
  }
  return (
    <div>
      I am interested in <button onClick={handleClick}>{category}</button>{' '}
      offers in Belgrade
    </div>
  )
}
