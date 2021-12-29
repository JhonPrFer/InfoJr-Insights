import styled from 'styled-components'

const AdicionarLinkStyled = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: calc(80px + 90px) 12%;
  background: #1a1c17;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
  gap: 40px;

  .titulo_pag {
    color: #badc41;
    font-size: 3.6rem;
  }

  .popup {
    position: absolute;
    width: 100%;
    top: 83px;
    right: 0;
  }

  .popup_conteudo {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    top: 86px;
    padding: 20px 12% 15px;
    background: #7cb124;
    align-items: center;
    gap: 25px;
  }

  .popup_text {
    font-size: 1.4rem;
    color: #fff;
  }

  .loading_container {
    background-color: #728911;
  }

  .loading {
    width: 100%;
    height: 5px;
    background-color: #badc41;
    animation: loading 3s forwards;
  }

  @keyframes loading {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    gap: 60px;
    padding: calc(60px + 70px) 12%;
    .titulo_pag {
      font-size: 2.4rem;
    }
  }
`

export default AdicionarLinkStyled
