import "./App.css";
import Button from "./components/Button/Button";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <h1>Netflix India</h1>
      <section className="section-1">
        <Nav />
        <Button text="hello" />
      </section>
    </>
  );
}

export default App;
