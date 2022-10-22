import { useState } from 'react'
import DashboardLayout from '../../layout/Dashboard'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { Wrapper } from '../../components/ui/Wrapper'
import { Text } from '../../components/ui/Text'
import { colors, weights, sizes } from '../../styles/common'
import { AccountType } from '../../types/accounts'
import WalletCard from '../../components/WalletCard'
import AddAccountModal from '../../containers/Modals/AddAccountModal'

const ContentContainer = styled(FlexWrapper)`
  width: 100%;
  padding: 6rem 16rem;
`
const WalletsContainer = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 24rem));
  grid-gap: 4rem;
`

const CtaButton = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-align: right;
  color: ${colors.black};

  &:hover {
    opacity: 0.7;
  }
`
const _Accounts: AccountType[] = [
  {
    id: '977dacbb-95b4-4432-9dc9-b66f707b7043',
    currency: 'NGN',
    hold: '530000000',
    pending_balance: '0',
    balance: '2499998700',
    name: 'Naira',
    type: 'fiat',
    deposit: true,
    payout: true,
    imgURL:
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/NGN.svg',
  },
  {
    id: 'd92abd3e-933b-4f23-a3e8-fe641e9f1bec',
    currency: 'ETH',
    hold: '0.508056',
    pending_balance: '0',
    balance: '0.1',
    name: 'Ethereum',
    type: 'digital',
    deposit: true,
    payout: true,
    imgURL:
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/ETH.svg',
  },
  {
    id: '5ad2ee10-5ca6-4576-96fe-1ef642057681',
    currency: 'BTC',
    hold: '0',
    pending_balance: '0.00001',
    balance: '142.999009',
    name: 'Bitcoin',
    type: 'digital',
    deposit: true,
    payout: true,
    imgURL:
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/BTC.svg',
  },
  {
    id: 'd92abd3e-933b-4f23-a3e8-fe641e9f1bec',
    currency: 'ETH',
    hold: '0.508056',
    pending_balance: '0',
    balance: '0.1',
    name: 'Ethereum',
    type: 'digital',
    deposit: true,
    payout: true,
    imgURL:
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/ETH.svg',
  },
  {
    id: '5ad2ee10-5ca6-4576-96fe-1ef642057681',
    currency: 'BTC',
    hold: '0',
    pending_balance: '0.00001',
    balance: '142.999009',
    name: 'Bitcoin',
    type: 'digital',
    deposit: true,
    payout: true,
    imgURL:
      'https://res.cloudinary.com/dwoc5fknz/image/upload/v1593000379/alice_v3/BTC.svg',
  },
]

const DashboardHome = () => {
  const [addModalOpen, setAddModal] = useState<boolean>(true)

  return (
    <DashboardLayout>
      <ContentContainer flexDirection="column">
        <FlexWrapper
          justifyContent="space-between"
          className="border-b-1 pb-4 w-100 mb-4"
          alignItems="center"
        >
          <Text
            color={colors.black}
            fontWeight={weights.bold}
            fontSize={sizes['3xlg']}
            lineHeight="3.2rem"
          >
            Wallets
          </Text>

          <CtaButton onClick={(): void => setAddModal(true)}>
            + Add new wallet
          </CtaButton>
        </FlexWrapper>
        <WalletsContainer backgroundColor="black" className="w-100">
          {_Accounts.map((_acc) => {
            return <WalletCard account={_acc} key={_acc.id} />
          })}
        </WalletsContainer>
      </ContentContainer>
      <AddAccountModal isOpen={addModalOpen} setAddModal={setAddModal} />
    </DashboardLayout>
  )
}

export default DashboardHome
