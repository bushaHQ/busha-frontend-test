import { FC, SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'
import ErrorIcon from '../assets/images/Error.svg'
import {Image} from './WalletCard'

interface ErrorProps {
    error: string; 
    handleClick: (e?: SyntheticEvent) => void;
    mt?: number;
}

const Error: FC<ErrorProps> = ({ error, handleClick, mt }) => {
  return (
    <ErrorWrapper mt={mt}>
        <Image size={100} src={ErrorIcon} alt="Error" />
        <SoftTitle>{error}</SoftTitle>
        <Button onClick={handleClick}>Try again</Button>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div<{mt?: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.mt ?? 0}rem;
`

export const SoftTitle = styled.span<{size?: number, mt?: number}>`
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-top: ${props => props.mt ?? 2.6}rem;
    font-weight: 400;
    width: ${props => props.size}rem
`

export const Button = styled.button<{disabled?: boolean}>`
    cursor: pointer;
    border: none;
    background-color: #000;
    border-radius: 4rem;
    padding: 1.8rem 5.4rem;
    color: #FFF;
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 4.2rem;
    width: 22.2rem;
    

    ${(props) => 
        props.disabled && 
        css`
            pointer-events: 'none';
            cursor: not-allowed;
            background-color: grey;
        `};
`

export default Error