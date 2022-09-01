import { createSlice } from "@reduxjs/toolkit";

let logoutTimer;

const setLogoutTimer = () => {
  const remainingTime =
    localStorage.getItem("expirationTime") - new Date().getTime();

  logoutTimer = setTimeout(() => {
    uiSlice.actions.logout();
  }, remainingTime);
};

let uiInitialState = {
  loggedIn: false,
  token: null,
  userId: null,
  info: {
    message: null,
    show: false,
    isInvalid: false,
  },
};

const expirationTime = localStorage.getItem("expirationTime");
const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

if (expirationTime && token && userId) {
  if (new Date().getTime() < expirationTime) {
    uiInitialState = {
      ...uiInitialState,
      loggedIn: true,
      token,
      userId,
    };

    setLogoutTimer();
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("userId");
  }
}

const loginHandler = (state, action) => {
  state.loggedIn = true;
  state.token = action.payload.token;
  state.userId = action.payload.userId;

  localStorage.setItem("token", action.payload.token);
  localStorage.setItem(
    "expirationTime",
    new Date().getTime() + action.payload.expirationTime * 1000
  );
  localStorage.setItem("userId", action.payload.userId);

  setLogoutTimer();
};

const logoutHandler = (state) => {
  state.loggedIn = false;
  state.token = null;
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");

  clearTimeout(logoutTimer);
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
