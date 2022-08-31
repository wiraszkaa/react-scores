import React, { useEffect } from "react";
import Scores from "../components/Scores/Scores";
import useHttp from "../hooks/use-http";
import { loadAllScores, loadAllTeams, getFavourites } from "../lib/api";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { teamsActions } from "../store/teams";
import { scoresActions } from "../store/scores";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.ui.loggedIn);
  const userId = useSelector((state) => state.ui.userId);

  const {
    sendRequest: loadScores,
    status: scoresStatus,
    data: scores,
    error: scoresError,
  } = useHttp(loadAllScores, true);

  const {
    sendRequest: loadTeams,
    status: teamsStatus,
    data: teams,
    error: teamsError,
  } = useHttp(loadAllTeams, true);

  const {
    sendRequest: loadFavourites,
    status: favouritesStatus,
    data: favourites,
    error: favouritesError,
  } = useHttp(getFavourites, true);

  useEffect(() => {
    loadScores();
    loadTeams();
  },[]);

  useEffect(() => {
    if (loggedIn) {
      loadFavourites(userId);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (scoresStatus === "completed" && teamsStatus === "completed" && (loggedIn ? favouritesStatus === "completed" : true)) {
      dispatch(teamsActions.setTeams({teams}));
      dispatch(scoresActions.setScores({scores}));
      dispatch(teamsActions.setFavourites({favourites}));
    }
  },[scoresStatus, teamsStatus, teams, scores]);

  if (teamsError || scoresError || favouritesError) {
    return (
      <div className="centered">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (scoresStatus === "pending" || teamsStatus === "pending" || (loggedIn && favouritesStatus === "pending")) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return <Scores />;
};

export default Main;
