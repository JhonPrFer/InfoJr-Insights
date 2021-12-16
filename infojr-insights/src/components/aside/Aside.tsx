import Image from 'next/image'

import * as S from './AsideStyle'
import Logo from './images/Logo.svg'

const Aside = () => (
  <S.Aside>
    <div className="aside_logo">
      <Image src={Logo} alt="" />
    </div>
    <div className="aside_texto">
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
    </div>
    <div className="botoes">
      <button className="btn btn_aside">Adicionar link</button>
      <button className="btn btn_aside btn_ver-todos">
        Ver todos os links
      </button>
    </div>
    <p className="aside_end">
      Feito com 💚
      <span className="aside_end_span"> Info Jr UFBA </span>
    </p>
  </S.Aside>
)

export default Aside
