import React, { useEffect } from "react";
import Main from "./pages/Main";
import Layout from "./UI/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { teamsActions } from "./store/teams";
import { Route, Routes, Navigate } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Contribution from "./components/Contribution/Contribution";
import { uiActions } from "./store/ui";

// const DUMMY_SCORES = [
//   {
//     id: "s1",
//     leftScore: 2,
//     rightScore: 1,
//     leftTeam: "t1",
//     rightTeam: "t2",
//     date: "2002-11-27 12:00",
//   },
//   {
//     id: "s2",
//     leftScore: 1,
//     rightScore: 1,
//     leftTeam: "t3",
//     rightTeam: "t4",
//     date: "2002-11-27 10:00",
//   },
//   {
//     id: "s3",
//     leftScore: 2,
//     rightScore: 1,
//     leftTeam: "t1",
//     rightTeam: "t5",
//     date: "2002-11-27 8:00",
//   },
// ];

const DUMMY_TEAMS = [
  {
    id: "t1",
    name: "Manchester United",
    short: "MAN",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png",
  },
  {
    id: "t2",
    name: "FC Barcelona",
    short: "FCB",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1024px-FC_Barcelona_%28crest%29.svg.png",
  },
  {
    id: "t3",
    name: "Legia Warszawa",
    short: "WAW",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Legia_Warsaw_logo.svg/800px-Legia_Warsaw_logo.svg.png",
  },
  {
    id: "t4",
    name: "FC Stanowice",
    short: "FCS",
    logo:
      "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/71053761_1505708006238230_7396881720433180672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0hPPXgG_sSkAX8Oc9XO&_nc_ht=scontent-waw1-1.xx&oh=00_AT9fAW7Z4a4Ol8IamvXcwF0YzkCbHhwF4jCAy0B_pfMSwA&oe=632AA9BC",
  },
  {
    id: "t5",
    name: "Real Madrid",
    short: "REM",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
  },
];

function App() {
  const loggedIn = useSelector((state) => state.ui.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) {
      const expirationTime = localStorage.getItem("expirationTime");
      const token = localStorage.getItem("token");

      if (expirationTime && token) {
        if (new Date().getTime() < expirationTime) {
          dispatch(
            uiActions.login({ token, expirationTime, isRetrieved: true })
          );
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("expirationTime");
        }
      }
    }
  });

  useEffect(() => {
    dispatch(teamsActions.setTeams({ teams: DUMMY_TEAMS }));
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/login" element={<Login />} />
        {loggedIn && <Route path="/account" element={<Account />} />}
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Contribution />
    </Layout>
  );
}

export default App;
