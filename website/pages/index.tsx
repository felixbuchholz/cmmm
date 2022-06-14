import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../src/components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CMMM</title>

        <meta name="description" content="CMMM Site title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </>
  )
}

export default Home
