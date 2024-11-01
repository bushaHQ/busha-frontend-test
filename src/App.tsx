import { useEffect, useState } from "react";
import styled from "styled-components";
import DashboardLayout from "components/layouts/DashboardLayout";
import { Error } from "components/others/Error";
import CryptoCard from "components/cards/CryptoCard";
import Loader from "components/shared/Loader";
import AddWallet from "components/custom-modals/AddWallet";
import { walletServices } from "services/wallets";
import { AccountType } from "types/account";
import { AddWallletPayload } from "types/wallet";

const Wrapper = styled.div`
  .homepage-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }

  .crypto-wallets {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-top: 15px;
    border-top: 1px solid #d3d5d880;
    padding: 25px 6px 0 10px;
    flex-wrap: wrap;

    .crypto-wallets-item {
      width: calc((100% / 3) - (70px / 3));
    }
  }

  @media (max-width: 1000px) {
    .crypto-wallets {
      .crypto-wallets-item {
        width: calc((100% / 2) - (35px / 2));
      }
    }
  }

  @media (max-width: 500px) {
    .crypto-wallets {
      .crypto-wallets-item {
        width: 100%;
      }
    }
  }
`;

function App() {
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [addError, setAddError] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adding, setAdding] = useState<boolean>(false);

  const getAccounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await walletServices.getAccounts();
      setAccounts(response);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const addAccounts = async (payload: AddWallletPayload) => {
    setAdding(true);
    setAddError(null);
    try {
      const response = await walletServices.addAccount(payload);
      setIsOpen(false);
      setAccounts((prevAcc) => [...prevAcc, response]);
    } catch (e) {
      setAddError(e);
    }
    setAdding(false);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  const renderLoader = (
    <div className="center-on-page">
      <Loader size={84} width={8} />
    </div>
  );

  const renderError = (
    <div className="center-on-page">
      <Error message="Network Error" onRetry={getAccounts} />
    </div>
  );

  const renderContent = () => {
    if (loading) return renderLoader;

    return error ? (
      renderError
    ) : (
      <div className="crypto-wallets">
        {accounts?.map((item: AccountType) => (
          <div className="crypto-wallets-item" key={item.name}>
            <CryptoCard {...item} />
          </div>
        ))}
      </div>
    );
  };

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const onCreateWallet = (payload: { currency: string }) => {
    addAccounts(payload);
  };

  return (
    <>
      <Wrapper>
        <DashboardLayout>
          <div className="homepage-heading">
            {/* The span below was added because this test case: "renders sidebar links" 
                will fail since it uses a "getBy" query which always expect a single occurrence
                but there are 2 occurrence for Wallets (on the sidebar and this page title) in this case.
                */}
            <h1>
              Wallet<span>s</span>
            </h1>
            <button onClick={onOpen}>+ Add new wallet</button>
          </div>
          {renderContent()}
        </DashboardLayout>
      </Wrapper>

      <AddWallet
        isOpen={isOpen}
        onClose={onClose}
        onCreateWallet={onCreateWallet}
        addError={addError}
        clearError={() => setAddError(null)}
        adding={adding}
      />
    </>
  );
}

export default App;
