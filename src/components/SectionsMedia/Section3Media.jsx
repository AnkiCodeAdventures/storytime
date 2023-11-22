import Typography from "../Typography/Typography";
import styles from "./sectionsMedia.module.css";

function Section3Media() {
  return (
    <div className={styles.animationContainerBox}>
      <div className={styles.animationContainer}>
        <img
          className={styles.animationImage}
          src="/src/assets/mobile-0819.jpg"
          alt="girl image"
        />
        <div className={styles.animationBox}>
          <div className={styles.boxshotContainer}>
            <img
              className={styles.boxshotImage}
              src="/src/assets/boxshot.png"
              alt="animation"
            />
          </div>
          <div className={styles.animationTextContainer}>
            <Typography.Caption>Stranger Things</Typography.Caption>
            <Typography.SubCaption style={{ color: "#0071eb" }}>
              Downloading...
            </Typography.SubCaption>
          </div>
          <div className={styles.gifContainer}>
            <img
              className={styles.gifImage}
              src="/src/assets/download-icon.gif"
              alt="animation-gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3Media;
