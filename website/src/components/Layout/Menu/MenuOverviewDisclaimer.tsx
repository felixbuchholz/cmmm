import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

export const MenuOverviewDisclaimer: FC = () => {
  const { t } = useTranslation()
  return (
    <small>
      <em>{t('menuOverview.disclaimerEmphasis')}</em>{' '}
      {t('menuOverview.disclaimerBody')}
    </small>
  )
}
