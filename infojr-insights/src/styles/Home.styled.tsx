import styled from 'styled-components'

const Home = styled.div`
  .home {
    display: grid;
    grid-template-columns: 315px auto;
    padding: calc(164px + 83px) 12%;
    background: #1a1c17;
    column-gap: 80px;
    color: #fff;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    .home {
      grid-template-columns: auto;
      row-gap: 50px;
      padding: calc(100px + 60px) 12%;
    }
  }

  @media (max-width: 720px) {
    .home {
      grid-template-columns: auto;
      padding: calc(100px + 60px) 12%;
    }
  }
`

export default Home
