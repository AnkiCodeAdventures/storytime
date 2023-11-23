import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section3Media from "../../components/SectionsMedia/Section3Media";

function Section3() {
  return (
    <div>
      <TwoColLayout
        mainText="Download your shows to watch offline"
        subtext="Save your favourites easily and always have something to watch."
        media={<Section3Media />}
        reverse
      />
      <Divider />
    </div>
  );
}

export default Section3;
