import styles from "./footer.module.css";
import Typography from "../../components/Typography/Typography";
import LanguageOption from "../../components/LanguageOption/LanguageOption";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography.Caption style={{ color: "rgb(175 175 175)" }}>
        Questions? Call <a href="#">+91 8965222276</a>
      </Typography.Caption>
      <ul className={styles.listContainer}>
        <li>
          <a href="#">
            <Typography.SubCaption>FAQ</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Help Centre</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Account</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Media Centre</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Investor Relations</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Jobs</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Ways to Watch</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Terms of Use</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Privacy</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Cookie Preferences</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Corporate Information</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Contact Us</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Speed Test</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Legal Notices</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Only on Storytime</Typography.SubCaption>
          </a>
        </li>
      </ul>
      <LanguageOption />
      <Typography.SubCaption style={{ paddingTop: "20px" }}>
        Storytime
      </Typography.SubCaption>
    </footer>
  );
}

export default Footer;
