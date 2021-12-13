import styled from "styled-components"

export const Header = styled.header`
    box-sizing: border-box;    
    display: flex;
    width :100%;
    align-items: center;
    justify-content: space-between;
    padding: 15px 350px;
    height: max-content;
    background: #191919;

    .nav{
        display: flex;
        gap: 30px;
        align-items: center;
    }

    .header_link{
        color: rgba(255, 255, 255, 0.5);
    }

    .header_link.ativo, .header_link:hover{
        color: #7CB124;
        font-weight:700;
    }

    .btn{
        background: #7CB124;
        color: #fff;
        font-weight:600;
        cursor: pointer;
    }

    .header_btn{
        padding: 10px 25px;
        border-radius:8px;
    }

   


`
