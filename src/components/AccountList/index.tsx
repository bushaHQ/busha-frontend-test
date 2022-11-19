import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';

import { Account } from '../../interfaces';
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
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showCreateWalletModal, setShowCreateWalletModal] = useState(false);
  const [isCreateWalletError, setIsCreateWalletError] = useState(false);

  const handleTryAgainClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    window.location.reload();
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async() =>{
      const data = await fetch("http://localhost:3090/accounts");

      if (!data.ok){
        setIsError(true);
        setIsLoading(false);
        setList([]);
        return
      }
      const json = await data.json();
      setList(json)
      setIsLoading(false);
    }

    fetchData().catch(console.error);
    return () => {}
  },  []);
  return (
    <>
      <Modal isOpen={isLoading}>
        <div className='loader'>
          <Loader size={70} />
        </div>
      </Modal>
      <Modal isOpen={isError} >
        <div className='network-error'>
          <p className='circular'>
            <i className="fa-solid fa-exclamation"></i>
          </p>
          <p className='error-text'>Network Error</p>
          <button className='try-again' onClick={(e) => handleTryAgainClick(e)}>
            <a href='#'>  Try again </a>                                             
          </button>
        </div>
      </Modal>
      <Modal isOpen={showCreateWalletModal}>
        <div className='add-new-wallet-modal'>
          <div className='header-group'>
            <p className='new-wallet-header'>Add new wallet</p>
            <button onClick={() => setShowCreateWalletModal(false)}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
          <p className='new-wallet-desc'>The crypto wallet will be created 
            instantly and be available in your list of wallets.
          </p>
          <div className='select-new-wallet'>
            <p className='select-subtitle'>Select wallet</p>
            <select className='select'>
              <option>Ethereum</option>
              <option>Bitcoin</option>
              <option>Litecoin</option>
              <option>Dodgecoin</option>
              <option>Kachicoin</option>
            </select>
          </div>
          <button className='create-wallet-button'>
              <a href='#'>Create wallet</a>
          </button>
          { isCreateWalletError ? 
            <div className='error-notice'>
              <div className='left'>
                <i className="fa-sharp fa-solid fa-diamond-exclamation"></i>
                <p>Network Error</p>
              </div>
              <div className='right'>
                <button onClick={()=> setIsCreateWalletError(false)}><i className='fa-solid fa-xmark'></i></button>
              </div>
            </div>:
            null
          }
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
                onClick={() => setShowCreateWalletModal(true)}>
                    <a href='#'> + Add new wallet</a>
              </button>
            </div>
          </div>
          <AccountListContainer>
              { list.map((d:Account, index)=>{
                return <AccountItem d={d} key={index}/>
              })}
          </AccountListContainer>
        </div>
      </div>
    </>
  )
  
}

