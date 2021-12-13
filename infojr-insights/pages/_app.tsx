import type { AppProps } from 'next/app'

import MainScreen from '../src/components/MainScreen'
import GlobalStyle from '../src/styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainScreen>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainScreen>
  )
}

export default MyApp