import Image from 'next/image'

import * as S from './HeaderStyle'
import Logo from './images/Logo InfoJr.svg'

const Header = () => {
  function toggleMenu() {
    const nav = document.querySelector('#nav')
    const header = document.querySelector('#header')
    nav?.classList.toggle('ativo')
    header?.classList.toggle('ativo')
  }
  return (
    <S.Header id="header">
      <a className="header_logo" href="www.google.com">
        <Image src={Logo} alt="Logo da info junior" />
      </a>
      <nav className="nav_desktop">
        <a className="header_link ativo header-desktop" href="www.google.com">
          Inicio
        </a>
        <a className="header_link header-desktop" href="www.google.com">
          Todos os links
        </a>
        <button className="btn header_btn header-desktop">
          Adicionar link
        </button>
        <button className="header-mobile btn_menu " onClick={toggleMenu}>
          menu
        </button>
        <button
          className="header-mobile btn_fechar invisivel"
          onClick={toggleMenu}
        >
          fechar
        </button>
      </nav>
      <nav className="nav_mobile ativo" id="nav">
        <a className="header_link ativo" href="www.google.com">
          Inicio
        </a>
        <a className="header_link" href="www.google.com">
          Todos os links
        </a>
        <button className="btn header_btn">Adicionar link</button>
      </nav>
    </S.Header>
  )
}

export default Header
