import React, { useState, useEffect } from "react";
import Card from "../../../UI/Card/Card";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ScoresList from "../../Scores/ScoresList/ScoresList";
import { teamsActions } from "../../../store/teams";
import classes from "./Team.module.css";
import followOnIcon from "../../../assets/followon.png";
import { loadAllScores, setFavouriteTeams } from "../../../lib/api";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";
import useHttp from "../../../hooks/use-http";

const Team = (props) => {
  const [showMatches, setShowMatches] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.ui.token);
  const favourites = useSelector((state) => state.teams.favourites);

  const team = useSelector((state) => state.teams.teams).find(
    (team) => team.id === props.id
  );

  const { sendRequest, error, status, data: scores } = useHttp(
    loadAllScores,
    true
  );

  const removeFavouriteHandler = () => {
    dispatch(teamsActions.toggleFavourite(team.id));
    setFavouriteTeams(token, favourites);
  };

  const toggleMatchesHandler = () => {
    setShowMatches((prev) => !prev);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let matches = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  if (error) {
    matches = (
      <div className="centered">
        <p>{error}</p>
      </div>
    );
  }

  if (status === "completed") {
    matches = <ScoresList scores={scores.filter(score => score.leftTeam === team.id || score.rightTeam === team.id)} cardOff={true}/>;
  }

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
        {showMatches && matches}
      </Card>
    </li>
  );
};

export default Team;
