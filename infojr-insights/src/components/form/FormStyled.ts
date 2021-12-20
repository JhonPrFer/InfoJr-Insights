import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  .formulario {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    row-gap: 50px;
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.6rem;
  }

  .input {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    background: #363636;
    border-radius: 5px;
    padding: 10px;
    color: #eee;
    font-size: 1.6rem;
  }

  .input:focus,
  .descricao_link:focus {
    outline: 1px solid #badc41;
  }

  .input::placeholder {
    color: #eee;
  }

  .categorias {
  }

  .option {
    font-size: 1.6rem;
    color: #fff;
    margin-top: 10px;
  }

  .descricao_label {
    grid-column: 1/3;
  }

  .descricao_link {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.6rem;
    color: #eee;
    background: #363636;
    resize: none;
  }

  .descricao_link::placeholder {
    font-size: 1.6rem;
    color: #eee;
  }

  .btn_form {
    box-sizing: border-box;
    height: 54px;
    padding: 15px 40px;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 20px;
  }

  .btn_cancelar {
    background: none;
    color: #ff5555;
    font-size: 1.6rem;
    border: 1px solid #ff5555;
    width: 154px;
  }

  .btn_cancelar:hover {
    background-color: #ff5555;
    color: #fff;
    transition: 0.3s;
  }

  .btn_cancelar:focus {
    background-color: #ff5555;
    color: #fff;
    outline: 3px solid #da2b2b;
  }

  .btn_cancelar:disabled {
    border: 1px solid #c8c8c8;
    background: none;
    color: #f3f3f3;
  }
  .btn_cadastrar {
    background: #7cb124;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    width: 164px;
    justify-self: flex-end;
  }

  .btn_cadastrar:hover {
    transition: 0.3s;
    background-color: #badc41;
  }

  .btn_cadastrar:focus {
    background-color: #badc41;
    outline: 3px solid #7cb124;
  }

  .btn_cadastrar:disabled {
    background-color: #f3f3f3;
    color: #c8c8c8;
  }

  @media (max-width: 720px) {
    .formulario {
      grid-template-columns: auto;
      row-gap: 10px;
      justify-content: center;
    }

    .label {
      width: 100%;
      margin-top: 20px;
    }

    .descricao_label {
      grid-column: span 1;
    }

    .btn_form {
      width: 283px;
      justify-self: center;
      margin-top: 0px;
    }

    .btn_cadastrar {
      grid-row: 6;
      margin-top: 20px;
    }
  }
`
