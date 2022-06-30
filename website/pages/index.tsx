import type { NextPage } from 'next'

import { Layout } from '../src/components/Layout/Layout'
import { MainIndex } from '../src/components/Layout/MainIndex'
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
