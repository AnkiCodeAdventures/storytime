import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button/Button";
import LanguageOption from "../LanguageOption/LanguageOption";
import styles from "./nav.module.css";

function Nav() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img className={styles.image} src="assets/storytime.svg" alt="logo" />
      </div>
      <div className={styles.buttonsContainer}>
        <LanguageOption />
        <Button
          text={isAuthenticated ? "Log out" : "Sign In"}
          onClick={isAuthenticated ? logout : loginWithRedirect}
        />
      </div>
    </nav>
  );
}

export default Nav;
