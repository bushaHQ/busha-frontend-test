import styled from "styled-components";
import { useWallet } from "../utils/useWallet";
import Button from "./Button";
import Loader from "../components/shared/Loader";
import errorIcon from "../assets/img/warning.svg";
import closeIcon from "../assets/img/close.svg";
import infoIcon from "../assets/img/info.svg";
import closeIcon2 from "../assets/img/close-icon-red.svg";
import { useAccount } from "../utils/useAccount";
import { useState } from "react";
import DropDown from "./DropDown";

const WalletModal = ({ closeNav, setAccounts, accounts }: WalletModalType) => {
  // I used hooks are used to simulate RTK Query in larger applications
  const { isLoading, wallets, err, getWallets } = useWallet();
  const {
    isLoading: accountLoading,
    err: accountErr,
    setErr,
    addAccount,
  } = useAccount(false);
  const [newAccount, setNewAccount] = useState(null);
  const onValueChange = (e: any) => {
    setNewAccount(e.target.value);
  };
  const handleAddAccount = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const resolveSuccess = (data: AcountType): void => {
      closeNav(false);
      setAccounts([data, ...accounts]);
    };
    addAccount({ currency: newAccount ?? wallets[0].currency }, resolveSuccess);
  };

  return (
    <WalletModalWrapper>
      {/* display errors if fetching wallet failed */}
      {err && (
        <div className="message-div">
          <div>
            <img src={errorIcon} alt="error" width={100} />
            <h5 className="text-center mt-4">Network error</h5>
            <Button styleClass="mt-4" label="Try again" func={getWallets} />
          </div>
        </div>
      )}

      {/* show spinner while loading*/}
      {isLoading && (
        <div className="message-div">
          <Loader />
        </div>
      )}
      {!isLoading && !err && (
        <form
          className="wallet-form "
          onSubmit={(e) => wallets.length && handleAddAccount(e)}
        >
          <h3>Add new wallet</h3>
          {/* display dropdown of wallets if not created */}
          {wallets.length ? (
            <>
              <p>
                The crypto wallet will be created instantly and be available in
                your list of wallets.
              </p>
              <DropDown onChange={onValueChange}>
                {wallets.map((dt, i) => (
                  <option key={i} value={dt.currency}>
                    {dt.name}
                  </option>
                ))}
              </DropDown>
              <div className="d-flex">
                <Button
                  styleClass="mt-20"
                  label="Create wallet"
                  type="submit"
                  loading={accountLoading}
                />
              </div>
            </>
          ) : (
            <span>All wallets have been added</span>
          )}

          {/* display errors if adding account failed */}
          {accountErr && (
            <div className="submit-error">
              <h5>
                <span>
                  <img src={infoIcon} alt="close" className="mr-2" />
                </span>
                <span>Network error</span>
              </h5>
              <img
                src={closeIcon2}
                alt="close"
                className="close-icon"
                onClick={() => setErr(false)}
              />
            </div>
          )}
        </form>
      )}
      {/* close icon closes the modal*/}
      <img
        src={closeIcon}
        alt="close"
        className="close-icon"
        onClick={() => closeNav(false)}
      />
      <button className="close-icon2" onClick={() => closeNav(false)}>
        <span aria-label="Close button">Close button</span>
      </button>
    </WalletModalWrapper>
  );
};

export default WalletModal;

const WalletModalWrapper = styled.div`
  > .close-icon {
    position: absolute;
    right: 20px;
    top: 120px;
    cursor: pointer;
  }
  > .close-icon2 {
    opacity: 0.002;
  }
  .wallet-form {
    padding: 20px;
    margin-top: 100px;
    h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #000000;
    }
    p {
      margin-top: 50px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      color: #3e4c59;
    }
    .d-flex {
      margin-top: 30px;
      justify-content: center;
    }

    .submit-error {
      background: #fff4f4;
      border: 1px solid #e0b3b2;
      border-radius: 8px;
      margin-top: 40px;
      position: relative;
      padding: 10px 10px;
      h5 {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #d72c0d;
        margin: 0;
      }
      .close-icon {
        position: absolute;
        right: 10px;
        top: 15px;
        cursor: pointer;
      }
    }
  }
  .message-div {
    min-height: 100vh;
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
