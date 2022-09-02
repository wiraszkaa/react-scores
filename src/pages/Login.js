import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { auth } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sendRequest, status, data, error } = useHttp(auth, false);

  const authHandler = (isLogin, email, password) => {
    setIsLogin(isLogin);
    sendRequest({ isLogin, email, password });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      if (isLogin) {
        dispatch(
          uiActions.login({
            token: data.idToken,
            expirationTime: data.expiresIn,
            userId: data.localId,
          })
        );
        dispatch(uiActions.showInfo({ message: "Successfully logged in." }));
        navigate("/", { replace: true });
      } else {
        dispatch(
          uiActions.showInfo({
            message: "Successfully created an account.",
          })
        );
      }
    }
  }, [status, isLogin, data, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      dispatch(uiActions.showInfo({ message: error, isInvalid: true }));
    }
  }, [error, dispatch]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className={classes.login}>
        <LoginForm onAuth={authHandler} />
      </div>
    </>
  );
};

export default Login;
