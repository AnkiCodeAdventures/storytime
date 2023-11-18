import styles from "./typography.module.css";

function Typography() {
  return null;
}

Typography.MainHeading = (props) => {
  return (
    <h1 className={styles.mainHeading} style={props.style}>
      {props.children}
    </h1>
  );
};

Typography.Subtitle = (props) => {
  return <h2 className={styles.subtitle}>{props.children}</h2>;
};

Typography.Text = (props) => {
  return <h3 className={styles.text}>{props.children}</h3>;
};

Typography.MainHeading.displayName = "Main Heading";

export default Typography;
