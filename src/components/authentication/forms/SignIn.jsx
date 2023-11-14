import styles from "./signInUp.module.css";
import { FaUser, FaLock } from "react-icons/fa";

const SignIn = () => {
  return (
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
            <a href="#" className={styles.signup_link}>
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
