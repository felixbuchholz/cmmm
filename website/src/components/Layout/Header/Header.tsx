import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'

import { CMMMButton } from './CMMMButton'
import styles from './header.module.css'
import { InfoPageLink } from './InfoPageLink'

export const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.flexLinks}>
        <InfoPageLink /> <HeaderTitleButton />
      </div>
      <CMMMButton />
    </header>
  )
}

export const HeaderTitleButton: FC = () => {
  const { t } = useTranslation()
  const send = useSelectionSend()
  const handleClick = (): void => {
    send({ type: 'OPEN_MENU_OVERVIEW' })
  }

  return (
    <button className={styles.title} onClick={handleClick}>
      <h1>{t('site.title')}</h1>
    </button>
  )
}
