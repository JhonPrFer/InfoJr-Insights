import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './IdeiaStyled'
import Imagem1 from './Images/image 1.png'

const Ideia = () => {
  const router = useRouter()
  return (
    <S.Ideia>
      <Image className="ideia_img" src={Imagem1} />
      <article className="conteudo_ideia">
        <h2 className="titulo_ideia">{router.query.Ideia}</h2>
        <p className="descricao_ideia">{router.query.descricao}</p>
        <Link as="/" href="/" passHref>
          <p className="btn_ideia btn">Saiba mais</p>
        </Link>
      </article>
    </S.Ideia>
  )
}

export default Ideia
