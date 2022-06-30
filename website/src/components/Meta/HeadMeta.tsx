import Head from 'next/head'
import { FC } from 'react'

export const HeadMeta: FC = () => {
  return (
    <Head>
      <title>CMMM</title>

      <meta name="description" content="CMMM Site title" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
