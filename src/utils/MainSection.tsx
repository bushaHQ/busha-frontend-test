import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

import WalletCard from '../components/WalletCard'
import { walletInfo } from '../types'
import Loader from '../components/shared/Loader'
import Error from '../components/shared/Error'
import Modal from '../components/shared/Modal'
import CreateWallet from './CreateWallet'

const MainSection = () => {
  const [accounts,setAccounts]= useState<walletInfo[]>([]);
  const [reload,setReload]=useState<boolean>(false)
  const [isLoading,setIsLoading]=useState<boolean | null>(true)
  const [showModal,setShowModal]= useState<boolean>(false)


  useEffect(()=> {
    setIsLoading(true)
    fetch('http://localhost:3090/accounts')
        .then((res)=>res.json())
        .then(result=>{
            setAccounts(result)
            setIsLoading(false)
        }
        )
        .catch(()=> {
          setIsLoading(null)
        })
  },[reload])

  const conditionRendering=()=> {
    if(isLoading) {
      return (
        <LoaderContainer>
          <Loader size={40} width={3}/>
        </LoaderContainer> 
      )
    }else if(isLoading===false) {
      return (
        <Wallets>
              {
                accounts.map(acct=> <WalletCard account={acct} key={acct.id}/>)
              }
          </Wallets>
      )
    }else{
      return (
        <ErrorContainer>
            <Error setReload={setReload}/>
        </ErrorContainer>
      )
    }
  }

  return (
      <MainContainer>
        <Modal isOpen={!showModal ? false : true}>
          <CreateWallet setShowModal={setShowModal} accountReload={setReload}/>
        </Modal>
          <RouteList>
            <li>Wallets</li>
            <li>Prices</li>
            <li>Peer2Peer</li>
            <li>Activity</li>
            <li>Settings</li>
          </RouteList>
          <WalletContent>
            <WalletHeader>
              <h2>Wallets</h2>
              <p onClick={()=>setShowModal(true)}><span>+</span> &nbsp;Add new wallet</p>
            </WalletHeader>
            {conditionRendering()}
          </WalletContent>
      </MainContainer>
  )
}

const MainContainer= styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2% 8%;
`
const RouteList=styled.ul`
  list-style-type: none;
  flex-basis: 18%;
  position: sticky;
  &>li {
    font-size: 14px;
    font-weight: 400;
    padding: 13px 20px 13px 13px;
    color:#3E4C59;
    cursor: pointer;
  }
  &>li:nth-child(1) {
    background-color:  #F5F7FA;
    border-radius: 3px;
    color: #000;
    font-weight: 600;
  }
`
const WalletContent=styled.div`
    padding-left: 5%;
    flex-grow: 1;
    overflow-y: auto;
`
const LoaderContainer=styled.div`
      display: flex;
      justify-content: center;
      padding-top: 10%;
`
const ErrorContainer=styled.div`
  padding-top: 5%;
`
const WalletHeader=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(211, 213, 216, 0.5);
  &>p {
      color: #000;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
    &>span {
      margin-left: 2px;
    }
  }
`
const Wallets=styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3,1fr);
  gap: 40px;
  padding-top: 2%;

`


export default MainSection;
