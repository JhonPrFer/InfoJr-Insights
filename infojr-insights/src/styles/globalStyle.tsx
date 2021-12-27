import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  font-family: 'poppins', sans serif;
  scroll-behavior: smooth;
  font-size: 10px;
    
  .body.ativo{
    overflow: hidden;
  }

  .btn {
    background: #7cb124;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.6rem;
    transition: 0.3s;
    border-radius: 30px;
    color: #fff;
  }

  .card {
    width: 100%;
    height: 187px;
    display: grid;
    grid-template-columns: auto 1fr;
    box-sizing: border-box;
    max-width: 840px;
    column-gap: 30px;
    row-gap: 5px;
    background-color: #252822;
    padding: 25px;
    border-radius: 10px;
    align-self: center;
  }

  .card:hover {
    box-shadow: 0px 0px 20px #5a880e;
  }

  .card_image {
    grid-column: 1;
    grid-row: span 4;
    align-self: center;
  }

  .card_titulo,
  .card_categoria,
  .card_descricao,
  .card_link {
    grid-column: 2;
    margin-bottom: 5px;
    font-size: 1.6rem;
  }

  .card_titulo {

    overflow: hidden;
    text-overflow: '...';
  }

  .card_descricao {
    max-height: 40px;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card_categoria {
    color: #a0a4a8;
  }

  .card_link {
    color: #7cb124;
    font-weight: 700;
    width: max-content;
    padding: 0 10px 2px 0;
    margin-bottom: 0;
    outline: 0;
    cursor: pointer;
  }

  .card_link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #5a880e;
    transition: width 0.3s;
  }

  .card_link:hover::after,
  .card_link:focus::after {
    width: 110%;
  }
}
`
