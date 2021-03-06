/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import * as S from './HeaderStyle'
import Logo from './images/Logo InfoJr.svg'

library.add(faBars, faTimes)

const Header = () => {
  const [menuAtivo, setMenuAtivo] = useState(false)
  const router = useRouter()

  return (
    <S.Header>
      <Link as="/" href="/" passHref>
        <h1 className="header_logo">
          <Image src={Logo} alt="Logo da info junior" />
        </h1>
      </Link>
      <nav className={menuAtivo ? 'nav_desktop ativo' : 'nav_desktop'}>
        <Link as="/" href="/" passHref>
          <p
            className={
              router.pathname === '/'
                ? 'ativo header_link header-desktop'
                : 'header_link header-desktop'
            }
          >
            Início
          </p>
        </Link>
        <Link as="/todosOsLinks" href="/todosOsLinks" passHref>
          <p
            className={
              router.pathname === '/todosOsLinks'
                ? 'ativo header_link header-desktop'
                : 'header_link header-desktop'
            }
          >
            Todos os links
          </p>
        </Link>
        <Link as="/adicionarLink" href="/adicionarLink" passHref>
          <p className="link-btn header-desktop">Adicionar link</p>
        </Link>
        <button
          className="btn_menu btn_menu-abrir header-mobile"
          aria-label="abrir menu"
          onClick={() => setMenuAtivo(!menuAtivo)}
        >
          <FontAwesomeIcon icon="bars" className="header-mobile btn_abrir" />
        </button>
        <button
          className="btn_menu btn_menu-fechar header-mobile"
          aria-label="fechar-menu"
          onClick={() => setMenuAtivo(!menuAtivo)}
        >
          <FontAwesomeIcon icon="times" className="header-mobile fechar-icon" />
        </button>
      </nav>
      <div className={menuAtivo ? 'modal_menu ativo' : 'modal_menu'}>
        <nav className={menuAtivo ? 'nav_mobile ativo' : 'nav_mobile'}>
          <Link as="/" href="/" passHref>
            <p
              className={
                router.pathname === '/' ? 'ativo header_link' : 'header_link'
              }
              onClick={() => setMenuAtivo(!menuAtivo)}
              id="mobile_link"
            >
              Início
            </p>
          </Link>
          <Link as="/todosOsLinks" href="/todosOsLinks" passHref>
            <p
              className={
                router.pathname === '/todosOsLinks'
                  ? 'ativo header_link'
                  : 'header_link'
              }
              onClick={() => setMenuAtivo(!menuAtivo)}
            >
              Todos os links
            </p>
          </Link>
          <Link as="/adicionarLink" href="/adicionarLink" passHref>
            <p className="link-btn" onClick={() => setMenuAtivo(!menuAtivo)}>
              Adicionar link
            </p>
          </Link>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
