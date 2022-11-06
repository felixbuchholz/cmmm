import { useTranslation } from 'next-export-i18n'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const { t } = useTranslation()
  const send = useSelectionSend()
  const handleClick = (): void => {
    if (router.pathname === '/info') {
      router.push('/')
    }
    send({ type: 'OPEN_MENU_OVERVIEW' })
  }

  return (
    <button className={styles.title} onClick={handleClick}>
      <h1>{t('site.title')}</h1>
    </button>
  )
}
