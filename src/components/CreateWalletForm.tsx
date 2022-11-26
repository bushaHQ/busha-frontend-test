import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { walletsRes } from "../types";
import Loader from "./shared/Loader";
import TryAgain from "./TryAgainPrompt";
import WalletFormError from "./WalletFormError";

export default function CreateWalletForm(props: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: string | undefined;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
  setWasWalletAdded: Dispatch<SetStateAction<boolean>>;
}) {
  const [options, setOptions] = useState<walletsRes[] | undefined>();
  const [isError, setIsError] = useState(false);
  const [didOptionsFail, setDidOptionsFail] = useState(false);
  const [status, setStatus] = useState('')

  async function handleCreateWallet() {
    try {
      await fetch("http://localhost:3090/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency: props.selected }),
      });
      props.setWasWalletAdded(true);
      props.setIsOpen(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }

  async function getOptions() {
    try {
      setStatus('fetching')
      const res = await fetch("http://localhost:3090/wallets");
      const data = await res.json();
      setOptions(data);
      setDidOptionsFail(false);
      setStatus('done')
    } catch (error) {
      setStatus('failed')
    }
  }

  useEffect(() => {
    getOptions();
  }, []);

  if (status === 'failed') {
    return (
      <div className="container" style={{ height: "100vh" }}>
        <TryAgain func={getOptions} />
      </div>
    );
  }

  if (status === 'fetching') {
    return (
      <div className="container" style={{ height: "100vh" }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <form className="modal-content" onSubmit={handleCreateWallet}>
        <div className="wallets-row">
          <h2>Add new wallet</h2>
          <img
            src="/images/close.svg"
            alt="close"
            onClick={() => props.setIsOpen(false)}
          />
        </div>

        <p>
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </p>

        <div>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: " #3E4C59",
            }}
          >
            Select wallet
          </p>
          <select
            className="wallet-selection"
            name="wallet-selection"
            id="wallet-selection"
            placeholder="Select a wallet"
            onChange={(e) => props.setSelected(e.target.value)}
          >
            {options?.map((val) => {
              return <option value={val.currency}>{val.name}</option>;
            })}
          </select>
        </div>

        <button
          className="primary-button"
          disabled={props.selected === undefined}
          type="submit"
        >
          Create wallet
        </button>

        {isError ?? <WalletFormError setIsError={setIsError}/>}
      </form>
    </>
  );
}
