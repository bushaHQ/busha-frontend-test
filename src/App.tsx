import { useState } from "react";
import { AddWalletModal } from "./components/AddWallet/AddWalletModal";
import "./App.scss";
import Modal from "./components/shared/Modal";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./globals/Navbar";
import Sidebar from "./globals/Sidebar";
import { AccountsType } from "./utils/types";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [accounts, setAccounts] = useState<AccountsType[]>([]);

  return (
    <div className="App">
      <Navbar />
      <div className="flex container dashboard">
        <Sidebar />
        <Dashboard {...{ accounts, isOpen, setIsOpen, setAccounts }} />
        <Modal isOpen={isOpen}>
          <AddWalletModal {...{ setIsOpen, setAccounts }} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
