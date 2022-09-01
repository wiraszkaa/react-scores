import React, { useEffect } from "react";
import { loadAllLeagues } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import League from "./League/League";
import classes from "./Leagues.module.css";

const Leagues = () => {
  const { sendRequest, status, data, error } = useHttp(loadAllLeagues, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return (
      <div className="centered">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    let leagues = data.map((league) => (
      <League
        key={league.id}
        name={league.name}
        logo={league.logo}
        scores={league.scores}
      />
    ));
    return (
      <div className={classes.leagues}>
        <ul>{leagues}</ul>
      </div>
    );
  }
};

export default Leagues;
