import { useState, useEffect } from 'react';
import Loader from './components/shared/Loader';
import Modal from './components/shared/Modal';

import { useApi } from './api';

import { ReactComponent as Logo} from './icons/logo.svg'
import { ReactComponent as Arrow} from './icons/right-arrow.svg'
import { ReactComponent as Close} from './icons/close.svg'
import { ReactComponent as ErrorIcon} from './icons/error.svg'
import { ReactComponent as NetworkError} from './icons/networkError.svg'
import { ReactComponent as CloseError} from './icons/closeError.svg'

function App() {
 
  const [selectedCurrency, setSelectedCurrency] = useState("")
  const [errorIsOpen, setErrorIsOpen] = useState(false)

  const accounts = useApi(
    `${process.env.REACT_APP_PROXY}/accounts`,
    "GET",
  )

  const wallets = useApi(
    `${process.env.REACT_APP_PROXY}/wallets`,
    "GET",
  )

  const createWallet = useApi(
    `${process.env.REACT_APP_PROXY}/accounts`,
    "POST",
    {currency: selectedCurrency}
  )

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    accounts.execute()
  }, [accounts])

  useEffect(() => {
    if(isOpen){
      wallets.execute()
    }
  }, [isOpen, wallets])

  const handleWalletCreate = async () => {
    createWallet.execute()
    accounts.execute()
    if(createWallet.apiState === "failed"){
      setErrorIsOpen(true)
    }
  }
 
  

  return (
    <>
      <Modal isOpen={isOpen}>
        {
          wallets.apiState === "loading" && 
          <div className='center'>
            <Loader size={100} width={8}/>
          </div>
        }
        { 
          (wallets.apiState === "done" && wallets.data)  &&
          <div className="modal-content">
            <div className='modal-content-header'>
              <h3>Add new wallet</h3>
              <span onClick={() => setIsOpen(!isOpen)}>
                <Close />
              </span>
            </div>

            <div className='info'>
              <p>
              The crypto wallet will be created instantly and be available in your list of wallets.
              </p>
            </div>

            <div className='form'>
              <h4>Select wallet</h4>
              <select defaultValue="DEFAULT" onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option value="DEFAULT" disabled>Select currency</option>
                {wallets.data.map((wallet: any, i) => 
                <option key={i} value={wallet.currency}>{wallet.name}</option>
                  )}
              </select>
              <div className='btn-container'>
                  <button className='btn-submit' onClick={handleWalletCreate}>
                    Create wallet
                  </button>
              </div>
            </div>

            {
              
              (createWallet.apiState === "failed" || errorIsOpen) &&
              <div className="create-wallet-error">
                <div>
                  <NetworkError />
                  <span>Network Error</span>
                </div>
                <CloseError onClick={() => setErrorIsOpen(!errorIsOpen)}/>
              </div>
              
            }
          </div>
        }

        {
          wallets.apiState === "failed" &&
          <div className='center'>
            <div className='network-error'>
              <div className='error-logo'>
                <ErrorIcon />
              </div>
              <h3>Network Error</h3>
              <div className="btn-container">
                <button className="btn-submit" onClick={wallets.execute}>
                  Try again
                </button>
              </div>
            </div>
          </div>
        }
      </Modal>

      <div className="main">
        <header>
          <div className="header-container"> 
            <div className='logo'>
                <Logo />
            </div>
            <div className='profile'>
              <span className='profile-picture'>
                O
              </span>
              <h3 className="profile-name">
                Oluwatobi Akindunjoye
              </h3>
            </div>
          </div>
        </header>

        <section className='dashboard'>
          <div className='dashboard-container'>
            <div className='left-section'>
              <ul>
                <li>Wallets</li>
                <li>Prices</li>
                <li>Peer2Peer</li>
                <li>Activity</li>
                <li>Settings</li>
              </ul>
            </div>
            <div className='right-section'>
              <div className='right-section-header'>
                <h1>Wallets</h1>
                <span onClick={() => setIsOpen(!isOpen)} className={accounts.apiState === "failed" ? "hide" : ""}>
                  + Add new wallet
                </span>
              </div>
              <div className={accounts.apiState === "failed" ? "hide" : "separator"}></div>
              <div className='right-section-content'>
                { 
                  accounts.apiState === "loading" && 
                  <div className='center'>
                    <Loader size={100} width={8}/>
                  </div>
                }

                {
                  accounts.apiState === "failed" &&
                  <div className='center'>
                    <div className='network-error'>
                      <div className='error-logo'>
                        <ErrorIcon />
                      </div>
                      <h3>Network Error</h3>
                      <div className="btn-container">
                        <button className="btn-submit" onClick={accounts.execute}>
                          Try again
                        </button>
                      </div>
                  </div>
                  </div>
                  
                }
                {
                  (accounts.apiState === "done" && accounts.data) &&
                  <div className='accounts-cards'>
                      { accounts.data.length &&
                        accounts.data.map((account: any, i) => 
                          <div className='card' key={i}>
                            <div className='card-header'>
                              <img src={account.imgURL} alt={account.name} />
                              <h4>{account.name}</h4>
                            </div>
                            <div className='card-balance'>
                              {account.balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {account.currency}
                            </div>
                            <div className='card-btn'>
                              <Arrow />
                            </div>
                          </div>
                        )
                      }
                  </div>
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

