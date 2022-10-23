/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { colors, weights, sizes } from '../../styles/common'
import { ReactComponent as Logo } from '../../assets/svgs/Logo.svg'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { Text } from '../../components/ui/Text'
import { AccountType } from '../../types/accounts'
import { ReactComponent as CaretRight } from '../../assets/svgs/CaretRight.svg'

import { AccountData } from '../../context/account/types'

const CardContainer = styled(FlexWrapper)`
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  width: 100%;
  min-height: 15rem;
  padding: 1.6rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

const CardFigure = styled.figure`
  margin-right: 0.8rem;
`

const CardButton = styled.button`
  background-color: #303030;
  border-radius: 30px;
  width: 3.2rem;
  height: 3.2rem;
  margin-left: auto;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

interface IProps {
  account: AccountData
}

const WalletCard = ({ account }: IProps) => {
  return (
    <CardContainer flexDirection="column">
      <FlexWrapper alignItems="center" className="mb-6">
        <CardFigure>
          <img src={account?.imgURL} alt={account?.currency} />
        </CardFigure>
        <Text color={colors.grey50} lineHeight={sizes.sm} fontSize={sizes.sm}>
          {account?.name}
        </Text>
      </FlexWrapper>
      <Text
        color={colors.white}
        lineHeight={sizes.base}
        fontSize={sizes.base}
        fontWeight={weights.medium}
        className="mb-6"
      >
        ₦&nbsp;{account?.balance?.toLocaleString()}
      </Text>
      <FlexWrapper justifyContent="space-between" className="w-100">
        <CardButton>
          <CaretRight />
        </CardButton>
      </FlexWrapper>
    </CardContainer>
  )
}

export default WalletCard
