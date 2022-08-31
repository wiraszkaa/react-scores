import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { teamsActions } from "../../../../store/teams";
import classes from "./ScoreTeams.module.css";
import followOnIcon from "../../../../assets/followon.png";
import followOffIcon from "../../../../assets/followoff.png";
import { setFavouriteTeams } from "../../../../lib/api";

const ScoreTeams = (props) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.ui.loggedIn);
  const favourites = useSelector((state) => state.teams.favourites);
  const token = useSelector((state) => state.ui.token);

  const isLeftFollowed =
    !!favourites.find((team) => team.id === props.leftTeam.id);
  const isRightFollowed =
    !!favourites.find((team) => team.id === props.rightTeam.id);

  const teamLabel = `${props.leftTeam.short} - ${props.rightTeam.short}`;

  const leftFavouritesHandler = () => {
    dispatch(teamsActions.toggleFavourite(props.leftTeam.id));
    setFavouriteTeams(token, favourites);
  };

  const rightFavouritesHandler = () => {
    dispatch(teamsActions.toggleFavourite(props.rightTeam.id));
    setFavouriteTeams(token, favourites);
  };

  return (
    <div className={classes["score-teams"]}>
      {loggedIn && (
        <button onClick={leftFavouritesHandler}>
          <img
            src={isLeftFollowed ? followOnIcon : followOffIcon}
            alt="Follow"
          />
        </button>
      )}
      <h1>{teamLabel}</h1>
      {loggedIn && (
        <button onClick={rightFavouritesHandler}>
          <img
            src={isRightFollowed ? followOnIcon : followOffIcon}
            alt="Follow"
          />
        </button>
      )}
    </div>
  );
};

export default ScoreTeams;
