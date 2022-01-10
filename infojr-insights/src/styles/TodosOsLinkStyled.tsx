import styled from 'styled-components'

const TodosOsLinksStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(83px + 120px) 12% 80px;
  background-color: #1a1c17;
  color: #fff;

  .titulo_pag {
    color: #badc41;
    font-size: 3.6rem;
  }

  .conteudo_pag {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 50px;
    align-items: flex-end;
  }

  .label_filtro {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.6rem;
  }

  .filtro {
    box-sizing: border-box;
    width: 290px;
    padding: 10px;
    color: #fff;
    background: #363636;
    font-size: 1.6rem;
    border-radius: 5px;
  }

  .filtro_option {
    font-size: 1.6rem;
  }

  .filtro:focus {
    outline: 1px solid #badc41;
  }

  .botoes_pag {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btn_links {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border-radius: 6px;
    background: none;
    color: #bcbcbb;
    font-size: 1.6rem;
    border: 1px solid #bcbcbc;
    cursor: pointer;
  }

  .btn_muda-pag:hover {
    background: #7cb124;
    transition: 0.3s;
  }

  .btn_muda-pag.disable,
  .btn_muda-pag.disable:hover {
    cursor: auto;
    background: none;
  }

  .btn_lastpag {
    background: #7cb124;
    color: #fff;
    border: 1px solid #badc41;
    transition: 0.3s;
  }
  .nav_index {
    width: 60px;
    font-size: 1.6rem;
    font-weight: 800;
    color: #bcbcbc;
    text-align: center;
  }

  .pag-atual {
    cursor: auto;
  }

  @media (max-width: 720px) {
    .conteudo_pag {
      align-items: center;
    }
    .botoes_pag {
      gap: 10px;
    }

    .btn_links {
      width: 50px;
      height: 50px;
    }

    .nav_index {
      width: 50px;
    }
  }
`
export default TodosOsLinksStyled
