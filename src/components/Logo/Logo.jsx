import styles from "./logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.image}
        src="/src/assets/Netflix_Logo_RGB.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Logo;
