import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import styles from './header.module.css'
import { InfoPageLink } from './InfoPageLink'

export const Header: FC = () => {
  const { t } = useTranslation()
  return (
    <header className={styles.container}>
      <InfoPageLink /> {t('site.title')}
    </header>
  )
}
