import React, { useState, useEffect } from "react";
import "../../index.scss";
import Loader from "../shared/Loader";
import MaxWidth from "./MaxWidth";
import NavBar from "./NavBar";
import Modal from "../shared/Modal";
import AccountListCard from "./AccountCard";
import { response } from "msw";
import { factory } from "typescript";
function Dashboard() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [currency, setCurrency] = useState<any[]>([]);
  const [selected_currency, setSelect_currency] = useState<string>("");
  const [wallet_loading, setWallet_loading] = useState<boolean>(false);
  const [account_loading, setAccount_loading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const [account_error, setAccount_error] = useState<boolean>(false);
  const [wallet_error, setWallet_error] = useState<boolean>(false);
  const [add_account_error, setAdd_account_error] = useState<boolean>(false);

  const get_currencies = () => {
    setWallet_loading(true);
    setOpen(!open);
    fetch("http://localhost:3090/wallets")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setWallet_error(true);
        }
      })
      .then((data) => {
        setWallet_loading(false);
        setCurrency(data);
      });
  };

  const refetch_currencies = () => {
    setWallet_error(false);
    setWallet_loading(true);
    fetch("http://localhost:3090/wallets")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setWallet_error(true);
        }
      })
      .then((data) => {
        setWallet_loading(false);
        setCurrency(data);
      });
  };

  const refetch_account = () => {
    setAccount_error(false);
    setAccount_loading(true);

    fetch("http://localhost:3090/accounts")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setAccount_error(true);
        }
      })
      .then((data) => {
        setAccount_loading(false);

        setAccounts(data);
      });
  };

  const add_account = () => {
    setAccount_loading(true);
    fetch("http://localhost:3090/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currency: selected_currency,
      }),
    }).then((response) => {
      if (response.status === 422) {
        refetch_account();
        setAccount_loading(false);
        setAdd_account_error(true);
      } else {
        setAccount_loading(false);
        setAdd_account_error(false);
        setOpen(!open);
        refetch_account();
      }
    });
  };
  useEffect(() => {
    let isMounted = true;
    setAccount_loading(true);
    fetch("http://localhost:3090/accounts")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setAccount_error(true);
        }
      })
      .then((data) => {
        if (isMounted) {
          setAccount_loading(false);
          setAccounts(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <Modal isOpen={open}>
        {wallet_error ? (
          <div className="wallet-error">
            <div className="loader">
              <img alt="close button" src={"./verificationlinkexpired.svg"} />
            </div>
            <div>
              <p> Network Error</p>
            </div>

            <div className="modal-select-button">
              <button onClick={() => refetch_currencies()}>Try again</button>
            </div>
          </div>
        ) : (
          <div>
            {wallet_loading ? (
              <div>
                {wallet_loading && (
                  <div className="loader">
                    <Loader size={83.37} width={8} />
                  </div>
                )}
              </div>
            ) : (
              <div className="modal">
                <div className="modal-heading">
                  <h1>Add new wallet</h1>
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Close button"
                  >
                    <img src={"./close.svg"} />
                  </button>
                </div>
                <p>
                  The crypto wallet will be created instantly and be available
                  in your list of wallets.
                </p>
                <div className="modal-select-form">
                  <label>Select wallet</label>
                  <div>
                    <select
                      defaultValue={""}
                      onChange={(e) => {
                        setSelect_currency(e.target.value);
                      }}
                    >
                      {currency.map((curr) => (
                        <option key={curr.currency} value={curr.currency}>
                          {curr.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="modal-select-button">
                    <button onClick={() => add_account()}>
                      Create wallet
                      {account_loading && (
                        <button
                          style={{ width: 0, opacity: 0 }}
                          id="submit-button"
                        >
                          <label htmlFor="submit-button">Loading...</label>
                        </button>
                      )}
                    </button>
                  </div>
                  {add_account_error && (
                    <div className="add-account-error-background">
                      <div className="add-account-error">
                        <div>
                          <img src="error.svg" />
                        </div>
                        <div>
                          <p>Network Error</p>
                        </div>
                      </div>
                      <img src={"redclose.svg"} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
      <div className="main-nav-bar">
        <MaxWidth>
          <div className="main-nav-bar-content ">
            <img src={"./BushaLogo.svg"} />
            <div className="username-section">
              <div className="username-icon">O</div>
              <p>Oluwatobi Akindunjoye</p>
            </div>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth>
        <div className="dashboard-grid">
          <div>
            <NavBar />
          </div>
          <div>
            <div style={{ marginLeft: 65 }}>
              <div className="heading">
                <div>
                  <h1>Wallet</h1>
                </div>
                <div>
                  <p
                    onClick={() => {
                      get_currencies();
                    }}
                  >
                    + Add new wallet
                  </p>
                </div>
              </div>

              <div>
                {account_error ? (
                  <div className="wallet-error">
                    <div className="loader">
                      <img src={"./verificationlinkexpired.svg"} />
                    </div>
                    <div>
                      <p> Network Error</p>
                    </div>

                    <div className="modal-select-button">
                      <button onClick={() => refetch_account()}>
                        Try again
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {account_loading ? (
                      <div className="loader">
                        <Loader size={83.37} width={8} />
                      </div>
                    ) : (
                      <div>
                        <div className="account-grid">
                          {accounts.map((account) => (
                            <div key={account.id}>
                              <AccountListCard
                                imgURL={account.imgURL}
                                name={account.name}
                                balance={account.balance}
                                currency={account.currency}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}

export default Dashboard;
