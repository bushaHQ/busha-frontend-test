import "./App.scss";
import { NavBar } from "./globals/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex container dashboard">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <aside className="flex flow sidebar">
      <nav className="fh-screen">
        <ul className="flow">
          <li>
            <a href="">Wallets</a>
          </li>
          <li>
            <a href="">Prices</a>
          </li>
          <li>
            <a href="">Peer2Peer</a>
          </li>
          <li>
            <a href="">Activity</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <main>
      <h1>Wallets</h1>
    </main>
  );
};

export default App;
