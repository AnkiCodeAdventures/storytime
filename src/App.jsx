import "./App.css";
import Faq from "./containers/FAQ/FAQ";
import Section1 from "./containers/Section1/Section1";
import Section2 from "./containers/Section2/Section2";
import Section3 from "./containers/Section3/Section3";
import Section4 from "./containers/Section4/Section4";
import Section5 from "./containers/Section5/Section5";

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Faq />
    </>
  );
}

export default App;
