import React, { useState } from "react";
import League from "./League/League";
import classes from "./Leagues.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { useSelector } from "react-redux";

const Leagues = () => {
  const [searchValue, setSearchValue] = useState("");
  const leaguesData = useSelector((state) => state.data.leagues);

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  let filteredData = leaguesData;

  if (searchValue) {
    filteredData = leaguesData.filter((league) => {
      return league.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

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
      <SearchBar search={searchHandler} />
      <ul>{leagues}</ul>
    </div>
  );
};

export default Leagues;
