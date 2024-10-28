import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Chevron } from "../../assets";
import Loader from "../../components/shared/Loader";
import AddNewWallet from "../../components/AddNewWallet";
import { Account, AccountArray } from "../../types";
import { fetchData } from "../../utils";
import Error from "../../components/Error";

const WalletPage = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userAccounts, setUserAccounts] = useState<AccountArray>([]);
  const [isOpenNewWallet, setIsOpenNewWallet] = useState<boolean>(false);
  const toggleOpenNewWallet = () => setIsOpenNewWallet(!isOpenNewWallet);
  const isMountedRef = useRef(true);

  const handleFetchUserAccounts = () => {
    fetchData({
      isMountedRef,
      setIsLoading,
      setData: setUserAccounts,
      setHasError,
      method: "GET",
      url: "accounts",
    });
  };

  useEffect(() => {
    isMountedRef.current = true;
    handleFetchUserAccounts();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="wallet-page">
      <div className="page-top-controller">
        <SectionTitle title={"Wallets"} />
        {userAccounts.length > 0 && (
          <div onClick={toggleOpenNewWallet} className="new-wallet-action">
            + Add new wallet
          </div>
        )}
      </div>

      <div className="wallet-content">
        {isLoading ? (
          <Loader width={4} size={84} />
        ) : hasError ? (
          <Error retryAction={handleFetchUserAccounts} />
        ) : (
          <div>
            <div className="divider" />
            <div className="wallet-grid">
              {userAccounts?.length > 0 ? (
                userAccounts.map((account: Account, index: number) => (
                  <div key={index} className="wallet-card">
                    <div className="card-header">
                      <img
                        src={account.imgURL}
                        alt="token icon"
                        className="token-icon"
                      />
                      <span>{account.name}</span>
                    </div>

                    <div className="balance">
                      <h5>
                        {account.type === "fiat" && "₦"} {account.balance}{" "}
                      </h5>

                      <h5>{account.type === "digital" && account.currency}</h5>
                    </div>
                    <img src={Chevron} alt="chevron" className="chevron" />
                  </div>
                ))
              ) : (
                <p>No accounts available</p> // Optional: show a message when no accounts exist
              )}
            </div>
          </div>
        )}
      </div>

      <AddNewWallet
        isOpen={isOpenNewWallet}
        toggleModal={toggleOpenNewWallet}
        setUserAccounts={setUserAccounts}
      />
    </div>
  );
};

export default WalletPage;
