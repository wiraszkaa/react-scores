import React from "react";
import Card from "../../../UI/Card/Card";
import Scores from "../../Scores/Scores";
import LeagueLabel from "./LeagueLabel/LeagueLabel";
import classes from "./League.module.css";

const League = (props) => {
  return (
    <li className={classes.league}>
      <Card>
        <LeagueLabel name={props.name} logo={props.logo} />
        <Scores scores={props.scores} />
      </Card>
    </li>
  );
};

export default League;
