import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
// import { addLeague, setTeams, setScores } from "./lib/api";
require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

// let laLigaScores = [
//   {
//     date: "2022-09-03 18:00",
//     id: "l1s1",
//     leftScore: 0,
//     rightScore: 0,
//     leftTeam: "l1t5",
//     rightTeam: "l1t1",
//   },
//   {
//     date: "2022-09-02 10:00",
//     id: "l1s2",
//     leftScore: 2,
//     rightScore: 4,
//     leftTeam: "l1t2",
//     rightTeam: "l1t3",
//   },
//   {
//     date: "2022-09-02 08:00",
//     id: "l1s3",
//     leftScore: 1,
//     rightScore: 3,
//     leftTeam: "l1t5",
//     rightTeam: "l1t3",
//   },
//   {
//     date: "2022-08-31 10:00",
//     id: "l1s4",
//     leftScore: 2,
//     rightScore: 2,
//     leftTeam: "l1t4",
//     rightTeam: "l1t1",
//   },
// ];

// let laLigaTeams = [
//   {
//     id: "l1t1",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1024px-FC_Barcelona_%28crest%29.svg.png",
//     name: "FC Barcelona",
//     short: "FCB"
//   },
//   {
//     id: "l1t2",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
//     name: "Real Madrid",
//     short: "RMA"
//   },
//   {
//     id: "l1t3",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/800px-Atletico_Madrid_2017_logo.svg.png",
//     name: "Atlético Madryt",
//     short: "ATM"
//   },
//   {
//     id: "l1t4",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/800px-Valenciacf.svg.png",
//     name: "Valencia CF",
//     short: "VAL"
//   },
//   {
//     id: "l1t5",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/800px-Sevilla_FC_logo.svg.png",
//     name: "Sevilla FC",
//     short: "SEV"
//   },
// ];

// let premierLeagueScores = [
//   {
//     date: "2022-09-01 21:00",
//     id: "l2s1",
//     leftScore: 3,
//     rightScore: 5,
//     leftTeam: "l2t5",
//     rightTeam: "l2t1",
//   },
//   {
//     date: "2022-08-31 18:00",
//     id: "l2s2",
//     leftScore: 4,
//     rightScore: 2,
//     leftTeam: "l2t2",
//     rightTeam: "l2t3",
//   },
//   {
//     date: "2022-08-31 10:00",
//     id: "l2s3",
//     leftScore: 1,
//     rightScore: 1,
//     leftTeam: "l2t4",
//     rightTeam: "l2t1",
//   },
// ];

// let premierLeagueTeams = [
//   {
//     id: "l2t1",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png",
//     name: "Manchester United",
//     short: "MNU"
//   },
//   {
//     id: "l2t2",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1024px-Manchester_City_FC_badge.svg.png",
//     name: "Manchester City",
//     short: "MNC"
//   },
//   {
//     id: "l2t3",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png",
//     name: "Liverpool",
//     short: "LFC"
//   },
//   {
//     id: "l2t4",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png",
//     name: "Chelsea",
//     short: "CHE"
//   },
//   {
//     id: "l2t5",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/800px-Arsenal_FC.svg.png",
//     name: "Arsenal",
//     short: "ARS"
//   },
// ];

// setScores("l1", laLigaScores);
// setTeams("l2", premierLeagueTeams);
// addLeague("l2", {logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png", name: "Premier League", scores});
