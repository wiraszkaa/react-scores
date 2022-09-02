import React from "react";
import Team from "../Team/Team";
import { useSelector } from "react-redux/es/exports";
import classes from "./FavouriteTeams.module.css";

const FavouriteTeams = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  let content = <p>Currently there are no favourites.</p>;

  if (favourites.length > 0) {
    content = favourites.map((team) => <Team team={team} key={team.id} />);
  }

  return (
    <div className={classes["favourite-teams"]}>
      <ul>{content}</ul>
    </div>
  );
};

export default FavouriteTeams;
