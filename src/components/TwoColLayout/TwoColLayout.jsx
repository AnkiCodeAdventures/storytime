import Typography from "../Typography/Typography";
import styles from "./twoColLayout.module.css";

function TwoColLayout(props) {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Typography.MainHeading style={{ paddingBottom: 16 }}>
          {props.mainText}
        </Typography.MainHeading>
        <Typography.Subtitle>{props.subtext}</Typography.Subtitle>
      </div>
      {props.media}
    </section>
  );
}

export default TwoColLayout;
