import React from "react";
import classes from "./ScoreLabel.module.css";

const ScoreLabel = (props) => {
  const score = `${props.leftScore} - ${props.rightScore}`;

  return (
    <div className={classes["score-label"]}>
      <img src={props.leftTeam.logo} alt={props.leftTeam.short} />
      <p>{score}</p>
      <img src={props.rightTeam.logo} alt={props.rightTeam.short} />
    </div>
  );
};

export default ScoreLabel;
