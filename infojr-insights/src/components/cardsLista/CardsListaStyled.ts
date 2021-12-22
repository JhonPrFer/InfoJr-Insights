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

  @media (max-width: 1000px) {
    grid-column: 1;
    .card_image {
      display: none;
    }
  }
`
