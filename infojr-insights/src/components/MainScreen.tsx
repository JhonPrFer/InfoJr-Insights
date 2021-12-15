import * as S from '../styles/MainScreen'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainScreen = ({ children }: JSX.ElementChildrenAttribute) => (
  <S.MainScreen>
    <Header />
    {children}
    <Footer />
  </S.MainScreen>
)

export default MainScreen
