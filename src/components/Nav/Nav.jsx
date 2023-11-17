import Button from "../Button/Button";
import LanguageOption from "../LanguageOption/LanguageOption";
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
        <LanguageOption />
        <Button text="Sign In" />
      </div>
    </nav>
  );
}

export default Nav;
