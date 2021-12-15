import type { AppProps } from 'next/app'

import MainScreen from '../src/components/MainScreen'
import GlobalStyle from '../src/styles/globalStyle'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainScreen>
    <GlobalStyle />
    <Component {...pageProps} />
  </MainScreen>
)

export default MyApp
