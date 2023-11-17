import Nav from "../../components/Nav/Nav";
import styles from "./section1.module.css";
import Typography from "../../components/Typography/Typography";

function Section1() {
  return (
    <div>
      <section className={styles.section1}>
        <Nav />
      </section>
    </div>
  );
}

export default Section1;
