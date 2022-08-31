import React from "react";
import Score from "../Score/Score";
import classes from "./ScoresList.module.css";

const ScoresList = (props) => {
  let content = <p>Currently there are no scores.</p>;
  if (props.scores.length > 0) {
    content = props.scores.map((score) => (
      <Score
        key={score.id}
        cardOff={props.cardOff}
        leftTeam={score.leftTeam}
        rightTeam={score.rightTeam}
        leftScore={score.leftScore}
        rightScore={score.rightScore}
        date={score.date}
      />
    ));
  }

  return (
    <div className={classes["scores-list"]}>
      <ul>{content}</ul>
    </div>
  );
};

export default ScoresList;
