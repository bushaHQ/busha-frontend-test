import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Modal from "./shared/Modal";
import { Close, ErrorIcon2, RedCloseIcon } from "../assets";
import Button from "./shared/Button";
import { AccountArray, Wallet } from "../types";
import { fetchData } from "../utils";
import Loader from "./shared/Loader";
import Error from "./Error";

interface AddNewWalletProps {
  isOpen: boolean;
  toggleModal: () => void;
  setUserAccounts: Dispatch<SetStateAction<AccountArray>>;
}

const AddNewWallet = ({
  isOpen,
  toggleModal,
  setUserAccounts,
}: AddNewWalletProps) => {
  const [wallets, setWallets] = useState<Array<Wallet>>([]);
  const [currency, setCurrency] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false);
  const [isFormError, setIsFormError] = useState<boolean>(false);
  const isMountedRef = useRef(true);

  const onCreateNewWallet = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isMountedRef.current = true;
    setIsFormLoading(true);

    try {
      const response = await fetch("http://localhost:3090/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency }),
      });

      if (!response.ok) {
        console.log("error");
        setIsFormError(true);
      }

      const data = await response.json();
      toggleModal();
      setUserAccounts((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error("Error creating wallet:", error);
    }
    setIsFormLoading(false);

    return () => {
      isMountedRef.current = false;
    };
  };

  const handleFetchWallets = () => {
    fetchData({
      isMountedRef,
      setIsLoading,
      setData: setWallets,
      setHasError,
      method: "GET",
      url: "wallets",
    });
  };

  useEffect(() => {
    isMountedRef.current = true;

    handleFetchWallets();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <>
      <Modal isOpen={isOpen}>
        <div className="add-new-wallet">
          {isLoading ? (
            <Loader width={4} size={84} />
          ) : hasError ? (
            <Error retryAction={handleFetchWallets} />
          ) : (
            <div className="form-container">
              <div className="form-header">
                <h4>Add new wallet</h4>
                <img
                  aria-label="Close button"
                  src={Close}
                  alt="close button"
                  onClick={toggleModal}
                />
              </div>

              <p>
                The crypto wallet will be created instantly and be available in
                your list of wallets.
              </p>

              <form onSubmit={onCreateNewWallet}>
                <div className="select-container">
                  <label htmlFor="walletType">Select wallet</label>
                  <select
                    onChange={(e) => setCurrency(e.target.value)}
                    className="select-box"
                    id="walletType"
                    aria-label="Wallet Type"
                  >
                    <option value={""}>Select wallet</option>
                    {wallets.map((wallet: Wallet, index: number) => (
                      <option key={index} value={wallet.currency}>
                        {wallet.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  isLoading={isFormLoading}
                  title={isFormLoading ? "Loading..." : "Create wallet"}
                  type="submit"
                />
              </form>

              {isFormError && (
                <div className="form-error">
                  <div className="group-1">
                    <img src={ErrorIcon2} alt="error icon" />
                    <span>Network Error</span>
                  </div>
                  <img src={RedCloseIcon} alt="close button" />
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default AddNewWallet;
