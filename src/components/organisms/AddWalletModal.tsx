import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../shared/Loader";
import Modal from "../shared/Modal";
import CloseIcon from "../atoms/vectors/CloseIcon";
import NoDataDisplay from "../molecules/NoDataDisplay";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import ErrorAlert from "../atoms/ErrorAlert";
import { IAccountType, IWalletType } from "../../types";
interface Props {
  accounts: IAccountType[];
  setAccounts: Function;
  close: Function;
}
const AddWalletModalStyles = styled.div`
  padding: 0 20px 0 24px;
  height: 100%;

  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 74px;

    p {
      font-size: 24px;
      font-weight: 500;
      color: #000000;
    }

    .close-icon {
      cursor: pointer;
    }
  }

  .modal-body {
    margin-top: 49px;
    display: block;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .info-text {
      font-size: 18px;
      color: #3e4c59;
      margin-bottom: 43px;
    }
  }
`;

const AddWalletModal = ({
  close = () => {},
  accounts,
  setAccounts = () => {},
}: Props) => {
  const [wallets, setWallets] = useState<IWalletType[]>([]);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [showFetchError, setShowFetchError] = useState(false);
  const [showPostError, setShowPostError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleCreateWallet = (e: FormEvent) => {
    e.preventDefault();
    setIsMutating(true);
    setShowPostError(false);
    fetch(`accounts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        currency: selectedWallet,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setAccounts([...accounts, data]);
        close();
      })
      .catch((_) => setShowPostError(true))
      .finally(() => setIsMutating(false));
  };

  const fetchWallets = () => {
    setShowFetchError(false);
    setShowPostError(false);
    setIsFetching(true);

    fetch(`/wallets`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setWallets(data);
      })
      .catch((_) => setShowFetchError(true))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchWallets();
    return () => {
      setWallets([]);
    };
  }, []);
  return (
    <Modal isOpen={true}>
      <AddWalletModalStyles>
        <div className="modal-header">
          <p>Add new wallet</p>
          <CloseIcon
            aria-label="Close button"
            aria-labelledby="Close button"
            onClick={() => close()}
            className="close-icon"
          />
        </div>
        {isFetching ? (
          <div className="center-content">
            <Loader size={83} width={8} />
          </div>
        ) : showFetchError ? (
          <NoDataDisplay handleButtonClick={fetchWallets} />
        ) : (
          <div className="modal-body">
            <p className="info-text">
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </p>
            <form onSubmit={handleCreateWallet}>
              <Select
                required
                label="Select wallet"
                placeholder="Select an option"
                value={selectedWallet}
                onChange={(e) => setSelectedWallet(e.target.value)}
                options={wallets.map((wallet) => ({
                  key: wallet.name,
                  value: wallet.currency,
                }))}
              />
              <Button type="submit" disabled={isMutating}>
                {isMutating ? <Loader /> : "Create wallet"}
              </Button>
            </form>
            {showPostError && (
              <ErrorAlert close={() => setShowPostError(false)} />
            )}
          </div>
        )}
      </AddWalletModalStyles>
    </Modal>
  );
};

export default AddWalletModal;
