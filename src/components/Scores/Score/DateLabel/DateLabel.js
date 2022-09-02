import React from "react";
import classes from "./DateLabel.module.css";
import dateIcon from "../../../../assets/date.png";
import clockIcon from "../../../../assets/clock.png";

const DateLabel = (props) => {
  let dateConfig = {
    hour: "numeric",
    minute: "2-digit",
  }
  
  if (props.isDate) {
    dateConfig = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
  };

  const date = new Date(props.date).toLocaleString("ddmmyyyy", dateConfig);

  return (
    <div className={classes["date-label"]}>
      <img src={props.isDate ? dateIcon : clockIcon} alt="Calendar" />
      <p>{date}</p>
    </div>
  );
};

export default DateLabel;
