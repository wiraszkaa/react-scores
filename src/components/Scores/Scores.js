import React from "react";
import DateLabel from "./Score/DateLabel/DateLabel";
import Score from "./Score/Score";
import classes from "./Scores.module.css";

const Scores = (props) => {
  let content = <p>Currently there are no scores.</p>;
  if (props.scores.length > 0) {
    content = [];
    
    let date = new Date(props.scores[0].date).setUTCHours(0, 0, 0, 0);
    content.push(<li key={0}><DateLabel date={props.scores[0].date} isDate={true}/></li>)
    
    for (let i = 0; i < props.scores.length; i++) {
      let score = props.scores[i];

      if (new Date(score.date).setUTCHours(0, 0, 0, 0) < date) {
        date = new Date(score.date).setUTCHours(0, 0, 0, 0);
        content.push(<li key={i}><br/><DateLabel date={score.date} isDate={true}/></li>)
      }

      content.push(<Score
        key={score.id}
        cardOff={props.cardOff}
        leftTeam={score.leftTeam}
        rightTeam={score.rightTeam}
        leftScore={score.leftScore}
        rightScore={score.rightScore}
        date={score.date}
      />);
    }
  }

  return (
    <div className={classes["scores-list"]}>
      <ul>{content}</ul>
    </div>
  );
};

export default Scores;
