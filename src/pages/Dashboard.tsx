import React, { useState, useEffect } from 'react';
import makeAPICall from '../utils/config';
import Loader from "../components/shared/Loader";

import "../App.scss";

interface ItemsProps {
    currency: string,
    name: string,
    imgURL: string,
    type: string
}

const Dashboard = () => {

    const [walletItems, setWalletItems] = useState<ItemsProps[]>();
    const [hasError, setHasError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const getWallets = () => {
        setIsLoading(true)
        setHasError("");
        return makeAPICall({
            path: "wallets",
            method: "GET",
        })
            .then((data) => {
                console.log(data, "sam");
                setIsLoading(false)
                setHasError("");
                setWalletItems(data);
            })
            .catch((err) => {
                setHasError(err.message)
                setIsLoading(false)
                console.log(err)
            });
    };

    useEffect(() => {
        getWallets();
    }, []);
    return (
        <>
            <div className="dashboard__main__content">
                <div className="wallets__main">
                    <h1>Wallets</h1>
                    <p>{hasError ? hasError : ""}</p>
                    {
                        isLoading ? (<Loader />) : (
                            <div className='wallets__main__row'>
                                {
                                    walletItems?.length === 0 ? (
                                        "No results found"
                                    ) : walletItems?.map((items, i) => {
                                        <div className='wallets__main__column' key={i}>
                                            <div className='wallets__main__card'>
                                                <span></span>
                                                <p>{items.name}</p>
                                            </div>
                                        </div>
                                        // console.log(items.name);

                                    })}
                                eee
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard; 