import { useEffect, useState } from "react";
import { accountsRes } from "../types";
import Loader from "./shared/Loader";
import TryAgain from "./TryAgainPrompt";

export default function WalletsGrid(props:{wasWalletAdded: boolean}) {
  const [wallets, setWallets] = useState<accountsRes[] | null>(null);
  const [status, setStatus] = useState("");

  async function getWallets() {
    try {
      setStatus("fetching")
      const res = await fetch(process.env.REACT_APP_SERVER + '/accounts');
      const data = await res.json();
      setWallets(data);
      setStatus("done")
    } catch (error) {
      setStatus("failed")
    }
  }

  useEffect(() => {
    getWallets();
  }, [props.wasWalletAdded]);

  if (status === "failed")
    return (
      <div className="container">
        <TryAgain func={getWallets} />
      </div>
    );

  if (status === "fetching") {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="wallets-grid">
      {wallets?.map((wallet) => {
        const balance = `${Intl.NumberFormat().format(
          parseFloat(wallet.balance)
        )} ${wallet.currency}`;

        return (
          <div className="balance-card" key={wallet.id}>
            <div className="balance-card-header">
              <img src={wallet.imgURL} alt={wallet.name} width="34px" height="34px" />
              <span>{wallet.name}</span>
            </div>

            <div className="balance">{balance}</div>

            <div className="arrow-button">
              <img src="/images/Right Arrow.svg" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
