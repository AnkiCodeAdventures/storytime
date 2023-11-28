import styles from "./LanguageOption.module.css";

function LanguageOption() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.icon}
        src="/public/assets/language.svg"
        alt="language"
      />
      <select name="language" className={styles.language}>
        <option value="english">English</option>
        <option value="hindi">हिंदी</option>
      </select>
    </div>
  );
}

export default LanguageOption;
