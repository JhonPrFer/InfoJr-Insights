import Image from 'next/image'
import Link from 'next/link'

import * as S from './AsideStyle'
import Logo from './images/Logo.svg'

const Aside = () => (
  <S.Aside>
    <h1 className="aside_logo">
      <Image src={Logo} alt="Info junior insights" />
    </h1>
    <h2 className="aside_texto">
      <p className="aside_paragrafo">
        A internet possibilita o infinito acesso a todo tipo de conhecimento
      </p>
      <p className="aside_paragrafo">
        Por isso, iremos catalogar ideias, sites, cursos, aulas, livros,
        assuntos, palestras, toda sorte de links que sejam úteis e bons para
        conhecimento
      </p>
      <p className="aside_paragrafo">
        Comece a contribuir clicando no botão “
        <span className="span_aside">adicionar link</span>”.
      </p>
    </h2>
    <div className="botoes">
      <Link as="/adicionarLink" href="/adicionarLink" passHref>
        <p className=" btn link_aside">Adicionar link</p>
      </Link>
      <Link as="/todosOsLinks" href="/todosOsLinks" passHref>
        <p className=" btn link_aside link_ver-todos">Ver todos os links</p>
      </Link>
    </div>
    <p className="aside_end">
      Feito com 💚
      <span className="aside_end_span"> Info Jr UFBA </span>
    </p>
  </S.Aside>
)

export default Aside
