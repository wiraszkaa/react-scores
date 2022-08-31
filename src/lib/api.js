const loginUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const deleteUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=";
const url = process.env.REACT_APP_DATABASE;
const apiKey = process.env.REACT_APP_API_KEY;

const loadAllHandler = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message || "Could not fetch.");
  }

  const teams = [];

  for (let key in data) {
    teams.push({ id: key, ...data[key] });
  }

  return teams;
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

export const addUser = async (email) => {
  const response = await fetch(url + "/users.json", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch.");
  }
};

export const setFavouriteTeams = async (userId, teams) => {
  const response = await fetch(`${url}/users/${userId}/teams.json`, {
    method: "PUSH",
    body: JSON.stringify(teams),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch.");
  }
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
