import { useLanguageQuery, useTranslation } from 'next-export-i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import styles from './header.module.css'

export const Header: FC = () => {
  const { t } = useTranslation()
  return (
    <header className={styles.container}>
      <InfoPageLink /> {t('site.title')}
    </header>
  )
}

export const InfoPageLink: FC = () => {
  const [query] = useLanguageQuery()
  const { pathname: currentPath } = useRouter()
  const pathname = routing[currentPath]
  const symbol = symbols[currentPath]

  return <Link href={{ pathname, query }}>{symbol}</Link>
}

const routing: Record<InfoPageLinkRoutes, InfoPageLinkRoutes> = {
  '/': '/info',
  '/info': '/',
}

const symbols: Record<InfoPageLinkRoutes, string> = {
  '/': 'ⓘ',
  '/info': '✕',
}

type InfoPageLinkRoutes = '/' | '/info'
