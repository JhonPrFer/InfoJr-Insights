import styled from 'styled-components'

const Home = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: calc(164px + 90px) 12%;
  background: #1a1c17;
  display: grid;
  grid-template-columns: 315px 50%;
  column-gap: 80px;
  color: #fff;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    row-gap: 50px;
    padding: calc(100px + 60px) 12%;
  }

  @media (max-width: 720px) {
    grid-template-columns: auto;
    padding: calc(100px + 60px) 12%;
  }
`

export default Home
