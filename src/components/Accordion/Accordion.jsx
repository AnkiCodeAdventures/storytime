import { useState } from "react";
import Typography from "../Typography/Typography";
import styles from "./accordion.module.css";

function Accordion(props) {
  const [opened, setOpened] = useState(false);

  function handleClick() {
    setOpened(!opened);
  }

  return (
    <div>
      <div className={styles.accordion}>
        <button className={styles.question} onClick={handleClick}>
          <Typography.Subtitle>{props.question}</Typography.Subtitle>
          <img
            className={`${styles.plus} ${opened ? styles.cross : ""}`}
            src="/assets/cross.png"
            alt="expand"
          />
        </button>
        <div
          className={`${styles.expandedBox} ${opened ? "" : styles.collapse}`}
        >
          <Typography.Subtitle>{props.children}</Typography.Subtitle>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
