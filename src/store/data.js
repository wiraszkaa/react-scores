import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  scores: [],
  teams: [],
  leagues: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setLeagues(state, action) {
        state.leagues = action.payload;
      },
    setTeams(state, action) {
      state.teams = action.payload;
    },
    addScores(state, action) {
      state.scores = state.scores.concat(action.payload);
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
