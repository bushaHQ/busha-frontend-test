import { useState } from "react";
import { AddWalletModal } from "./AddWalletModal";
import "./App.scss";
import Modal from "./components/shared/Modal";
import Dashboard, { AccountsType } from "./Dashboard";
import Navbar from "./globals/Navbar";
import Sidebar from "./globals/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [accounts, setAccounts] = useState<AccountsType[]>([]);

  return (
    <div className="App">
      <Navbar />
      <div className="flex container dashboard">
        <Sidebar />
        <Dashboard
          {...{ accounts, isOpen, setIsOpen, isRefresh, setAccounts }}
        />
        {/* <AddWalletModal {...{ isOpen, setIsOpen, setIsRefresh }} /> */}

        <Modal isOpen={isOpen}>
          <AddWalletModal {...{ setIsOpen, setIsRefresh, setAccounts }} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
