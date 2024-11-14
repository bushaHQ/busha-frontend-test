import styled from 'styled-components';
import Button from '../shared/Button';

function ErrorComponent({ errorText, onClick, isLoading }: { errorText: string, onClick: () => void, isLoading: boolean }) {
  return (
    <ErrorContainer>
        <img src="/wallet/error-icon.svg" alt="Error Icon" />
        <ErrorText>{errorText}</ErrorText>
        <Button loadingText="Refetching..." onClick={() => onClick()} isLoading={isLoading} text="Try again" />
    </ErrorContainer>
  )
}

export default ErrorComponent;

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorText = styled.p`
  margin-top: 26px;
  margin-bottom: 42px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23.4px;
  text-align: center
`