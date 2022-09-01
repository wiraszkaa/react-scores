import React from "react";
import classes from "./DateLabel.module.css";
import dateIcon from "../../../../assets/date.png";

const DateLabel = (props) => {
  let dateConfig = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  if (!props.isDate) {
    dateConfig = {
      hour: "numeric",
      minute: "2-digit",
    }
  };

  const date = new Date(props.date).toLocaleString("ddmmyyyy", dateConfig);

  return (
    <div className={classes["date-label"]}>
      <img src={dateIcon} alt="Calendar" />
      <p>{date}</p>
    </div>
  );
};

export default DateLabel;
