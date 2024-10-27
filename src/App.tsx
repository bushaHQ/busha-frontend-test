import Navbar from "./components/Navbar";
import Button from "./components/shared/Button";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Button title={"Try again"} />
    </div>
  );
}

export default App;
