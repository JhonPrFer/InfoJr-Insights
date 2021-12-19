import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  row-gap: 50px;

  .label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.6rem;
  }

  .descricao_label {
    grid-column: 1/3;
  }

  .descricao_link {
    resize: none;
    background: #363636;
    border-radius: 5px;
    padding: 10px 0 165px 10px;
    color: #eee;
    font-size: 1.6rem;
    outline: 0;
  }

  .descricao_link::placeholder {
    color: #eee;
    font-size: 1.6rem;
  }

  .input {
    width: 100%;
    box-sizing: border-box;
    height: 44px;
    background: #363636;
    border-radius: 5px;
    outline: 0;
    padding: 10px;
    color: #eee;
    font-size: 1.6rem;
  }

  .input::placeholder {
    color: #eee;
  }

  .option {
    font-size: 1.6rem;
    color: #fff;
  }
`
