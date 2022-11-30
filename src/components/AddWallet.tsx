/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import Loader from "./shared/Loader";
import ErrorScreen from "./ErrorScreen";
import Cancel from "../assets/cancel.svg";
import CancelError from "../assets/cancelRed.svg";
import { AddWalletProps } from "../types";
import Error from "../assets/networkError.svg";
import {
  AccountActionsContext,
  AccountContext,
} from "../context/dataContext";

function AddWallet({ setIsModalOpen }: AddWalletProps): JSX.Element {
  const { getWallets, createWallet, setaddWalletError } = useContext(
    AccountActionsContext
  );
  const {
    loadingWallet,
    walletError,
    wallet,
    addWalletError,
    addWalletLoading,
  } = useContext(AccountContext);
  const [currency, setCurrency] = useState<string>("");

  useEffect(() => {
    getWallets();
  }, []);

  const handleCreateWallet = () => {
    createWallet(currency, setIsModalOpen);
  };

  return (
    <div className="add__wallet">
      {loadingWallet ? (
        <div className="add__loader">
          <div className="close">
            <img
              src={Cancel}
              alt="Close button"
              aria-label="Close button"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <Loader />
        </div>
      ) : walletError ? (
        <div className="add__loader">
          <div className="close">
            <img
              src={Cancel}
              alt="Close button"
              aria-label="Close button"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <ErrorScreen action={getWallets} />
        </div>
      ) : (
        <div className="add__new">
          <div className="add__header">
            <h1>Add new wallet</h1>
            <img
              src={Cancel}
              alt="Close button"
              aria-label="Close button"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className="add__text">
            The crypto wallet will be created instantly and be available in your
            list of wallets.
          </div>
          <div className="add__select">
            <p>Select wallet</p>
            <div className="select">
              <select
                name="wallet"
                id="wallet"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option defaultValue={"Select"} hidden>
                  {"Select"}
                </option>
                {wallet &&
                  wallet.map((data, i) => (
                    <option key={i} value={data.currency}>
                      {data.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="create__button" onClick={handleCreateWallet}>
              <label htmlFor="loading">
                {addWalletLoading && "Loading..."}
              </label>
              {addWalletLoading && (
                <progress
                  id="loading"
                  value="5"
                  max="10"
                  aria-label="loading"
                  style={{ width: "20%" }}
                >
                  0%
                </progress>
              )}
              {!addWalletLoading && "Create wallet"}
            </div>
            {addWalletError && (
              <div className="network__error">
                <div className="error__left">
                  <img src={Error} alt="error" />
                  <p>Network Error</p>
                </div>
                <div className="error__right">
                  <img
                    src={CancelError}
                    alt="error"
                    onClick={() => setaddWalletError(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWallet;
