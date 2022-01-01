import Image from 'next/image'
import Link from 'next/link'

import CardImg from './images/img1.svg'
import * as S from './LinksGridsStyed'

const LinksGrid = ({ ideias }: Props) => (
  <S.LinksGrid>
    {ideias.map(ideia => (
      <article key={ideia.id} className="card">
        <div className="card_image">
          <Image src={CardImg} />
        </div>
        <h3 className="card_titulo">{ideia.name}</h3>
        <p className="card_categoria">{ideia.phone}</p>
        <p className="card_descricao">{ideia.email}</p>
        <Link as={`/ideia/${ideia.id}`} href="/ideia/[Id]" passHref>
          <p className="card_link">Ir para a ideia</p>
        </Link>
      </article>
    ))}
  </S.LinksGrid>
)

export default LinksGrid

export interface Ideia {
  id: string
  name: string
  email: string
  phone: string
}

export interface Props {
  ideias: Ideia[]
}
