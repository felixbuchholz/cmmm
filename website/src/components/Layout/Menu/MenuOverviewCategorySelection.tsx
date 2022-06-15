import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'

export const MenuOverviewCategorySelection: FC = () => {
  const { t } = useTranslation()
  const category = useSelectionContext('category')
  const send = useSelectionSend()

  const handleClick = (): void => {
    send('OPEN_MENU_CATEGORY')
  }
  return (
    <div>
      <h3>
        {t('menuOverview.categorySelect1')}{' '}
        <button onClick={handleClick}>{t(`${category}.categorySelect`)}</button>{' '}
        {t('menuOverview.categorySelect2')}
      </h3>
      <small>{t('menuOverview.categorySelectExplainer')}</small>
    </div>
  )
}
