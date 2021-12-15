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
        <a
          className="footer_link"
          target="_blank"
          href="https://www.linkedin.com/company/infojrufba/mycompany/"
          rel="noreferrer"
        >
          <Image src={Linkedin} alt="Linkedin" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://www.behance.net/infojrufba"
          rel="noreferrer"
        >
          <Image src={Behance} alt="Behance" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://dribbble.com/UFBA/shots"
          rel="noreferrer"
        >
          <Image src={Dribble} alt="Dribble" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://www.instagram.com/infojrufba/"
          rel="noreferrer"
        >
          <Image src={Instagram} alt="Instagram" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://pt-br.facebook.com/infojrnews"
          rel="noreferrer"
        >
          <Image src={Facebook} alt="Facebook" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://www.youtube.com/channel/UCI4tVJVwzFNHWQdiVi9Iv9w"
          rel="noreferrer"
        >
          <Image src={Youtube} alt="Youtube" />
        </a>
        <a
          className="footer_link"
          target="_blank"
          href="https://open.spotify.com/show/5Un3AxZIPep1k4lsOfQMfy"
          rel="noreferrer"
        >
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
