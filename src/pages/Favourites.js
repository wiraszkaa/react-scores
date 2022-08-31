import FavouriteTeams from "../components/Teams/FavouriteTeams/FavouriteTeams";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import classes from "./Favourites.module.css";

const Favourites = () => {
  const loggedIn = useSelector((state) => state.ui.loggedIn);

  if (!loggedIn) {
    return (
      <div className={classes.favourites}>
        <p>You have to login to view this page.</p>
      </div>
    );
  }

  return <FavouriteTeams />;
};

export default Favourites;
