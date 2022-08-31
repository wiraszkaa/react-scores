import React from "react";
import { useNavigate } from "react-router-dom";
import { uiActions } from "../store/ui";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteUser } from "../lib/api";
import classes from "./Account.module.css";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.ui.token);

  const signoutHandler = () => {
    dispatch(uiActions.logout());
    navigate("/", { replace: true });
    dispatch(uiActions.showInfo({ message: "Successfully logged out." }));
  };

  const deleteHandler = () => {
    deleteUser(id);
    signoutHandler();
    dispatch(
      uiActions.showInfo({
        message: "Account deleted successfully.",
      })
    );
  };

  return (
    <div className={classes.account}>
      <h1>Your Account</h1>
      <button onClick={signoutHandler}>Sign Out</button>
      <button onClick={deleteHandler}>Delete Account</button>
    </div>
  );
};

export default Account;