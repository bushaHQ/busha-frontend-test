import React, {useState, useEffect} from 'react';
import makeAPICall from '../utils/config';
import Loader from "../components/shared/Loader";

import "../App.scss";


const Dashboard = () => {

    const [walletItems, setWalletItems] = useState([]);
    const [hasError, setHasError] = useState("");

    const getWallets = () => {
        return makeAPICall({
          path: "wallets",
          method: "GET",
        })
          .then((data) => {
              console.log(data);
              
            setWalletItems(data.data);
            // setTable(true);
          })
          .catch((err) => {
              setHasError(err.message)
              console.log(err)
            });
      };
    
      useEffect(() => {
        getWallets();
      }, []);

    // const getWalletData = () => {
    //     fetch("http://localhost:3090/wallets", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       }
    //     }).then(function (res) {
    //       return res.json()
    //     }).then(function (myJson) {
    //       console.log(myJson, "ee");
    //       setWalletItems(myJson)
    //     })
    //   }
    
    //   useEffect(()=>{
    //     getWalletData()
    //   },[])
    return (
        <>
            <div className="dashboard__main__content">
                <div className="wallets__main">
                    <h1>Wallets</h1>
                    <Loader />
                    {

                    }
                    <div className='wallets__main__row'>
                        <div className='wallets__main__column'>
                            <div className='wallets__main__card'>
                                <span></span>
                                <p>₦ 105,160,076.51</p>
                            </div>
                        </div>

                        <div className='wallets__main__column'>
                            <div className='wallets__main__card'>
                                <span></span>
                                <p>₦ 105,160,076.51</p>
                            </div>
                        </div>

                        <div className='wallets__main__column'>
                            <div className='wallets__main__card'>
                                <span></span>
                                <p>₦ 105,160,076.51</p>
                            </div>
                        </div>

                        <div className='wallets__main__column'>
                            <div className='wallets__main__card'>
                                <span></span>
                                <p>₦ 105,160,076.51</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard; 