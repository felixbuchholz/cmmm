import Head from 'next/head'
import { FC } from 'react'

import { githubPrefix } from '../../utils/environment'

export const HeadMeta: FC = () => {
  return (
    <Head>
      <title>CMMM</title>

      <meta name="description" content="CMMM Site title" />
      <link rel="icon" href={`${githubPrefix}/favicon.ico`} />
    </Head>
  )
}
