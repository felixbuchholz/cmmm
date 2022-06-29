import { useLanguageQuery } from 'next-export-i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { envSubFolder } from '../../../utils/environment'

export const InfoPageLink: FC = () => {
  const [query] = useLanguageQuery()
  const { pathname: currentPath } = useRouter()
  const pathname = routing[currentPath]
  const symbol = symbols[currentPath]

  return <Link href={{ pathname, query }}>{symbol}</Link>
}
const routing: Record<InfoPageLinkRoutes, string> = {
  '/': envSubFolder + '/info',
  '/info': envSubFolder + '/',
}
const symbols: Record<InfoPageLinkRoutes, string> = {
  '/': 'ⓘ',
  '/info': '✕',
}
type InfoPageLinkRoutes = '/' | '/info'
