import styled from 'styled-components'
import { colors, weights, sizes } from '../../styles/common'
import Modal from '../../components/shared/Modal'
import { Text } from '../../components/ui/Text'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg'
import Button from '../../components/ui/Button'
import Dropdown from '../../components/ui/Select/Dropdown'
import { Select } from '../../components/ui/Select'

interface IProps {
  isOpen: boolean
  setAddModal: (status: boolean) => void
}

const ContentContainer = styled(FlexWrapper)`
  padding: 7.4rem 2.4rem;
`

const CtaButton = styled.button`
  background-color: transparent;
`

const AddAccountModal = ({ isOpen, setAddModal }: IProps) => {
  const list = [
    {
      value: 'XLM',
      name: 'Stellar',
    },
    {
      value: 'LTC',
      name: 'Litecoin',
    },
    {
      value: 'XRP',
      name: 'Ripple',
    },
    {
      value: 'DOGE',
      name: 'Dogecoin',
    },
    {
      value: 'TRX',
      name: 'TRON',
    },
  ]
  const handleChange = (value: any) => {
    console.log('value', value)
  }

  // const options = ['btc', 'eth']

  return (
    <Modal isOpen={isOpen}>
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
          <CtaButton
            aria-label="Close Button"
            onClick={() => setAddModal(false)}
          >
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
          {' '}
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </Text>
        <Select />
        <FlexWrapper className="w-100 mt-4" flexDirection="column">
          {list.length > 0 && (
            <FlexWrapper className="w-100 mt-4" flexDirection="column">
              <Dropdown
                options={list}
                onChange={handleChange}
                selectedColor="#CBD2D9"
                hoverColor="#eaecee"
                placeholder="Select an Option"
              />
            </FlexWrapper>
          )}
          <FlexWrapper
            alignItems="center"
            justifyContent="center"
            className="w-100 mt-4"
          >
            <Button
              text="Create wallet"
              type="button"
              loading={false}
              loadingText="Creating Account......"
            />
          </FlexWrapper>
        </FlexWrapper>
      </ContentContainer>
    </Modal>
  )
}

export default AddAccountModal
