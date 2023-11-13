import styles from "./signInUp.module.css";

const SignUp = () => {
  return (
    <div className={`${styles.form_container} ${styles.sign_in}`}>
      <form action="#">
        <h2>Sign Up</h2>
        <div className={styles.form_group}>
          <input type="text" required />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
