import { NavLink } from 'react-router-dom'
import Photo from '../../../assets/photo.png'

import './Imovel.css'

export default function Imovel() {
  return (
    <div className="Imovel">
      <div className="title">
        <h1>Apartamento Flor de Índio</h1>
      </div>
      <div className="carrossel">
        <img src={Photo} alt="Foto do apartamento" />
        <img src={Photo} alt="Foto do apartamento" />
        <img src={Photo} alt="Foto do apartamento" />
      </div>
      <div className="content">
        <div className="line">
          <p>
            <strong>Endereço:</strong> Rua Flôr-de-Índio, 500, Liberdade, Belo
            Horizonte, Minas Gerais. Apto 501
          </p>
        </div>
        <div className="line">
          <p>
            <strong>Tipo:</strong> Aluguel
          </p>
          <p>
            <strong>Telefone:</strong> Não Informado
          </p>
        </div>
        <div className="line">
          <p>
            <strong>Preço:</strong> R$2500,00
          </p>
          <p>
            <strong>Link do Anúncio:</strong> Não Informado
          </p>
        </div>
      </div>
      <div className="buttons">
        <NavLink to="/dashboard/editimovel">
          <button className="button-blue">Editar</button>
        </NavLink>
        <NavLink to="/dashboard">
          <button className="button-red">Excluir</button>
        </NavLink>
      </div>
    </div>
  )
}
