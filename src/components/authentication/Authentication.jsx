import styles from "./authentication.module.css";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";

const Authentication = () => {
  return (
    <div className={styles.wrapper}>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default Authentication;
