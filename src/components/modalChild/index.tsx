import { useState, useEffect } from "react";
import Loader from "../shared/Loader";
import Error from "../error/error";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as ErrorIcon } from "../../assets/svg/error-icon.svg";
import "./index.scss";

interface IModalChild {
  onHide: () => void;
  refresh: () => void;
}

const ModalChild = ({ onHide, refresh }: IModalChild): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [createWalletError, setCreateWalletError] = useState(false);
  const [createWalletLoading, setCreateWalletLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentName, setCurrentName] = useState("");

  const fetchWallets = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("http://localhost:3090/wallets");
      const wallets = await res.json();
      setLoading(false);
      setData(wallets);
      wallets.length > 0 && setCurrentName(wallets[0].currency);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const addWallet = async (e: any) => {
    e.preventDefault();
    setCreateWalletError(false);
    setCreateWalletLoading(true);
    try {
      await fetch("http://localhost:3090/accounts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency: currentName }),
      });
      setCreateWalletLoading(false);
      refresh();
      onHide();
    } catch (err) {
      setCreateWalletError(true);
      setCreateWalletLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets();
    return () => {
      setLoading(false);
      setError(false);
      setData([]);
    };
  }, []);

  return (
    <div className="modal-content-wrapper">
      {loading && (
        <div className="modal-loader">
          <Loader />
        </div>
      )}
      {error && (
        <div className="error-loader">
          <Error action={fetchWallets} />
        </div>
      )}
      {data.length > 0 && (
        <div className="modal-body">
          <div className="modal-body-header">
            <span className="wallet">Add new wallet</span>
            <label style={{ display: "none" }}>Close button</label>
            <Close
              id="close"
              className="modal-close"
              fill="#000"
              onClick={onHide}
            />
          </div>
          <div className="modal-body-text">
            <p>
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </p>
          </div>
          <form className="modal-body-form" onSubmit={(e) => addWallet(e)}>
            <p className="modal-body-label">Select wallet</p>
            <select
              name="currency"
              onChange={(e) => {
                setCurrentName(e.target.value);
              }}
            >
              {data &&
                data.map((val: any) => (
                  <option value={val.currency} key={val.name}>
                    {val.name}
                  </option>
                ))}
            </select>
            <div className="modal-form-button">
              <button type="submit">
                {createWalletLoading ? "Loading..." : "Create wallet"}
                <label style={{ display: "none" }}>Loading...</label>
              </button>
            </div>
            {createWalletError && (
              <div className="create-wallet-error">
                <div className="error-msg">
                  <ErrorIcon />
                  <span>Network Error</span>
                </div>
                <label style={{ display: "none" }}>Close button</label>
                <Close
                  width={10}
                  height={10}
                  fill="#D72C0D"
                  cursor="pointer"
                  onClick={() => setCreateWalletError(false)}
                />
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalChild;
