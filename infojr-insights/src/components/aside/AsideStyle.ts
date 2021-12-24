import styled from 'styled-components'

export const Aside = styled.aside`
  display: grid;
  grid-template-columns: 315px;
  grid-column: span 1;
  width: max-content;
  gap: 40px;
  justify-content: flex-start;

  .aside_texto {
    display: grid;
    gap: 30px;
    font-weight: 400;
  }

  .aside_paragrafo,
  .span_aside {
    font-size: 1.6rem;
  }
  .span_aside {
    color: #7cb124;
  }

  .botoes {
    display: grid;
    gap: 12px;
  }

  .link_aside {
    width: 100%;
    padding: 10px 0;
    border: 2px solid #7cb124;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link_aside:hover {
    background: #badc41;
    border: 2px solid #badc41;
  }
  .link_aside:focus {
    background-color: #badc41;
    outline: 0;
  }
  .link_ver-todos {
    background: none;
    border: 2px solid #7cb124;
  }

  .link_ver-todos:hover {
    background: #badc41;
    border: 2px solid #badc41;
  }

  .link_ver-todos:focus {
    outline: 0;
    background: #badc41;
    border: 2px solid #7cb124;
  }

  .aside_end {
    justify-self: center;
    font-size: 1.4rem;
  }

  .aside_end_span {
    color: #7cb124;
    font-weight: 700;
    font-size: 1.4rem;
  }

  @media (max-width: 1000px) {
    justify-self: center;
  }

  @media (max-width: 720px) {
    grid-template-columns: 280px;
  }
`
