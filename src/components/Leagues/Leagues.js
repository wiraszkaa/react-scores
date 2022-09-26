import React from "react";
import League from "./League/League";

const Leagues = (props) => {
  const content = props.leagues.map((league) => (
    <League
      key={league.id}
      name={league.name}
      logo={league.logo}
      scores={league.scores}
    />
  ));

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
};

export default Leagues;
