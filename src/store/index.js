import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from "./scores";
import teamsReducer from "./teams";
import uiReducer from "./ui";

const store = configureStore({
  reducer: {
    scores: scoresReducer,
    teams: teamsReducer,
    ui: uiReducer,
  },
});

export default store;
