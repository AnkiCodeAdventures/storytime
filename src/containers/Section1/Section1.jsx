import Email from "../../components/Email/Email";
import Nav from "../../components/Nav/Nav";
import styles from "./section1.module.css";

function Section1() {
  return (
    <div>
      <section className={styles.section1}>
        <Nav />
        <Email />
      </section>
    </div>
  );
}

export default Section1;
