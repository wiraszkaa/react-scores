import React from "react";
import { useNavigate } from "react-router-dom";
import { uiActions } from "../store/ui";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteUser } from "../lib/api";
import classes from "./Account.module.css";
import Card from "../UI/Card/Card";

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
    <Card className={classes.account}>
      <h1>Your Account</h1>
      <button onClick={deleteHandler} className={classes.delete}>Delete Account</button>
      <button onClick={signoutHandler} className={classes.signOut}>Sign Out</button>
    </Card>
  );
};

export default Account;
