import { NextPage } from 'next'

import Form from '../src/components/form/Form'
import AdicionarLinkStyled from '../src/styles/AdicionarLinkStyled'

const AdicionarLink: NextPage = () => (
  <AdicionarLinkStyled>
    <h2 className="titulo_pag">Adicionar Link</h2>
    <Form />
  </AdicionarLinkStyled>
)

export default AdicionarLink
