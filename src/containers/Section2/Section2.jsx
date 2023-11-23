import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section2Media from "../../components/SectionsMedia/Section2Media";

function Section2() {
  return (
    <div>
      <TwoColLayout
        mainText="Enjoy on your TV"
        subtext="Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more."
        media={
          <Section2Media
            imagePath="/assets/tv.png"
            videoPath="/assets/video-tv-in-0819.m4v"
          />
        }
      />
      <Divider />
    </div>
  );
}

export default Section2;
