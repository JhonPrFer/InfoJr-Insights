import Image from 'next/image'
import Link from 'next/link'

import * as S from './CardsListaStyled'
import CardImg from './images/img1.svg'

const CardsLista = ({ ideias }: Props) => (
  <S.CardsLista>
    {ideias.map(ideia => (
      <article key={ideia.Id} className="card">
        <div className="card_image">
          <Image src={CardImg} />
        </div>
        <h3 className="card_titulo">{ideia.Title}</h3>
        <p className="card_categoria">{ideia.Category}</p>
        <p className="card_descricao">{ideia.Description}</p>
        <Link as={`/ideia/${ideia.Id}`} href="/ideia/[Id]" passHref>
          <p className="card_link">Ir para a ideia</p>
        </Link>
      </article>
    ))}
  </S.CardsLista>
)
export default CardsLista

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
