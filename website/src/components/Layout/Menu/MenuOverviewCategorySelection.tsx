import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { CategorySelectionButton } from '../Navigation/CategorySelectionButton'

export const MenuOverviewCategorySelection: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className="inlineDivs">
        {t('menuOverview.categorySelect1')} <CategorySelectionButton />{' '}
        {t('menuOverview.categorySelect2')}
      </h3>

      <small>{t('menuOverview.categorySelectExplainer')}</small>
    </div>
  )
}
