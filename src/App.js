import React, { useEffect } from "react";
import Main from "./pages/Main";
import Layout from "./UI/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Contribution from "./components/Contribution/Contribution";
import useHttp from "./hooks/use-http";
import { loadAllTeams, loadAllFavourites } from "./lib/api";
import { teamsActions } from "./store/teams";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.ui.loggedIn);
  const userId = useSelector((state) => state.ui.userId);

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
  } = useHttp(loadAllFavourites, true);

  useEffect(() => {
    loadTeams();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      loadFavourites(userId);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (favouritesStatus === "completed") {
      dispatch(teamsActions.setFavourites({ favourites }));
    }
  }, [favouritesStatus]);

  useEffect(() => {
    if (teamsStatus === "completed") {
      dispatch(teamsActions.setTeams({ teams }));
    }
  }, [teamsStatus, teams]);

  let content = (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      {loggedIn && <Route path="/account" element={<Account />} />}
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );

  if (teamsError || favouritesError) {
    content = (
      <div className="centered">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (
    teamsStatus === "pending" ||
    (loggedIn && favouritesStatus === "pending")
  ) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Layout>
      {content}
      <Contribution />
    </Layout>
  );
}

export default App;
