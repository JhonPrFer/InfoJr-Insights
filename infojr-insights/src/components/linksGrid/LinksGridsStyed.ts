import styled from 'styled-components'

export const LinksGrid = styled.article`
  display: grid;
  grid-template-columns: 50% 50%;
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
