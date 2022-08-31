import { createSlice } from "@reduxjs/toolkit";

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
    toggleFavourite(state, action) {
      const selectedTeam = state.teams.find(
        (team) => team.id === action.payload
      );
      if (state.favourites.find((team) => team.id === selectedTeam.id)) {
        state.favourites = state.favourites.filter(
          (team) => team.id !== selectedTeam.id
        );
      } else {
        state.favourites.push(selectedTeam);
      }
    },
  },
});

export const teamsActions = teamsSlice.actions;

export default teamsSlice.reducer;
