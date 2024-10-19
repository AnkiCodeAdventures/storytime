import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./email.module.css";

function Email() {
  return (
    <div className={styles.emailBlock}>
      <Typography.Text>
        Dive into a world of captivating stories and unforgettable characters.
      </Typography.Text>
      <div className={styles.emailContainer}>
        <input
          className={styles.emailInput}
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <Button text="Get Started >" size="lg" />
      </div>
    </div>
  );
}

export default Email;
