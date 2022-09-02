import { createSlice } from "@reduxjs/toolkit";
import { setFavouriteTeams } from "../lib/api";

const initialFavouritesState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialFavouritesState,
  reducers: {
    setFavourites(state, action) {
      state.favourites = action.payload;
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

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice.reducer;