import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.menu}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={css.menu}>
          Catalog
        </NavLink>
      </nav>
      <div className={css.logo}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
