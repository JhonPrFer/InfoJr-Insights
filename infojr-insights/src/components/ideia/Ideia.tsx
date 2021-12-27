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
        <h2 className="titulo_ideia">{router.query.pagIdeia}</h2>
        <p className="descricao_ideia">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed quis consectetur eleifend nulla malesuada augue a, tristique. Id
          cum risus enim dui. Magna lectus eget habitasse ultrices velit quam
          non. Eu convallis dui ullamcorper a cursus nascetur varius quam
          consectetur. Sit etiam adipiscing amet, quis eleifend sed nibh mattis.
          Ultrices iaculis orci senectus cursus auctor nunc. Facilisi pretium ac
          malesuada nec nibh dignissim libero egestas. Dignissim nunc diam
          integer vel in a sociis. Cras a elit facilisi placerat est mauris
          consequat eget.
          <br />
          <br /> Aliquet vel adipiscing purus, eu turpis. Egestas sit varius
          pellentesque sed cursus sollicitudin. Id mi quis ornare enim et. Urna
          aenean risus eu risus venenatis sit quam massa. In nam fermentum donec
          viverra est. Ornare sit lectus ipsum accumsan senectus cras facilisis.
          Suspendisse sit metus, faucibus bibendum diam fermentum commodo
          maecenas. Diam vel eget diam ac nunc adipiscing quisque convallis
          mattis. Amet, pharetra dolor in faucibus in diam facilisi mi. Tempus
          id maecenas porttitor condimentum massa faucibus egestas. Facilisis
          pretium pellentesque fringilla sit dignissim dignissim etiam. Id eget
          curabitur leo facilisi nec volutpat scelerisque.
        </p>
        <Link as="/" href="/" passHref>
          <p className="btn_ideia btn">Saiba mais</p>
        </Link>
      </article>
    </S.Ideia>
  )
}

export default Ideia
