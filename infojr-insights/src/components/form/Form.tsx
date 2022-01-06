import Image from 'next/image'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import * as S from './FormStyled'
import Close from './images/Close.svg'

const Form = () => {
  const [popupState, setpopupState] = useState(false)

  function popupTime() {
    if (popupState)
      setInterval(() => {
        setpopupState(false)
      }, 4000)
  }
  useEffect(() => {
    if (popupState) popupTime()
  })

  const [info, setInfo] = useState({
    Title: '',
    Category: '',
    Link: '',
    Image_Link: '',
    Description: '',
  })

  function formulario(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) {
    const newInfo = { ...info }
    newInfo[e.target.id] = e.target.value
    setInfo(newInfo)
    console.log(newInfo)
    console.log(info)
  }

  const envio = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('https://apinsights.herokuapp.com/insight', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
    setpopupState(true)
  }

  return (
    <S.Form>
      <form className="formulario" onSubmit={envio}>
        <label htmlFor="titulo_link" className="label">
          Título do link
          <input
            type="text"
            id="Title"
            name="Title"
            onChange={e => formulario(e)}
            className="titulo_link input"
            placeholder="Escreva um título para o link"
            required
          />
        </label>
        <label htmlFor="categorias" className="label">
          Categorias
          <select
            name="categorias"
            id="Category"
            onChange={e => formulario(e)}
            className="categorias input"
            aria-required
            defaultValue="--"
          >
            <option className="option" disabled>
              --
            </option>
            <option className="option" defaultValue="front-end">
              front-end
            </option>
            <option className="option" defaultValue="back-end">
              back-end
            </option>
            <option className="option" defaultValue="mobile">
              mobile
            </option>
            <option className="option" defaultValue="design">
              design
            </option>
            <option className="option" defaultValue="mix">
              miscelânea
            </option>
          </select>
        </label>
        <label htmlFor="link_principal" className="label">
          Link principal
          <input
            type="url"
            id="Link"
            onChange={e => formulario(e)}
            className="link_principal input"
            placeholder="Ex. https://www.linkutil.com"
            required
          />
        </label>
        <label htmlFor="link_secundario" className="label">
          Link secundário (opcional)
          <input
            type="url"
            id="Image_Link"
            onChange={e => formulario(e)}
            className="link_secundario input"
            placeholder="Escreva um link alternativo"
          />
        </label>
        <label htmlFor="descricao_link" className="label descricao_label">
          Digite uma descrição para este link
          <textarea
            name="descricao"
            id="Description"
            className="descricao_link"
            onChange={e => formulario(e)}
            placeholder="Escreva uma descrição"
            required
            maxLength={499}
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
