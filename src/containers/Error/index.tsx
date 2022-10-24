import styled from 'styled-components'
import { colors, weights, sizes } from '../../styles/common'
import { Text } from '../../components/ui/Text'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { ReactComponent as CloseIcon } from '../../assets/svgs/Smallclose.svg'
import { ReactComponent as WarningIcon } from '../../assets/svgs/Warning.svg'

interface IProps {
  className?: string
  label: string
  closeError: () => void
}

const ErrorBox = styled(FlexWrapper)`
  width: 100%;
  min-height: 5rem;
  background: #fff4f4;
  border: 1px solid #e0b3b2;
  border-radius: 8px;
  padding: 1.2rem 2rem;
`

const CtaButtton = styled.button``

const ErrorContainer = ({ className, label, closeError }: IProps) => {
  return (
    <ErrorBox
      className={className ? className : ''}
      alignItems="center"
      justifyContent="space-between"
    >
      <FlexWrapper>
        <WarningIcon />
        <Text
          color={colors.error}
          fontWeight={weights.medium}
          lineHeight={sizes.xxlg}
          fontSize={sizes.base}
          className="ml-2"
        >
          {label}
        </Text>
      </FlexWrapper>
      <CtaButtton onClick={closeError}>
        <CloseIcon />
      </CtaButtton>
    </ErrorBox>
  )
}

export default ErrorContainer
