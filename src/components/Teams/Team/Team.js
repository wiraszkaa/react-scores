import React, { useState } from "react";
import Card from "../../../UI/Card/Card";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ScoresList from "../../Scores/Scores";
import { teamsActions } from "../../../store/teams";
import classes from "./Team.module.css";
import followOnIcon from "../../../assets/followon.png";

const Team = (props) => {
  const [showMatches, setShowMatches] = useState(false);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.ui.userId);
  const team = useSelector((state) => state.teams.teams).find(
    (team) => team.id === props.id
  );
  const scores = useSelector((state) => state.scores.scores);

  const removeFavouriteHandler = () => {
    dispatch(teamsActions.toggleFavourite({ userId, team }));
  };

  const toggleMatchesHandler = () => {
    setShowMatches((prev) => !prev);
  };


  return (
    <li>
      <Card className={classes.team}>
        <button className={classes.remove} onClick={removeFavouriteHandler}>
          <img src={followOnIcon} alt="Follow" />
        </button>
        <h1>{team.name}</h1>
        <img className={classes.logo} src={team.logo} alt={team.short} />
        <button className={classes.show} onClick={toggleMatchesHandler}>
          {showMatches ? "Hide Matches" : "Show Matches"}
        </button>
        {showMatches && <ScoresList
        scores={scores.filter(
          (score) => score.leftTeam === team.id || score.rightTeam === team.id
        )}
        cardOff={true}
      />}
      </Card>
    </li>
  );
};

export default Team;
