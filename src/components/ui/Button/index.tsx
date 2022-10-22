import styled from 'styled-components'
import { colors, sizes } from '../../../styles/common'

interface IProps {
  text: string
  color?: string
  backgroundColor?: string

  variant?: string
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  className?: string
  borderRadius?: string
  icon?: React.ReactNode
  title?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'large' | 'medium' | 'small'
}

export const ButtonContainer = styled.button`
  padding: ${sizes.lg};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${(props) => (props.color ? props.color : colors.white)};
  height: 54px;
  border-radius: 40px;
  min-width: 22.2rem;
  text-align: center;
  background-color: ${colors.black};

  &:hover {
    opacity: 0.7;
  }
`

const Button = ({ text, color, loading, loadingText }: IProps) => {
  return (
    <ButtonContainer color={color}>
      {loading ? loadingText : text}
    </ButtonContainer>
  )
}

export default Button
