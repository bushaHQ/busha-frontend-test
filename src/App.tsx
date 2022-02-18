import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";

import "./App.scss"
import Dashboard from "./pages/Dashboard";


const App: React.FC = () => {
  const [walletItems, setWalletItems] = useState([]);

  // const getWalletData = () => {
  //   fetch("http://localhost:3090/wallets", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   }).then(function (res) {
  //     return res.json()
  //   }).then(function (myJson) {
  //     console.log(myJson, "ee");
  //     setWalletItems(myJson)
  //   })
  // }

  // useEffect(()=>{
  //   getWalletData()
  // },[])
  
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
