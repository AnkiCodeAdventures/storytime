import styles from "./typography.module.css";

function Typography() {
  return null;
}

Typography.MainHeading = (props) => {
  return (
    <h1
      className={`${styles.mainHeading} ${
        props.responsive ? styles.mainHeadingResposive : ""
      }`}
      style={props.style}
    >
      {props.children}
    </h1>
  );
};

Typography.MainHeading.displayName = "Main Heading";

export default Typography;
