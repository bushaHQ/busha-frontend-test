import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, weights, sizes } from '../../styles/common'
import Modal from '../../components/shared/Modal'
import { Text } from '../../components/ui/Text'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg'
import Button from '../../components/ui/Button'
import { IAccount } from '../../context/account/types'
import AccountContext from '../../context/account/accountContext'
import ErrorContainer from '../Error'
import SelectInput from '../../components/ui/Select'
import Loader from '../../components/shared/Loader'
import { ReactComponent as ErrorIcon } from '../../assets/svgs/Error.svg'

interface IProps {
  isOpen: boolean
  setAddModal: (status: boolean) => void
}

const ContentContainer = styled(FlexWrapper)`
  padding: 7.4rem 2.4rem;
`

const CtaButton = styled.button.attrs({
  'aria-label': 'Close button',
})`
  background-color: transparent;
`

interface SelectState {
  touched: boolean
  value: string
}

const AddAccountModal = ({ isOpen, setAddModal }: IProps) => {
  const accountContext = useContext(AccountContext) as IAccount
  const {
    wallets,
    fetchWalletsLoading,
    fetchWalletsErrorFlag,
    createAccountLoading,
    createAccountSuccess,
    createAccountErrorFlag,
    createAccountError,
  } = accountContext
  const [walletCurrency, setWalletCurrency] = useState<SelectState>({
    touched: false,
    value: '',
  })

  useEffect(() => {
    async function init() {
      accountContext.fetchWallets?.()
      setWalletCurrency({
        touched: false,
        value: '',
      })
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (createAccountSuccess) {
      setAddModal(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createAccountSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWalletCurrency({
      touched: true,
      value: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (walletCurrency.value.length > 0) {
      accountContext.createAccount?.(walletCurrency.value)
    }
  }

  const handleError = () => {
    accountContext.clearAccountError?.()
  }

  return (
    <Modal isOpen={isOpen}>
      {fetchWalletsLoading ? (
        <FlexWrapper
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="w-100 h-100"
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
      ) : fetchWalletsErrorFlag ? (
        <FlexWrapper
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="w-100 h-100"
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

          <Button
            onClick={() => accountContext.fetchWallets?.()}
            text="Try again"
            type="button"
          />
        </FlexWrapper>
      ) : wallets.length > 0 ? (
        <ContentContainer flexDirection="column" className="h-100 w-100">
          <FlexWrapper
            className="w-100 mb-6"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              color={colors.black}
              fontWeight={weights.bold}
              lineHeight={sizes['3xlg']}
              fontSize={sizes.xxlg}
            >
              Add new wallet
            </Text>
            <CtaButton onClick={() => setAddModal(false)}>
              <CloseIcon />
            </CtaButton>
          </FlexWrapper>
          <Text
            color={colors.grey60}
            fontWeight={weights.normal}
            lineHeight="2.6rem"
            fontSize={sizes.lg}
            className="mb-6"
          >
            The crypto wallet will be created instantly and be available in your
            list of wallets.
          </Text>

          <SelectInput handleChange={handleChange} name="currency">
            <option value="">Type</option>
            {wallets.length > 0 &&
              wallets.map((_wallet) => {
                return (
                  <option value={_wallet.currency}>{_wallet.currency}</option>
                )
              })}
          </SelectInput>

          <FlexWrapper
            alignItems="center"
            justifyContent="center"
            className="w-100 mt-4"
          >
            <Button
              text="Create wallet"
              type="button"
              loading={createAccountLoading}
              loadingText="Loading..."
              onClick={handleSubmit}
              disabled={walletCurrency.value.length < 1}
            />
          </FlexWrapper>
          {createAccountErrorFlag ? (
            <ErrorContainer
              className="mt-4"
              label={createAccountError}
              closeError={handleError}
            />
          ) : null}
        </ContentContainer>
      ) : (
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
            No Wallets
          </Text>
        </FlexWrapper>
      )}
    </Modal>
  )
}

export default AddAccountModal
