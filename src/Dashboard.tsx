import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import "./Dashboard.scss";
import arrow from "./assets/arrow.svg";

interface DashboardProps {
  accounts: AccountsType[];
  isOpen: boolean;
  isRefresh: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAccounts: Dispatch<SetStateAction<AccountsType[]>>;
}
export type AccountsType = {
  id: string;
  currency: string;
  hold: string;
  pending_balance: number;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
};

export const BASE_URL = "http://localhost:3090";

const Dashboard: React.FC<DashboardProps> = ({
  accounts,
  isOpen,
  isRefresh,
  setIsOpen,
  setAccounts,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAccounts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/accounts`);
        const data = await response.json();
        setAccounts(data);
        setIsLoading(false);
        setIsOpen(false);
        // throw new Error("error");
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    getAccounts();
    return () => {
      setAccounts([]);
    };
  }, [isError]);
  if (isLoading)
    return (
      <main className="flex loading">
        <p>Loading...</p>
        <Loader />
      </main>
    );
  return (
    <main className="w-full">
      <section className="flex flex-col main container">
        <div className="w-full flex topBar">
          <h1>Wallets</h1>
          <p className="pointer" onClick={() => setIsOpen(!isOpen)}>
            + Add new wallet
          </p>
        </div>
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
          <div className="flex cardList w-full text-light">
            {accounts?.map((account, i) => (
              <section key={i} className="card">
                <div className="flex">
                  <div className="symbol">
                    <img src={account.imgURL} alt={account.name} />
                  </div>
                  <p>{account.name}</p>
                </div>
                <h3>{account.balance}</h3>
                <p>{account.currency}</p>
                <div className="next w-full">
                  <img src={arrow} alt="arrow right" />
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
