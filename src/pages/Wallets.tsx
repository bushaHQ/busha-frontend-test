import React, { useEffect, useState } from "react";
import DashboardLayout from "../templates/DashboardLayout";
import Loader from "../components/shared/Loader";
import Button from "../components/atoms/Button";
import AccountCard from "../components/molecules/AccountCard";
import { H1 } from "../components/atoms/Typography";
import AddWalletModal from "../components/organisms/AddWalletModal";
import NoDataDisplay from "../components/molecules/NoDataDisplay";
import styled from "styled-components";
import { serverUrl } from "../utils";
import { IAccountType } from "../types";

const CenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 80%;
`;

const WalletsStyles = styled.div`
  overflow-y: auto;
  height: 100%;

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .add-btn {
      font-size: 16px;
      font-weight: 500;
    }
  }
  .accounts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    border-top: 1px solid #d3d5d850;
    margin-top: 16px;
    padding-top: 24px;
    padding-bottom: 5px;
    padding-right: 20px;
  }
`;

const Wallets = () => {
  const [accounts, setAccounts] = useState<IAccountType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchAccounts = () => {
    setShowError(false);
    setIsLoading(true);

    fetch(`${serverUrl}/accounts`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setAccounts(data);
      })
      .catch((_) => setShowError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchAccounts();
    return () => {
      setAccounts([]);
    };
  }, []);
  return (
    <DashboardLayout>
      {isLoading ? (
        <CenterContent className="center-content">
          <Loader size={83} width={8} />
        </CenterContent>
      ) : showError ? (
        <NoDataDisplay handleButtonClick={fetchAccounts} />
      ) : (
        <WalletsStyles>
          <div className="page-header">
            <H1>Wallets</H1>

            {!isLoading && !showError && (
              <Button
                variant="secondary"
                className="add-btn"
                onClick={() => setIsModalOpen(true)}
              >
                + Add new wallet
              </Button>
            )}
          </div>

          {accounts.length > 0 && (
            <div className="accounts">
              {accounts.map((account, index) => (
                <AccountCard
                  key={`account_card-${index}`}
                  name={account.name}
                  currency={account.currency}
                  imgURL={account.imgURL}
                  balance={account.balance}
                  type={account.type}
                />
              ))}
            </div>
          )}
        </WalletsStyles>
      )}
      {isModalOpen && (
        <AddWalletModal
          close={() => setIsModalOpen(false)}
          {...{ setAccounts }}
          {...{ accounts }}
        />
      )}
    </DashboardLayout>
  );
};

export default Wallets;
