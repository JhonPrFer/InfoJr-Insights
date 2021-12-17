import styled from 'styled-components'

const HomeStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: calc(164px + 90px) 12%;
  background: #1a1c17;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 80px;
  color: #fff;

  @media (max-width: 720px) {
    justify-content: center;
    grid-template-columns: auto;
    padding: calc(100px + 60px) 12%;
  }
`

export default HomeStyled
