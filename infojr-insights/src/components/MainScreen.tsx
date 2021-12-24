import Head from 'next/head'

import * as S from '../styles/MainScreen'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainScreen = ({ children }: JSX.ElementChildrenAttribute) => (
  <S.MainScreen>
    <Head>
      <title>InfoJr Insights</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </S.MainScreen>
)

export default MainScreen
