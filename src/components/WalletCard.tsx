import { FC } from 'react'
import styled from 'styled-components'
import Arrow from '../assets/images/Arrow-Right.svg'

export interface WalletCardProps {
    id: string,
    currency: string,
    hold: string,
    pending_balance: string,
    balance: string,
    name: string,
    type: string,
    deposit: boolean,
    payout: boolean,
    imgURL: string,
  }

const WalletCard: FC<{account: WalletCardProps}> = ({ account }) => {
  return (
    <Card>
        <Currency>
            <Image src={account.imgURL} alt={account.name} />
            <Title>{account?.name}</Title>
        </Currency>
        <Balance>
            {account.currency === 'NGN' ? <span style={{color: "#FFF", fontFamily: 'Aribau Grotesk'}}>&#8358; </span> : ''} 
            {+account.balance % 1 === 0 ? parseInt(account?.balance)?.toLocaleString() : account?.balance}
        </Balance>
        <ImageWrapper><Image size={32} src={Arrow} alt="Arrow" /></ImageWrapper>
    </Card>
  )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    background-color: #111111;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
    cursor: pointer;
`

const Currency = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 2.8rem;
    justify-self: flex-start;
    align-items: flex-start;
    align-items: center;
`

const Title = styled.span`
    color: #9AA5B1;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4rem;
`

const ImageWrapper = styled.div`
    margin-top: 18px;
    align-self: flex-end;
`

export const Image = styled.img<{size?: number}>`
    width: ${props => props.size ?? 34}px;
    height: ${props => props.size ?? 34}px;
`

const Balance = styled.h6`
    font-family: Inter;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
`

export default WalletCard