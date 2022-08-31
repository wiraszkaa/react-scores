import React from "react";
import ScoresList from "../../components/Scores/ScoresList/ScoresList";
import { useSelector } from "react-redux";

const Scores = (props) => {
  const scores = useSelector((state) => state.scores.scores);

  return <ScoresList scores={scores} />;
};

export default Scores;
