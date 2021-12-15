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

  .header_link.ativo,
  .header_link:hover {
    color: #7cb124;
    font-weight: 700;
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

  .btn_abrir,
  .btn_fechar {
    cursor: pointer;
  }

  .header_btn {
    padding: 10px 25px;
    border-radius: 8px;
    font-size: 1.4rem;
    background: #191919;
    border: 1px solid #7cb124;
    transition: 0.3s;
  }

  .header_btn:hover {
    background: #7cb124;
  }

  .nav_mobile {
    display: none;
  }

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

    .nav_mobile {
      position: fixed;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 100px;
      top: 60px;
      left: 0px;
      width: 100vw;
      height: 0;
      display: flex;
      background-color: #191919;
      z-index: 1;
      overflow: auto;
      transition: 0.5s;
    }

    .nav_mobile.ativo {
      visibility: visible;
      height: 100vh;
    }

    .header_link {
      font-size: 2.6rem;
    }

    .header_btn {
      font-size: 2rem;
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
