import styled from 'styled-components'

const PagIdeiaStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 83px;
  color: #fff;
  background: #1a1c17;

  .ideia_img {
    align-self: center;
    max-height: 600px;
    max-width: 100%;
  }
  .conteudo_ideia {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 12% 160px;
    gap: 80px;
  }

  .titulo_ideia {
    font-size: 3.6rem;
    color: #badc41;
    text-align: center;
  }

  .descricao_ideia {
    font-size: 1.6rem;
  }

  .btn_ideia {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 44px;
    padding: 10px 100px;
  }

  .btn_ideia:hover {
    background: #badc41;
  }

  .btn_ideia:focus {
    background: #badc41;
    outline: 3px solid #7cb124;
  }
  @media (max-width: 720px) {
    padding-top: 60px;
  }
`

export default PagIdeiaStyled
