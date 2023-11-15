import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Option from "../Option/Option";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <div className={styles.buttonsContainer}>
        <Option />
        <Button text="Sign In" />
      </div>
    </nav>
  );
}

export default Nav;
