import type { NextPage } from 'next'

import Aside from '../src/components/aside/Aside'
import HomeStyled from '../src/styles/Home.styled'

const Home: NextPage = () => (
  <HomeStyled>
    <Aside />
  </HomeStyled>
)

export default Home
