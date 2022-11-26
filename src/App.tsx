import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Wallets from "./components/Wallets";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <SideBar/>
        <Wallets/>
      </div>
    </>
  );
}

export default App;
