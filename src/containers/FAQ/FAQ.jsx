import Accordion from "../../components/Accordion/Accordion";
import Divider from "../../components/Divider/Divider";
import Typography from "../../components/Typography/Typography";
import styles from "./faq.module.css";

function Faq() {
  return (
    <div>
      <div className={styles.faq}>
        <div className={styles.heading}>
          <Typography.MainHeading>
            Frequently Asked Questions
          </Typography.MainHeading>
        </div>
        <Accordion text="What is Netflix?">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want, without a single ad – all for one low monthly
          price. There's always something new to discover, and new TV shows and
          movies are added every week!
        </Accordion>
      </div>
      <Divider />
    </div>
  );
}

export default Faq;
