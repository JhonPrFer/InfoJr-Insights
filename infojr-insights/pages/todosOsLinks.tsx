import { NextPage } from 'next'

import TodosOsLinksStyled from '../src/styles/TodosOsLinkStyled'

const TodosOsLinks: NextPage = () => (
  <TodosOsLinksStyled>
    <h2 className="titulo_pag">Todos os Links</h2>
    <section className="conteudo_pag">
      <label htmlFor="filtro">
        Filtro
        <select name="Filtro" id="filtro">
          <option value="0">Todos</option>
          <option value="1">Site</option>
          <option value="2">Palestra</option>
          <option value="3">Curso</option>
          <option value="3">Livro</option>
        </select>
      </label>
      <nav className="botoes_pag">
        <button>voltar</button>
        <p>1</p>
        <p>of</p>
        <button className=''>6</button>
        <button>prox</button>
      </nav>
    </section>
  </TodosOsLinksStyled>
)

export default TodosOsLinks
