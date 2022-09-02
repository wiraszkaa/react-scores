import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites";
import dataReducer from "./data";
import uiReducer from "./ui";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    data: dataReducer,
    ui: uiReducer,
  },
});

export default store;
