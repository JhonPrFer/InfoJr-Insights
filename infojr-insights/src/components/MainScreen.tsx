import * as S from '../styles/MainScreen'
import Header from './header/Header'
import Footer from '../components/footer/Footer'

const MainScreen = ({ children }: JSX.ElementChildrenAttribute)=>(

    <S.MainScreen>
        <Header />
        {children}
        <Footer />
    </S.MainScreen>
)

export default MainScreen