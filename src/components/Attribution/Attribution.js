import React from "react";
import classes from "./Attribution.module.css";

const Attribution = () => {
  return (
    <div className={classes.attribution}>
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
      <a href="https://www.flaticon.com/free-icons/clock" title="clock icon">
        Clock icon
      </a>
      <a href="https://www.pexels.com/pl-pl/zdjecie/wielobarwny-pilki-noznej-na-zielonym-polu-47730/" title="background">
        Background
      </a>
    </div>
  );
};

export default Attribution;
