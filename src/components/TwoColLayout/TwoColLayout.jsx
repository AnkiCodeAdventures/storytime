import Typography from "../Typography/Typography";
import styles from "./twoColLayout.module.css";

function TwoColLayout(props) {
  return (
    <section
      className={`${styles.section} ${props.reverse ? styles.reverse : ""}`}
    >
      <div className={styles.textContainer}>
        <Typography.MainHeading style={{ paddingBottom: 16 }}>
          {props.mainText}
        </Typography.MainHeading>
        <Typography.Subtitle>{props.subtext}</Typography.Subtitle>
      </div>
      <div className={styles.mediaContainer}>{props.media}</div>
    </section>
  );
}

export default TwoColLayout;
