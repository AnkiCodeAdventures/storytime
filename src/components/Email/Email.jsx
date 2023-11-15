import styles from "./email.module.css";

function Email() {
  return (
    <div className={styles.emailContainer}>
      <input
        className="emailInput"
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
      />
      <button className={styles.emailButton}> Get Started</button>
    </div>
  );
}

export default Email;
