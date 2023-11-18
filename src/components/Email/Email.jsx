import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import styles from "./email.module.css";

function Email() {
  return (
    <div>
      <Typography.Text>
        Ready to watch? Enter your email to create or restart your membership.
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
