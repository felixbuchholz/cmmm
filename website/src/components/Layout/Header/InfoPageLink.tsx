import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguageQuery } from 'next-export-i18n'
import React, { FC, ReactElement } from 'react'

import styles from './header.module.css'
import { InfoIcon } from './InfoIcon'

export const InfoPageLink: FC = () => {
  const [query] = useLanguageQuery()
  const { pathname: currentPath } = useRouter()
  const pathname = routing[currentPath]
  const symbol = symbols[currentPath]
  const className = classes[currentPath]

  return (
    <span className={styles[className]}>
      <Link href={{ pathname, query }}>
        <span className="link">{symbol}</span>
      </Link>
    </span>
  )
}
const routing: Record<InfoPageLinkRoutes, string> = {
  '/': '/info',
  '/info': '/',
}

const symbols: Record<InfoPageLinkRoutes, string | ReactElement> = {
  '/': <InfoIcon />,
  '/info': <InfoIcon />,
}

const classes: Record<InfoPageLinkRoutes, string> = {
  '/': 'info',
  '/info': 'close',
}

type InfoPageLinkRoutes = '/' | '/info'
