import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import findIcon from "../../../assets/find.png";

const SearchBar = (props) => {
  const [placeholder, setPlaceHolder] = useState("Search for a league or a team");
  const focusHandler = () => {
    setPlaceHolder("");
  }

  const blurHandler = () => {
    setPlaceHolder("Search for a league or a team");
  }

  return (
    <div className={classes.searchBar}>
      <img src={findIcon} alt="Find"/>
      <input
        onChange={props.search}
        onFocus={focusHandler}
        onBlur={blurHandler}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
