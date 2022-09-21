import React from "react";
import Header from "../../components/Header/Header";
import InfoModal from "../../components/InfoModal/InfoModal";
import classes from "./Layout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import image from "../../assets/background.jpg";

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
      <div className={classes.mainImage}>
        <img src={image} alt="" />
      </div>
      <Header />
      <InfoModal />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
