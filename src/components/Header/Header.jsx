import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <nav className={css.navContainer}>
        <div>
          <Logo />
        </div>
        <div className={css.menuContainer}>
          <NavLink to="/" className={css.menuHeader}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={css.menuHeader}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
