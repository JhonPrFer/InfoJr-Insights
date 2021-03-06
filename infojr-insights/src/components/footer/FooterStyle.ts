import styled from 'styled-components'

export const Footer = styled.footer``

export const FooterCima = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: #252822;
  padding: 75px 12%;
  gap: 30px;

  .redes_sociais {
    display: flex;
    gap: 25px;
  }

  .footer_link {
    width: 45px;
    border-radius: 30px;
  }

  .footer_link:hover {
    filter: drop-shadow(0px 0px 10px #5a880e);
  }

  .footer_link:focus {
    outline: 0;
    filter: drop-shadow(0px 0px 10px #5a880e);
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 54px 0;
  }

  @media (max-width: 720px) {
    .logo_footer {
      width: 135px;
    }

    .redes_sociais {
      gap: 18px;
    }

    .footer_link {
      width: 27px;
      border-radius: 18px;
    }
  }
`

export const FooteBaixo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #191919;
  color: #fff;
  align-items: center;
  text-align: center;
  padding: 35px 0;

  .footer_info {
    font-size: 1.6rem;
    width: max-content;
  }

  .span_footer {
    font-size: 1.6rem;
    font-weight: 700;
  }

  @media (max-width: 950px) {
    gap: 25px;

    .footer_info {
      width: 80%;
    }
  }
`
