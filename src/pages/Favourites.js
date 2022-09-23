import Teams from "../components/Teams/Teams";
import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <div className="centered">
      <Teams teams={favourites} />
    </div>
  );
};

export default Favourites;
