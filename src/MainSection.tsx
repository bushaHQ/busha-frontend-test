import React from 'react'
import styled from 'styled-components'
import WalletCard from './components/WalletCard'

const MainSection = () => {
  return (
      <MainContainer>
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
              <p><span>+</span> &nbsp;Add new wallet</p>
            </WalletHeader>
            <Wallets>
            <WalletCard/>
            <WalletCard/>
            <WalletCard/>
            <WalletCard/>
            </Wallets>
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
