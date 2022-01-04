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
  const res = await fetch('https://apinsights.herokuapp.com/insight')
  let data: Ideia[] = await res.json()
  data = data.slice(-5)

  return {
    props: { ideias: data },
  }
}
export interface Ideia {
  Id: string
  Title: string
  Category: string
  Link: string
  Description: string
  Image_Link: string
}

export interface Props {
  ideias: Ideia[]
}
