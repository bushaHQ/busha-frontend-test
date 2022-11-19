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

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async() =>{
      const data = await fetch("http://localhost:3090/accounts");
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
              <p className='add-wallet'><a href='#'> + Add new wallet</a></p>
            </div>
          </div>
          <AccountListContainer>
              { list.map((d:Account)=>{
                return <AccountItem d={d}/>
              })}
          </AccountListContainer>
        </div>
      </div>
      
      
    </>
  )
  
}

