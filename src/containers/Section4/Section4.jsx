import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section2Media from "../../components/SectionsMedia/Section2Media";

function Section4() {
  return (
    <div>
      <TwoColLayout
        mainText="Watch on Any Device, Anywhere"
        subtext="Stream a limitless collection of TV shows and movies on your smartphone, tablet, laptop, or TV.

"
        media={
          <Section2Media
            imagePath="assets/output__5_-removebg-preview.png"
            videoPath="assets/8115567-hd_1920_1080_25fps.mp4"
            videoStyle={{ width: "43.2%", left: "28.2%", top: "18%" }}
          />
        }
      />
      <Divider />
    </div>
  );
}

export default Section4;
