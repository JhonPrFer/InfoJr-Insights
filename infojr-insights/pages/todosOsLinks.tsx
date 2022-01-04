import Image from 'next/image'
import { useEffect, useState } from 'react'

import Prev from '../public/images/prev.svg'
import Prox from '../public/images/prox.svg'
import LinksGrid from '../src/components/linksGrid/LinksGrid'
import TodosOsLinksStyled from '../src/styles/TodosOsLinkStyled'

const TodosOsLinks = () => {
  const [linkPag, setLinkPag] = useState(1)
  const [ideias, setIdeias] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    fetch(`https://apinsights.herokuapp.com/insight/${filtro}`)
      .then(response => response.json())
      .then(json => setIdeias(json))
  }, [filtro])
  return (
    <TodosOsLinksStyled>
      <h2 className="titulo_pag">Todos os Links</h2>
      <section className="conteudo_pag">
        <label htmlFor="filtro" className="label_filtro">
          Filtro
          <select
            name="Filtro"
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            id="filtro"
            className="filtro"
          >
            <option className="filtro_option" selected value="">
              Todos
            </option>
            <option className="filtro_option" value="Front-end">
              Front-end
            </option>
            <option className="filtro_option" value="Back-end">
              Back-end
            </option>
            <option className="filtro_option" value="Mobile">
              Mobile
            </option>
            <option className="filtro_option" value="Design">
              Design
            </option>
            <option className="filtro_option" value="Mix">
              Miscelânea
            </option>
          </select>
        </label>
        <LinksGrid ideias={ideias} />
        <nav className="botoes_pag">
          <button
            className={
              linkPag === 1
                ? 'btn_links btn_muda-pag disable'
                : 'btn_links btn_muda-pag'
            }
            onClick={
              linkPag === 1
                ? () => setLinkPag(1)
                : () => setLinkPag(linkPag - 1)
            }
          >
            <Image src={Prev} />
          </button>
          <button
            className={
              linkPag === 6
                ? 'btn_links pag-atual btn_lastpag'
                : 'btn_links pag-atual'
            }
          >
            {linkPag}
          </button>
          <p className="nav_index">of</p>
          <button
            className="btn_links btn_lastpag"
            onClick={() => setLinkPag(6)}
          >
            6
          </button>
          <button
            className={
              linkPag === 6
                ? 'btn_links btn_muda-pag disable'
                : 'btn_links btn_muda-pag'
            }
            onClick={
              linkPag === 6
                ? () => setLinkPag(6)
                : () => setLinkPag(linkPag + 1)
            }
          >
            <Image src={Prox} />
          </button>
        </nav>
      </section>
    </TodosOsLinksStyled>
  )
}

export default TodosOsLinks
