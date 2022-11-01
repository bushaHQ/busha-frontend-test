import { useEffect, useState } from "react";
import Loader from "./components/shared/Loader";
import "./Dashboard.scss";
import arrow from "./assets/arrow.svg";

interface DashboardProps {}
type AccountsType = {
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

const Dashboard: React.FC<DashboardProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [accounts, setAccounts] = useState<AccountsType[]>([]);
  useEffect(() => {
    const getAccounts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3090/accounts");
        const data = await response.json();
        console.log(data);
        setAccounts(data);
        setIsLoading(false);
        // throw new Error("error");
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getAccounts();
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
        <h1>Wallets</h1>
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
              <section key={account.id} className="card">
                <div className="flex">
                  <div className="symbol">
                    <img src={account.imgURL} alt={account.name} />
                  </div>
                  <p>{account.name}</p>
                </div>
                <h3>{account.balance}</h3>
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
