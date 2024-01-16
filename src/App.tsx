import React, { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import Header from "./components/shared/Header";
import NetworkError from "./components/shared/NetworkError";
import Card from "./components/shared/Card";
import Modal from "./components/shared/Modal";

function App() {
  const [data, setData] = useState<any[]>([]); 
  const [loader, setLoader] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClick = async () => {
    const dbs = await fetch("http://localhost:3090/accounts");
    if (dbs.status === 200) {
      const res = await dbs.json();
      setData(res);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setLoader(false);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} />
        <div className="flex">
          <div className="wallets-sidebar">
            <ul>
              <li>Wallets</li>
              <li>Prices</li>
              <li>Peer2Peer</li>
              <li>Activity</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="wallets-content">
            <div className="wallets-header">
              <h3>Wallets</h3>
              {success && (
                <button onClick={() => setIsOpen(true)}>
                  + Add new Wallet
                </button>
              )}
            </div>
            <hr />
            <div className="wallets-body">
              {loader ? (
                <Loader />
              ) : !success ? (
                <NetworkError handleClick={handleClick} />
              ) : (
                <div className="wallets-grid">
                  {data.map((da) => (
                    <Card
                      key={da.id}
                      imgURL={da.imgURL}
                      name={da.name}
                      balance={da.balance}
                      currency={da.currency}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
