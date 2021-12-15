import Image from 'next/image'

import * as S from './FooterStyle'
import Behance from './images/Icon_Behance.svg'
import Dribble from './images/Icon_Dribble.svg'
import Facebook from './images/Icon_Facebook.svg'
import Instagram from './images/Icon_Instagram.svg'
import Linkedin from './images/Icon_Linkedin.svg'
import Spotify from './images/Icon_Spotify.svg'
import Youtube from './images/Icon_Youtube.svg'
import Logo from './images/Logo InfoJr.svg'

const Footer = () => (
  <S.Footer>
    <S.FooterCima>
      <a className="logo_footer" href="www.google.com">
        <Image src={Logo} alt="Logo" />
      </a>
      <div className="redes_sociais">
        <a className="footer_link" href="www.google.com">
          <Image src={Linkedin} alt="Linkedin" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Behance} alt="Behance" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Dribble} alt="Dribble" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Instagram} alt="Instagram" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Facebook} alt="Facebook" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Youtube} alt="Youtube" />
        </a>
        <a className="footer_link" href="www.google.com">
          <Image src={Spotify} alt="Spotify" />
        </a>
      </div>
    </S.FooterCima>
    <S.FooteBaixo>
      <p className="footer_info">
        <span className="span">Email</span>: contato@infojr.com.br |{' '}
        <span className="span">Telefone</span>: 71 3283-6268
      </p>
      <p className="footer_info">
        Copyright @ 2020 INFO JR UFBA - Av. Adhemar de Barros, Ondina –
        Instituto de computação da UFBA
      </p>
    </S.FooteBaixo>
  </S.Footer>
)

export default Footer
