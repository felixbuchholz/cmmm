import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { CMMMButton } from './CMMMButton'
import styles from './header.module.css'
import { InfoPageLink } from './InfoPageLink'

export const Header: FC = () => {
  const { t } = useTranslation()
  return (
    <header className={styles.container}>
      <h1 className="subheadline">
        <InfoPageLink /> <span className={styles.title}>{t('site.title')}</span>
      </h1>
      <CMMMButton />
    </header>
  )
}
