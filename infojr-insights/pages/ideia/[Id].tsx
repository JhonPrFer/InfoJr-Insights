import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'

import Imagem1 from '../../public/images/image 1.png'
import PagIdeiaStyled from '../../src/styles/PagIdeiaStyled'

const PagIdeia = ({ ideias }: Ideia[]) => (
  <PagIdeiaStyled>
    <Image className="ideia_img" src={Imagem1} />
    <article className="conteudo_ideia">
      <h2 className="titulo_ideia">{ideias.name}</h2>
      <p className="descricao_ideia">{ideias.name}</p>
      <Link as="/" href="/" passHref>
        <p className="btn_ideia btn">Saiba mais</p>
      </Link>
    </article>
  </PagIdeiaStyled>
)
export default PagIdeia

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ideia => ({
    params: { Id: `${ideia.id}` },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { Id } = context.params as Iparams
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`)
  const data = await res.json()

  return {
    props: { ideia: data },
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

interface Iparams extends ParsedUrlQuery {
  Id: string
}
