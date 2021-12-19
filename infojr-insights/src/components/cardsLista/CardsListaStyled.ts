import styled from 'styled-components'

export const CardsLista = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: auto;
  grid-column: 2;
  max-height: 600px;
  max-width: 1500px;
  padding: 20px;

  .card {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: '...';
  }

  .card_descricao {
    max-height: 90px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: '...';
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
  }

  .card_link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #5a880e;
    transition: width 0.3s;
  }

  .card_link:hover::after {
    width: 110%;
  }

  .card_link:focus::after {
    width: 110%;
  }

  @media (max-width: 1200px) {
    .card_image {
      display: none;
    }

    @media (max-width: 1000px) {
      grid-column: 1;
    }
  }
`
