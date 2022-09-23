import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import Card from "../../UI/Card/Card";
import classes from "./LoginForm.module.css";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const LoginForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputChangeHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputChangeHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((password) => password.length > 6);

  const {
    value: enteredConfPassword,
    isValid: confPasswordIsValid,
    hasError: confPasswordHasError,
    valueChangeHandler: confPasswordChangeHandler,
    inputChangeHandler: confPasswordBlurHandler,
  } = useInput((password) => password === enteredPassword);

  const formIsValid = emailIsValid && (passwordIsValid || isLogin) && confPasswordIsValid;

  const toogleAuthHandler = () => {
    setIsLogin(!isLogin);
    emailReset();
    passwordReset();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (emailHasError || (passwordHasError) || confPasswordHasError) {
      return;
    };

    props.onAuth(isLogin, enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes["form-control"]} ${
            emailHasError ? classes["invalid"] : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type="string"
            value={enteredEmail}
          />
          {emailHasError && (
            <p className={classes["error-text"]}>E-Mail is Invalid.</p>
          )}
        </div>
        <div
          className={`${classes["form-control"]} ${
            (passwordHasError && !isLogin) ? classes["invalid"] : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            type="password"
            value={enteredPassword}
          />
          {passwordHasError && !isLogin && (
            <p className={classes["error-text"]}>
              Password must have at least 7 characters.
            </p>
          )}
        </div>
        {!isLogin && <div
          className={`${classes["form-control"]} ${
            confPasswordHasError ? classes["invalid"] : ""
          }`}
        >
          <label htmlFor="confpassword">Confirm Password</label>
          <input
            id="confpassword"
            onChange={confPasswordChangeHandler}
            onBlur={confPasswordBlurHandler}
            type="password"
            value={enteredConfPassword}
          />
          {confPasswordHasError && (
            <p className="error-text">
              Passwords must be the same.
            </p>
          )}
        </div>}
        <div className={classes["form-actions"]}>
          <button disabled={!(formIsValid || isLogin)}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>
      <div className={classes.change}>
        <button onClick={toogleAuthHandler}>
          {isLogin ? "Create Account" : "Login with existing account"}
        </button>
      </div>
    </Card>
  );
};

export default LoginForm;
