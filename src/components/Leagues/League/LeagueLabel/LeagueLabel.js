import React from "react";
import classes from "./LeagueLabel.module.css";

const LeagueLabel = (props) => {
    return (<div className={classes.leagueLabel}>
        <h1>{props.name}</h1>
        <img src={props.logo} alt={props.name} />
    </div>)
}

export default LeagueLabel;