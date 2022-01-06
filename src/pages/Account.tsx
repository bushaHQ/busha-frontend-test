import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Loader from "../components/shared/Loader";
import errorIcon from "../assets/img/warning.svg";
import Button from "../components/Button";
import Modal from "../components/shared/Modal";
import { useAccount } from "../utils/useAccount";
import WalletModal from "../components/WalletModal";
const Wallets: React.FunctionComponent = () => {
  const { isLoading, accounts, err, getAccounts, setAccounts } =
    useAccount(true);
  const [openNav, setOpenNav] = useState(false);
  return (
    <WalletsWrapper>
      <div className="wrapper">
        <div className="header">
          <div>
            <h3>Wallets</h3>
          </div>
          {!isLoading && (
            <div>
              <button
                className="btn font-weight-bold"
                onClick={() => setOpenNav(true)}
              >
                +Add New Wallet
              </button>
            </div>
          )}
        </div>
        <hr />
        {err && (
          <div className="message-div">
            <div>
              <img src={errorIcon} alt="error" width={100} />
              <h5 className="text-center mt-4">Network error</h5>
              <Button styleClass="mt-4" label="Try again" func={getAccounts} />
            </div>
          </div>
        )}
        {isLoading ? (
          <div className="message-div">
            <div>
              <Loader />
              <br />
              <h5 className="ml-3">Loading...</h5>
            </div>
          </div>
        ) : (
          <div className="card-container mt-4">
            {accounts?.map((account, index) => (
              <Card key={index} account={account} />
            ))}
          </div>
        )}
        <Modal isOpen={openNav}>
          <WalletModal
            closeNav={setOpenNav}
            setAccounts={setAccounts}
            accounts={accounts}
          />
        </Modal>
      </div>
    </WalletsWrapper>
  );
};

export default Wallets;

const WalletsWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;

    div {
      h3 {
        font-size: 32px;
        line-height: 32px;
        color: #000000;
      }
      button {
        background: inherit;
      }
    }
  }
  .card-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .message-div {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
