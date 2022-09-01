import React from "react";
import classes from "./Score.module.css";
import ScoreTeams from "./ScoreTeams/ScoreTeams";
import ScoreLabel from "./ScoreLabel/ScoreLabel";
import DateLabel from "./DateLabel/DateLabel";
import { useSelector } from "react-redux/es/exports";


const Score = (props) => {
  const teams = useSelector((state) => state.teams.teams);

  const leftTeam = teams.find((team) => team.id === props.leftTeam);
  const rightTeam = teams.find((team) => team.id === props.rightTeam);
  
  return (
    <li className={classes.score}>
      <ScoreTeams leftTeam={leftTeam} rightTeam={rightTeam} />
        <ScoreLabel
          leftScore={props.leftScore}
          rightScore={props.rightScore}
          leftTeam={leftTeam}
          rightTeam={rightTeam}
        />
        <DateLabel date={props.date} />
    </li>
  );
};

export default Score;
