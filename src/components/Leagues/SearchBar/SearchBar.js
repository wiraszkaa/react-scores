import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.searchBar}>
      <input
        onChange={props.search}
        type="text"
        placeholder="Search for a league"
      />
    </div>
  );
};

export default SearchBar;
