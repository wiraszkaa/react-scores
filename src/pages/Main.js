import React from "react";
import Leagues from "../components/Leagues/Leagues";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <Leagues />
    </div>
  );
};

export default Main;
