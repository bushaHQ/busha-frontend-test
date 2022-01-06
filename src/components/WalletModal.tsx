import styled from "styled-components";
import { useWallet } from "../utils/useWallet";
import Button from "./Button";
import Loader from "../components/shared/Loader";
import errorIcon from "../assets/img/warning.svg";
import closeIcon from "../assets/img/close.svg";
import infoIcon from "../assets/img/info.svg";
import closeIcon2 from "../assets/img/close-icon-red.svg";
import Dropdown from "./DropDown";
import { useAccount } from "../utils/useAccount";
import { useState } from "react";

// interface CustomEventType {
//   target: {
//     name: string;
//     value: string | number;
//   };
// }
const WalletModal = ({
  closeNav,
  setAccounts,
  accounts,
}: {
  closeNav: (bool: boolean) => void;
  setAccounts: any;
  accounts: AcountType[];
}) => {
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
    const resolveSuccess = (data: AcountType) => {
      closeNav(false);
      setAccounts([data, ...accounts]);
    };
    addAccount({ currency: newAccount ?? wallets[0].currency }, resolveSuccess);
  };
  return (
    <WalletModalWrapper>
      {err && (
        <div className="message-div">
          <div>
            <img src={errorIcon} alt="error" width={100} />
            <h5 className="text-center mt-4">Network error</h5>
            <Button styleClass="mt-4" label="Try again" func={getWallets} />
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
        <form className="wallet-form" onSubmit={(e) => handleAddAccount(e)}>
          <h3>Add new wallet</h3>
          <p>
            The crypto wallet will be created instantly and be available in your
            list of wallets.
          </p>
          <Dropdown
            defaultText="Select Wallet"
            dropDownItems={wallets.map((wallet) => ({
              label: wallet.name,
              value: wallet.currency,
            }))}
            onSelect={(item) =>
              onValueChange({
                target: { name: "frequency", value: item.value },
              })
            }
          />
          <div className="d-flex">
            <Button
              styleClass="mt-20"
              label="Create wallet"
              type="submit"
              loading={accountLoading}
            />
          </div>

          {accountErr && (
            <div className="submit-error">
              <h5>
                <span>
                  <img src={infoIcon} alt="close" className="mr-2" />
                </span>
                Network Error
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
      <img
        src={closeIcon}
        alt="close"
        className="close-icon"
        onClick={() => closeNav(false)}
      />
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
