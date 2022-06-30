import Head from 'next/head'
import { FC } from 'react'

import { basePath } from '../../utils/environment'

export const HeadMeta: FC = () => {
  return (
    <Head>
      <title>CMMM</title>

      <meta name="description" content="CMMM Site title" />
      <link rel="icon" href={`${basePath}/favicon.ico`} />
    </Head>
  )
}
