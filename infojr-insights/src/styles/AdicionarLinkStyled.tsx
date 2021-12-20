import styled from 'styled-components'

const AdicionarLinkStyled = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: calc(80px + 90px) 12%;
  background: #1a1c17;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
  gap: 40px;

  .titulo_pag {
    color: #badc41;
    font-size: 3.6rem;
  }

  @media (max-width: 720px) {
    gap: 60px;
    padding: calc(60px + 70px) 12%;
    .titulo_pag {
      font-size: 2.4rem;
    }
  }
`

export default AdicionarLinkStyled
