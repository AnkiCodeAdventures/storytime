import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section3Media from "../../components/SectionsMedia/Section3Media";

function Section3() {
  return (
    <div>
      <TwoColLayout
        mainText="Download to Watch Offline"
        subtext="Easily save your favorite shows and movies so you can enjoy them without needing an internet connection."
        media={<Section3Media />}
        reverse
      />
      <Divider />
    </div>
  );
}

export default Section3;
