import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'
import '@fontsource/rubik-mono-one/400.css'

import '../src/styles/_app.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'

import { GlobalStateProvider } from '../src/context/GlobalStateContext'

const _app: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  )
}

export default _app
