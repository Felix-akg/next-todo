"use client";

import { useState } from "react";
import styles from "./authentication.module.css";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";

const Authentication = () => {
  const [auth, setAuth] = useState("");

  return (
    <div className={styles.wrapper}>
      <SignUp handleSwitch={setAuth} auth={auth} />
      <SignIn handleSwitch={setAuth} auth={auth} />
    </div>
  );
};

export default Authentication;
