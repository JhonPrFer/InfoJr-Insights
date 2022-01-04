import Image from 'next/image'
import { useEffect, useState } from 'react'

import * as S from './FormStyled'
import Close from './images/Close.svg'

const Form = () => {
  const [popupState, setpopupState] = useState(false)

  function popupTime() {
    setInterval(() => {
      setpopupState(false)
    }, 4000)
  }
  useEffect(() => {
    if (popupState) popupTime()
  })

  return (
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
            <option className="option" selected disabled value="--">
              --
            </option>
            <option className="option" value="Front-end">
              Front-end
            </option>
            <option className="option" value="Back-end">
              Back-end
            </option>
            <option className="option" value="Mobile">
              Mobile
            </option>
            <option className="option" value="Design">
              Design
            </option>
            <option className="option" value="Mix">
              Miscelânea
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
        <input
          type="reset"
          value="Cancelar"
          className="btn_form btn_cancelar"
        />
        <input
          type="submit"
          value="Cadastrar"
          className="btn_form btn_cadastrar"
          onClick={() => setpopupState(true)}
        />
      </form>
      <div className={popupState ? 'popup ativo' : 'popup'}>
        <div className="popup_conteudo">
          <button
            className="btn_fechar-popup"
            onClick={() => setpopupState(false)}
          >
            <Image src={Close} />
          </button>
          <p className="popup_text"> Link cadastrado com sucesso</p>
        </div>
        <div className="loading_container">
          <div className={popupState ? 'loading ativo' : 'loading'} />
        </div>
      </div>
    </S.Form>
  )
}

export default Form
