import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Loader from "./components/shared/Loader";
import close from "./assets/close.svg";
import Modal from "./components/shared/Modal";
import { AccountsType, BASE_URL } from "./Dashboard";

interface AddWalletModalProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsRefresh: Dispatch<SetStateAction<boolean>>;
  setAccounts: Dispatch<SetStateAction<AccountsType[]>>;
}
type WalletType = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};
export const AddWalletModal: React.FC<AddWalletModalProps> = ({
  setIsOpen,
  setIsRefresh,
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

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.selectedIndex);
    setCurrency(e.target.value);
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
    <div className="flow">
      <div>{currency}</div>
      {isError ? (
        <div className="flex flex-col errorContainer">
          <div className="grid error">
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <p> Network Error</p>
          <button className="try pointer" onClick={() => setIsError(false)}>
            Try again
          </button>
        </div>
      ) : (
        <div>
          <div className="flex top">
            <h2>Add New Wallet</h2>
            <div className="pointer" onClick={() => setIsOpen(false)}>
              <button aria-label="Close button">Close button</button>
              {/* <img src={close} alt={close} /> */}
              {/* <button>Close button</button> */}
            </div>
          </div>
          <p>
            The crypto wallet will be created instantly and be available in your
            list of wallets.
          </p>
          <p>Select wallet</p>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => handleChange(e)}
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
          </div>
          {/* <div> */}
          <button
            className="try pointer"
            type="submit"
            onClick={() => handleSubmit()}
          >
            {isCreating ? <Loader /> : "Create wallet"}
          </button>

          {isNetwork && (
            <div>
              <div>Network Error</div>
              <img src={close} alt="" onClick={() => setIsNetwork(false)} />
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
