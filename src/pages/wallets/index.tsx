import { useState, useEffect } from "react";
import WalletCard from "../../components/wallet/WalletCard";
import AddNewWalletModal from "../../components/wallet/AddNewWalletModal";
import styled from "styled-components";
import useAccounts from "../../hooks/useAccounts";
import { AccountsDetail } from "../../types";
import Loader from "../../components/shared/Loader";
import ErrorState from "../../components/shared/ErrorState";

export default function Wallets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiState, accountsData, refetch] = useAccounts();
  const [walletAccounts, setWalletAccounts] = useState<AccountsDetail[]>([]);

  // Update accounts after creating new wallet
  const updateAccounts = (data: AccountsDetail) => {
    setWalletAccounts((prevAccounts) => [...prevAccounts, data]);
  };

  useEffect(() => {
    if (apiState === "success") {
      setWalletAccounts(accountsData);
    }
  }, [accountsData, apiState]);

  return (
    <WalletPage>
      <PageHeader>
        <h2 className="title">W‎allets</h2>
        {apiState === "success" && (
          <button
            type="button"
            className="wallet-action"
            onClick={() => setIsModalOpen(true)}
          >
            <p>+ Add new wallet</p>
          </button>
        )}
      </PageHeader>
      {/* Loading UI */}
      {apiState === "loading" && (
        <LoaderContainer>
          <Loader size={83.37} width={8} />
        </LoaderContainer>
      )}

      {/* Success UI */}
      {apiState === "success" && (
        <WalletGrid>
          {walletAccounts.map((item: AccountsDetail) => (
            <WalletCard key={item.id} cardData={item} />
          ))}
        </WalletGrid>
      )}

      {/* Error UI */}
      {apiState === "error" && (
        <ErrorContainer>
          <ErrorState refetch={refetch} />
        </ErrorContainer>
      )}

      {isModalOpen && (
        <AddNewWalletModal
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          updateAccounts={updateAccounts}
        />
      )}
    </WalletPage>
  );
}

const PageHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #d3d5d880;
  padding-bottom: 24px;
  width: 100%;
  color: #1f2933;
  display: flex;
  justify-content: space-between;

  .title {
    font-weight: bold;
    font-size: 2rem;
  }

  .wallet-action {
    color: #000;
    border: none;
    background: none;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const WalletPage = styled.div`
  width: 100%;
  height: fit-content;
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 170px;
`;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 126px;
`;

const WalletGrid = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 240px);

  @media screen and (max-width: 928px) {
    grid-template-columns: repeat(2, 240px);
    gap: 24px;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
