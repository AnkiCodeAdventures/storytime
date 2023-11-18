import styles from "./button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.button} ${
        props.size === "lg" ? styles.buttonLG : ""
      }`}
    >
      {props.text}
    </button>
  );
}

export default Button;
