import { NextPage } from 'next'
import Head from 'next/head'

import Form from '../src/components/form/Form'
import AdicionarLinkStyled from '../src/styles/AdicionarLinkStyled'

const AdicionarLink: NextPage = () => (
  <AdicionarLinkStyled>
    <Head>
      <title>InfoJr Insights</title>
    </Head>
    <h2 className="titulo_pag">Adicionar Link</h2>
    <Form />
  </AdicionarLinkStyled>
)

export default AdicionarLink
