import Nav from "../../components/Nav/Nav";
import styles from "./section1.module.css";
import Typography from "../../components/Typography/Typography";
import Email from "../../components/Email/Email";
import Divider from "../../components/Divider/Divider";

function Section1() {
  return (
    <div>
      <section className={styles.section1}>
        <Nav />
        <main className={styles.main}>
          <div className={styles.membershipContainer}>
            <Typography.MainHeading>
              Suprise. Amaze. Laughter. Get it all on Storytime.
            </Typography.MainHeading>

            <Typography.Subtitle>
              Welcome to Storytime: Where Every Tale Comes Alive
            </Typography.Subtitle>

            <Email />
          </div>
        </main>
      </section>
      <Divider />
    </div>
  );
}

export default Section1;
