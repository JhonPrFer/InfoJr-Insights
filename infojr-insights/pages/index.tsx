import type { NextPage } from 'next'
import Head from 'next/head'

import Aside from '../src/components/aside/Aside'
import HomeStyled from '../src/styles/Home.styled'

const Home: NextPage = () => (
  <HomeStyled>
    <Head>
      <title>InfoJr Insights</title>
    </Head>
    <Aside />
  </HomeStyled>
)

export default Home
