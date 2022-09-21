import React from "react";
import classes from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Header = (props) => {
  const location = useLocation();
  const loggedIn = useSelector((state) => state.ui.loggedIn);

  const checkActive = (path) => {
    return location.pathname === path ? classes.active : "";
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={checkActive("/")} to="/">
              Main Page
            </NavLink>
          </li>
          {loggedIn && (
            <li>
              <NavLink className={checkActive("/favourites")} to="/favourites">
                Favourites
              </NavLink>
            </li>
          )}
          <li>
            {loggedIn && (
              <NavLink className={checkActive("/account")} to="/account">
                Account
              </NavLink>
            )}
            {!loggedIn && (
              <NavLink className={checkActive("/login")} to="/login">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
