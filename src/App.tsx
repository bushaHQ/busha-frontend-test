import "./App.scss";
import Dashboard from "./Dashboard";
import Navbar from "./globals/Navbar";
import Sidebar from "./globals/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex container dashboard">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
