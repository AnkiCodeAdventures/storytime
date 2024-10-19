import Typography from "../Typography/Typography";
import styles from "./sectionsMedia.module.css";

function Section3Media() {
  return (
    <div className={styles.animationContainer}>
      <img
        className={styles.animationImage}
        src="/public/assets/mobile.jpg"
        alt="girl image"
      />
      <div className={styles.animationBox}>
        <div className={styles.boxshotContainer}>
          <img
            className={styles.boxshotImage}
            src="/public/assets/lion.jpg"
            alt="animation"
          />
        </div>
        <div className={styles.animationTextContainer}>
          <Typography.Caption>Story of a Lion</Typography.Caption>
          <Typography.SubCaption style={{ color: "#0071eb" }}>
            Downloading...
          </Typography.SubCaption>
        </div>
        <div className={styles.gifContainer}>
          <img
            className={styles.gifImage}
            src="/assets/download-icon.gif"
            alt="animation-gif"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3Media;
