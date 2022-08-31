import React from "react";
import Header from "../../components/Header/Header";
import InfoModal from "../../components/InfoModal/InfoModal";
import classes from "./Layout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

let timeout;

const Layout = (props) => {
  const dispatch = useDispatch();
  const infoState = useSelector((state) => state.ui.info);

  if (infoState.message) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(uiActions.hideInfo());
    }, 2000);
  }

  return (
    <div className={classes.layout}>
      <Header />
      <InfoModal />
      {props.children}
    </div>
  );
};

export default Layout;
