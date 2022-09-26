import React, { useState } from "react";
import { useSelector } from "react-redux";
import Leagues from "../components/Leagues/Leagues";
import classes from "./Main.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import Teams from "../components/Teams/Teams";
import Card from "../UI/Card/Card";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const { leagues, teams } = useSelector(
    (state) => state.data
  );

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  let filteredLeagues = leagues;
  let filteredTeams = [];

  if (searchValue) {
    filteredLeagues = leagues.filter((league) =>
      league.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filteredLeagues.length === 0) {
      filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  return (
    <div className={classes.main}>
      <Card>
      <SearchBar search={searchHandler} />
      <Leagues leagues={filteredLeagues} />
      <Teams teams={filteredTeams} />
      {filteredLeagues.length === 0 && filteredTeams.length === 0 && (
        <div className="info">
          <p>No results found.</p>
        </div>
      )}
    </Card>
    </div>
  );
};

export default Main;
