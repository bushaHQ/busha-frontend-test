import React from 'react';
import styled from 'styled-components';

interface NetworkErrorProps {
  callApi: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  color: #721c24;
  max-width: 400px;
  margin: 1rem auto;
`;

const Icon = styled.div`
  margin-bottom: 1rem;
  > span {
  font-size: 148px;

  }
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.notificationText};
`;

const RetryButton = styled.button`
  display: block;
  background-color: #000;
  color: white;
  
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 40px;
  width: 222px;
  height: 54px;
  margin: 0 auto;
  margin-top: 20px;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #333;
  }
`;

const NetworkError: React.FC<NetworkErrorProps> = ({ callApi }) => {
  return (
    <Wrapper>
      <Icon>
      <img src='./images/error-icon.png' alt='error icon' height={100}/>
      </Icon>
      <Message>Network error</Message>
      <RetryButton onClick={callApi}>try Again</RetryButton>
    </Wrapper>
  );
};

export default NetworkError;
