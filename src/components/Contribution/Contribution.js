import React from "react";
import classes from "./Contribution.module.css";

const Contribution = () => {
  return (
    <div className={classes.contribution}>
      <p>Icons creators</p>
      <a href="https://www.flaticon.com/free-icons/heart" title="heart icon">
        Heart icon
      </a>
      <a href="https://www.flaticon.com/free-icons/sport" title="ball icon">
        Ball icon
      </a>
      <a href="https://www.flaticon.com/free-icons/calendar" title="date icon">
        Date icon
      </a>
    </div>
  );
};

export default Contribution;
