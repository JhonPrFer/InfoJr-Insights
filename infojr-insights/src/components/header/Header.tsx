import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import * as S from './HeaderStyle'
import Logo from './images/Logo InfoJr.svg'

library.add(faBars, faTimes)

const Header = () => {
  function toggleMenu() {
    const modalMenu = document.querySelector('#modal_menu')
    const navMobile = document.querySelector('#nav_mobile')
    const navDesktop = document.querySelector('#nav_desktop')
    const body = document.querySelector('#body')
    modalMenu?.classList.toggle('ativo')
    navMobile?.classList.toggle('ativo')
    navDesktop?.classList.toggle('ativo')
    body?.classList.toggle('ativo')
  }

  function abrePag() {
    location.href = 'www.google.com'
  }
  return (
    <S.Header>
      <a className="header_logo" href="http://localhost:3000/#">
        <Image src={Logo} alt="Logo da info junior" />
      </a>
      <nav className="nav_desktop" id="nav_desktop">
        <a
          className="header_link ativo header-desktop"
          href="http://localhost:3000/#"
        >
          Inicio
        </a>
        <a className="header_link header-desktop" href="#">
          Todos os links
        </a>
        <button className="btn header_btn header-desktop" onClick={abrePag}>
          Adicionar link
        </button>
        <button
          className="btn_menu btn_menu-abrir header-mobile"
          aria-label="abrir menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon="bars" className="header-mobile btn_abrir" />
        </button>
        <button
          className="btn_menu btn_menu-fechar header-mobile"
          aria-label="fechar-menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon="times" className="header-mobile fechar-icon" />
        </button>
      </nav>
      <div className="modal_menu" id="modal_menu">
        <nav className="nav_mobile" id="nav_mobile">
          <a className="header_link ativo" href="http://localhost:3000/#">
            Inicio
          </a>
          <a className="header_link" href="#">
            Todos os links
          </a>
          <button className="btn header_btn" onClick={abrePag}>
            Adicionar link
          </button>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
