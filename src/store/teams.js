import { createSlice } from "@reduxjs/toolkit";
import { setFavouriteTeams } from "../lib/api";

const initialTeamsState = {
  teams: [],
  favourites: [],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState: initialTeamsState,
  reducers: {
    setTeams(state, action) {
      state.teams = action.payload.teams;
    },
    setFavourites(state, action) {
      state.favourites = action.payload.favourites;
    },
    toggleFavourite(state, action) {
      if (state.favourites.find((team) => team.id === action.payload.team.id)) {
        state.favourites = state.favourites.filter(
          (team) => team.id !== action.payload.team.id
        );
      } else {
        state.favourites.push(action.payload.team);
      }

      setFavouriteTeams(action.payload.userId, state.favourites);
    },
  },
});

export const teamsActions = teamsSlice.actions;

export default teamsSlice.reducer;
