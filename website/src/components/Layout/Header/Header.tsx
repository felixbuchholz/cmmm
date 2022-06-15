import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

export const Header: FC = () => {
  const { t } = useTranslation()
  return <header>{t('site.title')}</header>
}
