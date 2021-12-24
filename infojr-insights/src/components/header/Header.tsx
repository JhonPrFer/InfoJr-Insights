import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './HeaderStyle'
import Logo from './images/Logo InfoJr.svg'

library.add(faBars, faTimes)

const Header = () => {
  function toggleMenu(): void {
    const modalMenu = document.querySelector('#modal_menu')
    const navMobile = document.querySelector('#nav_mobile')
    const navDesktop = document.querySelector('#nav_desktop')
    const body = document.querySelector('#body')
    modalMenu?.classList.toggle('ativo')
    navMobile?.classList.toggle('ativo')
    navDesktop?.classList.toggle('ativo')
    body?.classList.toggle('ativo')
  }

  const router = useRouter()

  return (
    <S.Header>
      <Link as="/" href="/">
        <a className="header_logo" id="logo_link" href="/">
          <Image src={Logo} alt="Logo da info junior" />
        </a>
      </Link>
      <nav className="nav_desktop" id="nav_desktop">
        <Link as="/" href="/">
          <a
            className={
              router.pathname === '/'
                ? 'ativo header_link header-desktop'
                : 'header_link header-desktop'
            }
            href="/#"
          >
            Início
          </a>
        </Link>
        <Link as="/todosOsLinks" href="/todosOsLinks">
          <a
            className={
              router.pathname === '/todosOsLinks'
                ? 'ativo header_link header-desktop'
                : 'header_link header-desktop'
            }
            href="/todosOsLinks"
          >
            Todos os links
          </a>
        </Link>
        <Link as="/adicionarLink" href="/adicionarLink">
          <a className="link-btn header-desktop" href="/adicionarLink">
            Adicionar link
          </a>
        </Link>
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
          <Link as="/" href="/">
            <a
              className={
                router.pathname === '/' ? 'ativo header_link' : 'header_link'
              }
              onClick={toggleMenu}
              href="/"
            >
              Início
            </a>
          </Link>
          <Link as="/todosOsLinks" href="/todosOsLinks">
            <a
              className={
                router.pathname === '/todosOsLinks'
                  ? 'ativo header_link'
                  : 'header_link'
              }
              onClick={toggleMenu}
              href="/todosOsLinks"
            >
              Todos os links
            </a>
          </Link>
          <Link as="/adicionarLink" href="/adicionarLink">
            <a
              className="link-btn"
              id="header_link"
              onClick={toggleMenu}
              href="/adicionarLink"
            >
              Adicionar link
            </a>
          </Link>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
