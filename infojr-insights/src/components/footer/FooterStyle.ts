import styled from "styled-components";

export const Footer = styled.footer`
`

export const FooterCima = styled.section`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    background: #252822;
    padding: 75px 350px;

    .redes_sociais{
        display: flex;
        gap: 25px;
    }

    .footer_link{
        width: 45px;
    }
`

export const FooteBaixo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #191919;
    color: #fff;
    text-align:center;
    padding: 35px 0; 

    .span{
        font-weight: 700;
    }

`