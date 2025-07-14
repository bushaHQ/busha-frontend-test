import styled from "styled-components";
import { AccountType } from '../types';

const imageSVGs = {
    Naira: '/naira.svg',
    Ethereum: '/ethereum.svg',
    Bitcoin: '/bitcoin.svg',
    Stellar: '/litecoin.svg'
}

const WalletWrapper = styled.div`
    width: 240px;
    height: 150px;
    background-color: #111111;
    border-radius: 10px;
    background-image: url("/card-decor.svg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

     @media (max-width: 1350px) {
        width: 100%;
        max-width: 300px;
        height: 180px;
    }
`;

const Container = styled.div`
    margin: 16px 16px 0;
`;

const CurrencyImage = styled.img`
    width: 34px;
    height: 34px;
    border-radius: 50%;
`;

const CurrencyImageWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Currency = styled.p`
    color: #9AA5B1;
    font-size: 14px;
    font-weight: 400;
`;

const Balance = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
`;

const IconWrapper = styled.div`
    align-self: end;
    margin-bottom: 16px;
    margin-right: 16px;
`;

const OpenWalletIcon = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #303030;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wallet = ({ account }: { account: AccountType }) => {
    return (
        <WalletWrapper>
            <Container>
                <CurrencyImageWrapper>
                    <CurrencyImage src={imageSVGs[account.name as keyof typeof imageSVGs] ?? '/naira.svg'} />
                    <Currency>{account.name}</Currency>
                </CurrencyImageWrapper>

                <Balance>{account.currency === 'NGN' && <span>&#8358;</span>} {account.balance} {account.currency !== 'NGN' && <span>{account.currency}</span>}</Balance>
            </Container>

            <IconWrapper>
                <OpenWalletIcon>&#10095;</OpenWalletIcon>
            </IconWrapper>
        </WalletWrapper>
    )
}