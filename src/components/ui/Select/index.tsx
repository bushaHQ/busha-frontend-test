import styled from 'styled-components'
import { FlexWrapper } from '../Wrapper'
import { Text } from '../Text'
import { colors, sizes } from '../../../styles/common'
import { ReactComponent as CaretDown } from '../../../assets/svgs/CaretDown.svg'

export const Select = styled.select`
  width: 100%;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  min-height: 6.4rem;
  padding: 2.4rem;
  appearance: none;

  option {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
  }
`

const SelectContainer = styled(FlexWrapper)`
  position: relative;
  width: 100%;

  figure {
    position: absolute;
    right: 5%;
    top: 40%;
    transform: translateY(50%);
  }
`

const SelectInput = ({ children }: any) => {
  return (
    <FlexWrapper className="w-100" flexDirection="column">
      <Text
        color={colors.grey60}
        fontWeight="500"
        lineHeight="2.6rem"
        fontSize={sizes.base}
        className="mb-3"
      >
        Select Wallet
      </Text>
      <SelectContainer>
        <Select>{children}</Select>
        <figure>
          <CaretDown />
        </figure>
      </SelectContainer>
    </FlexWrapper>
  )
}

export default SelectInput
