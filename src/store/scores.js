import { createSlice } from "@reduxjs/toolkit";

const initialScoresState = {
  scores: [],
};

const scoresSlice = createSlice({
  name: "scores",
  initialState: initialScoresState,
  reducers: {
    setScores(state, action) {
      state.scores = action.payload.scores;
    },
    addScore(state, action) {
      state.scores.append(action.payload);
    },
  },
});

export const scoresActions = scoresSlice.actions;

export default scoresSlice.reducer;
