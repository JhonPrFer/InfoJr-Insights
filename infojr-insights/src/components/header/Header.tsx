import Image from "next/image";

import * as S from "./HeaderStyle";
import Logo from "./images/Logo InfoJr.svg";

const Header = () =>{
    return (
        <S.Header>
            <Image src={Logo} alt="Logo da info junior"/>
            <nav className="nav">
                <a className="header_link ativo" href="#">Inicio</a>
                <a className="header_link" href="#">Todos os links</a>
                <button className="btn header_btn">Adicionar link</button>
            </nav>
        </S.Header>
    )
}

export default Header;