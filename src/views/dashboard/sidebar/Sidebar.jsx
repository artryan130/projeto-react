import { NavLink } from "react-router-dom";

import Home from "../../../assets/home.svg";
import Add from "../../../assets/add.svg";
import User from "../../../assets/user.svg";
import Logout from "../../../assets/logout.svg";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav class="navbar">
      <NavLink
        to="/dashboard/imoveis"
        exact
        activeClassName="selected"
        className="NavbarItem"
      >
        <img src={Home} alt="Imoveis" className="NavItemLogo1" />
      </NavLink>
      <NavLink
        to="/dashboard/newimoveis"
        activeClassName="selected"
        className="NavbarItem"
      >
        <img src={Add} alt="NewImoveis" className="NavItemLogo" />
      </NavLink>
      <NavLink
        to="/dashboard/userlist"
        activeClassName="selected"
        className="NavbarItem"
      >
        <img src={User} alt="Listar Usuários" className="NavItemLogo" />
      </NavLink>
      <NavLink
        to="/"
        activeClassName="selected"
        className="NavbarItem"
      >
        <img src={Logout} alt="Sair" className="NavItemLogo" />
      </NavLink>
    </nav>
  );
}
