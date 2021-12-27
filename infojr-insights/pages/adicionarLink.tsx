import { NextPage } from 'next'
import Image from 'next/image'

import Close from '../public/images/Close.svg'
import Form from '../src/components/form/Form'
import AdicionarLinkStyled from '../src/styles/AdicionarLinkStyled'

const AdicionarLink: NextPage = () => (
  <AdicionarLinkStyled>
    <div className="popup">
      <Image src={Close} />
      <p className="popup_text"> Link cadastrado com sucesso</p>
    </div>
    <h2 className="titulo_pag">Adicionar Link</h2>
    <Form />
  </AdicionarLinkStyled>
)

export default AdicionarLink
