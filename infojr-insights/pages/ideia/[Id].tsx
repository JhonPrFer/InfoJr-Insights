/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import PagIdeiaStyled from '../../src/styles/PagIdeiaStyled'

const PagIdeia = ({ ideia }: Props) => (
  <PagIdeiaStyled>
    <img className="ideia_img" src={ideia.Image_Link} alt="imagem da ideia" />
    <article className="conteudo_ideia">
      <h2 className="titulo_ideia">{ideia.Title}</h2>
      <p className="descricao_ideia">{ideia.Description}</p>
      <a
        href={ideia.Link}
        target="_blank"
        className="btn_ideia btn"
        rel="noreferrer"
      >
        Saiba mais
      </a>
    </article>
  </PagIdeiaStyled>
)
export default PagIdeia

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://apinsights.herokuapp.com/insight')
  const data: Array<Ideia> = await res.json()

  const paths = data.map(ideia => ({
    params: { Id: `${ideia.Id}` },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { Id } = context.params as Iparams
  const res = await fetch(`https://apinsights.herokuapp.com/insight/${Id}`)
  const data: Ideia[] = await res.json()

  return {
    props: { ideia: data[0] },
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
  ideia: Ideia
}

interface Iparams extends ParsedUrlQuery {
  Id: string
}
