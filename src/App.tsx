import React, { useEffect } from "react";
import BalanceCard from "./components/balance-card/balance-card";
import Loader from "./components/shared/Loader";
import Sidebar from "./components/sidebar/sidebar";
import { IAccount, IWallet } from "./interfaces";
import Modal from "./components/shared/Modal";
import Header from "./components/header/header";

const BASE_URL = process.env.REACT_APP_API

const App = () => {
  let initAccounts: Array<IAccount> = [];

  const [accounts, setAccounts] = React.useState(initAccounts);
  const [fetchingAccounts, setFethingAccounts] = React.useState(true)
  const [errorOccured, setErrorOccured] = React.useState(false)

  let initWallets: Array<IWallet> = [];
  const [wallets, setWallets] = React.useState(initWallets);
  const [fetchingWallets, setFethingWallets] = React.useState(true)
  const [fetchingWalletsFailed, setFetchingWalletsFailed] = React.useState(false)
  const [isModalOpened, setIsModalOpened] = React.useState(false);


  const [selectedWallet, setSelectedWallet] = React.useState('')
  const [creatingWallet, setCreatingWallet] = React.useState(false);
  const [creatingWalletErrorMessage, setCreatingWalletErrorMessage] = React.useState('')

  const getAccounts = async () => {
    setFethingAccounts(true);
    setErrorOccured(false);
    await fetch(`${BASE_URL}/accounts`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json();
      })
      .then((data) => {
        setAccounts(data);
        setFethingAccounts(false);
      })
      .catch((error) => {
        setAccounts([])
        setErrorOccured(true)
        setFethingAccounts(false)
      })
  }

  const getWallets = () => {
    setFethingWallets(true);
    setFetchingWalletsFailed(false);
    setTimeout(() => {
      fetch(`${BASE_URL}/wallets`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json();
        })
        .then((data) => {
          setWallets(data);
          setFethingWallets(false);
        })
        .catch((error) => {
          setWallets([])
          setFetchingWalletsFailed(true);
          setFethingWallets(false);
        })
    }, 500);
  }

  const createWallet = () => {
    setCreatingWallet(true);
    fetch(`${BASE_URL}/accounts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currency: selectedWallet }),
      })
      .then((response: any) => {
        if (!response.ok) {
          return response.text().then((error: string | undefined) => { throw new Error(error) })
        }
        response.json()
      })
      .then(async (data) => {
        await getAccounts();
        closeModal()
        setCreatingWallet(false);

      })
      .catch((error) => {
        setCreatingWallet(false);
        try {
          setCreatingWalletErrorMessage(JSON.parse(error.message).error);
        } catch (e) {
          setCreatingWalletErrorMessage('Network error');
        }

      });
  }

  const closeModal = () => {
    setIsModalOpened(false);
    setSelectedWallet('');
    setCreatingWalletErrorMessage('')
  }

  const openModal = () => {
    setIsModalOpened(true);
    getWallets();
  }

  useEffect(() => {
    getAccounts();
    return () => {
      setAccounts([]);
      setWallets([]);
    };
  }, [])


  return (
    <div>
      <Header />
      <div className="page-content">

        <Sidebar />

        <div className="inner-content">

          <div className="page-heading">
            <div className="title">Wallets</div>
            <div className="cta">
              <button onClick={() => openModal()}>+ Add new wallet</button>
            </div>
          </div>

          {fetchingAccounts &&
            <div className="loader">
              <Loader />
            </div>}

          {errorOccured &&
            <div className="error-occured">
              <img alt="error" src="/assets/images/error.svg" />
              <div className="headline-note"> Network Error</div>
              <div>
                <button className="ui-btn" onClick={() => getAccounts()}>Try Again</button>
              </div>
            </div>
          }

          {!fetchingAccounts && accounts.length > 0 &&
            accounts.map((element: IAccount) => <BalanceCard name={element.name} image={element.imgURL} balance={element.balance} key={element.id} />)
          }

          <Modal isOpen={isModalOpened}>
            {fetchingWallets &&
              <div className="loader">
                <Loader />
              </div>
            }
            {fetchingWalletsFailed &&
              <div className="error-occured">
                <img alt="error" src="/assets/images/error.svg" />
                <div className="headline-note"> Network Error</div>
                <div>
                  <button className="ui-btn" onClick={() => getWallets()}>Try Again</button>
                </div>
              </div>
            }

            <div className="modal">
              <div className="modal-header">
                <div className="title">Add new wallet</div>
                <div className="close">
                  <button aria-label="Close button" onClick={() => closeModal()}>
                    <img alt="close" src="/assets/images/close.svg" />
                  </button>
                </div>
              </div>

              {!fetchingWallets && !fetchingWalletsFailed &&

                <div>
                  <div className="headline-note">
                    The crypto wallet will be created instantly and be available in your list of wallets.
                  </div>
                  <form>
                    <label>Select wallet</label>
                    <select
                      onChange={(e) => setSelectedWallet(e.target.value)} value={selectedWallet} className="form-control">
                      <option value=''>Select an option</option>
                      {wallets.map((element: IWallet) => <option key={element.currency} value={element.currency}>{element.name}</option>)}
                    </select>
                    <div className="submit-btn">
                      <button className="ui-btn" type="button" disabled={selectedWallet === '' || creatingWallet} onClick={() => createWallet()}>
                        Create wallet
                        {
                          creatingWallet &&
                          <span aria-label="Loading...">...</span>
                        }
                      </button>
                    </div>

                    {!creatingWallet && creatingWalletErrorMessage &&
                      <div className="form-error-message">
                        <div className="message"><img alt="error" src="/assets/images/error_red.svg" /> {creatingWalletErrorMessage}</div>
                        <div>
                          <button className="close-error" onClick={() => setCreatingWalletErrorMessage('')}><img alt="error" src="/assets/images/close_red.svg" /></button>
                        </div>
                      </div>
                    }
                  </form>
                </div>
              }

            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default App;
