import React, { useEffect, useState, Suspense } from "react";
import WalletCard, { WalletCardProps } from "../components/wallet/WalletCard";
import AddWallet from "../components/wallet/AddWallet";
import ErrorSpace from "../components/wallet/ErrorSpace";
import Loader from "../components/shared/Loader";
import Modal from "../components/shared/Modal";
import { Button } from "../components/shared/button";
import NetworkErrorIcon from "../components/icons/NetworkErrorIcon";
import { useDashboardContext } from "../components/shared/DashboardProvider";
import { IWallet } from "../components/wallet/types/IWallet.interface";

const Wallet: React.FC = () => {
  const {oldAccounts} = useDashboardContext();
  const [accounts, setAccounts] = useState<WalletCardProps[]>(oldAccounts);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const baseUrl = process.env.REACT_APP_BASE_URL as string;

  const NetworkErrorFallBack = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <Button onClick={() => fetchAccounts()} className="rounded btn">
            Try Again
          </Button>
        </div>
      </div>
    );
  };
  const fetchAccounts = async () => {
    let cancelRequest = false;
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/accounts`);
      if (!response.ok) {
        setError(true);
      }
      if (!cancelRequest) {
        const data = await response.json();
        setAccounts([...data, ...oldAccounts]);
      }
      const data = await response.json();
      // setAccounts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    return () => {
      cancelRequest = true;
    };
  };
  useEffect(() => {
    const ac = new AbortController()
     fetchAccounts()
    return () => ac.abort();
  }, [oldAccounts]);
  return (
    <ErrorSpace fallBack={<NetworkErrorFallBack />}>
      <Suspense fallback={<Loader size={83.37} />}>
        <>
          <div className="flex justify-between items-center rounded-full font-medium">
            <h2> Wallets</h2>
            <button className="outline" onClick={() => setOpenModal(true)}>+ Add new wallet</button>
          </div>
          {
            <>
              {loading ? (
                <div className="modal flex flex-col items-center justify-center h-screen">
                  <div>
                    <Loader size={83.37}/>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col">
                  <NetworkErrorIcon />
                  <p>Network Error</p>
                  <NetworkErrorFallBack />
                </div>
              ) : (
                <article className="wallet grid relative">
                  {accounts?.map((account: WalletCardProps) => (
                    <WalletCard key={`${account.id}-accountId`} {...account} />
                  ))}
                </article>
              )}
            </>
          }
        </>
      </Suspense>
      {openModal && (
        <Modal isOpen={openModal}>
          <AddWallet
            setClose={() => setOpenModal(false)}
            refresh={fetchAccounts}
          />
        </Modal>
      )}
    </ErrorSpace>
  );
};

// Wallet.propTypes = {
//   username: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };

export default Wallet;
