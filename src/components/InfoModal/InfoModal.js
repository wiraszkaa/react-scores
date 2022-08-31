import React from "react";
import { useSelector } from "react-redux";
import classes from "./InfoModal.module.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 1000,
  exit: 400,
};

const InfoModal = (props) => {
  const state = useSelector((state) => state.ui.info);

  let info;
  switch (state.message) {
    case "INVALID_PASSWORD":
      info = "Please enter a valid password.";
      break;
    case "INVALID_EMAIL":
      info = "Please enter a valid email.";
      break;
    case "EMAIL_NOT_FOUND":
      info = "Account does not exist.";
      break;
    default:
      info = state.message;
  }

  const cssClasses = [
    classes.infoModal,
    state.isInvalid ? classes.invalid : classes.valid,
  ];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={state.show}
      timeout={animationTiming}
      classNames={{
        enterActive: classes.enterActive,
        exitActive: classes.exitActive,
      }}
    >
      <div className={cssClasses.join(" ")}>
        <h1>{info}</h1>
      </div>
    </CSSTransition>
  );
};

export default InfoModal;
