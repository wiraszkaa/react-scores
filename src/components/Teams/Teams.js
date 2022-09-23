import React from "react";
import Team from "./Team/Team";
import classes from "./Teams.module.css";

const Teams = (props) => {
  const content = props.teams.map((team) => <Team team={team} key={team.id} />);

  return (
    <div className={classes.teams}>
      <ul>{content}</ul>
    </div>
  );
};

export default Teams;
