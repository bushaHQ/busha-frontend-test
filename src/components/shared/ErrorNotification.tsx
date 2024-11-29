import styled, { css } from 'styled-components';

import BaseButton from './Button'

export interface ErrorNotificationProps {
    errorText?: string;
    retryText?: string;
    display?: 'default' | 'block'
    onRetry?: () => void
    onClose?: () => void
}

export default function ErrorNotification(props: ErrorNotificationProps) {
    const { display = 'default', errorText = 'Network Error', retryText = 'Try again', onRetry, onClose } = props

    if (display === 'default') return (
        <ErrorContainer display={display}>
            <ErrorIcon>
                <span style={{ fontSize: '60px', color: '#ef4444' }}>!</span>
            </ErrorIcon>
            <ErrorText> {errorText} </ErrorText>
            <BaseButton onClick={onRetry}> {retryText} </BaseButton>
        </ErrorContainer>
    );

    return (
        <ErrorContainer display={display}>
            <MessageWrapper>
                <img src="error.svg" alt="Error" />
                <MessageText>{errorText}</MessageText>
            </MessageWrapper>
            <CloseButton onClick={onClose} aria-label="Close button">
                ✕
            </CloseButton>
        </ErrorContainer>
    )
};


const ErrorContainer = styled.div<{ display: ErrorNotificationProps['display'] }>
    `
        display: flex;
        align-items: center;

    ${({ display }) => {
        if (display === 'default') return css
            `
                flex-direction: column;
                justify-content: center;
                gap: 16px;
                padding: 32px;
            `
        return css
            `
                justify-content: space-between;
                background-color: #fff4f4;
                border: 1px solid #e0b3b2;
                border-radius: 8px;
                padding: 10px 16px;
                color: #D72C0D;
            `
    }}
`

const ErrorIcon = styled.div`
    width: 100px;
    height: 100px;
    border: 5px solid #FFBDBD;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ErrorText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #3E4C59;
    margin: 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MessageText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #D72C0D;
  line-height: 1;
  font-weight: 500;


  &:hover {
    color: #991b1b;
  }
`;

