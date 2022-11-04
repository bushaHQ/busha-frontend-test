import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loader from "../shared/Loader";
import close from "../../assets/close.svg";
import closeDanger from "../../assets/close-red.svg";
import danger from "../../assets/danger.png";
import "./AddWalletModal.scss";
import { BASE_URL } from "../../utils/constants";
import { AccountsType, WalletType } from "../../utils/types";

interface AddWalletModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAccounts: Dispatch<SetStateAction<AccountsType[]>>;
}

export const AddWalletModal: React.FC<AddWalletModalProps> = ({
  setIsOpen,
  setAccounts,
}) => {
  const [wallets, setWallets] = useState<WalletType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNetwork, setIsNetwork] = useState(false);
  const [currency, setCurrency] = useState("");
  useEffect(() => {
    const getWallets = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/wallets`);
        const data = await response.json();
        setWallets(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getWallets();
    return () => {
      setWallets([]);
    };
  }, [isError]);

  const handleSubmit = async () => {
    setIsCreating(true);
    try {
      const response = await createNewWallet(currency);
      if (response.ok) {
        const data = await response.json();
        setAccounts((prev) => [...prev, data]);
      } else {
        throw new Error("An error");
      }
      setIsOpen(false);
    } catch (error) {
      setIsNetwork(true);
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading)
    return (
      <div>
        <button
          aria-label="Close button"
          onClick={() => setIsOpen(false)}
        ></button>
        <Loader aria-label="loading..." />
      </div>
    );
  return (
    <div className="grid add-container flow">
      {isError ? (
        <div className="flex flex-col errorContainer">
          <div className="grid error">
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <p>Network Error</p>
          <button className="try pointer" onClick={() => setIsError(false)}>
            Try again
          </button>
        </div>
      ) : (
        <div className="create-container flow">
          <div className="flex top">
            <h2>Add New Wallet</h2>
            <div className="pointer" onClick={() => setIsOpen(false)}>
              <img src={close} aria-label="Close button" />
            </div>
          </div>
          <p>
            The crypto wallet will be created instantly and be available in your
            list of wallets.
          </p>
          <p>Select wallet</p>
          <div className="add-form flow">
            <select
              name=""
              id=""
              onChange={(e) => setCurrency(e.target.value)}
              role="combobox"
              value={currency}
            >
              {currency}
              {wallets.map((wallet) => (
                <option key={wallet.name} value={wallet.currency}>
                  {wallet.name}
                </option>
              ))}
            </select>

            <button
              className="try pointer"
              type="submit"
              onClick={() => handleSubmit()}
            >
              {isCreating ? <Loader /> : "Create wallet"}
            </button>
          </div>

          {isNetwork && (
            <div className="flex err-badge">
              <div className="flex danger">
                <img src={danger} alt="danger" />
                <div>Network Error</div>
              </div>

              <img
                src={closeDanger}
                alt=""
                onClick={() => setIsNetwork(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

async function createNewWallet(currency: string) {
  const response = await fetch(`${BASE_URL}/accounts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currency }),
  });
  return response;
}
