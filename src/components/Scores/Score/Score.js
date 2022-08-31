import React, { useEffect } from "react";
import classes from "./Score.module.css";
import Card from "../../../UI/Card/Card";
import ScoreTeams from "./ScoreTeams/ScoreTeams";
import ScoreLabel from "./ScoreLabel/ScoreLabel";
import DateLabel from "./DateLabel/DateLabel";
import useHttp from "../../../hooks/use-http";
import { loadTeam } from "../../../lib/api";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

const Score = (props) => {
  const { sendRequest: loadLeftTeam, status: leftTeamStatus, data: leftTeam } = useHttp(loadTeam, true);
  const { sendRequest: loadRightTeam, status: rightTeamStatus, data: rightTeam } = useHttp(loadTeam, true);

  useEffect(() => {
    loadLeftTeam(props.leftTeam);
    loadRightTeam(props.rightTeam);
  }, [loadLeftTeam, loadRightTeam]);

  let content = <p>Could not load score.</p>;
  
  if (leftTeamStatus === 'pending' || rightTeamStatus === 'pending') {
    content = <div className="centered">
      <LoadingSpinner/>
    </div>
  }

  if (leftTeamStatus === "completed" && rightTeamStatus === "completed") {
    content = <>
    <ScoreTeams leftTeam={leftTeam} rightTeam={rightTeam} />
        <ScoreLabel
          leftScore={props.leftScore}
          rightScore={props.rightScore}
          leftTeam={leftTeam}
          rightTeam={rightTeam}
        />
        <DateLabel date={props.date} />
    </>
  }

  return (
    <li className={classes.score}>
      <Card off={props.cardOff ? true : false}>
        {content}
      </Card>
    </li>
  );
};

export default Score;
