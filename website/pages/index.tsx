import type { NextPage } from 'next'

import { Layout, MainIndex } from '../src/components/Layout/Layout'
import { HeadMeta } from '../src/components/Meta/HeadMeta'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Layout>
        <MainIndex />
      </Layout>
    </>
  )
}

export default Home
