import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section2Media from "../../components/SectionsMedia/Section2Media";

function Section4() {
  return (
    <div>
      <TwoColLayout
        mainText="Watch everywhere"
        subtext="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        media={
          <Section2Media
            imagePath="/src/assets/device-pile-in.png"
            videoPath="/src/assets/video-devices-in.m4v"
            videoStyle={{ width: "64.2%", left: "16.2%", top: "8%" }}
          />
        }
      />
      <Divider />
    </div>
  );
}

export default Section4;
