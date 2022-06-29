import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import styles from './header.module.css'
import { InfoPageLink } from './InfoPageLink'

export const Header: FC = () => {
  const { t } = useTranslation()
  return (
    <header className={styles.container}>
      <h1 className="subheadline">
        <InfoPageLink /> {t('site.title')}
      </h1>
    </header>
  )
}
