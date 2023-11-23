import Divider from "../../components/Divider/Divider";
import TwoColLayout from "../../components/TwoColLayout/TwoColLayout";

function Section5() {
  return (
    <div>
      <TwoColLayout
        mainText="Create profiles for kids"
        subtext="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        media={
          <img
            style={{ width: "100%" }}
            src="/assets/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png"
          />
        }
        reverse
      />
      <Divider />
    </div>
  );
}

export default Section5;
