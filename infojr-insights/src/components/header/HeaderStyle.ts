/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 12%;
  height: max-content;
  background: #191919;
  z-index: 2;

  .nav_desktop {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .header_link {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.6rem;
  }

  .ativo {
    color: #7cb124;
    font-weight: 700;
  }

  .header_link:hover {
    color: #badc41;
  }

  .header_link:focus {
    color: #badc41;
  }

  .link-btn {
    background: #7cb124;
    padding: 10px 25px;
    border-radius: 8px;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;
  }

  .btn_menu {
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
  }

  .btn_fechar {
    color: #7cb124;
  }
  .link-btn:hover {
    background: #5a880e;
  }

  .link-btn:focus {
    outline: 0;
    background: #5a880e;
  }

  .nav_mobile {
    display: none;
  }

  .modal_menu,
  .header-mobile {
    display: none;
  }

  @media (max-width: 720px) {
    height: 60px;
    background: #1a1c17;
    .header_logo {
      width: 60px;
    }

    .header-desktop {
      display: none;
    }

    .header-mobile {
      display: block;
    }

    .modal_menu {
      display: flex;
      justify-content: center;
      position: fixed;
      visibility: hidden;
      justify-content: center;
      top: 60px;
      left: 0;
      width: 100vw;
      height: 0;
      background-color: rgba(26, 28, 23, 0.6);
      backdrop-filter: blur(4px);
      z-index: 1;
      transition: 0.4s;
    }

    .modal_menu.ativo {
      visibility: visible;
      height: 100vh;
    }

    .nav_mobile {
      display: flex;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: -400px;
      gap: 30px;
      width: max-content;
      height: max-content;
      background: #252822;
      padding: 76px 62px;
      border-radius: 12px;
      transition: 0.4s;
    }

    .nav_mobile.ativo {
      visibility: visible;
      top: 60px;
    }
    .btn_menu-fechar {
      display: none;
    }

    .nav_desktop.ativo .btn_menu-abrir {
      display: none;
    }

    .nav_desktop.ativo .btn_menu-fechar {
      display: block;
      color: #7cb124;
    }

    .fechar-icon {
      color: #7cb124;
    }
  }
`
