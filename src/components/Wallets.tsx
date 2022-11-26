import { useEffect, useState } from "react";
import CreateWalletForm from "./CreateWalletForm";
import Modal from "./shared/Modal";
import WalletsGrid from "./WalletsGrid";

export default function Wallets() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>();
  const [wasWalletAdded, setWasWalletAdded] = useState<boolean>(false)

  useEffect(()=>{
    setWasWalletAdded(false)
  },[wasWalletAdded])

  return (
    <div style={{ width: "100%" }}>
      <div className="wallets-row">
        <h1>Wallets</h1>
        <button className="add-button" onClick={() => setIsOpen(true)}>
          + Add new wallet
        </button>
      </div>

      <Modal isOpen={isOpen}>
        <CreateWalletForm selected={selected} setIsOpen={setIsOpen} setSelected={setSelected} setWasWalletAdded={setWasWalletAdded}/>
      </Modal>

      <hr />

      <WalletsGrid wasWalletAdded={wasWalletAdded}/>
    </div>
  );
}
