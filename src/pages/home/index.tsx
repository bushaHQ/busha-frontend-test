import { useState, useContext, useEffect } from 'react'
import DashboardLayout from '../../layout/Dashboard'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { Wrapper } from '../../components/ui/Wrapper'
import { Text } from '../../components/ui/Text'
import { colors, weights, sizes } from '../../styles/common'
import { AccountType } from '../../types/accounts'
import WalletCard from '../../components/WalletCard'
import AddAccountModal from '../../containers/Modals/AddAccountModal'

import Loader from '../../components/shared/Loader'
import AccountContext from '../../context/account/accountContext'
import { IAccount } from '../../context/account/types'

import { ReactComponent as ErrorIcon } from '../../assets/svgs/Error.svg'

import Button from '../../components/ui/Button'

const ContentContainer = styled(FlexWrapper)`
  padding: 6rem 16rem;
`

const StatusContainer = styled(FlexWrapper)``

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

const DashboardHome = () => {
  const [addModalOpen, setAddModal] = useState<boolean>(false)
  const accountContext = useContext(AccountContext) as IAccount

  const {
    accounts,
    fetchAccountsLoading,
    fetchAccountsErrorFlag,
  } = accountContext

  useEffect(() => {
    async function init() {
      accountContext.fetchAccounts?.()
    }

    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DashboardLayout>
      <ContentContainer flexDirection="column" className="w-100">
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
            Add new wallet
          </CtaButton>
        </FlexWrapper>

        {fetchAccountsLoading ? (
          <StatusContainer
            flexDirection="column"
            className="w-100 h-100"
            alignItems="center"
            justifyContent="center"
          >
            <FlexWrapper
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Loader />
              <Text
                color={colors.grey60}
                fontWeight={weights.normal}
                lineHeight="2.6rem"
                fontSize={sizes.lg}
                className="mb-6 mt-4"
              >
                Loading...
              </Text>
            </FlexWrapper>
          </StatusContainer>
        ) : fetchAccountsErrorFlag ? (
          <StatusContainer
            flexDirection="column"
            className="w-100 h-100"
            alignItems="center"
            justifyContent="center"
          >
            <FlexWrapper
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <ErrorIcon />
              <Text
                color={colors.grey60}
                fontWeight={weights.normal}
                lineHeight="2.6rem"
                fontSize={sizes.lg}
                className="mb-6 mt-4"
              >
                {' '}
                Network Error
              </Text>

              <Button text="Try again" type="button" />
            </FlexWrapper>
          </StatusContainer>
        ) : accounts.length > 0 ? (
          <WalletsContainer backgroundColor="black" className="w-100">
            {accounts.map((_acc) => {
              return <WalletCard account={_acc} key={_acc.id} />
            })}
          </WalletsContainer>
        ) : (
          <StatusContainer
            flexDirection="column"
            className="w-100 h-100"
            alignItems="center"
            justifyContent="center"
          >
            <FlexWrapper
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color={colors.grey60}
                fontWeight={weights.normal}
                lineHeight="2.6rem"
                fontSize={sizes.lg}
                className="mb-6 mt-4"
              >
                No accounts
              </Text>
            </FlexWrapper>
          </StatusContainer>
        )}
      </ContentContainer>

      <AddAccountModal isOpen={addModalOpen} setAddModal={setAddModal} />
    </DashboardLayout>
  )
}

export default DashboardHome
