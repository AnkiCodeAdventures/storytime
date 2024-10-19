import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";
import Section2Media from "../../components/SectionsMedia/Section2Media";

function Section2() {
  return (
    <div>
      <TwoColLayout
        mainText="Enjoy Entertainment on Any Screen"
        subtext="Watch on a variety of devices like smart TVs, gaming consoles, streaming devices, and more."
        media={
          <Section2Media
            imagePath="/assets/television.png"
            videoPath="assets/invideo-ai-1080 Welcome to [Your Movie Website] 2024-10-17 (online-video-cutter.com).mp4"
          />
        }
      />
      <Divider />
    </div>
  );
}

export default Section2;
