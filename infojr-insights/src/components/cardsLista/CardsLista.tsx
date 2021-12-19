import Image from 'next/image'

import * as S from './CardsListaStyled'
import CardImg from './images/img1.svg'

const CardsLista = () => (
  <S.CardsLista>
    <article className="card">
      <div className="card_image">
        <Image src={CardImg} />
      </div>
      <h3 className="card_titulo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, arcu a
        blandit nunc ti...
      </h3>
      <p className="card_categoria">Curso</p>
      <p className="card_descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum
        feugiat ipsum in in quis. Mattis sit ac, posuere eu tellus risus sed leo
        vel. Purus sagittis, arcu...
      </p>
      <a className="card_link" href="www.google.com">
        Ir para a ideia
      </a>
    </article>
    <article className="card">
      <div className="card_image">
        <Image src={CardImg} />
      </div>
      <h3 className="card_titulo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, arcu a
        blandit nunc ti...
      </h3>
      <p className="card_categoria">Curso</p>
      <p className="card_descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum
        feugiat ipsum in in quis. Mattis sit ac, posuere eu tellus risus sed leo
        vel. Purus sagittis, arcu...
      </p>
      <a className="card_link" href="www.google.com">
        Ir para a ideia
      </a>
    </article>
    <article className="card">
      <div className="card_image">
        <Image src={CardImg} />
      </div>
      <h3 className="card_titulo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, arcu a
        blandit nunc ti...
      </h3>
      <p className="card_categoria">Curso</p>
      <p className="card_descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum
        feugiat ipsum in in quis. Mattis sit ac, posuere eu tellus risus sed leo
        vel. Purus sagittis, arcu...
      </p>
      <a className="card_link" href="www.google.com">
        Ir para a ideia
      </a>
    </article>
    <article className="card">
      <div className="card_image">
        <Image src={CardImg} />
      </div>
      <h3 className="card_titulo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, arcu a
        blandit nunc ti...
      </h3>
      <p className="card_categoria">Curso</p>
      <p className="card_descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum
        feugiat ipsum in in quis. Mattis sit ac, posuere eu tellus risus sed leo
        vel. Purus sagittis, arcu...
      </p>
      <a className="card_link" href="www.google.com">
        Ir para a ideia
      </a>
    </article>
  </S.CardsLista>
)

export default CardsLista
