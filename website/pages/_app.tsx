import '../styles/_app.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

function _app ({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />
}

export default _app
