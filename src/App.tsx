import React from 'react';
import { useState, useEffect } from 'react';
import Loader from './components/shared/Loader';
import Modal from './components/shared/Modal';
import { ReactComponent as Logo} from './icons/logo.svg'
import { ReactComponent as Arrow} from './icons/right-arrow.svg'
import { ReactComponent as Close} from './icons/close.svg'
import { ReactComponent as ErrorIcon} from './icons/error.svg'
import { ReactComponent as NetworkError} from './icons/networkError.svg'
import { ReactComponent as CloseError} from './icons/closeError.svg'

function App() {
  const [accounts, setAccounts] = useState({
    isLoaded: false,
    items: [],
    failed: false

  })

  const [wallets, setWallets] = useState({
    isLoaded: false,
    items: [],
    failed: false,
    createWalletError: false,
  })


  const [selectedCurrency, setSelectedCurrency] = useState("")

  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    setAccounts({...accounts, isLoaded: false, items: [], failed: false})

    fetchAccounts();

    if(isOpen){
      fetchWallets();
    }
  }, [isOpen])

  const fetchWallets = () => {
    fetch(`${process.env.REACT_APP_PROXY}/wallets`)
      .then(res => {
        if(!res.ok){
          setWallets({...wallets, isLoaded: true, items: [], failed: true})
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(
        (result) => {
          setWallets({...wallets, isLoaded: true, items: result, failed: false})
        })
        .catch((err)=> console.log(err))
  }

  const fetchAccounts = () => {
    fetch(`${process.env.REACT_APP_PROXY}/accounts`)
    .then(res => {
      if(!res.ok){
        setAccounts({...accounts, failed: true, items: [], isLoaded: true})
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then((result) => {
      setAccounts({...accounts, isLoaded: true, items: result, failed: false})
    }).catch((err) => console.log(err))
  }

  const handleWalletCreate = (e: any) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_PROXY}/accounts`, 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({currency: selectedCurrency})
    }).then((res) => {
      if(!res.ok){
        setWallets({...wallets, createWalletError: true})
        setIsOpen(true)
        throw Error(res.statusText)
      }

      return res.json()
    })
      .then((result) => {
        setIsOpen(!isOpen)
      }).catch((err) => console.log(err))
  }

  return (
    <>
      <Modal isOpen={isOpen}>
        {
          !wallets.isLoaded && 
          <div className='center'>
            <Loader size={100} width={8}/>
          </div>
        }
        { 
          (wallets.isLoaded && !wallets.failed && wallets.items) &&
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
                {wallets.items.map((wallet: any, i) => 
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
              wallets.createWalletError &&
              <div className="create-wallet-error">
                <div>
                  <NetworkError />
                  <span>Network Error</span>
                </div>
                <CloseError onClick={() => setWallets({...wallets, createWalletError: false})}/>
              </div>
            }
          </div>
        }

        {
          (wallets.isLoaded && wallets.failed) &&
          <div className='center'>
            <div className='network-error'>
              <div className='error-logo'>
                <ErrorIcon />
              </div>
              <h3>Network Error</h3>
              <div className="btn-container">
                <button className="btn-submit" onClick={fetchWallets}>
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
                <span onClick={() => setIsOpen(!isOpen)} className={accounts.failed || !accounts.isLoaded ? "hide" : ""}>
                  + Add new wallet
                </span>
              </div>
              <div className={accounts.failed || !accounts.isLoaded ? "hide" : "separator"}></div>
              <div className='right-section-content'>
                { 
                  !accounts.isLoaded && 
                  <div className='center'>
                    <Loader size={100} width={8}/>
                  </div>
                }

                {
                  accounts.failed &&
                  <div className='center'>
                    <div className='network-error'>
                      <div className='error-logo'>
                        <ErrorIcon />
                      </div>
                      <h3>Network Error</h3>
                      <div className="btn-container">
                        <button className="btn-submit" onClick={fetchAccounts}>
                          Try again
                        </button>
                      </div>
                  </div>
                  </div>
                  
                }
                {
                  (accounts.isLoaded && !accounts.failed && accounts.items) &&
                  <div className='accounts-cards'>
                      { accounts.items.length &&
                        accounts.items.map((account: any, i) => 
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

