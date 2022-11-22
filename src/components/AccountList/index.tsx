import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import { Account, Wallet } from '../../interfaces';
import { AccountItem } from '../AccountItem';
import Loader from '../shared/Loader';
import Modal from '../shared/Modal';

import './index.scss';

const AccountListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-left: 15px;
  margin-top: 20px
`;

export default function AccountList() {
  const [accountList, setAccountList] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingInButton, setIsLoadingInButton] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [showCreateWalletModal, setShowCreateWalletModal] = useState<boolean>(false);
  const [isCreateWalletError, setIsCreateWalletError] = useState<boolean>(false);
  const [isCreateWalletSuccess, setIsCreateWalletSuccess] = useState<boolean>(false);
  const [isreload, setIsReload] = useState<boolean>(false);
  const [currencyType, setCurrencyType] = useState<string>('');
  const [walletList, setWalletList] = useState<Array<Wallet>>([]);

  const handleTryAgainClick = async(e:React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    setShowCreateWalletModal(false)
    setIsError(false);
    
    setIsReload(true);
  }
  const showCreateWalletModalHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    setIsCreateWalletError(false);
    setIsCreateWalletSuccess(false);
    setIsError(false);
    setIsLoading(false);

    setShowCreateWalletModal(true);
  }
  const handleCreateWalletClick =  async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoadingInButton(true);
    try {
      const filterResult = walletList.filter(wallet => wallet.currency === currencyType);
      const walletDesc:Wallet = filterResult[0];
  
      const account:Account = {
        id: uuid(),
        currency: walletDesc.currency,
        hold: 0,
        pending_balance: 0,
        balance: 0,
        name: walletDesc.currency,
        type: walletDesc.type,
        deposit: false,
        payout: false,
        imgURL: walletDesc.imgURL
      };
        
      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      };
  
      const res = await fetch('http://localhost:3090/accounts', options);

      if (!res.ok) throw new Error('an error occurred');

      setIsLoadingInButton(false)
      setIsCreateWalletError(false);
      setIsCreateWalletSuccess(true);

      setShowCreateWalletModal(false);

      setIsReload(true);
    
    } catch (error) {
      setIsLoadingInButton(false)
      setIsCreateWalletError(true);
    }
  }

  useEffect(() => {
    let isMounted = true;
    const fetchData = async() =>{
      setIsLoading(true);
      try {
        const res = await Promise.all([
          fetch("http://localhost:3090/accounts"),
          fetch("http://localhost:3090/wallets")
        ]);
  
        if (!res[0].ok) throw new Error('error occured while fetching accounts');
        if (!res[1].ok) throw new Error('error occured while fetching wallets');
  
        if(isMounted){
          setAccountList(await res[0].json());
  
          const wallets: [Wallet] = await res[1].json();
          setCurrencyType(wallets.length > 0 ? wallets[0].currency: '');
          setWalletList(wallets);
        }
      
      } catch (error) {
        if(isMounted){
          setIsError(true);
          setShowCreateWalletModal(false);
          setAccountList([]);
          setWalletList([]);
        }
      }
  
      if (isMounted){
        setIsLoading(false);
        setIsLoadingInButton(false)
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    }
  },  [isreload]);
  return (
    <>
      
      <Modal isOpen={isError} >
        <div className='network-error'>
          <p className='circular'>
            <i className="fa-solid fa-exclamation"></i>
          </p>
          <p className='error-text'>Network Error</p>
          <button className='try-again' onClick={(e) => handleTryAgainClick(e)}>
             Try again                                             
          </button>
        </div>
      </Modal>
      <Modal isOpen={showCreateWalletModal}>
        <div className='add-new-wallet-modal'>
          <div className='header-group'>
            <p className='new-wallet-header'>Add new wallet</p>
            <button onClick={() => setShowCreateWalletModal(false)} aria-label='Close button'>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
          <p className='new-wallet-desc'>The crypto wallet will be created 
            instantly and be available in your list of wallets.
          </p>
          <div className='select-new-wallet'>
            <p className='select-subtitle'>Select wallet</p>
            <select role='combobox' className='select' value={currencyType} onChange={(e) => setCurrencyType(e.target.value)}>
              {walletList.map((wallet:Wallet)=>{
                return <option key={wallet.currency} value={wallet.currency}>{wallet.currency}</option>
              })}
            </select>
          </div>
          <button className='create-wallet-button' onClick={(e) => handleCreateWalletClick(e)}>
              Create wallet
              {isLoadingInButton ? 
                      <Loader size={10} />
                    :
                    null}
          </button>
          { isCreateWalletError ? 
            <div className='error-notice'>
              <div className='left'>
                <i className="fa-sharp fa-solid fa-diamond-exclamation"></i>
                <p>Network error</p>
              </div>
              <div className='right'>
                <button onClick={()=> setIsCreateWalletError(false)}><i className='fa-solid fa-xmark'></i></button>
              </div>
            </div>:
            null
          }
          { isCreateWalletSuccess ? 
            <div className='success-notice'>
              <div className='left'>
                <i className="fa-sharp fa-solid fa-diamond-exclamation"></i>
                <p>New Wallet Added</p>
              </div>
              <div className='right'>
                <button onClick={()=> setIsCreateWalletSuccess(false)}><i className='fa-solid fa-xmark'></i></button>
              </div>
            </div>:
            null
          }
        </div>
      </Modal>
      <Modal isOpen={isLoading}>
        <div className='loader'>
          <Loader size={70} />
        </div>
      </Modal>
      <div className='main-body'>
        <div className='left-section'>
            <ul>
              <li className='selected'>Wallets</li>
              <li>Prices</li>
              <li>Peer2Peer</li>
              <li>Activity</li>
              <li>Setting</li>
            </ul>
        </div>
        <div className='right-section'>
          <div>
            <div className='wallet-header-section'>
              <h2 className='wallet-subtitle'>Wallets</h2>
              <button className='add-wallet' 
                onClick={(e) => showCreateWalletModalHandler(e)}>
                     + Add new wallet
              </button>
            </div>
          </div>
          <AccountListContainer>
              { accountList.map((d:Account, index)=>{
                return <AccountItem d={d} key={index}/>
              })}
          </AccountListContainer>
        </div>
      </div>
    </>
  )
  
}

