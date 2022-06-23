import Head from 'next/head'
import { FC } from 'react'

import { serverSubFolderPrefix } from '../../utils/environment'

export const HeadMeta: FC = () => {
  return (
    <Head>
      <title>CMMM</title>

      <meta name="description" content="CMMM Site title" />
      <link rel="icon" href={`${serverSubFolderPrefix}/favicon.ico`} />
    </Head>
  )
}
