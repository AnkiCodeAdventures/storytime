import styles from "./footer.module.css";
import Typography from "../../components/Typography/Typography";
import LanguageOption from "../../components/LanguageOption/LanguageOption";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography.Caption style={{ color: "rgb(175 175 175)" }}>
        Issues? Ring <a href="#">+91 8965222276</a>
      </Typography.Caption>
      <ul className={styles.listContainer}>
        <li>
          <a href="#">
            <Typography.SubCaption>FAQ</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Community Centre</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Privacy</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Media Unit</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Company Policy</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Careers</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Media Support</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Usage Rights</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Account</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Cookie Preferences</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>About Us</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Contact Us</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>User Information</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Entertainment Info</Typography.SubCaption>
          </a>
        </li>
        <li>
          <a href="#">
            <Typography.SubCaption>Watch on Storytime</Typography.SubCaption>
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
