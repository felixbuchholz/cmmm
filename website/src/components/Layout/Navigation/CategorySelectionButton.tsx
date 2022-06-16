import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'

export const CategorySelectionButton: FC<{ translationKey?: string }> = ({
  translationKey = 'categorySelect',
}) => {
  const { t } = useTranslation()
  const category = useSelectionContext('category')
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('OPEN_MENU_CATEGORY')
  }

  return (
    <div>
      <button onClick={handleClick}>
        {t(`${category}.${translationKey}`)}
      </button>
    </div>
  )
}
