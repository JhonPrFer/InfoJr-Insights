import type { NextPage } from 'next'

import Aside from '../src/components/aside/Aside'
import CardsLista from '../src/components/cardsLista/CardsLista'
import HomeStyled from '../src/styles/Home.styled'

const Home: NextPage = () => (
  <HomeStyled>
    <Aside />
    <CardsLista />
  </HomeStyled>
)

export default Home
