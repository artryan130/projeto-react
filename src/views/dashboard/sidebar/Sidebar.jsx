import { NavLink } from "react-router-dom";

import Home from "../../../assets/home.svg";
import Add from "../../../assets/add.svg";
import User from "../../../assets/user.svg";
import Logout from "../../../assets/logout.svg";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav class="Navbar">
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
      <NavLink to="/" activeClassName="selected" className="NavbarItem">
        <img src={Logout} alt="Sair" className="NavItemLogout" />
      </NavLink>
    </nav>
  );
}
