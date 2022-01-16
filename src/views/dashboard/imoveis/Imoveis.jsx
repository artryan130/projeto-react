import { NavLink } from 'react-router-dom'
import Photo from '../../../assets/photo.png'

import './Imoveis.css'

export default function Imoveis() {
  return (
    <div className="Imoveis">
      <div className="title">
        <h1>Imóveis</h1>
        <input placeholder="Pesquisar" className="pesquisar"></input>
      </div>
      <div className="content">
        <NavLink to="/dashboard/imovel" className="navlink">
          <div className="item">
            <img src={Photo} alt="Foto do apartamento" />
            <h3>Apartamento</h3>
            <h3>Flor de Índio</h3>
            <p>R$1500,00</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/imovel" className="navlink">
          <div className="item">
            <img src={Photo} alt="Foto do apartamento" />
            <h3>Apartamento</h3>
            <h3>Flor de Índio</h3>
            <p>R$1500,00</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/imovel" className="navlink">
          <div className="item">
            <img src={Photo} alt="Foto do apartamento" />
            <h3>Apartamento</h3>
            <h3>Flor de Índio</h3>
            <p>R$1500,00</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/imovel" className="navlink">
          <div className="item">
            <img src={Photo} alt="Foto do apartamento" />
            <h3>Apartamento</h3>
            <h3>Flor de Índio</h3>
            <p>R$1500,00</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
