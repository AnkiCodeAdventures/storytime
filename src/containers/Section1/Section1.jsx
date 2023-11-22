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
              Laughter. Tears. Thrill. Get it all on Netflix.
            </Typography.MainHeading>

            <Typography.Subtitle>
              Endless entertainment starts at just ₹ 149. Cancel anytime.
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
