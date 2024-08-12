import React from "react";
import css from "./Header.module.css";
const Header = ({ children }) => {
  return <header className={css.container}>{children}</header>;
};

export default Header;
