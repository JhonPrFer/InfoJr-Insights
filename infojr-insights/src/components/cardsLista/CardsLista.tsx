import Image from 'next/image'
import Link from 'next/link'

import * as S from './CardsListaStyled'
import CardImg from './images/img1.svg'

const ideias = [
  { title: 'Lorem', cat: 'curso', dsc: 'lorem', key: 0 },
  {
    title: 'Lorem',
    cat: 'palestra',
    dsc: 'lorem',
    key: 1,
  },
  { title: 'Lorem', cat: 'site', dsc: 'lorem', key: 2 },
  { title: 'Lorem', cat: 'site', dsc: 'lorem', key: 3 },
  { title: 'Lorem', cat: 'site', dsc: 'lorem', key: 4 },
  {
    title: 'Lorem',
    cat: 'site',
    dsc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum feugiat ipsum in in quis. Mattis sit ac, posuere eu tellus risus sed leo vel. Purus sagittis, arcu...',
    key: 5,
  },
]

const CardsLista = () => (
  <S.CardsLista>
    {ideias.map(e => (
      <article key={e.key} className="card">
        <div className="card_image">
          <Image src={CardImg} />
        </div>
        <h3 className="card_titulo">{e.title}</h3>
        <p className="card_categoria">{e.cat}</p>
        <p className="card_descricao">{e.dsc}</p>
        <Link
          as={`/${e.title}/${e.dsc}/${e.cat}`}
          href="/[Ideia]/[descricao]/[pagIdeia]"
          passHref
        >
          <p className="card_link">Ir para a ideia</p>
        </Link>
      </article>
    ))}
  </S.CardsLista>
)

export default CardsLista
