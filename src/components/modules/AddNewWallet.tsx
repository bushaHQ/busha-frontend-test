import * as React from "react";
import styled from "styled-components";

import Modal from "../shared/Modal";
import Loader from "../shared/Loader";
import { ReactComponent as Close } from "../../assets/close.svg";

interface AddNewWalletProps {
  isOpen: boolean;
  closeModal: () => void;
  onWalletCreate: () => void;
}

interface Wallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

interface WalletState {
  loading: boolean;
  data: Wallet[];
  error: boolean;
}

export default function AddNewWallet({
  isOpen,
  closeModal,
  onWalletCreate,
}: AddNewWalletProps) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [createWallet, setCreateWallet] = React.useState({
    loading: false,
    error: "",
  });
  const [wallets, setWallets] = React.useState<WalletState>({
    loading: false,
    data: [],
    error: false,
  });

  const fetchWallets = React.useCallback(() => {
    setWallets((wallets) => ({ ...wallets, loading: true, error: false }));

    fetch("http://localhost:3090/wallets")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching accounts");
        }

        return res.json().then((data) => {
          setWallets((wallets) => ({ ...wallets, data }));
        });
      })
      .catch(() => {
        setWallets((wallets) => ({ ...wallets, error: true }));
      })
      .finally(() => {
        setWallets((wallets) => ({ ...wallets, loading: false }));
      });
  }, []);

  React.useEffect(() => {
    fetchWallets();
  }, [fetchWallets]);

  const addWallet = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    setCreateWallet({ loading: true, error: "" });

    fetch("http://localhost:3090/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currency: formData.get("currency") }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }

        onWalletCreate();
        closeModal();
        fetchWallets();
      })
      .catch((error) => {
        setCreateWallet((info) => ({ ...info, error: error.message }));
      })
      .finally(() => {
        setCreateWallet((info) => ({ ...info, loading: false }));
      });
  };

  if (wallets.loading) {
    return <Loader width={4} size={50} />;
  }

  return (
    <Modal isOpen={isOpen}>
      <AddNewWalletContent>
        <div className="header">
          <h2>Add new wallet</h2>

          <button onClick={closeModal}>
            <Close className="close" />
          </button>
        </div>

        <p className="text">
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </p>

        <form className="wallets__form" onSubmit={addWallet} ref={formRef}>
          <label htmlFor="currency">Select wallet</label>
          <select id="currency" name="currency">
            <option value="">Select wallet:</option>
            {wallets.data.map((wallet) => (
              <option key={wallet.name} value={wallet.currency}>
                {wallet.name}
              </option>
            ))}
          </select>
          {Boolean(createWallet.error) && (
            <div className="error">{createWallet.error}</div>
          )}

          <button
            className="submit__wallet"
            type="submit"
            disabled={createWallet.loading}
          >
            Create wallet
          </button>
        </form>
      </AddNewWalletContent>
    </Modal>
  );
}

const AddNewWalletContent = styled.div`
  padding: 4rem 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    button {
      background: none;
      border: none;

      .close {
        width: 0.8rem;
        fill: #000;
      }
    }
  }

  .text {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #3e4c59;
  }

  .wallets__form {
    width: 100%;
    text-align: center;
    margin-top: 3rem;

    label {
      display: block;
      color: #3e4c59;
      font-weight: 500;
      font-size: 0.875rem;
      text-align: left;
    }
    select {
      width: 100%;
      padding: 0.8rem 0.5rem;
      border: 1px solid #cbd2d9;
      border-radius: 5px;
      margin-top: 7px;
      cursor: pointer;
    }
    .error {
      color: crimson;
      font-size: 0.7rem;
      font-weight: 500;
      text-align: left;
    }
    .submit__wallet {
      background: #000;
      border-radius: 40px;
      color: #fff;
      border-color: #000;
      padding: 0.6rem 1.7rem;
      margin-top: 1rem;
    }
  }
`;
