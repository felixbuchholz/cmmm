import type { NextPage } from 'next'

import { Layout } from '../src/components/Layout/Layout'
import { HeadMeta } from '../src/components/Meta/HeadMeta'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Layout />
    </>
  )
}

export default Home
