import React, { useState, useEffect } from "react";
import "./ModalData.scss";

interface IData {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

interface ModalDataProps {
  handleClose: () => void;
  data: IData[];
}

const ModalData: React.FC<ModalDataProps> = ({ handleClose, data }) => {
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleRefreshClick = () => {
    window.location.reload();
  };
  const handleCreateWallet = async () => {
    if (selectedWallet) {
      console.log(selectedWallet);
      try {
        // Make POST request to create wallet
        const response = await fetch("http://localhost:3090/accounts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currency: selectedWallet }),
        });

        console.log(response);

        if (response.ok) {
          // Close the modal and refreesh the whole page 
          handleClose();
          handleRefreshClick();
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <div className="con">
      <div className="text-icon">
        <h3 className="text">Add new Wallet</h3>
        <p className="icon" onClick={() => handleClose()}>
          X
        </p>
      </div>
      <div className="form-con">
        <div className="form">
          <p className="text">
            The crypto wallet will be created instantly and be available in your
            list of wallets
          </p>
          <div className="form">
            <h3>Select wallet</h3>
            <select
              name="wallet"
              id="wallet"
              value={selectedWallet}
              onChange={(e) => setSelectedWallet(e.target.value)}
            >
              {data.map((wallet) => (
                <option key={wallet.name} value={wallet.currency}>
                  {wallet.name}
                </option>
              ))}
            </select>
            <button
              className="create-btn"
              onClick={() => {
                handleCreateWallet();
              }}
            >
              Create wallet
            </button>
              
            
          </div>
        </div>
        {error && (
          <div className="errormsg">
            <div className="icon">
              <img src="Icon.svg" alt="" className="icon" />
              <p>Network error</p>
            </div>
            <p className="icon" onClick={() => setError(false)}>
              X
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalData;
