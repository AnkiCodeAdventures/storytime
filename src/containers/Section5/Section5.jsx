import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";

function Section5() {
  return (
    <div>
      <TwoColLayout
        mainText="Create Profiles for Kids"
        subtext="Give your children their own space with content tailored just for them, and let them enjoy shows and movies with their favorite characters."
        media={
          <img style={{ width: "100%" }} src="/public/assets/image (1).png" />
        }
        reverse
      />
      <Divider />
    </div>
  );
}

export default Section5;
