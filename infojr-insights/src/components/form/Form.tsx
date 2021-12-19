import * as S from './FormStyled'

const Form = () => (
  <S.Form>
    <label htmlFor="titulo_link" className="label">
      Título do link
      <input
        type="text"
        id="titulo_link"
        className="titulo_link input"
        placeholder="Escreva um título para o link"
      />
    </label>
    <label htmlFor="categorias" className="label">
      Categorias
      <select name="categorias" id="categorias" className="categorias input">
        <option className="option" value="--">
          --
        </option>
        <option className="option" value="Site">
          Site
        </option>
        <option className="option" value="Palestra">
          Palestra
        </option>
        <option className="option" value="Curso">
          Curso
        </option>
        <option className="option" value="Livro">
          Livro
        </option>
      </select>
    </label>
    <label htmlFor="link_principal" className="label">
      Link principal
      <input
        type="text"
        id="link_principal"
        className="link_principal input"
        placeholder="Ex. https://www.linkutil.com"
      />
    </label>
    <label htmlFor="link_secundario" className="label">
      Link secundário (opcional)
      <input
        type="text"
        id="link_secundario"
        className="link_secundario input"
        placeholder="Escreva um link alternativo"
      />
    </label>
    <label htmlFor="descricao_link" className="label descricao_label">
      Digite uma descrição para este link
      <textarea
        name="descricao"
        id="descricao_link"
        className="descricao_link"
        placeholder="Escreva uma descrição"
      />
    </label>
  </S.Form>
)

export default Form
