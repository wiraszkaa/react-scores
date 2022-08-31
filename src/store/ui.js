import { createSlice } from "@reduxjs/toolkit";

let logoutTimer;

const uiInitialState = {
  loggedIn: false,
  token: null,
  userId: null,
  info: {
    message: null,
    show: false,
    isInvalid: false,
  },
};

const loginHandler = (state, action) => {
  state.loggedIn = true;
  state.token = action.payload.token;
  state.userId = action.payload.userId;

  if (!action.payload.isRetrieved) {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem(
      "expirationTime",
      new Date().getTime() + action.payload.expirationTime * 1000
    );
    localStorage.setItem("userId", action.payload.userId);
  }

  const remainingTime =
    localStorage.getItem("expirationTime") - new Date().getTime();

  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(() => {
    logoutHandler();
  }, remainingTime);
};

const logoutHandler = (state) => {
  state.loggedIn = false;
  state.token = null;
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    login: loginHandler,
    logout: logoutHandler,
    showInfo: (state, action) => {
      state.info.message = action.payload.message;
      state.info.isInvalid = !!action.payload.isInvalid;
      state.info.show = true;
    },
    hideInfo: (state) => {
      state.info.show = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
