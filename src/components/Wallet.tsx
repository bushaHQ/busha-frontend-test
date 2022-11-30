/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import Loader from "./shared/Loader";
import Icon from "../assets/icon.svg";
import Header from "../assets/wallet.svg";
import Modal from "./shared/Modal";
import AddWallet from "./AddWallet";
import ErrorScreen from "./ErrorScreen";
import { AccountActionsContext, AccountContext } from "../context/dataContext";

function Wallet(): JSX.Element {
  const { getAccounts } = useContext(AccountActionsContext);
  const { loadingAccounts, accountError, accounts } = useContext(
    AccountContext
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="wallet">
      <div className="header">
        <img src={Header} alt="header" />
        {!loadingAccounts && !accountError && (
          <h2 onClick={() => setIsModalOpen(true)}>+ Add new wallet</h2>
        )}
      </div>

      {loadingAccounts ? (
        <div className="loading">
          <Loader />
        </div>
      ) : accountError ? (
        <ErrorScreen action={getAccounts} />
      ) : (
        <div className="wallet__body">
          <div className="divider" />
          <div className="card__container">
            {accounts &&
              accounts.map((account, index) => (
                <div className="card" key={index}>
                  <div className="container">
                    <div className="top">
                      <img src={account.imgURL} alt="currency" />
                      <p>{account.name}</p>
                    </div>
                    {account.name === "Naira" ? (
                      <h1>
                        {/* {Number(account.balance).toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })} */}
                        ₦ {account.balance}
                      </h1>
                    ) : (
                      <h1>
                        {account.balance}
                        <span>
                          {""} {account.currency}
                        </span>
                      </h1>
                    )}
                    <div className="bottom">
                      <div />
                      <div className="icon">
                        <img src={Icon} alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen}>
        <AddWallet setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default Wallet;
