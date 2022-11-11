import React from 'react'
import styled from 'styled-components'

// import {ReactComponent as WalletTypeIcon} from '../assets/svgs/NGN.svg'
import {ReactComponent as ArrowIcon} from '../assets/svgs/Icon.svg'
import { walletInfo } from '../types'

interface iProps {
    account: walletInfo,
}

const WalletCard: React.FC<iProps> = ({account})=> {
  return (
    <CardContainer>
        <CardType>
            <img src={account.imgURL} alt={account.name}/>
            <p>{account.name}</p>
        </CardType>
        <CardAmount>
            <p>
            {account.name==='Naira' ? '₦' : null}
            {account.balance.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 
            {account.name !== 'Naira' ? account.currency : null }
            </p>
        </CardAmount>
        <MoreInfo>
            <ArrowIcon/>
        </MoreInfo>
    </CardContainer>
  )
}

const CardContainer= styled.div`
    border: 1px solid black;
    padding: 15px;
    background-color: #111111;;
    box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
    border-radius: 10px;
`
const CardType=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    &>p {
        font-size: 14px;
        color: #9AA5B1;
    }
    &>img {
        width:38px;
        height: 38px;
    }
`
const CardAmount=styled.div`
    &>p {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }
`
const MoreInfo=styled.div`
    text-align: right;
    &>svg {
        border: 1px solid #303030;
        padding: 7px 10px 7px 10px;
        border-radius: 30px;
        background-color: #303030;
        color:#fff;
        cursor: pointer;
    }
`

export default WalletCard;
