import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

export const MenuOverviewTitle: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h2 className="subheadline regular-weight">{t('menuOverview.title')}</h2>
      <small>{t('menuOverview.titleExplainer')}</small>
    </div>
  )
}
