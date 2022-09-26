import React from "react";
import classes from "./SortBy.module.css";
import Card from "../../UI/Card/Card";

const SortBy = (props) => {
  return (
    <Card className={classes.sortBy}>
      <label htmlFor="sort-by">Sort by</label>
      <select id="sort-by" onChange={props.onChange}>
      <option value="league">Leagues</option>
        <option value="date">Dates</option>
      </select>
    </Card>
  );
};

export default SortBy;
