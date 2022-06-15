import type { NextPage } from 'next'

import { LanguagePicker } from '../src/components/Language/LanguagePicker'
import { Layout } from '../src/components/Layout/Layout'
import { HeadMeta } from '../src/components/Meta/HeadMeta'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <LanguagePicker />
      <Layout />
    </>
  )
}

export default Home
