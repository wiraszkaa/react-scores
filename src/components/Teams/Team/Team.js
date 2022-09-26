import React, { useState } from "react";
import Card from "../../../UI/Card/Card";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Scores from "../../Scores/Scores";
import { favouritesActions } from "../../../store/favourites";
import classes from "./Team.module.css";
import followOnIcon from "../../../assets/full_heart.png";

const Team = (props) => {
  const [showMatches, setShowMatches] = useState(false);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.ui.userId);
  const scores = useSelector((state) => state.data.scores);
  const loggedIn = useSelector((state) => state.ui.loggedIn);

  const removeFavouriteHandler = () => {
    dispatch(favouritesActions.toggleFavourite({ userId, team: props.team }));
  };

  const toggleMatchesHandler = () => {
    setShowMatches((prev) => !prev);
  };

  return (
    <li>
      <Card className={classes.team}>
        {loggedIn && (
          <button className={classes.remove} onClick={removeFavouriteHandler}>
            <img src={followOnIcon} alt="Follow" />
          </button>
        )}
        <h1>{props.team.name}</h1>
        <img
          className={classes.logo}
          src={props.team.logo}
          alt={props.team.short}
        />
        <div className={classes.show}>
          <button onClick={toggleMatchesHandler}>
            {showMatches ? "Hide Matches" : "Show Matches"}
          </button>
        </div>
        {showMatches && (
          <Scores
            scores={scores.filter(
              (score) =>
                score.leftTeam === props.team.id ||
                score.rightTeam === props.team.id
            )}
          />
        )}
      </Card>
    </li>
  );
};

export default Team;
