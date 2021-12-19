import type { NextPage } from 'next'
import Head from 'next/head'

import Aside from '../src/components/aside/Aside'
import CardsLista from '../src/components/cardsLista/CardsLista'
import HomeStyled from '../src/styles/Home.styled'

const Home: NextPage = () => (
  <HomeStyled>
    <Head>
      <title>InfoJr Insights</title>
    </Head>
    <Aside />
    <CardsLista />
  </HomeStyled>
)

export default Home
