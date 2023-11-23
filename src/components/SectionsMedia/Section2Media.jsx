import styles from "./sectionsMedia.module.css";

function Section2Media(props) {
  return (
    <div>
      <img className={styles.tvImage} src={props.imagePath} alt="TV" />
      <div className={styles.videContainer}>
        <video
          autoPlay
          muted
          loop
          className={styles.tvVideo}
          style={props.videoStyle}
        >
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Section2Media;
