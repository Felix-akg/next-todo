import styles from "./signInUp.module.css";
import { FaUser, FaLock } from "react-icons/fa";

const SignIn = ({ handleSwitch, auth }) => {
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
      <div className={`${styles.form_container} ${styles.sign_in}`}>
        <form action="#">
          <h2 className={styles.title}>Sign In</h2>
          <div className={styles.form_group}>
            <input type="text" required />
            <span className={styles.icon}>
              <FaUser />
            </span>
            <label htmlFor="username">username</label>
          </div>
          <div className={styles.form_group}>
            <input type="password" required />
            <span className={styles.icon}>
              <FaLock />
            </span>
            <label htmlFor="password">password</label>
          </div>
          <div className={styles.forgot_pass}>
            <a href="#">forgot password</a>
          </div>
          <button type="submit" className={styles.btn}>
            Sign In
          </button>
          <div className={styles.link}>
            <p>
              Don't have an account?{" "}
              <span
                href="#"
                className={styles.signup_link}
                onClick={() => handleSwitch("sign-out")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
