import Accordion from "../../components/Accordion/Accordion";
import Divider from "../../components/Divider/Divider";
import Typography from "../../components/Typography/Typography";
import styles from "./faq.module.css";
import Email from "../../components/Email/Email";

function Faq() {
  return (
    <div>
      <div className={styles.faq}>
        <div className={styles.heading}>
          <Typography.MainHeading>
            Frequently Asked Questions
          </Typography.MainHeading>
        </div>
        <Accordion question="What is Storytime?">
          <br />
          Storytime offers a vast selection of award-winning TV shows, movies,
          documentaries, anime, and more—all accessible on internet-enabled
          devices. You can watch as much as you want, when you want, without
          ads, for a low monthly fee. New content is added every week, so
          there’s always something fresh to discover.
          <br />
          <br />
          You can watch as much as you want, whenever you want, without a single
          ad – all for one low monthly price. There&apos;s always something new
          to discover, and new TV shows and movies are added every week!
          <br />
          <br />
        </Accordion>
        <Accordion question="How Much Does Storytime Cost?">
          <br />
          Watch Storytime on a smartphone, tablet, smart TV, or laptop with a
          variety of affordable monthly plans starting from ₹111 to ₹649. There
          are no hidden fees or long-term contracts.
          <br />
          <br />
        </Accordion>
        <Accordion question="WWhere Can I Watch Storytime?">
          <br />
          Stream Storytime on-demand anywhere, anytime. Sign in on the web or
          through an app on your smart TV, smartphone, tablet, or other
          streaming devices. You can even download shows to watch offline when
          you’re on the move.
          <br />
          <br />
          You can also download your favourite shows with the iOS, Android, or
          Windows 10 app. Use downloads to watch while you&apos;re on the go and
          without an internet connection. Take Netflix with you anywhere.
          <br />
          <br />
        </Accordion>
        <Accordion question="How Do I Cancel?">
          <br />
          Storytime comes with no contracts or obligations. You can cancel your
          subscription online at any time with just a few clicks—no cancellation
          fees, no hassle.
          <br />
          <br />
        </Accordion>
        <Accordion question="What Content Can I Access on Storytime?">
          <br />
          Enjoy a huge collection of films, documentaries, TV shows, anime, and
          exclusive originals on Storytime. Watch as much as you like, whenever
          you like.
          <br />
          <br />
        </Accordion>
        <Accordion question="Is Storytime Kid-Friendly?">
          <br />
          Storytime offers a special kid&apos;s section, giving parents control
          over what their children watch. Kid&apos;s profiles feature
          family-friendly content, and parental controls allow you to restrict
          content based on maturity levels or block specific shows.
          <br />
          <br />
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don’t want kids to see.
          <br />
          <br />
        </Accordion>
        <div className={styles.email}>
          <Email />
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Faq;
