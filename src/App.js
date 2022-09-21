import React, { useEffect } from "react";
import Main from "./pages/Main";
import Layout from "./UI/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Attribution from "./components/Attribution/Attribution";
import useHttp from "./hooks/use-http";
import { loadAllFavourites, loadAllLeagues } from "./lib/api";
import { dataActions } from "./store/data";
import { favouritesActions } from "./store/favourites";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.ui.loggedIn);
  const userId = useSelector((state) => state.ui.userId);

  const {
    sendRequest: loadFavourites,
    status: favouritesStatus,
    data: favourites,
    error: favouritesError,
  } = useHttp(loadAllFavourites, true);

  const {
    sendRequest: loadLeagues,
    status: leaguesStatus,
    data: leagues,
    error: leaguesError,
  } = useHttp(loadAllLeagues, true);

  useEffect(() => {
    if (loggedIn) {
      loadFavourites(userId);
    }
  }, [loggedIn]);

  useEffect(() => {
    loadLeagues();
  }, [loadLeagues]);

  useEffect(() => {
    if (favouritesStatus === "completed") {
      dispatch(favouritesActions.setFavourites(favourites));
    }
  }, [favouritesStatus]);

  useEffect(() => {
    if (leaguesStatus === "completed") {
      dispatch(dataActions.setLeagues(leagues));
      leagues.forEach((league) => {
        dispatch(dataActions.addScores(league.scores));
        dispatch(dataActions.addTeams(league.teams));
      });
    }
  }, [leaguesStatus]);

  let content = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  if (favouritesError || leaguesError) {
    content = (
      <div className="centered">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (
    leaguesStatus === "completed" && (!loggedIn || favouritesStatus === "completed")
  ) {
    content = (
      <Routes>
        <Route path="/" element={<Main />} />
        {loggedIn && <Route path="/favourites" element={<Favourites />} />}
        <Route path="/login" element={<Login />} />
        {loggedIn && <Route path="/account" element={<Account />} />}
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <Layout>
      {content}
      <Attribution />
    </Layout>
  );
}

export default App;
