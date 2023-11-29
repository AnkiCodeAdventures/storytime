import styles from "./button.module.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${
        props.size === "lg" ? styles.buttonLG : ""
      }`}
    >
      {props.text}
    </button>
  );
}

export default Button;
