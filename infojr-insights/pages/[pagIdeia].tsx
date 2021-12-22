import { NextPage } from 'next'

import Ideia from '../src/components/ideia/Ideia'
import PagIdeiaStyled from '../src/styles/PagIdeiaStyled'

const PagIdeia: NextPage = () => (
  <PagIdeiaStyled>
    <Ideia />
  </PagIdeiaStyled>
)
export default PagIdeia
