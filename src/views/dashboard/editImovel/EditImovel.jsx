import { NavLink } from 'react-router-dom'

import './EditImovel.css'

export default function EditImovel() {
  return (
    <div className="Edit">
      <div className="title">
        <h1>Editar Imóvel</h1>
      </div>
      <form className="form">
        <h2>*Preenchimento obrigatório</h2>
        <div className="externa">
          <div className="line1">
            <input
              className="nome"
              type="text"
              required
              placeholder="Apartamento Flor de Índio"
            />
          </div>
          <div className="line2">
            <input
              className="endereco"
              type="text"
              required
              placeholder="Rua Flôr-de-Índio, 500, Liberdade, Belo Horizonte, Minas Gerais. Apto 501"
            />
          </div>
          <div className="line3">
            <input
              className="tipo"
              type="text"
              required
              placeholder="Aluguel"
            />
            <input className="preco" type="text" required placeholder="2500" />
          </div>
          <div className="line4">
            <input className="url" type="text" placeholder="URL do Anúncio" />
            <input
              className="telefone"
              type="text"
              placeholder="Telefone do Vendedor"
            />
          </div>
          <div className="buttons">
            <NavLink to="/dashboard">
              <button className="button-blue">Editar</button>
            </NavLink>
            <NavLink to="/dashboard/imovel">
              <button className="button-red">Cancelar</button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}
