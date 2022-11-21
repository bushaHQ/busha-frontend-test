import { FC } from 'react'
import styled from 'styled-components'
import WalletCard, { WalletCardProps } from './WalletCard'

const Wallets: FC<{data: WalletCardProps[]}> = ({data}) => {
  return data.length ? (
    <WalletContainer>
        {data?.map(acc => <WalletCard key={acc?.id} account={acc} />)}
    </WalletContainer>
  ) : <></>
}

const WalletContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20.9rem, 1fr));
    grid-gap: 4rem;
    margin-top: 1.6rem;
    padding-top: 2.4rem;
    padding-left: 1rem;
    border-top: 1px solid #D3D5D880;
`

export default Wallets