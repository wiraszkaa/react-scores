import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { addLeague } from "./lib/api";
require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

let scores = [
  {
    date: "2022-09-01 21:00",
    id: "l2s1",
    leftScore: 3,
    rightScore: 5,
    leftTeam: "t5",
    rightTeam: "t1",
  },
  {
    date: "2022-08-31 18:00",
    id: "l2s2",
    leftScore: 4,
    rightScore: 2,
    leftTeam: "t2",
    rightTeam: "t1",
  },
];

// addLeague("l2", {logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png", name: "Premier League", scores});
