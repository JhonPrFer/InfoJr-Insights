import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    font-family: 'poppins', sans serif;
    scroll-behavior: smooth;
    font-size: 10px;
    
    .body.ativo{
        overflow: hidden;
    }

  .btn {
    background: #7cb124;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.6rem;
    transition: 0.3s;
    border-radius: 30px;
    color: #fff;
  }

}
`
