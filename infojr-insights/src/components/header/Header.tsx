import Image from 'next/image'

import * as S from './HeaderStyle'
import Logo from './images/Logo InfoJr.svg'

const Header = () => {
  function toggleMenu() {
    const navMobile = document.querySelector('#nav_mobile')
    const navDesktop = document.querySelector('#nav_desktop')
    const body = document.querySelector('#body')
    navMobile?.classList.toggle('ativo')
    navDesktop?.classList.toggle('ativo')
    body?.classList.toggle('ativo')
  }
  return (
    <S.Header>
      <a className="header_logo" href="www.google.com">
        <Image src={Logo} alt="Logo da info junior" />
      </a>
      <nav className="nav_desktop" id="nav_desktop">
        <a className="header_link ativo header-desktop" href="www.google.com">
          Inicio
        </a>
        <a className="header_link header-desktop" href="www.google.com">
          Todos os links
        </a>
        <button className="btn header_btn header-desktop">
          Adicionar link
        </button>
        <button className="header-mobile btn_menu" onClick={toggleMenu}>
          menu
        </button>
        <button className="header-mobile btn_fechar" onClick={toggleMenu}>
          fechar
        </button>
      </nav>
      <nav className="nav_mobile" id="nav_mobile">
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
