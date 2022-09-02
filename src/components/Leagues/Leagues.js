import React, { useEffect, useState } from "react";
import { loadAllLeagues } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import League from "./League/League";
import classes from "./Leagues.module.css";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data";
import SearchBar from "./SearchBar/SearchBar";

const Leagues = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(loadAllLeagues, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "completed") {
      data.forEach(league => {
        dispatch(dataActions.addScores(league.scores));
      });
    }
  }, [status, data]);

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  }

  let filteredData = data;

  if (searchValue) {
    filteredData = data.filter(league => {
      return league.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

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
    let leagues = filteredData.map((league) => (
      <League
        key={league.id}
        name={league.name}
        logo={league.logo}
        scores={league.scores}
      />
    ));
    return (
      <div className={classes.leagues}>
        <SearchBar search={searchHandler}/>
        <ul>{leagues}</ul>
      </div>
    );
  }
};

export default Leagues;
