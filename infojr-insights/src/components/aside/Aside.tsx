import Image from 'next/image'

import * as S from './AsideStyle'
import Logo from './images/Logo.svg'

const Aside = () => (
  <S.Aside>
    <Image src={Logo} alt="" />
  </S.Aside>
)

export default Aside
