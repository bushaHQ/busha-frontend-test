import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loader from "../shared/Loader";
import "./Dashboard.scss";
import arrow from "../../assets/arrow.svg";
import { BASE_URL } from "../../utils/constants";
import { AccountsType } from "../../utils/types";
import { formatMoney } from "../../helpers";

interface DashboardProps {
  accounts: AccountsType[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAccounts: Dispatch<SetStateAction<AccountsType[]>>;
}

const Dashboard: React.FC<DashboardProps> = ({
  accounts,
  isOpen,
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
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getAccounts();
    return () => {
      setAccounts([]);
      setIsLoading(false);
    };
  }, [isError, setAccounts]);
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
              <section key={i} className="flex flex-col card">
                <div className="flex plus-symbol">
                  <div className="symbol">
                    <img src={account.imgURL} alt={account.name} />
                  </div>
                  <p>{account.name}</p>
                </div>
                <h3>
                  {account.type === "fiat"
                    ? "₦" + account.balance
                    : account.balance}
                  <span>{account.type === "fiat" ? "" : account.currency}</span>
                </h3>
                <div className="next pointer">
                  <div className="grid">
                    <img src={arrow} alt="arrow right" />
                  </div>
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
