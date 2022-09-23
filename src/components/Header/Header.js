import React from "react";
import classes from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import homeIcon from "../../assets/home.png";
import accountIcon from "../../assets/account.png";
import heartIcon from "../../assets/heart.png";

const Header = (props) => {
  const location = useLocation();
  const loggedIn = useSelector((state) => state.ui.loggedIn);

  const checkActive = (path) => {
    return location.pathname === path ? classes.active : "";
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <span>React Scores</span>
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={checkActive("/")} to="/">
              <div className={classes.navButton}>
                <img src={homeIcon} alt="REACT SCORES" />
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          {loggedIn && (
            <li>
              <NavLink className={checkActive("/favourites")} to="/favourites">
                <div className={classes.navButton}>
                  <img src={heartIcon} alt="FAVOURITES" />
                  <span>Favourites</span>
                </div>
              </NavLink>
            </li>
          )}
          <li>
            {loggedIn && (
              <NavLink className={checkActive("/account")} to="/account">
                <div className={classes.navButton}>
                  <img src={accountIcon} alt="ACCOUNT" />
                  <span>Account</span>
                </div>
              </NavLink>
            )}
            {!loggedIn && (
              <NavLink className={checkActive("/login")} to="/login">
                <div className={classes.navButton}>
                  <img src={accountIcon} alt="ACCOUNT" />
                  <span>Login</span>
                </div>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
