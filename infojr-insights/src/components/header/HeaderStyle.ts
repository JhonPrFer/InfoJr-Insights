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
  z-index: 1;

  .nav_desktop {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .header_link {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.6rem;
  }

  .header_link.ativo {
    color: #7cb124;
    font-weight: 700;
  }

  .header_link:hover {
    color: #badc41;
  }

  .btn {
    background: #7cb124;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .btn_menu {
    background: none;
    color: #fff;
    font-size: 1.5rem;
  }

  .btn_fechar {
    color: #7cb124;
  }

  .btn_abrir,
  .btn_fechar {
    cursor: pointer;
  }

  .header_btn {
    padding: 10px 25px;
    border-radius: 8px;
    font-size: 1.4rem;
    background: #7cb124;
    transition: 0.3s;
  }

  .header_btn:hover {
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
    .btn_fechar {
      display: none;
    }

    .nav_desktop.ativo .btn_abrir {
      display: none;
    }

    .nav_desktop.ativo .btn_fechar {
      display: block;
    }
  }
`
