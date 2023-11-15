import styles from "./option.module.css";

function Option() {
  return (
    <select name="language" className={styles.options}>
      <option value="english">English</option>
      <option value="hindi">हिंदी</option>
    </select>
  );
}

export default Option;
