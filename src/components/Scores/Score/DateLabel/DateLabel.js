import React from "react";
import classes from "./DateLabel.module.css";
import dateIcon from "../../../../assets/date.png";

const DateLabel = (props) => {
  const date = new Date(props.date).toLocaleString("ddmmyyyy", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className={classes["date-label"]}>
      <img src={dateIcon} alt="Calendar" />
      <p>{date}</p>
    </div>
  );
};

export default DateLabel;
