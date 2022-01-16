import { NavLink } from 'react-router-dom'

import Home from '../../../assets/home.png'
import HomeSelect from '../../../assets/home_select.png'
import Add from '../../../assets/add.png'
import AddSelect from '../../../assets/add_select.png'
import User from '../../../assets/user.png'
import UserSelect from '../../../assets/user.png'
import Logout from '../../../assets/logout.png'
import Select from '../../../assets/select.png'

import './Sidebar.css'

export default function Sidebar() {
  return (
    <nav class="Navbar">
      <div className="menu">
        <NavLink
          to="/dashboard"
          exact
          activeClassName="selected"
          className="NavbarItem"
        >
          <img src={Home} alt="Imoveis" className="NavItemHome" />
        </NavLink>
        <NavLink
          to="/dashboard/newimovel"
          activeClassName="selected"
          className="NavbarItem"
        >
          <img src={Add} alt="NewImoveis" className="NavItemAdd" />
        </NavLink>
        <NavLink
          to="/dashboard/userlist"
          activeClassName="selected"
          className="NavbarItem"
        >
          <img src={User} alt="Listar Usuários" className="NavItemUser" />
        </NavLink>
      </div>
      <div className="logout">
        <NavLink to="/" activeClassName="selected" className="NavbarItem">
          <img src={Logout} alt="Sair" className="NavItemLogout" />
        </NavLink>
      </div>
    </nav>
  )
}
