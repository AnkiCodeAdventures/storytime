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
  return <p className={styles.text}>{props.children}</p>;
};

Typography.Caption = (props) => {
  return (
    <p className={styles.caption} style={props.style}>
      {props.children}
    </p>
  );
};

Typography.SubCaption = (props) => {
  return (
    <p style={props.style} className={styles.subCaption}>
      {props.children}
    </p>
  );
};

Typography.MainHeading.displayName = "Main Heading";
Typography.Subtitle.displayName = "Subtitle";
Typography.Text.displayName = "Text";
Typography.Caption.displayName = "Caption";
Typography.SubCaption.displayName = "Sub Caption";

export default Typography;
