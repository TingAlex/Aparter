import React from "react";
import { Route, NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Aparter</h1>
    <NavLink exact to="/gallery" activeClassName="is-active">
      Gallery
    </NavLink>
    <NavLink exact to="/dashboard" activeClassName="is-active">
      Dashboard
    </NavLink>
  </header>
);
export default Header;
