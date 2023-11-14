import Button from "../Button/Button";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img
          className={styles.image}
          src="/src/assets/Netflix_Logo_RGB.png"
          alt="Netflix logo"
        />
      </div>
      <div className={styles.buttonsContainer}>
        <select name="language" className={styles.language}>
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
        </select>
        <Button text="Sign In" />
      </div>
    </nav>
  );
}

export default Nav;
