import * as S from './FormStyled'

const Form = () => (
  <S.Form>
    <form className="formulario">
      <label htmlFor="titulo_link" className="label">
        Título do link
        <input
          type="text"
          id="titulo_link"
          className="titulo_link input"
          placeholder="Escreva um título para o link"
          required
        />
      </label>
      <label htmlFor="categorias" className="label">
        Categorias
        <select
          name="categorias"
          id="categorias"
          className="categorias input"
          required
        >
          <option className="option" value="0">
            --
          </option>
          <option className="option" value="1">
            Site
          </option>
          <option className="option" value="2">
            Palestra
          </option>
          <option className="option" value="3">
            Curso
          </option>
          <option className="option" value="4">
            Livro
          </option>
        </select>
      </label>
      <label htmlFor="link_principal" className="label">
        Link principal
        <input
          type="url"
          id="link_principal"
          className="link_principal input"
          placeholder="Ex. https://www.linkutil.com"
          required
        />
      </label>
      <label htmlFor="link_secundario" className="label">
        Link secundário (opcional)
        <input
          type="url"
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
          required
        />
      </label>
      <input type="reset" value="Cancelar" className="btn_form btn_cancelar" />
      <input
        type="submit"
        value="Cadastrar"
        className="btn_form btn_cadastrar"
      />
    </form>
  </S.Form>
)

export default Form
