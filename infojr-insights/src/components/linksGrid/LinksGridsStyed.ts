import styled from 'styled-components'

export const LinksGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 25px;

  .card {
    column-gap: 10px;
  }

  @media (max-width: 900px) {
    .card_image {
      display: none;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: auto;
  }
`
