import React, {useState} from "react"
import "./App.css"
import Header from "./header";
import NavBar from "./navbar";
import Data from "./wallet-data";
import AddWalletModal from "./modal";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
      setIsModalOpen(false)
      console.log(isModalOpen);
  };
  const openModal = () => {
      setIsModalOpen(true)
      console.log(isModalOpen);
  };

  const Wallets = () => {


    return (
      <main>
        <div className="title">
          <h1>Wallets</h1>
          <button onClick={openModal}>
            <a className= "add-wallet">+ Add new wallet</a>
            </button>
        </div>
        <div><hr style={{color: "#d3d5d8"}}/></div>

        <div className="Wallets-section">
          {Data.map((wallet) => {
            const {id, name, icon, link, balance} = wallet
            return (
              <article className="card" key={id}>
                <div className="currency">
                  <img src={icon}></img>{name}
                </div>
                <div className="figures">{balance}</div>
                <div className="card-right-arrow">
                  <button>{`>`}</button>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    )
  }

  return (
    <div>
      <Header />
      <div style={{display: "flex", width: "80%", margin: "auto", marginTop: "5%"}}>
        <NavBar />
        <Wallets />
      </div>
      <AddWalletModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;