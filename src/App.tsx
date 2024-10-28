import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/main.scss";
import { sidebar } from "./service/sidebar.service";
import WalletPage from "./pages/WalletPage/WalletPage";
import { SidebarComponent } from "./types";

const Wallet: SidebarComponent = () => <WalletPage />;
const Prices: SidebarComponent = () => <div>Prices Component</div>;
const Peer2Peer: SidebarComponent = () => <div>Peer2Peer Component</div>;
const Activity: SidebarComponent = () => <div>Activity Component</div>;
const Settings: SidebarComponent = () => <div>Settings Component</div>;

const componentMap: Record<string, SidebarComponent> = {
  Wallet,
  Prices,
  Peer2Peer,
  Activity,
  Settings,
};

function App() {
  const [selectedPath, setSelectedPath] = useState<string>(sidebar[0].title);

  return (
    <main className="layout">
      <Navbar />
      <div className="layout-children">
        <Sidebar
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
        />

        <div className="content">
          {componentMap[selectedPath] ? componentMap[selectedPath]() : null}
        </div>
      </div>
    </main>
  );
}

export default App;
