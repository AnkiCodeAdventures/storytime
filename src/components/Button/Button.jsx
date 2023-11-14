import styles from "./button.module.css";

function Button(props) {
  return <button className={styles.signinButton}>{props.text}</button>;
}

export default Button;
