import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { loadAllScores } from "../../lib/api";
import ScoresList from "../../components/Scores/ScoresList/ScoresList";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const Scores = () => {
  const { sendRequest, error, status, data: scores } = useHttp(
    loadAllScores,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered">
        <p>{error}</p>
      </div>
    );
  }

  if (status === "completed" && scores.length > 0) {
    return <ScoresList scores={scores} />;
  }

  return <p className="centered">Currently there are no scores.</p>;
};

export default Scores;
