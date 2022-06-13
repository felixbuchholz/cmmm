import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CMMM</title>

        <meta name="description" content="CMMM Site title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <Link href="/">Site title</Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
