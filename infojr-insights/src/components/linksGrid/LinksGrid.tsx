import Image from 'next/image'
import Link from 'next/link'

import CardImg from './images/img1.svg'
import * as S from './LinksGridsStyed'

const ideias = [
  { title: 'Lorem', cat: 'curso', dsc: 'lorem' },
  {
    title: 'Lorem',
    cat: 'palestra',
    dsc: 'lorem',
  },
  { title: 'Lorem', cat: 'site', dsc: 'lorem' },
  { title: 'Lorem', cat: 'site', dsc: 'lorem' },
  { title: 'Lorem', cat: 'site', dsc: 'lorem' },
  {
    title: 'Lorem',
    cat: 'site',
    dsc: 'Lorem ',
  },
]

const LinksGrid = () => (
  <S.LinksGrid>
    {ideias.map(e => (
      <article className="card">
        <div className="card_image">
          <Image src={CardImg} />
        </div>
        <h3 className="card_titulo">{e.title}</h3>
        <p className="card_categoria">{e.cat}</p>
        <p className="card_descricao">{e.dsc}</p>
        <Link as={`/${e.title}`} href="[pagIdeia]">
          <a className="card_link" href="/">
            Ir para a ideia
          </a>
        </Link>
      </article>
    ))}
  </S.LinksGrid>
)

export default LinksGrid
