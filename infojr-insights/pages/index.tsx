import type { GetStaticProps } from 'next'

import Aside from '../src/components/aside/Aside'
import CardsLista from '../src/components/cardsLista/CardsLista'
import HomeStyled from '../src/styles/Home.styled'

const Home = ({ ideias }: Props) => (
  <HomeStyled>
    <section className="home">
      <Aside />
      <CardsLista ideias={ideias} />
    </section>
  </HomeStyled>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: Ideia[] = await res.json()

  return {
    props: { ideias: data },
  }
}
export interface Ideia {
  id: string
  name: string
  email: string
  phone: string
}

export interface Props {
  ideias: Ideia[]
}
