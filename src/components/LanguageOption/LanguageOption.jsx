import styles from "./LanguageOption.module.css";

function LanguageOption() {
  return (
    <select name="language" className={styles.language}>
      <option value="english">English</option>
      <option value="hindi">हिंदी</option>
    </select>
  );
}

export default LanguageOption;
