import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const loginUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const deleteUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=";
const url = process.env.REACT_APP_DATABASE + "/scores";
const apiKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const loadAllHandler = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Could not fetch.");
  }

  const dataArray = [];

  for (let key in data) {
    dataArray.push({ id: key, ...data[key] });
  }

  return dataArray;
};

export const loadAllTeams = () => {
  return loadAllHandler(url + "/teams.json");
};

export const loadAllScores = () => {
  return loadAllHandler(url + "/scores.json");
};

const loadOneHandler = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Could not fetch.");
  }

  return data;
};

export const loadTeam = async (id) => {
  const data = await loadOneHandler(`${url}/teams/${id}.json`);
  return { id, ...data };
};

export const loadScore = async (id) => {
  const data = await loadOneHandler(`${url}/scores/${id}.json`);
  return { id, ...data };
};

export const setFavouriteTeams = async (userId, teams) => {
  set(ref(db, `scores/users/${userId}`), { favouriteTeams: teams });
};

export const auth = async (userData) => {
  const response = await fetch(
    `${userData.isLogin ? loginUrl : signUpUrl}${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Could not fetch.");
  }

  return data;
};

export const deleteUser = async (id) => {
  const response = await fetch(deleteUrl + apiKey, {
    method: "POST",
    body: JSON.stringify({ idToken: id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch.");
  }
};

export const getFavourites = async (userId) => {
  const response = await fetch(`${url}/users/${userId}/favouriteTeams.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Could not fetch.");
  }

  const dataArray = [];

  for (let key in data) {
    dataArray.push(data[key]);
  }

  return dataArray;
};
