import styles from "./signInUp.module.css";
import { FaUser, FaLock, FaAt } from "react-icons/fa";

const SignUp = ({ handleSwitch, auth }) => {
  return (
    <div
      className={
        auth === "sign-out"
          ? styles.animated_signin
          : auth === "sign-in"
          ? styles.animated_signup
          : ""
      }
    >
      <div className={`${styles.form_container} ${styles.sign_up}`}>
        <form action="#">
          <h2 className={styles.title}>Sign Up</h2>
          <div className={styles.form_group}>
            <input type="text" required />
            <span className={styles.icon}>
              <FaUser />
            </span>
            <label htmlFor="username">username</label>
          </div>
          <div className={styles.form_group}>
            <input type="email" required />
            <span className={styles.icon}>
              <FaAt />
            </span>
            <label htmlFor="email">email</label>
          </div>
          <div className={styles.form_group}>
            <input type="password" required />
            <span className={styles.icon}>
              <FaLock />
            </span>
            <label htmlFor="password">password</label>
          </div>
          <div className={styles.form_group}>
            <input type="password" required />
            <span className={styles.icon}>
              <FaLock />
            </span>
            <label htmlFor="confirmPassword">confirm password</label>
          </div>
          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
          <div className={styles.link}>
            <p>
              You already have an account?{" "}
              <span
                href="#"
                className={styles.signin_link}
                onClick={() => handleSwitch("sign-in")}
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
