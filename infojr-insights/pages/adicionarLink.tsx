import { NextPage } from 'next'
import Image from 'next/image'

import Close from '../public/images/Close.svg'
import Form from '../src/components/form/Form'
import AdicionarLinkStyled from '../src/styles/AdicionarLinkStyled'

const AdicionarLink: NextPage = () => (
  <AdicionarLinkStyled>
    <div className="popup">
      <div className="popup_conteudo">
        <Image src={Close} />
        <p className="popup_text"> Link cadastrado com sucesso</p>
      </div>
      <div className="loading_container">
        <div className="loading" />
      </div>
    </div>
    <h2 className="titulo_pag">Adicionar Link</h2>
    <Form />
  </AdicionarLinkStyled>
)

export default AdicionarLink
